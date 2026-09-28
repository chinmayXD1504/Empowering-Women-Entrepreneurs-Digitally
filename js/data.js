// Data store specifically tailored for Home Women Food Entrepreneurs
// Homemade Food, Cloud Kitchens, Bakers, Tiffins, Pickles & Regional Delicacies

const SKILLS_DATA = [
  {
    id: "food-reels",
    icon: "🍲",
    title: "Food Styling & Reel Marketing",
    category: "Marketing & Growth",
    shortDesc: "Capture mouthwatering sizzles, ASMR cooking clips, and design festive food menus on Canva to attract hungry local buyers.",
    gradient: "linear-gradient(135deg, #f43f5e, #ec4899)",
    readTime: "7 min guide",
    difficulty: "Beginner Friendly",
    fullDetails: {
      overview: "People eat with their eyes first! Short, sizzling videos showing fresh ingredients, clean cooking spaces, and appetizing plating generate instant orders in your neighbourhood.",
      keyTopics: [
        {
          heading: "1. The 3 Videos That Always Convert Hungry Viewers",
          content: "1) Sizzling ASMR cooking/baking process, 2) Fresh hot packing in tamper-proof boxes, 3) Satisfied customer tasting reactions and review screenshots."
        },
        {
          heading: "2. Designing Daily & Festive Digital Menus in Canva",
          content: "Use free Canva food menu templates to create colorful weekly lunch schedules, festive Diwali/Eid sweet hampers, or weekend special menus with clear prices."
        },
        {
          heading: "3. Hyper-Local Neighbourhood Hashtags & Groups",
          content: "Tag your exact residential areas (#KothrudBakers, #BandraHomeChefs, #WhitefieldFoodies) and share weekly special menus on local residential society WhatsApp/Facebook groups."
        },
        {
          heading: "4. Building Trust with Kitchen Hygiene Highlights",
          content: "Showcase clean stainless steel workstations, hairnets, gloves, and fresh market grocery shopping to reassure health-conscious customers."
        }
      ],
      freeTools: [
        { name: "Canva Free", purpose: "Design mouthwatering weekly menus & price cards" },
        { name: "CapCut / VN Video Editor", purpose: "Add trending culinary music and slow-mo sizzling effects" },
        { name: "Meta Business Suite", purpose: "Schedule lunch special posts every morning automatically" }
      ],
      actionChecklist: [
        "Record a 15-second video showing your kitchen prep and steaming hot food",
        "Design a 1-page weekly menu card using Canva with your WhatsApp order link",
        "Post a 'Today's Fresh Special' story on Instagram and WhatsApp Status before 11:00 AM",
        "Offer 5 complimentary mini tasting samples to influential neighbours in your building"
      ]
    }
  },
  {
    id: "digital-menu-site",
    icon: "📱",
    title: "Creating a Digital Food Menu & Website",
    category: "Digital Ordering",
    shortDesc: "Build your own online ordering website or digital catalog with zero platform commissions and direct WhatsApp checkout.",
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    readTime: "9 min guide",
    difficulty: "No-Code Required",
    fullDetails: {
      overview: "Avoid losing 25%–35% of your hard-earned margins to food aggregator commissions. Build an owned digital menu where customers order directly from you.",
      keyTopics: [
        {
          heading: "1. No-Code Digital Menu Platforms",
          content: "Use free tools like Dukaan, Swiggy Minis, Google Sites, or WhatsApp Business Catalogs to list your food items with portion sizes, prices, and allergen tags."
        },
        {
          heading: "2. Pre-Order & Slot-Based Scheduling",
          content: "Avoid food wastage by setting up a 'Pre-order 24 hours in advance' rule or 'Order before 10 AM for Lunch Delivery' system on your page."
        },
        {
          heading: "3. Essential Food Menu Details",
          content: "Include portion size (e.g., 'Serves 2-3 | 500g'), Spice Level (Mild / Medium / Spicy), Veg/Non-Veg indicators, and clear delivery radius."
        },
        {
          heading: "4. Easy Delivery Integration",
          content: "Integrate on-demand intra-city delivery services like Dunzo, Borzo, Porter, or Swiggy Genie for reliable doorstep dispatches."
        }
      ],
      freeTools: [
        { name: "WhatsApp Business Catalog", purpose: "Instant zero-cost mobile food catalog" },
        { name: "Google Forms / Tally.so", purpose: "Accept custom catering and weekend bulk pre-orders" },
        { name: "TinyPNG", purpose: "Compress appetizing food photos so your menu opens instantly" }
      ],
      actionChecklist: [
        "Create a clean digital menu with top 6 signature dishes and portion sizes",
        "Set up clear delivery time slots (Lunch: 12:30–2 PM, Dinner: 7:30–9 PM)",
        "Write clear heating / storage instructions for each dish",
        "Add a direct 'Click to Order via WhatsApp' button on your menu"
      ]
    }
  },
  {
    id: "digital-payments-food",
    icon: "💳",
    title: "Advance UPI Payments & Invoicing",
    category: "Finance & Operations",
    shortDesc: "Eliminate food wastage from last-minute cancellations by taking advance UPI deposits and generating instant receipts.",
    gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    readTime: "6 min guide",
    difficulty: "Essential",
    fullDetails: {
      overview: "Homemade food is perishable. A strict advance payment policy ensures you never buy raw materials or prepare meals that end up unpaid.",
      keyTopics: [
        {
          heading: "1. The 100% / 50% Advance Booking Rule",
          content: "For customized cakes, party platters, and weekly tiffin meal plans, mandate 100% advance or a minimum 50% deposit before turning on the stove."
        },
        {
          heading: "2. Dedicated Business UPI & Soundbox",
          content: "Set up Google Pay Business or Paytm for Business to avoid mixing household grocery money with food enterprise revenues."
        },
        {
          heading: "3. Professional Digital Invoicing",
          content: "Send instant PDF receipts with your food business logo, itemized bill, delivery charges, and payment timestamp using Khatabook or Vyapar."
        },
        {
          heading: "4. Subscription Billing for Daily Tiffins",
          content: "Set up monthly or 15-day recurring payment links for office workers and students taking daily homemade lunch/dinner."
        }
      ],
      freeTools: [
        { name: "Google Pay / PhonePe Business", purpose: "Instant soundbox & merchant QR code" },
        { name: "Razorpay Payment Links", purpose: "Send debit/credit card links for large party catering" },
        { name: "Khatabook / Vyapar", purpose: "Track customer balances and recurring tiffin accounts" }
      ],
      actionChecklist: [
        "Print a branded QR code stand with your food venture name & phone number",
        "Set a polite WhatsApp deposit message: 'Order is confirmed once advance payment is received'",
        "Create a simple monthly spreadsheet or app ledger to track ingredient purchases vs sales",
        "Send digital receipts for all bulk orders exceeding ₹1,000"
      ]
    }
  },
  {
    id: "whatsapp-food-business",
    icon: "💬",
    title: "WhatsApp Business for Food Orders",
    category: "Order Management",
    shortDesc: "Automate daily menu broadcasts, quick replies for prices, and manage active tiffin subscriptions effortlessly.",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    readTime: "8 min guide",
    difficulty: "Beginner Friendly",
    fullDetails: {
      overview: "Over 90% of home food orders in residential areas happen over WhatsApp. Turning your WhatsApp into a high-speed ordering desk saves hours of typing.",
      keyTopics: [
        {
          heading: "1. Quick Replies for Common Inquiries",
          content: "Save shortcuts: '/menu' for today's dishes, '/price' for tiffin rates, '/delivery' for delivery areas and timing, '/pay' for your UPI QR link."
        },
        {
          heading: "2. Smart Customer Color Labels",
          content: "Tag chats: 'Daily Tiffin - Paid', 'Daily Tiffin - Pending', 'Weekend Party Order', 'Diet / Low Salt Special', 'Cake Order Completed'."
        },
        {
          heading: "3. Daily Morning Broadcast Lists",
          content: "Send a fresh morning menu broadcast to opt-in subscribers at 9:00 AM with 2 clicks without annoying group spam."
        },
        {
          heading: "4. Automated Greeting & Away Status",
          content: "Inform customers about kitchen operating hours: 'Thank you for reaching Annapurna Kitchen! Lunch bookings close at 11 AM. Reply with 1 to see today's menu.'"
        }
      ],
      freeTools: [
        { name: "WhatsApp Business App", purpose: "Labels, automated away messages & full food catalog" },
        { name: "wa.me Link Generator", purpose: "Create 'Order on WhatsApp' links for your Instagram bio" },
        { name: "Google Keep", purpose: "Keep daily order prep lists synced across devices" }
      ],
      actionChecklist: [
        "Switch to WhatsApp Business and complete your Food Profile & Kitchen hours",
        "Upload your signature dishes, thalis, or bakery hampers into WhatsApp Catalog",
        "Configure 4 essential Quick Replies (/menu, /tiffin, /payment, /location)",
        "Organize existing food buyers into an opt-in 'VIP Foodie Broadcast List'"
      ]
    }
  },
  {
    id: "food-photography",
    icon: "📸",
    title: "Smartphone Food Photography & Plating",
    category: "Visual Branding",
    shortDesc: "Shoot irresistible food pictures using natural window light, rustic garnishes, and clean packaging angles.",
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    readTime: "7 min guide",
    difficulty: "Creative & Practical",
    fullDetails: {
      overview: "Steaming hot food with fresh green coriander, golden tempering, or dripping chocolate sauce captures attention faster than words. Master smartphone lighting in 3 steps.",
      keyTopics: [
        {
          heading: "1. Natural Side Window Lighting",
          content: "Place your plate on a table near a bright window with light coming from the side (90° or 45°). Side light highlights textures, cheese pulls, and gravies beautifully."
        },
        {
          heading: "2. Garnish Right Before the Click",
          content: "Add fresh cilantro, roasted sesame, fresh mint, or a swirl of fresh cream right before snapping. Food looks freshest within 2 minutes of plating."
        },
        {
          heading: "3. Top-Down (Flat Lay) vs 45-Degree Angle",
          content: "Use top-down 90° for full Thali meals, pizza boxes, and dessert boxes. Use 45° for tall layered cakes, biryani bowls, and beverages."
        },
        {
          heading: "4. Showcasing Tamper-Proof Packaging",
          content: "Take photos of your food safely sealed in hygienic spill-proof foil containers with your brand sticker. This reassures buyers about safety."
        }
      ],
      freeTools: [
        { name: "Snapseed (Google)", purpose: "Enhance warm tones, boost food vibrance, and clean shadows" },
        { name: "Lightroom Mobile (Free)", purpose: "Warm food presets that make gravies look rich and fresh" },
        { name: "Phone Gridlines", purpose: "Keep plates centered and straight" }
      ],
      actionChecklist: [
        "Clean your camera lens with a soft cloth before photographing food",
        "Buy 2 wooden serving boards, banana leaves, or clean ceramic bowls as photo props",
        "Take both a 'plated dish' photo and a 'ready-to-deliver packed box' photo",
        "Edit with gentle warmth (+10 warmth, +5 contrast) in Snapseed"
      ]
    }
  },
  {
    id: "fssai-hygiene-safety",
    icon: "🔒",
    title: "FSSAI Registration & Food Hygiene",
    category: "Safety & Legal",
    shortDesc: "Step-by-step guidance on basic FSSAI registration (₹100/yr), safe packaging, allergen disclosures, and building trust.",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    readTime: "8 min guide",
    difficulty: "Essential Trust",
    fullDetails: {
      overview: "Operating legally with basic food registration and strict hygiene standards sets you apart from amateur kitchens and allows you to supply to corporate offices and schools.",
      keyTopics: [
        {
          heading: "1. Basic FSSAI Registration (Under ₹12 Lakh Annual Turnover)",
          content: "Home kitchens only need the basic FSSAI Registration (Form A) which costs ₹100/year and can be applied online in 15 minutes with your Aadhaar card and photo."
        },
        {
          heading: "2. Food Grade Packaging & Sealing",
          content: "Always use food-grade aluminum foil containers, leak-proof PP containers, and paper bags. Use tamper-evident seal stickers with your brand logo."
        },
        {
          heading: "3. Allergy & Ingredient Disclosures",
          content: "Clearly mention common allergens: 'Contains Nuts / Dairy / Gluten' on product labels, especially for baked goods and spice mixes."
        },
        {
          heading: "4. Shelf Life & Storage Instructions",
          content: "Include stickers: 'Consume within 4 hours of delivery' for hot meals, or 'Refrigerate immediately | Best before 3 days' for fresh sweets and gravies."
        }
      ],
      freeTools: [
        { name: "FSSAI FoSCoS Portal", purpose: "Official online portal for basic home food registration" },
        { name: "Canva Label Templates", purpose: "Design food ingredient, expiry & FSSAI number stickers" },
        { name: "Google Keep / Notes", purpose: "Maintain ingredient batch dates and purchase receipts" }
      ],
      actionChecklist: [
        "Apply for Basic FSSAI Registration on the FoSCoS government portal",
        "Order 100 printed sticker labels with your brand name, phone number & FSSAI number",
        "Establish daily kitchen sanitization protocol and food temperature storage rules",
        "Add a 'Hygiene & Clean Kitchen Promise' highlight on your social media"
      ]
    }
  }
];

const SUCCESS_STORIES = [
  {
    id: "aajis-pickles",
    founder: "Sunita Deshmukh",
    business: "Aaji’s Handmade Pickles & Masalas",
    location: "Pune, Maharashtra",
    category: "Traditional Pickles & Spices",
    tagline: "Grandmother's heirloom mango & chili pickle recipes shipped across India",
    badge: "Pickles & Spices",
    avatar: "👵",
    stats: {
      revenueGrowth: "600+ Jars / Month",
      monthlyOrders: "₹1.4L Monthly Income",
      timeframe: "10 Months Online"
    },
    quote: "“I started sharing short video clips of grinding whole spices by hand on the stone mortar. Customers instantly fell in love with the pure traditional taste. WhatsApp catalog made order booking so easy!”",
    story: "Sunita had been making seasonal mango, lemon, and green chili pickles for relatives for 25 years. With her daughter's help, she created an Instagram page showing traditional sun-drying and cold-pressed mustard oil curing. By setting up basic FSSAI registration and a WhatsApp Business catalog, she expanded from 10 family orders to supplying gourmet food stores and shipping pan-India.",
    keyLearnings: [
      "Traditional handmade authenticity and zero preservatives was her biggest selling point",
      "Advance UPI payments allowed her to buy seasonal raw mangoes in bulk at wholesale rates",
      "Offered 3-jar mini festive gift hampers during Diwali, generating 220 orders in 2 weeks"
    ]
  },
  {
    id: "wholesome-tiffins",
    founder: "Rupal Joshi",
    business: "Ghar Ka Swad Tiffin Service",
    location: "Ahmedabad, Gujarat",
    category: "Daily Healthy Meals",
    tagline: "Homestyle Gujarati & North Indian lunchboxes for office professionals and students",
    badge: "Daily Tiffin Service",
    avatar: "👩‍🍳",
    stats: {
      revenueGrowth: "85 Daily Subscribers",
      monthlyOrders: "2,200+ Meals / Month",
      timeframe: "1 Year Online"
    },
    quote: "“Office workers were tired of oily restaurant food. My clean, low-oil rotis and daily rotating vegetable menu became a hit when I shared our daily lunch prep reels on society groups.”",
    story: "Rupal started with just 5 lunchboxes for nearby software engineers. She created a Canva weekly menu chart with rotating sabzis, dal, and warm rotis. Using WhatsApp Business labels, she easily tracks active subscriptions, dietary preferences (like Jain or low salt), and automated month-end renewals.",
    keyLearnings: [
      "Prepaid monthly subscriptions guaranteed steady, predictable cash flow on the 1st of every month",
      "Partnered with a local delivery runner for synchronized 12:45 PM hot lunchtime deliveries",
      "Used leak-proof 4-compartment microwave-safe containers to prevent spills completely"
    ]
  },
  {
    id: "sweet-crumbles",
    founder: "Aanya Sharma",
    business: "Sweet Whisk Home Bakery",
    location: "Bengaluru, Karnataka",
    category: "Artisanal Baking & Cakes",
    tagline: "Custom eggless celebration cakes, brownies, and festive dessert hampers",
    badge: "Custom Home Bakery",
    avatar: "🧁",
    stats: {
      revenueGrowth: "4x Weekend Bookings",
      monthlyOrders: "120+ Designer Cakes",
      timeframe: "8 Months"
    },
    quote: "“Natural window light photography transformed my ₹800 eggless chocolate truffle cakes into luxury celebration centerpieces. My weekend slots now get booked out 5 days in advance!”",
    story: "Aanya turned her love for baking into a premium home bakery. Instead of waiting for walk-in orders, she posted 15-second ASMR cake frosting and floral piping reels on Instagram. By requiring a 100% advance UPI deposit for customized cakes, she eliminated cancellation losses entirely and now conducts weekend baking workshops.",
    keyLearnings: [
      "Short satisfying cake decoration reels attracted birthday party planners across the city",
      "Strict 48-hour pre-order window gave adequate time for ingredient procurement without stress",
      "Custom branded cake boxes with gold foil stickers elevated perceived value significantly"
    ]
  },
  {
    id: "zaika-dawat",
    founder: "Fatima Begum",
    business: "Zaika Dawat Cloud Kitchen",
    location: "Hyderabad, Telangana",
    category: "Biryani & Weekend Party Platters",
    tagline: "Slow-cooked authentic Dum Biryani, kebabs, and party feast boxes",
    badge: "Party Platters & Feasts",
    avatar: "🥘",
    stats: {
      revenueGrowth: "₹2.8L Monthly GMV",
      monthlyOrders: "45+ Bulk Weekend Orders",
      timeframe: "1.5 Years"
    },
    quote: "“Direct WhatsApp ordering saved me ₹40,000 every month in aggregator commissions. Customers get piping hot food straight from my copper handi at honest prices.”",
    story: "Fatima was famous in her locality for her slow-cooked wood-fired Dum Biryani and Haleem. By launching an easy-to-use digital menu and accepting weekend party pre-orders via WhatsApp, she transitioned from home cooking to running a dedicated home cloud kitchen employing two local women.",
    keyLearnings: [
      "Focused heavily on high-margin weekend family combo packs (Biryani + Kebabs + Sweet)",
      "Collected video testimonials from society family gatherings to build social proof",
      "Maintained strict FSSAI compliance and temperature-controlled insulated delivery bags"
    ]
  }
];

const BUSINESS_RESOURCES = [
  {
    title: "10 High-Demand Homemade Food Business Ideas",
    category: "Food Business Ideas",
    icon: "🍱",
    readTime: "5 min read",
    snippet: "Lucrative home food ventures you can launch from your existing kitchen with low initial investment.",
    items: [
      "Healthy Daily Office & Student Lunchbox Tiffins (Low-oil, Homestyle)",
      "Artisanal Eggless Celebration Cakes, Brownies & Tea Cakes",
      "Handmade Pickles, Chutneys, Podis & Masala Powders",
      "Regional Festive Sweets & Dry Fruit Hampers (Diwali, Eid, Rakhi)",
      "Millet-Based Healthy Snacks & Guilt-Free Cookies",
      "Weekend Bulk Party Platters (Biryani, Lasagna, Chaat Kits)",
      "Post-Partum (Mother & Baby) Traditional Nutrition Laddoos & Soups"
    ]
  },
  {
    title: "Zero-Cost Food Marketing Playbook for Home Chefs",
    category: "Marketing Tips",
    icon: "📢",
    readTime: "7 min read",
    snippet: "How to get your first 50 repeat food customers in your apartment society and neighbourhood.",
    items: [
      "Host a 'Sunday Tasting Table' in your apartment lobby with mini bite-sized samples",
      "Post daily 'Kitchen Live Prep' stories on WhatsApp Status before 10:30 AM",
      "Offer a 'Refer a Colleague' ₹100 discount coupon on monthly tiffin renewals",
      "Partner with nearby local dry-cleaners or salons to display your festive food flyers",
      "Create festive pre-order countdowns with early-bird booking discounts"
    ]
  },
  {
    title: "Home Food Packaging, Delivery & Hygiene Checklist",
    category: "Packaging & Safety",
    icon: "📦",
    readTime: "6 min read",
    snippet: "Essential guidelines to ensure food arrives piping hot, fresh, and spill-free every single time.",
    items: [
      "Use food-grade microwave-safe PP containers with airtight leak-proof lids",
      "Apply branded tamper-evident seal stickers across the lid opening",
      "Keep insulated thermal carrier bags for hot biryanis, rotis, and gravies",
      "Tie up with on-demand local intra-city delivery runners (Dunzo / Porter / Borzo)",
      "Always include printed reheating, refrigeration, and allergen cards inside the delivery bag"
    ]
  }
];

const FAQ_DATA = [
  {
    question: "Do I need an FSSAI license to sell homemade food from my kitchen?",
    answer: "Yes, even small home kitchens making food need a basic 'FSSAI Registration' (Form A) if annual turnover is under ₹12 Lakhs. It costs only ₹100 per year, requires just your Aadhaar card and photo, and can be completed online in 15 minutes. It builds immense trust with customers."
  },
  {
    question: "How do I prevent food wastage and last-minute order cancellations?",
    answer: "Never begin cooking custom cakes or party platters without a 50% to 100% advance deposit via UPI. For daily tiffins, sell 15-day or 30-day prepaid meal passes with a strict 'Inform by 9:00 AM for lunch cancellation' policy."
  },
  {
    question: "How should I price my homemade food so that I actually make a good profit?",
    answer: "Use the 3x Rule: Raw Ingredients Cost × 3 (1/3 for ingredients, 1/3 for packaging/utilities/delivery, 1/3 for your hard-earned labor & profit). Never underprice yourself just to compete with low-quality roadside stalls. Homemade hygiene is premium!"
  },
  {
    question: "How do I deliver hot food to customers across the city without owning a delivery fleet?",
    answer: "You don't need your own delivery vehicles! Use intra-city on-demand delivery apps like Borzo, Porter, Dunzo, or Swiggy Genie. You can add the exact delivery fee to the customer's bill or offer free delivery on orders above ₹800."
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What type of homemade food do you specialize in or want to sell?",
    options: [
      { text: "Daily Lunch & Dinner Tiffins for Offices / Students", skill: "whatsapp-food-business", recommendation: "Set up WhatsApp Business automated menus, subscription tags, and prepaid lunch passes!" },
      { text: "Custom Cakes, Cupcakes & Baked Confectionery", skill: "food-photography", recommendation: "Master warm smartphone lighting, ASMR frosting reels, and custom cake pre-orders!" },
      { text: "Traditional Pickles, Masalas, Podis & Dry Snacks", skill: "fssai-hygiene-safety", recommendation: "Get basic FSSAI registration, airtight tamper-proof jars, and pan-India parcel shipping!" },
      { text: "Biryani, Regional Specialties & Weekend Party Feasts", skill: "digital-menu-site", recommendation: "Build a zero-commission digital menu with slot-based advance booking!" }
    ]
  },
  {
    id: 2,
    question: "What is your biggest daily challenge in running your food business?",
    options: [
      { text: "Getting more food orders from my local area & societies", skill: "food-reels", recommendation: "Post daily steaming food reels, Canva weekly menus, and host apartment tasting samples." },
      { text: "Managing inquiries, daily orders and payment follow-ups", skill: "whatsapp-food-business", recommendation: "Use WhatsApp quick replies (/menu, /pricing) and automated greeting messages." },
      { text: "Customers canceling orders after food is already cooked", skill: "digital-payments-food", recommendation: "Implement a strict 100% or 50% advance UPI deposit rule before turning on the stove." },
      { text: "Making food photos look as delicious as they actually taste", skill: "food-photography", recommendation: "Use natural side-window light, fresh coriander garnishes, and clean plating props." }
    ]
  },
  {
    id: 3,
    question: "How do you currently take orders and payments from food customers?",
    options: [
      { text: "Cash on delivery or manual phone calls", skill: "digital-payments-food", recommendation: "Switch to dedicated Merchant UPI QR codes & advance booking links for guaranteed income." },
      { text: "Personal WhatsApp chats and personal UPI", skill: "whatsapp-food-business", recommendation: "Upgrade to WhatsApp Business for catalogs, quick replies, and customer labels." },
      { text: "Listing on food delivery aggregator apps", skill: "digital-menu-site", recommendation: "Save 30% commission fees by creating your own direct digital menu with local courier tie-ups." },
      { text: "Just planning to start from my home kitchen", skill: "fssai-hygiene-safety", recommendation: "Start with basic ₹100 FSSAI registration, 5 signature dishes, and society tasting samples!" }
    ]
  }
];

const HOMEMADE_FOOD_ITEMS = [
  {
    id: "food-tiffin-gujarati",
    name: "Ghar Ki Shuddh Gujarati Thali",
    category: "tiffins",
    categoryName: "Daily Homestyle Tiffins",
    chefName: "Rupal Ben Joshi",
    chefCity: "Ahmedabad, Gujarat",
    chefAvatar: "👩‍🍳",
    chefExperience: "14 yrs home cooking",
    price: 140,
    servings: "1 Full Meal (Serves 1-2)",
    diet: "veg",
    dietLabel: "100% Pure Veg (Jain available)",
    rating: "4.9 ★ (120+ reviews)",
    imageEmoji: "🍱",
    image: "images/gujarati_thali.jpg",
    badge: "Bestseller Tiffin",
    prepNotice: "Fresh Hot Daily • Order before 10:30 AM",
    description: "Wholesome, low-oil everyday meal cooked fresh daily morning: 4 warm soft Phulkas with pure Desi Ghee, Dal Fry/Kadhi, Seasonal Sabzi, Steamed Basmati Rice, Homemade Pickle & Salad.",
    ingredients: ["Sharbati Wheat Flour", "Toor Dal", "Cold-pressed Peanut Oil", "Desi Gir Cow Ghee", "Fresh Market Vegetables", "Cumin & Mustard"],
    storageInstructions: "Serve piping hot. Microwave friendly container. Consume within 4 hours.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-pickle-mango",
    name: "Aaji's Heirloom Kachi Keri Mango Pickle",
    category: "pickles",
    categoryName: "Grandmother's Pickles & Masalas",
    chefName: "Sunita Deshmukh",
    chefCity: "Pune, Maharashtra",
    chefAvatar: "👵",
    chefExperience: "28 yrs traditional recipe",
    price: 260,
    servings: "500g Glass / Airtight Jar",
    diet: "veg",
    dietLabel: "100% Pure Veg & Preservative Free",
    rating: "5.0 ★ (340+ jars shipped)",
    imageEmoji: "🏺",
    image: "images/mango_pickle.jpg",
    badge: "Traditional Heirloom",
    prepNotice: "Sun-Cured Batch • Ready to Ship",
    description: "Sun-dried Rajapuri raw mangoes steeped in cold-pressed wood-pressed mustard oil, hand-ground fenugreek seeds, yellow mustard, and Kashmiri chili. No artificial preservatives or vinegar added.",
    ingredients: ["Raw Rajapuri Mangoes", "Cold-Pressed Mustard Oil", "Hand-ground Fenugreek (Methi Kuria)", "Hing (Asafoetida)", "Rock Salt", "Turmeric"],
    storageInstructions: "Store in a cool dry place. Always use a dry clean wooden or steel spoon. Shelf life: 12 Months.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-cake-chocolate",
    name: "Eggless Belgian Dark Truffle Cake",
    category: "bakes",
    categoryName: "Fresh Home Bakes & Cakes",
    chefName: "Aanya Sharma",
    chefCity: "Bengaluru, Karnataka",
    chefAvatar: "🧁",
    chefExperience: "Artisanal Home Baker",
    price: 650,
    servings: "500g / 1 Pound (Serves 4-6)",
    diet: "eggless",
    dietLabel: "100% Eggless & Freshly Baked",
    rating: "4.95 ★ (85+ cakes)",
    imageEmoji: "🎂",
    image: "images/chocolate_cake.jpg",
    badge: "Party Favorite",
    prepNotice: "Baked Fresh on Order • 6 hrs advance notice",
    description: "Decadent, moist eggless sponge layered with 55% rich Belgian dark chocolate ganache and chocolate curls. Baked in small home batches with real butter and zero commercial cake premixes.",
    ingredients: ["Organic Flour", "Dutch Cocoa Powder", "55% Dark Belgian Chocolate", "Pure Dairy Cream", "Unsalted Butter", "Cane Sugar"],
    storageInstructions: "Keep refrigerated. Bring to room temperature 15 minutes before cutting for melt-in-mouth texture.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-sweets-laddoo",
    name: "Pure Desi Ghee Besan & Dryfruit Laddoos",
    category: "sweets",
    categoryName: "Festive Sweets & Snacks",
    chefName: "Shobha Tai Kulkarni",
    chefCity: "Nashik, Maharashtra",
    chefAvatar: "🪔",
    chefExperience: "Specialist Festive Maker",
    price: 380,
    servings: "500g Box (12-14 pieces)",
    diet: "veg",
    dietLabel: "100% Pure Desi Ghee",
    rating: "4.9 ★ (210+ boxes)",
    imageEmoji: "🟡",
    image: "images/besan_laddoo.jpg",
    badge: "Mouth Melting",
    prepNotice: "Handcrafted Fresh • 24 hrs pre-order",
    description: "Slow-roasted coarse Gram flour (Danedar Besan) simmered in pure golden Cow Ghee for 45 minutes till aromatic, laced with green cardamom, roasted almonds, cashews, and pistachios.",
    ingredients: ["Coarse Gram Flour (Chana Besan)", "Pure Cow Desi Ghee", "Cardamom (Elaichi) Powder", "Roasted Cashews", "Almonds", "Boora Sugar"],
    storageInstructions: "Store at room temperature in airtight box. Shelf life: 30 days.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-special-biryani",
    name: "Dawat Dum Handi Biryani (Veg / Paneer)",
    category: "special",
    categoryName: "Weekend Party Feasts",
    chefName: "Fatima Begum",
    chefCity: "Hyderabad, Telangana",
    chefAvatar: "🥘",
    chefExperience: "Traditional Nizam Kitchen",
    price: 320,
    servings: "Serves 2-3 Generously (850g) + Mirchi Ka Salan & Raita",
    diet: "veg",
    dietLabel: "Clay Handi Slow Cooked",
    rating: "5.0 ★ (180+ weekend feasts)",
    imageEmoji: "🍲",
    image: "images/dum_biryani.jpg",
    badge: "Weekend Special",
    prepNotice: "Slow Woodfire Dum • Order 4 hrs prior",
    description: "Authentic slow-dum cooked Biryani layered with long-grain aged Basmati rice, marinated cottage cheese/vegetables, saffron milk, caramelized brown onions (birista), and whole Mughlai spices in a clay pot.",
    ingredients: ["Aged Basmati Rice", "Fresh Malai Paneer", "Pure Kashmiri Saffron", "Caramelized Onions", "Desi Ghee", "Whole Shahi Spices"],
    storageInstructions: "Delivered hot in sealed clay handi / insulated pack. Reheat with covered lid for 2 mins.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-snack-thepla",
    name: "Fresh Methi Thepla & Sweet Chhundo Pack",
    category: "sweets",
    categoryName: "Festive Sweets & Snacks",
    chefName: "Kavita Patel",
    chefCity: "Surat, Gujarat",
    chefAvatar: "👩‍🍳",
    chefExperience: "Travel Food Specialist",
    price: 180,
    servings: "Pack of 10 Soft Theplas + 100g Chhundo",
    diet: "veg",
    dietLabel: "Travel Friendly (Lasts 4 days)",
    rating: "4.85 ★ (95+ reviews)",
    imageEmoji: "🥞",
    image: "images/methi_thepla.jpg",
    badge: "Travel & Snack Favorite",
    prepNotice: "Fresh Tawa Roasted Daily",
    description: "Paper-thin, ultra-soft Theplas made with fresh garden fenugreek leaves, sesame seeds, turmeric, and ajwain. Accompanied by homemade sweet grated mango Chhundo. Perfect for breakfast or travel.",
    ingredients: ["Whole Wheat Flour", "Fresh Fenugreek (Methi) Leaves", "White Sesame (Til)", "Ajwain", "Turmeric & Hing", "Cold-Pressed Peanut Oil"],
    storageInstructions: "Vacuum/foil sealed. Remains soft for 4-5 days without refrigeration. Ideal for office & travel.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-pickle-gongura",
    name: "Authentic Andhra Spicy Gongura & Garlic Pickle",
    category: "pickles",
    categoryName: "Grandmother's Pickles & Masalas",
    chefName: "Meenakshi Sundaram",
    chefCity: "Vijayawada, Andhra Pradesh",
    chefAvatar: "👵",
    chefExperience: "32 yrs spice craft",
    price: 240,
    servings: "400g Airtight Jar",
    diet: "veg",
    dietLabel: "Fiery Traditional Andhra Taste",
    rating: "4.9 ★ (150+ jars)",
    imageEmoji: "🌶️",
    image: "images/gongura_pickle.jpg",
    badge: "Spicy & Tangy",
    prepNotice: "Small Batch Ground • In Stock",
    description: "Tangy fresh Gongura (sorrel leaves) slow-sautéed in sesame oil with golden fried garlic pods, Guntur red chilies, roasted coriander seeds, and mustard. Gives an instant kick to hot steamed rice & ghee!",
    ingredients: ["Fresh Gongura Sorrel Leaves", "Pure Gingelly (Sesame) Oil", "Guntur Red Chilies", "Garlic Pods", "Fenugreek & Mustard", "Sea Salt"],
    storageInstructions: "Store at room temperature. Keep oil layer on top. Shelf life: 9 Months.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-bakes-banana",
    name: "Organic Whole Wheat & Jaggery Walnut Loaf",
    category: "bakes",
    categoryName: "Fresh Home Bakes & Cakes",
    chefName: "Meera Nair",
    chefCity: "Kochi, Kerala",
    chefAvatar: "🧁",
    chefExperience: "Healthy Baking Enthusiast",
    price: 340,
    servings: "450g Loaf (8 thick slices)",
    diet: "eggless",
    dietLabel: "100% Maida-Free & White Sugar-Free",
    rating: "4.9 ★ (110+ loaves)",
    imageEmoji: "🍞",
    image: "images/banana_loaf.jpg",
    badge: "Guilt-Free Healthy",
    prepNotice: "Baked Every Morning • 4 hrs pre-order",
    description: "Naturally sweet, wholesome tea-time banana bread made with 100% stoneground whole wheat flour, organic Marayoor jaggery, ripe Robusta bananas, cold-pressed coconut oil, and crunchy California walnuts.",
    ingredients: ["Stoneground Whole Wheat", "Ripe Organic Bananas", "Organic Jaggery Powder", "California Walnuts", "Cinnamon Powder", "Cold-Pressed Coconut Oil"],
    storageInstructions: "Store in airtight container. Microwave slice for 10 seconds before eating for a bakery-fresh warm feel.",
    whatsappNumber: "919876543210"
  },
  {
    id: "food-tiffin-north-indian",
    name: "Punjabi Dal Makhani & Tawa Paneer Lunchbox",
    category: "tiffins",
    categoryName: "Daily Homestyle Tiffins",
    chefName: "Harpreet Kaur",
    chefCity: "Chandigarh / Delhi NCR",
    chefAvatar: "👩‍🍳",
    chefExperience: "18 yrs homestyle cooking",
    price: 160,
    servings: "Serves 1-2 • Complete Meal Box",
    diet: "veg",
    dietLabel: "Slow-Cooked Homestyle Punjabi",
    rating: "4.95 ★ (280+ meals)",
    imageEmoji: "🍲",
    image: "images/dal_makhani.jpg",
    badge: "Rich & Wholesome",
    prepNotice: "Fresh Hot Lunch • Order before 11:00 AM",
    description: "Slow-cooked overnight black lentils (Dal Makhani) in white butter, Kadai Paneer with bell peppers, 4 soft butter Phulkas, Jeera Rice, Fresh Mint Chutney, and Gulab Jamun dessert.",
    ingredients: ["Urad Dal & Rajma", "Fresh Dairy Paneer", "Desi White Butter", "Whole Wheat Flour", "Fresh Cream & Tomatoes", "Aromatic Garam Masala"],
    storageInstructions: "Delivered hot in 4-compartment tamper-proof box. Reheat if needed.",
    whatsappNumber: "919876543210"
  }
];

