import os

with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('js/data.js', 'r', encoding='utf-8') as f:
    data = f.read()

with open('js/app.js', 'r', encoding='utf-8') as f:
    app = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace CSS link
css_tag = '<link rel="stylesheet" href="css/style.css" />'
if css_tag in html:
    html = html.replace(css_tag, f'<style>\n{css}\n</style>')

# Replace JS script tags
html = html.replace('<script src="js/data.js"></script>', f'<script>\n{data}\n</script>')
html = html.replace('<script src="js/app.js"></script>', f'<script>\n{app}\n</script>')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Bundled index.html size:", len(html))
