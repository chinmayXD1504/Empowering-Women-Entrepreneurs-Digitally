// Empowering Women Food Entrepreneurs Digitally - Main Script
// Tailored for Home Cooks, Cloud Kitchens, Bakers, Tiffins & Pickle Makers

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initQuiz();
  initCart();
  initFoodMenu();
  renderSkillCards();
  renderStoryCards();
  renderResourceCards();
  initResourceTabs();
  initFoodCalculator();
  initFAQs();
  initContactForm();
  initNewsletterForm();
  initBackToTop();
});

/* ==========================================================================
   Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Scroll blur effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when link clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  }
}

/* ==========================================================================
   Hero Food Readiness Mini-Quiz
   ========================================================================== */
let currentQuizStep = 0;
let userQuizAnswers = [];

function initQuiz() {
  renderQuizStep(0);
}

function renderQuizStep(stepIndex) {
  const quizCard = document.getElementById('heroQuizCard');
  if (!quizCard) return;

  const currentQ = QUIZ_QUESTIONS[stepIndex];
  if (!currentQ) return;

  quizCard.innerHTML = `
    <span class="quiz-badge">🍲 Step ${stepIndex + 1} of ${QUIZ_QUESTIONS.length}: Kitchen Assessment</span>
    <h3>${currentQ.question}</h3>
    <p>Select what best fits your home food venture:</p>
    <div class="quiz-options">
      ${currentQ.options.map((opt, i) => `
        <button class="quiz-opt-btn" onclick="selectQuizAnswer(${stepIndex}, ${i})">
          <span>👩‍🍳</span>
          <span>${opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;
}

window.selectQuizAnswer = function(stepIndex, optionIndex) {
  const chosenOption = QUIZ_QUESTIONS[stepIndex].options[optionIndex];
  userQuizAnswers[stepIndex] = chosenOption;

  if (stepIndex + 1 < QUIZ_QUESTIONS.length) {
    renderQuizStep(stepIndex + 1);
  } else {
    showQuizResult();
  }
};

function showQuizResult() {
  const quizCard = document.getElementById('heroQuizCard');
  if (!quizCard) return;

  const recommendedSkillId = userQuizAnswers[0]?.skill || "whatsapp-food-business";
  const matchedSkill = SKILLS_DATA.find(s => s.id === recommendedSkillId) || SKILLS_DATA[0];
  const advice = userQuizAnswers[0]?.recommendation || "Focus on building your food menu and collecting advance orders!";

  quizCard.innerHTML = `
    <div class="quiz-badge" style="background:#ede9fe; color:#5b21b6;">🎉 Personalized Kitchen Growth Plan!</div>
    <h3>Your Next Step to More Orders</h3>
    <p style="color:#475569; margin-bottom: 1rem;">Based on your food specialization, here is your primary growth priority:</p>
    <div class="quiz-result-box" style="display:block; margin-bottom:1.25rem;">
      <h4>🌟 Recommended Focus: ${matchedSkill.title}</h4>
      <p style="color:#475569;">${advice}</p>
      <div style="font-size:0.85rem; font-weight:700; color:#db2777;">Category: ${matchedSkill.category} • ${matchedSkill.readTime}</div>
    </div>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button class="btn btn-primary btn-sm" onclick="openSkillModal('${matchedSkill.id}')">
        🚀 View ${matchedSkill.title} Guide
      </button>
      <button class="btn btn-secondary btn-sm" onclick="resetQuiz()">
        🔄 Retake Quiz
      </button>
    </div>
  `;
}

window.resetQuiz = function() {
  userQuizAnswers = [];
  renderQuizStep(0);
};

/* ==========================================================================
   Shopping Cart State & Functions
   ========================================================================== */
let shoppingCart = [];
let cartCookingNotes = "";

function initCart() {
  try {
    const saved = localStorage.getItem('annapurna_cart');
    if (saved) shoppingCart = JSON.parse(saved);
  } catch (e) {
    shoppingCart = [];
  }
  updateCartBadges();
  renderCartDrawer();
}

function saveCart() {
  try {
    localStorage.setItem('annapurna_cart', JSON.stringify(shoppingCart));
  } catch (e) {}
  updateCartBadges();
  renderCartDrawer();
}

window.addToCart = function(foodId, qty = 1) {
  const item = HOMEMADE_FOOD_ITEMS.find(f => f.id === foodId);
  if (!item) return;

  const existing = shoppingCart.find(i => i.id === foodId);
  if (existing) {
    existing.qty += qty;
  } else {
    shoppingCart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      servings: item.servings,
      imageEmoji: item.imageEmoji,
      image: item.image || '',
      chefName: item.chefName,
      chefCity: item.chefCity,
      diet: item.diet,
      qty: qty
    });
  }
  saveCart();
  renderFoodCards(activeFoodCategory, foodSearchQuery);
  showToast(`🛒 Added "${item.name}" to your cart!`);
};

window.updateCartQty = function(foodId, delta) {
  const item = shoppingCart.find(i => i.id === foodId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    shoppingCart = shoppingCart.filter(i => i.id !== foodId);
  }
  saveCart();
  renderFoodCards(activeFoodCategory, foodSearchQuery);
};

window.removeFromCart = function(foodId) {
  const item = shoppingCart.find(i => i.id === foodId);
  const name = item ? item.name : "Item";
  shoppingCart = shoppingCart.filter(i => i.id !== foodId);
  saveCart();
  renderFoodCards(activeFoodCategory, foodSearchQuery);
  showToast(`🗑️ Removed "${name}" from cart`);
};

window.clearCart = function() {
  shoppingCart = [];
  saveCart();
  renderFoodCards(activeFoodCategory, foodSearchQuery);
};

function getCartCount() {
  return shoppingCart.reduce((total, item) => total + item.qty, 0);
}

function getCartSubtotal() {
  return shoppingCart.reduce((total, item) => total + (item.price * item.qty), 0);
}

function updateCartBadges() {
  const count = getCartCount();
  const navBadge = document.getElementById('navCartBadge');
  const floatBadge = document.getElementById('floatingCartCount');
  const floatBtn = document.getElementById('floatingCartBtn');
  const drawerBadge = document.getElementById('cartDrawerCount');

  if (navBadge) navBadge.innerText = count;
  if (floatBadge) floatBadge.innerText = count;
  if (drawerBadge) drawerBadge.innerText = `${count} ${count === 1 ? 'item' : 'items'}`;

  if (floatBtn) {
    if (count > 0) {
      floatBtn.classList.add('visible');
    } else {
      floatBtn.classList.remove('visible');
    }
  }
}

window.toggleCartDrawer = function() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (!overlay) return;
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  } else {
    document.body.style.overflow = 'auto';
  }
};

window.openCartDrawer = function() {
  const overlay = document.getElementById('cartDrawerOverlay');
  if (!overlay) return;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
};

window.closeCartDrawer = function(event) {
  if (event && event.target && event.target.id !== 'cartDrawerOverlay' && !event.target.classList.contains('cart-drawer-close')) {
    return;
  }
  const overlay = document.getElementById('cartDrawerOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

function renderCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const footer = document.getElementById('cartDrawerFooter');
  if (!body || !footer) return;

  if (shoppingCart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-icon">🍲</div>
        <h3>Your Cart is Empty</h3>
        <p>You haven't added any fresh homemade dishes yet. Explore our home chef menu and enjoy authentic home cooking!</p>
        <button class="btn btn-primary btn-sm" onclick="closeCartDrawer(); scrollToFoodMenu();">
          Browse Homemade Menu ➔
        </button>
      </div>
    `;
    footer.innerHTML = '';
    return;
  }

  const subtotal = getCartSubtotal();
  const freeDeliveryThreshold = 400;
  const isFreeDelivery = subtotal >= freeDeliveryThreshold;
  const deliveryFee = isFreeDelivery ? 0 : 35;
  const packagingFee = 0; // 100% Free Packaging promotion
  const total = subtotal + deliveryFee + packagingFee;
  const amountNeededForFreeDelivery = Math.max(0, freeDeliveryThreshold - subtotal);

  body.innerHTML = `
    <!-- Free Delivery Indicator -->
    <div class="cart-delivery-banner ${isFreeDelivery ? 'unlocked' : ''}">
      <div class="delivery-banner-icon">${isFreeDelivery ? '🎉' : '🛵'}</div>
      <div class="delivery-banner-text">
        ${isFreeDelivery 
          ? `<strong>FREE Home Delivery Unlocked!</strong> You saved ₹35 on delivery.` 
          : `Add <strong>₹${amountNeededForFreeDelivery}</strong> more homemade food for <strong>FREE Delivery</strong>!`
        }
      </div>
    </div>

    <!-- Cart Items List -->
    <div class="cart-items-list">
      ${shoppingCart.map(item => `
        <div class="cart-item-row">
          <div class="cart-item-thumb-box">
            ${item.image ? `
              <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
              <div class="cart-item-emoji" style="display:none;">${item.imageEmoji}</div>
            ` : `
              <div class="cart-item-emoji">${item.imageEmoji}</div>
            `}
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-chef"><span class="price-unit">₹${item.price}</span> • ${item.servings}</div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-stepper">
              <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-total">₹${item.price * item.qty}</div>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">🗑️</button>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Kitchen Instructions Box -->
    <div class="cart-notes-card">
      <label for="cartKitchenNotes">📝 Special Kitchen / Dietary Instructions (Optional):</label>
      <textarea id="cartKitchenNotes" placeholder="e.g. Less spicy, keep chutney separate, Jain preparation..." oninput="cartCookingNotes = this.value">${cartCookingNotes}</textarea>
    </div>
  `;

  footer.innerHTML = `
    <div class="cart-bill-summary">
      <div class="bill-row">
        <span>Item Subtotal (${getCartCount()} items):</span>
        <span>₹${subtotal}</span>
      </div>
      <div class="bill-row">
        <span>Home Delivery Fee:</span>
        <span style="${isFreeDelivery ? 'color: #10b981; font-weight:700;' : ''}">${isFreeDelivery ? 'FREE' : `₹${deliveryFee}`}</span>
      </div>
      <div class="bill-row">
        <span>Eco Spill-Proof Packaging:</span>
        <span style="color: #10b981; font-weight:700;">FREE (₹0)</span>
      </div>
      <div class="bill-row total-row">
        <span>Total Amount to Pay:</span>
        <span class="total-price">₹${total}</span>
      </div>
    </div>

    <div class="cart-footer-actions">
      <button class="btn btn-primary" onclick="openCheckoutModal()" style="width: 100%;">
        <span>🛍️ Proceed to In-Website Checkout (₹${total})</span>
      </button>
      <button class="btn btn-whatsapp-cart" onclick="orderCartOnWhatsApp()" style="width: 100%;">
        <span>💬 Or Order Entire Cart on WhatsApp</span>
      </button>
    </div>
  `;
}

window.scrollToFoodMenu = function() {
  const foodSec = document.getElementById('food-menu');
  if (foodSec) foodSec.scrollIntoView({ behavior: 'smooth' });
};

/* ==========================================================================
   In-Website Checkout Modal & Order Processing
   ========================================================================== */
window.openCheckoutModal = function() {
  if (shoppingCart.length === 0) {
    showToast("⚠️ Your cart is empty. Please add some food items first.");
    return;
  }

  closeCartDrawer();

  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  const subtotal = getCartSubtotal();
  const isFreeDelivery = subtotal >= 400;
  const deliveryFee = isFreeDelivery ? 0 : 35;
  const total = subtotal + deliveryFee;

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
      <div style="width:54px; height:54px; border-radius:14px; background:linear-gradient(135deg, #ec4899, #8b5cf6); display:flex; align-items:center; justify-content:center; font-size:1.8rem; color:#fff;">
        🛍️
      </div>
      <div>
        <span class="skill-badge" style="background:#fce7f3; color:#db2777;">Secure Direct Checkout</span>
        <h2 style="font-size:1.5rem; margin-top:0.2rem; color:#1e1b4b;">Checkout Your Homemade Meal</h2>
      </div>
    </div>

    <div class="checkout-grid-layout">
      <!-- Left: Delivery & Contact Form -->
      <form id="inWebsiteCheckoutForm" onsubmit="handleInWebsiteCheckout(event)">
        <h3 style="font-size:1.1rem; color:#4c1d95; margin-bottom:0.75rem;">1. Delivery & Contact Details</h3>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
          <div class="form-group" style="margin-bottom:0.4rem;">
            <label style="font-size:0.85rem; font-weight:700; color:#334155;">Full Name *</label>
            <input type="text" id="orderCustName" class="form-control" placeholder="e.g. Priya Sharma" required />
          </div>
          <div class="form-group" style="margin-bottom:0.4rem;">
            <label style="font-size:0.85rem; font-weight:700; color:#334155;">Phone / WhatsApp *</label>
            <input type="tel" id="orderCustPhone" class="form-control" placeholder="e.g. 9876543210" required />
          </div>
        </div>

        <div class="form-group" style="margin-bottom:0.75rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Delivery Address (House/Flat, Building, Area) *</label>
          <textarea id="orderCustAddress" class="form-control" rows="2" placeholder="e.g. Flat 402, Lotus Orchid, Baner Road, Pune" required></textarea>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.25rem;">
          <div class="form-group" style="margin-bottom:0.4rem;">
            <label style="font-size:0.85rem; font-weight:700; color:#334155;">Preferred Time Slot *</label>
            <select id="orderTimeSlot" class="form-control" style="padding:0.7rem; border-radius:10px; border:1px solid #ddd6fe; width:100%; font-family:inherit;" required>
              <option value="Lunch: 12:30 PM - 2:00 PM">🍱 Lunch (12:30 PM - 2:00 PM)</option>
              <option value="Evening Snack: 4:30 PM - 6:00 PM">☕ Evening Snack (4:30 PM - 6:00 PM)</option>
              <option value="Dinner: 7:30 PM - 9:30 PM">🍲 Dinner (7:30 PM - 9:30 PM)</option>
              <option value="Tomorrow Fresh Slot">📅 Tomorrow Fresh Slot</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom:0.4rem;">
            <label style="font-size:0.85rem; font-weight:700; color:#334155;">Landmark / Area Pincode</label>
            <input type="text" id="orderPincode" class="form-control" placeholder="e.g. Near HDFC Bank, 411045" />
          </div>
        </div>

        <h3 style="font-size:1.1rem; color:#4c1d95; margin-bottom:0.75rem;">2. Select Payment Method</h3>
        
        <div class="payment-method-options" style="display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.5rem;">
          <label class="payment-method-card active" onclick="selectPaymentMethod('upi')">
            <input type="radio" name="payMethod" value="upi" checked />
            <div class="pay-method-info">
              <strong>📱 Instant UPI / QR Scan (Recommended - 100% Secure)</strong>
              <span>Pay directly via GPay, PhonePe, Paytm or any UPI app with 0% platform surcharge.</span>
            </div>
          </label>

          <label class="payment-method-card" onclick="selectPaymentMethod('cod')">
            <input type="radio" name="payMethod" value="cod" />
            <div class="pay-method-info">
              <strong>💵 Cash on Delivery / Pay on Pickup</strong>
              <span>Pay cash or UPI directly to the home delivery runner when your food arrives.</span>
            </div>
          </label>
        </div>

        <!-- Dynamic UPI Payment Card Details -->
        <div id="upiPaymentDetailsBox" class="upi-payment-box">
          <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
            <div class="upi-mock-qr">
              <div style="font-size:3rem;">📱</div>
              <span style="font-size:0.7rem; color:#475569; font-weight:700;">SCAN TO PAY</span>
            </div>
            <div style="flex:1; min-width:180px;">
              <div style="font-size:0.8rem; color:#64748b;">Official Kitchen Merchant UPI ID:</div>
              <div style="display:flex; align-items:center; gap:0.5rem; margin:0.3rem 0;">
                <code style="background:#f5f3ff; color:#6d28d9; padding:0.3rem 0.6rem; border-radius:6px; font-weight:700; font-size:0.95rem;">annapurna.homechefs@okaxis</code>
                <button type="button" class="btn btn-secondary btn-sm" style="padding:0.25rem 0.5rem; font-size:0.75rem;" onclick="copyUPI()">📋 Copy</button>
              </div>
              <div style="font-size:0.78rem; color:#059669; font-weight:600;">✓ Verified 0% Commission Women Entrepreneur Pool</div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1.5rem; border-top:1px solid #f1e8f7; padding-top:1rem; gap:1rem; flex-wrap:wrap;">
          <div>
            <div style="font-size:0.8rem; color:#64748b;">FINAL PAYABLE AMOUNT</div>
            <div style="font-size:1.5rem; font-weight:800; color:#ec4899;">₹${total}</div>
          </div>
          
          <div style="display:flex; gap:0.75rem;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="closeModal(); openCartDrawer();">Back to Cart</button>
            <button type="submit" class="btn btn-primary">
              <span>🎉 Confirm & Place Order</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.selectPaymentMethod = function(method) {
  const cards = document.querySelectorAll('.payment-method-card');
  const upiBox = document.getElementById('upiPaymentDetailsBox');
  
  cards.forEach(card => {
    const radio = card.querySelector('input[type="radio"]');
    if (radio && radio.value === method) {
      card.classList.add('active');
      radio.checked = true;
    } else {
      card.classList.remove('active');
    }
  });

  if (upiBox) {
    upiBox.style.display = method === 'upi' ? 'block' : 'none';
  }
};

window.copyUPI = function() {
  navigator.clipboard.writeText('annapurna.homechefs@okaxis');
  showToast('📋 UPI ID copied to clipboard: annapurna.homechefs@okaxis');
};

window.handleInWebsiteCheckout = function(e) {
  e.preventDefault();

  const name = document.getElementById('orderCustName')?.value.trim();
  const phone = document.getElementById('orderCustPhone')?.value.trim();
  const address = document.getElementById('orderCustAddress')?.value.trim();
  const timeSlot = document.getElementById('orderTimeSlot')?.value;
  const payMethod = document.querySelector('input[name="payMethod"]:checked')?.value || 'upi';

  if (!name || !phone || !address) {
    showToast('⚠️ Please fill in all required delivery fields.');
    return;
  }

  const orderId = 'ANN-' + Math.floor(100000 + Math.random() * 900000);
  const subtotal = getCartSubtotal();
  const isFreeDelivery = subtotal >= 400;
  const deliveryFee = isFreeDelivery ? 0 : 35;
  const total = subtotal + deliveryFee;

  const orderData = {
    orderId: orderId,
    name: name,
    phone: phone,
    address: address,
    timeSlot: timeSlot,
    payMethod: payMethod === 'upi' ? 'Online UPI (Verified)' : 'Cash on Delivery (COD)',
    items: [...shoppingCart],
    subtotal: subtotal,
    deliveryFee: deliveryFee,
    total: total,
    notes: cartCookingNotes,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  // Clear shopping cart
  shoppingCart = [];
  cartCookingNotes = "";
  saveCart();
  renderFoodCards(activeFoodCategory, foodSearchQuery);

  // Show celebratory confirmation receipt
  showOrderConfirmationModal(orderData);
};

function showOrderConfirmationModal(order) {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  const uniqueChefs = [...new Set(order.items.map(i => i.chefName))].join(', ');

  modalContent.innerHTML = `
    <div style="text-align:center; padding:1rem 0 1.5rem;">
      <div style="width:74px; height:74px; background:#ecfdf5; border:3px solid #10b981; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2.6rem; margin:0 auto 1rem;">
        ✅
      </div>
      <span class="skill-badge" style="background:#dcfce7; color:#15803d; font-size:0.85rem;">Order Successfully Confirmed!</span>
      <h2 style="font-size:1.75rem; color:#1e1b4b; margin-top:0.4rem;">Thank You, ${order.name}!</h2>
      <p style="color:#64748b; font-size:0.95rem;">Your homemade food order has been sent directly to our home chefs.</p>
    </div>

    <!-- Order Receipt Card -->
    <div class="order-receipt-card">
      <div class="receipt-header-row">
        <div>
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">ORDER ID</span>
          <div style="font-size:1.15rem; font-weight:800; color:#7c3aed;">#${order.orderId}</div>
        </div>
        <div style="text-align:right;">
          <span style="font-size:0.75rem; color:#64748b; font-weight:700;">ORDER TIME</span>
          <div style="font-size:0.95rem; font-weight:700; color:#1e1b4b;">Today, ${order.timestamp}</div>
        </div>
      </div>

      <div class="receipt-chef-note">
        <span>👩‍🍳</span>
        <div><strong>Kitchen Dispatched:</strong> Handed over to Chef <strong>${uniqueChefs}</strong> for fresh preparation.</div>
      </div>

      <div class="receipt-items-table">
        <h4 style="font-size:0.9rem; color:#4c1d95; margin-bottom:0.5rem; text-transform:uppercase;">Dishes Ordered:</h4>
        ${order.items.map(item => `
          <div class="receipt-item-line">
            <div>
              <strong>${item.name}</strong> × ${item.qty}
              <div style="font-size:0.78rem; color:#64748b;">${item.servings} • By ${item.chefName}</div>
            </div>
            <div style="font-weight:700;">₹${item.price * item.qty}</div>
          </div>
        `).join('')}
      </div>

      <div class="receipt-delivery-info">
        <div><strong>📍 Delivery Address:</strong> ${order.address}</div>
        <div><strong>⏱️ Delivery Slot:</strong> ${order.timeSlot}</div>
        <div><strong>💳 Payment:</strong> ${order.payMethod} (Total: ₹${order.total})</div>
        ${order.notes ? `<div><strong>📝 Instructions:</strong> ${order.notes}</div>` : ''}
      </div>
    </div>

    <div style="display:flex; justify-content:center; gap:0.75rem; margin-top:1.5rem; flex-wrap:wrap;">
      <button class="btn btn-secondary btn-sm" onclick="window.print()">
        🖨️ Print Receipt
      </button>
      <button class="btn btn-primary" onclick="closeModal()">
        Done & Explore More Food 🍲
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.orderCartOnWhatsApp = function() {
  if (shoppingCart.length === 0) return;

  const subtotal = getCartSubtotal();
  const isFreeDelivery = subtotal >= 400;
  const deliveryFee = isFreeDelivery ? 0 : 35;
  const total = subtotal + deliveryFee;

  let itemListText = shoppingCart.map((item, idx) => 
    `${idx + 1}. *${item.name}* (x${item.qty}) - ₹${item.price * item.qty} [By ${item.chefName}]`
  ).join('\n');

  const notesText = cartCookingNotes ? `\n\n*Special Notes:* ${cartCookingNotes}` : '';

  const message = encodeURIComponent(
    `Hello Annapurna Home Chefs Network! 🍲\n\n` +
    `I would like to place an order for the following homemade dishes:\n\n` +
    `${itemListText}\n\n` +
    `• *Item Subtotal:* ₹${subtotal}\n` +
    `• *Delivery Fee:* ${isFreeDelivery ? 'FREE (₹0)' : `₹${deliveryFee}`}\n` +
    `• *Total Amount:* ₹${total}${notesText}\n\n` +
    `Please confirm the kitchen delivery schedule and UPI payment details. Thank you!`
  );

  const phone = "919876543210";
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

/* ==========================================================================
   Homemade Food Marketplace & Menu Logic
   ========================================================================== */
let activeFoodCategory = 'all';
let foodSearchQuery = '';

function initFoodMenu() {
  const catButtons = document.querySelectorAll('.food-cat-btn');
  const searchInput = document.getElementById('foodSearchInput');

  // Category filter click
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFoodCategory = btn.getAttribute('data-cat') || 'all';
      renderFoodCards(activeFoodCategory, foodSearchQuery);
    });
  });

  // Search input filter
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      foodSearchQuery = e.target.value.trim().toLowerCase();
      renderFoodCards(activeFoodCategory, foodSearchQuery);
    });
  }

  renderFoodCards('all', '');
}

function renderFoodCards(category = 'all', query = '') {
  const container = document.getElementById('foodCardsGrid');
  if (!container) return;

  if (typeof HOMEMADE_FOOD_ITEMS === 'undefined' || !HOMEMADE_FOOD_ITEMS.length) {
    container.innerHTML = `<p style="text-align:center; color:#64748b;">No food items available.</p>`;
    return;
  }

  let filtered = HOMEMADE_FOOD_ITEMS.filter(item => {
    const matchesCategory = (category === 'all') || (item.category === category);
    const matchesQuery = !query || 
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.chefName.toLowerCase().includes(query) ||
      item.chefCity.toLowerCase().includes(query) ||
      item.categoryName.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #fff; border-radius: 16px; border: 1px dashed #ddd6fe;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🍲</div>
        <h3 style="color: #4c1d95; font-size: 1.3rem;">No dishes found matching "${query}"</h3>
        <p style="color: #64748b; margin-bottom: 1.25rem;">Try searching for "Thali", "Pickle", "Cake", "Laddoo", or "Biryani".</p>
        <button class="btn btn-primary btn-sm" onclick="resetFoodFilters()">View All Homemade Dishes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const inCart = shoppingCart.find(i => i.id === item.id);
    const cartQty = inCart ? inCart.qty : 0;

    return `
      <div class="food-card" onclick="openFoodDetailsModal('${item.id}')">
        <!-- Photo Container with Badges -->
        <div class="food-img-container">
          <img src="${item.image || ''}" alt="${item.name}" loading="lazy" class="food-card-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="food-emoji-fallback" style="display:${item.image ? 'none' : 'flex'};">${item.imageEmoji}</div>
          
          <div class="food-badge-overlay">
            <span class="food-diet-tag diet-${item.diet}">
              ${item.diet === 'eggless' ? '🥚❌ Eggless' : (item.diet === 'jain' ? '🌿 Jain' : '🌱 Pure Veg')}
            </span>
            <span class="food-tag-pill">${item.badge}</span>
          </div>
        </div>

        <div class="food-card-body">
          <h3 class="food-title">${item.name}</h3>
          <p class="food-desc">${item.description}</p>

          <div class="food-portion-row">
            <span class="portion-badge">📦 ${item.servings}</span>
            <span class="rating-badge">${item.rating}</span>
          </div>

          <div class="food-prep-row">
            <span>⏱️ ${item.prepNotice}</span>
          </div>
        </div>

        <div class="food-card-footer">
          <div class="food-price-box">
            <span class="currency">₹</span>
            <span class="price-val">${item.price}</span>
            <span class="price-sub">/ portion</span>
          </div>

          <div class="food-card-actions">
            ${cartQty > 0 ? `
              <div class="card-qty-stepper" onclick="event.stopPropagation()">
                <button class="card-qty-btn" onclick="updateCartQty('${item.id}', -1)">−</button>
                <span class="card-qty-val">${cartQty} in Cart</span>
                <button class="card-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
              </div>
            ` : `
              <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${item.id}')" title="Add item to website cart">
                <span>🛒 Add</span>
              </button>
            `}
            <button class="btn-whatsapp-order" onclick="event.stopPropagation(); orderFoodDirect('${item.id}')" title="Order directly on WhatsApp">
              <span>💬</span>
            </button>
            <button class="btn-food-view" onclick="event.stopPropagation(); openFoodDetailsModal('${item.id}')" title="View ingredients & chef story">
              <span>🔍</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.resetFoodFilters = function() {
  activeFoodCategory = 'all';
  foodSearchQuery = '';
  const searchInput = document.getElementById('foodSearchInput');
  if (searchInput) searchInput.value = '';
  const catButtons = document.querySelectorAll('.food-cat-btn');
  catButtons.forEach((btn, idx) => {
    if (idx === 0) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  renderFoodCards('all', '');
};

/* ==========================================================================
   Food Item Detail Modal
   ========================================================================== */
window.openFoodDetailsModal = function(foodId) {
  const item = HOMEMADE_FOOD_ITEMS.find(f => f.id === foodId);
  if (!item) return;

  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  const inCart = shoppingCart.find(i => i.id === item.id);
  const cartQty = inCart ? inCart.qty : 0;

  modalContent.innerHTML = `
    <!-- Modal Hero Photo Banner -->
    <div class="modal-food-hero-container">
      ${item.image ? `
        <img src="${item.image}" alt="${item.name}" class="modal-food-hero-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
        <div class="modal-food-hero-fallback" style="display:none;">${item.imageEmoji}</div>
      ` : `
        <div class="modal-food-hero-fallback">${item.imageEmoji}</div>
      `}
      <div class="modal-hero-badge-wrap">
        <span class="food-diet-tag diet-${item.diet}">${item.dietLabel}</span>
        <span class="food-tag-pill">${item.badge}</span>
      </div>
    </div>

    <div style="margin-bottom:1rem; margin-top:0.5rem;">
      <h2 style="font-size:1.65rem; color:#1e1b4b; line-height:1.25; margin-bottom:0.25rem;">${item.name}</h2>
      <div style="font-size:0.9rem; color:#7c3aed; font-weight:700;">${item.categoryName}</div>
    </div>

    <!-- Kitchen Hygiene Assurance Banner -->
    <div style="background:#faf7fc; border:1px solid #ede9fe; border-radius:14px; padding:0.85rem 1.15rem; display:flex; align-items:center; justify-content:space-between; margin-bottom:1.25rem; flex-wrap:wrap; gap:0.5rem;">
      <div style="display:flex; align-items:center; gap:0.75rem;">
        <span style="font-size:1.6rem;">🍲</span>
        <div>
          <div style="font-weight:700; color:#1e1b4b; font-size:0.92rem;">Authentic Homestyle Preparation</div>
          <div style="font-size:0.8rem; color:#64748b;">Cooked fresh on order with pure ingredients and hygienic packaging</div>
        </div>
      </div>
      <div style="background:#fce7f3; color:#db2777; font-size:0.78rem; font-weight:700; padding:0.3rem 0.75rem; border-radius:99px;">
        🛡️ FSSAI Verified Home Kitchen
      </div>
    </div>

    <p style="font-size:1rem; color:#334155; line-height:1.65; margin-bottom:1.25rem;">
      ${item.description}
    </p>

    <!-- Key Details Grid -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:0.75rem; margin-bottom:1.25rem;">
      <div style="background:#fff; border:1px solid #f1e8f7; border-radius:10px; padding:0.75rem; text-align:center;">
        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">PORTION SIZE</div>
        <div style="font-size:0.95rem; font-weight:800; color:#1e1b4b; margin-top:0.2rem;">${item.servings}</div>
      </div>
      <div style="background:#fff; border:1px solid #f1e8f7; border-radius:10px; padding:0.75rem; text-align:center;">
        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">PREPARATION NOTICE</div>
        <div style="font-size:0.95rem; font-weight:800; color:#db2777; margin-top:0.2rem;">${item.prepNotice}</div>
      </div>
      <div style="background:#fff; border:1px solid #f1e8f7; border-radius:10px; padding:0.75rem; text-align:center;">
        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">CUSTOMER RATING</div>
        <div style="font-size:0.95rem; font-weight:800; color:#10b981; margin-top:0.2rem;">${item.rating}</div>
      </div>
    </div>

    <!-- Fresh Kitchen Ingredients -->
    <h3 style="font-size:1.1rem; color:#4c1d95; margin-bottom:0.6rem;">🌿 Fresh Ingredients Used</h3>
    <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.25rem;">
      ${item.ingredients.map(ing => `
        <span style="background:#f5f3ff; color:#6d28d9; font-size:0.84rem; font-weight:600; padding:0.35rem 0.75rem; border-radius:8px; border:1px solid #ddd6fe;">
          ✓ ${ing}
        </span>
      `).join('')}
    </div>

    <!-- Storage & Hygiene Instructions -->
    <div style="background:#fffbeb; border:1px solid #fde68a; border-radius:12px; padding:0.85rem 1rem; margin-bottom:1.5rem; font-size:0.88rem; color:#92400e; display:flex; align-items:flex-start; gap:0.5rem;">
      <span>💡</span>
      <div><strong>Storage & Handling:</strong> ${item.storageInstructions}</div>
    </div>

    <!-- Pricing and Ordering Actions Footer -->
    <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; border-top:1px solid #f1e8f7; padding-top:1.25rem; flex-wrap:wrap;">
      <div>
        <div style="font-size:0.8rem; color:#64748b; font-weight:600;">DIRECT CHEF PRICE</div>
        <div style="font-size:1.6rem; font-weight:800; color:#ec4899;">₹${item.price} <span style="font-size:0.85rem; color:#64748b; font-weight:500;">(0% aggregator fee)</span></div>
      </div>

      <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
        <button class="btn btn-secondary btn-sm" onclick="closeModal()">
          Close
        </button>
        <button class="btn btn-primary" onclick="addToCart('${item.id}'); closeModal(); openCartDrawer();">
          <span>🛒 Add to Cart & Checkout</span>
        </button>
        <button class="btn-whatsapp-order" onclick="orderFoodDirect('${item.id}')" style="padding:0.6rem 1rem;">
          <span>💬 WhatsApp Order</span>
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   Direct WhatsApp Order Dispatch
   ========================================================================== */
window.orderFoodDirect = function(foodId) {
  const item = HOMEMADE_FOOD_ITEMS.find(f => f.id === foodId);
  if (!item) return;

  const phone = item.whatsappNumber || "919876543210";
  const textMessage = encodeURIComponent(
    `Hello Chef ${item.chefName}! 🍲\n\n` +
    `I saw your homemade "${item.name}" on the Annapurna Digital Women Entrepreneurs platform.\n\n` +
    `• Item: ${item.name} (${item.servings})\n` +
    `• Price: ₹${item.price}\n` +
    `• Diet: ${item.dietLabel}\n\n` +
    `I would like to place an order. Could you please share the delivery availability, timing slot, and UPI payment details for advance booking?\n\n` +
    `Thank you!`
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${textMessage}`;
  
  showToast(`🍲 Connecting you directly with Chef ${item.chefName} via WhatsApp!`);
  window.open(whatsappUrl, '_blank');
};

/* ==========================================================================
   "List Your Homemade Food" Modal & Handler
   ========================================================================== */
window.openAddFoodModal = function() {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
      <div style="width:54px; height:54px; border-radius:14px; background:linear-gradient(135deg, #ec4899, #8b5cf6); display:flex; align-items:center; justify-content:center; font-size:1.8rem; color:#fff;">
        👩‍🍳
      </div>
      <div>
        <span class="skill-badge" style="background:#fce7f3; color:#db2777;">Home Chef Registration</span>
        <h2 style="font-size:1.5rem; margin-top:0.2rem; color:#1e1b4b;">List Your Homemade Dish</h2>
      </div>
    </div>

    <p style="font-size:0.92rem; color:#64748b; margin-bottom:1.25rem;">
      Empower your kitchen! Fill in the details of your homemade food dish to list it on our digital menu and accept direct in-website orders and WhatsApp pre-orders with zero commission fees.
    </p>

    <form id="addFoodForm" onsubmit="handleAddNewFood(event)">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Your Name / Kitchen Name *</label>
          <input type="text" id="newChefName" class="form-control" placeholder="e.g. Kavita Ben / Sunita's Kitchen" required />
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">City & Area *</label>
          <input type="text" id="newChefCity" class="form-control" placeholder="e.g. Pune, Kothrud" required />
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Homemade Dish Name *</label>
          <input type="text" id="newFoodName" class="form-control" placeholder="e.g. Grandma's Mango Chutney" required />
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Food Category *</label>
          <select id="newFoodCategory" class="form-control" required style="padding:0.7rem; border-radius:10px; border:1px solid #ddd6fe; width:100%; font-family:inherit;">
            <option value="tiffins">🍱 Daily Homestyle Tiffin / Meal</option>
            <option value="pickles">👵 Heirloom Pickle / Masala</option>
            <option value="bakes">🎂 Homemade Cake / Bakery</option>
            <option value="sweets">🪔 Festive Sweets & Snacks</option>
            <option value="special">🥘 Weekend Party Feast / Biryani</option>
          </select>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.75rem; margin-bottom:0.75rem;">
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Price (₹) *</label>
          <input type="number" id="newFoodPrice" class="form-control" placeholder="e.g. 150" min="10" required />
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Portion / Weight *</label>
          <input type="text" id="newFoodServings" class="form-control" placeholder="e.g. 500g / Serves 2" required />
        </div>
        <div class="form-group" style="margin-bottom:0.5rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#334155;">Diet Type</label>
          <select id="newFoodDiet" class="form-control" style="padding:0.7rem; border-radius:10px; border:1px solid #ddd6fe; width:100%; font-family:inherit;">
            <option value="veg">🌱 Pure Veg</option>
            <option value="eggless">🥚❌ Eggless</option>
            <option value="jain">🌿 Jain Special</option>
          </select>
        </div>
      </div>

      <div class="form-group" style="margin-bottom:0.75rem;">
        <label style="font-size:0.85rem; font-weight:700; color:#334155;">Description & Homemade Specialty *</label>
        <textarea id="newFoodDesc" class="form-control" placeholder="Describe the special homemade touch, purity of ingredients, and how you prepare it..." rows="3" required></textarea>
      </div>

      <div class="form-group" style="margin-bottom:1.25rem;">
        <label style="font-size:0.85rem; font-weight:700; color:#334155;">WhatsApp Number for Orders *</label>
        <input type="tel" id="newChefPhone" class="form-control" placeholder="e.g. 9876543210" required />
      </div>

      <div style="display:flex; justify-content:flex-end; gap:0.75rem;">
        <button type="button" class="btn btn-secondary btn-sm" onclick="closeModal()">Cancel</button>
        <button type="submit" class="btn btn-primary">
          <span>✨ Publish Homemade Dish</span>
        </button>
      </div>
    </form>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.handleAddNewFood = function(e) {
  e.preventDefault();

  const chefName = document.getElementById('newChefName')?.value.trim();
  const chefCity = document.getElementById('newChefCity')?.value.trim();
  const foodName = document.getElementById('newFoodName')?.value.trim();
  const category = document.getElementById('newFoodCategory')?.value;
  const price = parseFloat(document.getElementById('newFoodPrice')?.value) || 120;
  const servings = document.getElementById('newFoodServings')?.value.trim();
  const diet = document.getElementById('newFoodDiet')?.value;
  const description = document.getElementById('newFoodDesc')?.value.trim();
  const phone = document.getElementById('newChefPhone')?.value.trim();

  const categoryNames = {
    tiffins: "Daily Homestyle Tiffins",
    pickles: "Grandmother's Pickles & Masalas",
    bakes: "Fresh Home Bakes & Cakes",
    sweets: "Festive Sweets & Snacks",
    special: "Weekend Party Feasts"
  };

  const categoryEmojis = {
    tiffins: "🍱",
    pickles: "🏺",
    bakes: "🎂",
    sweets: "🪔",
    special: "🥘"
  };

  const categoryImages = {
    tiffins: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    pickles: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    bakes: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    sweets: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    special: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  };

  const newDish = {
    id: `food-custom-${Date.now()}`,
    name: foodName,
    category: category,
    categoryName: categoryNames[category] || "Homemade Food",
    chefName: chefName,
    chefCity: chefCity,
    chefAvatar: "👩‍🍳",
    chefExperience: "Passionate Home Cook",
    price: price,
    servings: servings,
    diet: diet,
    dietLabel: diet === 'eggless' ? '100% Eggless' : '100% Pure Veg',
    rating: "5.0 ★ (New Chef)",
    imageEmoji: categoryEmojis[category] || "🍲",
    image: categoryImages[category] || categoryImages.tiffins,
    badge: "Newly Listed Home Chef",
    prepNotice: "Fresh on Order",
    description: description,
    ingredients: ["Fresh Kitchen Ingredients", "Pure Desi Spices", "Cooked with Motherly Care"],
    storageInstructions: "Consume fresh or refrigerate as advised by the chef.",
    whatsappNumber: phone.replace(/[^0-9]/g, '') || "919876543210"
  };

  HOMEMADE_FOOD_ITEMS.unshift(newDish);
  closeModal();
  renderFoodCards(activeFoodCategory, foodSearchQuery);
  
  showToast(`🎉 Congratulations Chef ${chefName}! "${foodName}" is now live on the homemade food menu!`);

  const foodSec = document.getElementById('food-menu');
  if (foodSec) {
    foodSec.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================================
   Render Digital Skills Cards
   ========================================================================== */
function renderSkillCards() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;

  container.innerHTML = SKILLS_DATA.map(skill => `
    <div class="skill-card" onclick="openSkillModal('${skill.id}')" role="button" tabindex="0" aria-label="Learn ${skill.title}">
      <div class="skill-card-top">
        <div class="skill-icon-wrap" style="background: ${skill.gradient}; color: #fff;">
          ${skill.icon}
        </div>
        <span class="skill-badge">${skill.difficulty}</span>
      </div>
      <h3>${skill.title}</h3>
      <p>${skill.shortDesc}</p>
      <div class="skill-card-footer">
        <div class="skill-meta">
          <span>⏱️ ${skill.readTime}</span>
        </div>
        <button class="skill-btn" onclick="event.stopPropagation(); openSkillModal('${skill.id}')">
          Read Guide ➔
        </button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   Skill Detail Modal
   ========================================================================== */
window.openSkillModal = function(skillId) {
  const skill = SKILLS_DATA.find(s => s.id === skillId);
  if (!skill) return;

  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
      <div style="width:54px; height:54px; border-radius:14px; background:${skill.gradient}; display:flex; align-items:center; justify-content:center; font-size:1.8rem; color:#fff;">
        ${skill.icon}
      </div>
      <div>
        <span class="skill-badge" style="background:#fce7f3; color:#db2777;">${skill.category}</span>
        <h2 style="font-size:1.65rem; margin-top:0.25rem;">${skill.title}</h2>
      </div>
    </div>

    <p style="font-size:1.02rem; color:#475569; margin-bottom:1.5rem; line-height:1.65;">
      ${skill.fullDetails.overview}
    </p>

    <h3 style="font-size:1.2rem; color:#4c1d95; margin-bottom:1rem; border-bottom:2px solid #fce7f3; padding-bottom:0.4rem;">
      🍲 Step-by-Step Practical Kitchen Guide
    </h3>

    <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.75rem;">
      ${skill.fullDetails.keyTopics.map(topic => `
        <div style="background:#faf7fc; padding:1rem 1.25rem; border-radius:12px; border-left:3px solid #8b5cf6;">
          <h4 style="font-size:1rem; color:#1e1b4b; margin-bottom:0.3rem;">${topic.heading}</h4>
          <p style="font-size:0.9rem; color:#64748b; margin:0;">${topic.content}</p>
        </div>
      `).join('')}
    </div>

    <h3 style="font-size:1.2rem; color:#4c1d95; margin-bottom:0.75rem;">🛠️ Free Tools & Apps to Use</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem; margin-bottom:1.75rem;">
      ${skill.fullDetails.freeTools.map(tool => `
        <div style="background:#fff; border:1px solid #ddd6fe; border-radius:10px; padding:0.85rem;">
          <div style="font-weight:700; color:#7c3aed; font-size:0.92rem;">${tool.name}</div>
          <div style="font-size:0.8rem; color:#64748b;">${tool.purpose}</div>
        </div>
      `).join('')}
    </div>

    <h3 style="font-size:1.2rem; color:#4c1d95; margin-bottom:0.75rem;">✅ 24-Hour Kitchen Action Checklist</h3>
    <div style="background:#fdf2f8; border:1px solid #fbcfe8; border-radius:12px; padding:1.25rem; margin-bottom:1.5rem;">
      ${skill.fullDetails.actionChecklist.map((item, idx) => `
        <label style="display:flex; align-items:flex-start; gap:0.65rem; margin-bottom:0.6rem; font-size:0.9rem; color:#334155; cursor:pointer;">
          <input type="checkbox" style="margin-top:0.25rem; accent-color:#ec4899;">
          <span>${item}</span>
        </label>
      `).join('')}
    </div>

    <div style="display:flex; justify-content:flex-end;">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">
        Got It, Let's Cook & Sell! 🍲
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   Render Success Stories
   ========================================================================== */
function renderStoryCards() {
  const container = document.getElementById('storiesGrid');
  if (!container) return;

  container.innerHTML = SUCCESS_STORIES.map(story => `
    <div class="story-card">
      <div class="story-header">
        <div class="story-avatar">${story.avatar}</div>
        <div class="story-meta">
          <h3>${story.founder}</h3>
          <p>${story.business} • ${story.location}</p>
        </div>
      </div>
      <span class="story-badge">${story.badge}</span>
      <p class="story-quote">${story.quote}</p>
      
      <div class="story-metric-badge">
        <div>
          <div class="metric-num">${story.stats.revenueGrowth}</div>
          <div class="metric-lbl">${story.stats.monthlyOrders}</div>
        </div>
        <div style="font-size:0.8rem; font-weight:700; color:#8b5cf6;">${story.stats.timeframe}</div>
      </div>

      <button class="btn-story" onclick="openStoryModal('${story.id}')">
        Read Full Kitchen Journey 📖
      </button>
    </div>
  `).join('');
}

window.openStoryModal = function(storyId) {
  const story = SUCCESS_STORIES.find(s => s.id === storyId);
  if (!story) return;

  const modalOverlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div style="display:flex; align-items:center; gap:1.25rem; margin-bottom:1.5rem;">
      <div style="width:68px; height:68px; border-radius:50%; background:#fdf2f8; border:2px solid #fbcfe8; display:flex; align-items:center; justify-content:center; font-size:2.4rem;">
        ${story.avatar}
      </div>
      <div>
        <span class="story-badge">${story.badge}</span>
        <h2 style="font-size:1.75rem; margin-top:0.2rem;">${story.founder}</h2>
        <p style="font-size:0.95rem; color:#64748b; font-weight:600;">${story.business} • ${story.location}</p>
      </div>
    </div>

    <div style="background:#fdf2f8; border-left:4px solid #ec4899; padding:1rem 1.25rem; border-radius:8px; margin-bottom:1.5rem; font-style:italic; font-size:1rem; color:#4c1d95;">
      ${story.quote}
    </div>

    <h3 style="font-size:1.2rem; color:#4c1d95; margin-bottom:0.75rem;">🌟 How She Turned Family Recipes Into a Food Brand</h3>
    <p style="font-size:0.95rem; color:#475569; line-height:1.7; margin-bottom:1.5rem;">
      ${story.story}
    </p>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:1rem; margin-bottom:1.75rem;">
      <div style="background:#faf7fc; padding:1rem; border-radius:12px; border:1px solid #ede9fe; text-align:center;">
        <div style="font-size:1.3rem; font-weight:800; color:#ec4899;">${story.stats.revenueGrowth}</div>
        <div style="font-size:0.78rem; color:#64748b; font-weight:600;">Food Production Volume</div>
      </div>
      <div style="background:#faf7fc; padding:1rem; border-radius:12px; border:1px solid #ede9fe; text-align:center;">
        <div style="font-size:1.3rem; font-weight:800; color:#7c3aed;">${story.stats.monthlyOrders}</div>
        <div style="font-size:0.78rem; color:#64748b; font-weight:600;">Monthly Income Scale</div>
      </div>
      <div style="background:#faf7fc; padding:1rem; border-radius:12px; border:1px solid #ede9fe; text-align:center;">
        <div style="font-size:1.3rem; font-weight:800; color:#06b6d4;">${story.stats.timeframe}</div>
        <div style="font-size:0.78rem; color:#64748b; font-weight:600;">Timeframe</div>
      </div>
    </div>

    <h3 style="font-size:1.2rem; color:#4c1d95; margin-bottom:0.75rem;">💡 Secret Tips from Her Kitchen Experience</h3>
    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:0.6rem; margin-bottom:1.75rem;">
      ${story.keyLearnings.map(point => `
        <li style="display:flex; align-items:flex-start; gap:0.6rem; font-size:0.92rem; color:#334155;">
          <span style="color:#ec4899; font-weight:bold;">🍲</span>
          <span>${point}</span>
        </li>
      `).join('')}
    </ul>

    <div style="display:flex; justify-content:flex-end;">
      <button class="btn btn-primary btn-sm" onclick="closeModal()">
        Close Story ✨
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modalOverlay = document.getElementById('modalOverlay');
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

/* ==========================================================================
   Business Resources Rendering & Tabs
   ========================================================================== */
function renderResourceCards() {
  const container = document.getElementById('resourcesGrid');
  if (!container) return;

  container.innerHTML = BUSINESS_RESOURCES.map(res => `
    <div class="res-card">
      <div class="res-card-head">
        <div class="res-icon">${res.icon}</div>
        <div>
          <span class="skill-badge" style="background:#ede9fe; color:#5b21b6;">${res.category}</span>
          <h3 style="margin-top:0.25rem;">${res.title}</h3>
        </div>
      </div>
      <p class="res-snippet">${res.snippet}</p>
      <ul class="res-list">
        ${res.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function initResourceTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Interactive Food Costing & Tiffin Pricing Calculator
   ========================================================================== */
function initFoodCalculator() {
  const ingredientsCostInput = document.getElementById('calcRawCost');
  const packagingCostInput = document.getElementById('calcPackCost');
  const utilityGasInput = document.getElementById('calcUtilityCost');
  const marginPercentInput = document.getElementById('calcMarginPercent');
  const targetMonthlyProfitInput = document.getElementById('calcTargetProfit');

  if (!ingredientsCostInput) return;

  const inputs = [ingredientsCostInput, packagingCostInput, utilityGasInput, marginPercentInput, targetMonthlyProfitInput];
  inputs.forEach(input => {
    if (input) input.addEventListener('input', calculateFoodBudget);
  });

  calculateFoodBudget(); // initial calculation
}

function calculateFoodBudget() {
  const ingredientsCost = parseFloat(document.getElementById('calcRawCost')?.value) || 0;
  const packagingCost = parseFloat(document.getElementById('calcPackCost')?.value) || 0;
  const utilityCost = parseFloat(document.getElementById('calcUtilityCost')?.value) || 0;
  const marginPercent = parseFloat(document.getElementById('calcMarginPercent')?.value) || 0;
  const targetMonthlyProfit = parseFloat(document.getElementById('calcTargetProfit')?.value) || 0;

  // Base Production Cost per plate/portion
  const totalBaseCost = ingredientsCost + packagingCost + utilityCost;

  // Selling Price based on target profit margin %
  // Selling Price = Total Cost / (1 - margin%/100)
  let sellingPrice = 0;
  const marginFraction = marginPercent / 100;
  if (marginFraction < 1) {
    sellingPrice = totalBaseCost / (1 - marginFraction);
  } else {
    sellingPrice = totalBaseCost * 2;
  }

  const profitPerPlate = sellingPrice - totalBaseCost;
  const monthlyPlatesNeeded = profitPerPlate > 0 ? Math.ceil(targetMonthlyProfit / profitPerPlate) : 0;
  const dailyTiffinSubscribers = Math.ceil(monthlyPlatesNeeded / 26); // assuming 26 days/mo

  // Update DOM
  const elTotalUnitCost = document.getElementById('calcResTotalCost');
  const elSellingPrice = document.getElementById('calcResSellingPrice');
  const elNetProfit = document.getElementById('calcResNetProfit');
  const elUnitsNeeded = document.getElementById('calcResUnitsNeeded');

  if (elTotalUnitCost) elTotalUnitCost.innerText = `₹${totalBaseCost.toFixed(2)}`;
  if (elSellingPrice) elSellingPrice.innerText = `₹${Math.round(sellingPrice)}`;
  if (elNetProfit) elNetProfit.innerText = `₹${profitPerPlate.toFixed(2)}`;
  if (elUnitsNeeded) elUnitsNeeded.innerText = `${monthlyPlatesNeeded} meals/mo (~${dailyTiffinSubscribers} daily orders)`;
}

/* ==========================================================================
   FAQ Accordion
   ========================================================================== */
function initFAQs() {
  const faqContainer = document.getElementById('faqContainer');
  if (!faqContainer) return;

  faqContainer.innerHTML = FAQ_DATA.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <div class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-icon">▼</span>
      </div>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  const items = faqContainer.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   Contact Form Validation & Toast Notification
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMessage')?.value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please fill in all required fields.', '#f43f5e');
      return;
    }

    // Success response simulation
    showToast(`🍲 Thank you Chef ${name}! Your inquiry has been received. Let's make your food brand famous!`);
    form.reset();
  });
}

function initNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value.trim()) {
      showToast('💌 Subscribed! You will now receive weekly food business tips, recipe costing charts & Canva food templates.');
      emailInput.value = '';
    }
  });
}

function showToast(message, borderColor) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>${message}</span>`;
  if (borderColor) {
    toast.style.borderLeftColor = borderColor;
  } else {
    toast.style.borderLeftColor = '#ec4899';
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

/* ==========================================================================
   Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
