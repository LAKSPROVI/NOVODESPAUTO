# Despauto Website Configuration

## Required Configuration Steps

### 1. WhatsApp Integration
Update the WhatsApp number in `assets/js/script.js`:
```javascript
const whatsappNumber = '5511999999999'; // Replace with actual number
```

### 2. Google Analytics 4 Setup
Add this code to the `<head>` section of all HTML files:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics 4 measurement ID.

### 3. Meta Pixel Setup
Add this code to the `<head>` section of all HTML files:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

Replace `YOUR_PIXEL_ID` with your actual Meta Pixel ID.

### 4. SSL Certificate (HTTPS)
- Ensure SSL certificate is installed on the web server
- Force HTTPS redirects in server configuration
- Update all URLs to use HTTPS

### 5. Domain Configuration
Update all references to `despalto.com.br` (or `despauto.com.br`) with your actual domain:
- `sitemap.xml`
- Meta tags in HTML files
- JavaScript configurations

### 6. Images
Add the following images to `assets/images/`:
- `logo.png` - Company logo (40x40px minimum)
- `hero-cnh.jpg` - Hero section image
- `favicon.ico` - Website favicon

### 7. Performance Optimization
- Optimize all images (compress, use WebP when possible)
- Enable GZIP compression on server
- Configure browser caching
- Consider using a CDN for static assets

### 8. Email Configuration
If you want to publish an email address, update the footer HTML files; email addresses were removed from the footers in this branch.

## Server Requirements

### Minimum Requirements:
- PHP 7.4+ or Static hosting
- SSL Certificate
- GZIP compression enabled
- Browser caching configured

### Recommended Hosting Providers:
- Cloudflare Pages (free tier available)
- Netlify (free tier available)
- Vercel (free tier available)
- AWS S3 + CloudFront
- Traditional hosting with cPanel

## SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Structured URLs
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Mobile-responsive design
- [x] Fast loading times
- [ ] Google Search Console setup
- [ ] Google Business Profile setup
- [ ] Local SEO optimization

## Legal Compliance

### Required Legal Pages (to be created):
- Privacy Policy (`politica-privacidade.html`)
- Terms of Service (`termos-servico.html`)
- Cookie Policy (`politica-cookies.html`)

### LGPD Compliance:
- Add cookie consent banner
- Implement privacy policy
- Data protection measures

## Testing Checklist

- [x] Homepage loads correctly
- [x] Service pages load correctly
- [x] Mobile responsiveness
- [x] WhatsApp buttons functionality
- [ ] Contact forms (if added)
- [ ] Analytics tracking
- [ ] Page speed optimization
- [ ] Cross-browser compatibility

## Launch Checklist

- [ ] Domain purchased and configured
- [ ] SSL certificate installed
- [ ] Analytics configured
- [ ] All placeholder content replaced
- [ ] Contact information updated
- [ ] Legal pages created
- [ ] Performance optimized
- [ ] SEO configured
- [ ] Social media integration
- [ ] Backup system implemented

## Recent repository updates (automated edits)

- Added mobile menu CSS for `.nav__menu.show` so the toggle in `assets/js/script.js` displays correctly on small screens.
- Centralized FAQ toggle logic and lazy-loading into `assets/js/script.js`; inline FAQ scripts in `defesa-cnh-suspensa.html` and `defesa-lei-seca.html` were commented out to avoid duplication.
- Guarded Service Worker registration to avoid errors when `/sw.js` is not present.
- Updated `robots.txt` to allow crawlers to access CSS/JS/images (removed rules that blocked assets).

Please update the following placeholders after deployment:
- `assets/js/script.js` -> `whatsappNumber` (set your real number in international format, e.g. `5511999999999`).
- Replace contact phone/email in all HTML footers.
- Provide `sw.js` if PWA support is desired, or remove the registration block.

Actions applied now:

- A minimal `sw.js` was added at repository root to provide basic offline caching for `/`, `/index.html`, `assets/css/style.css`, and `assets/js/script.js`.
- Implemented a basic cookie consent banner (JS + CSS) that stores consent in localStorage.
- Created placeholder legal pages: `politica-privacidade.html` and `politica-cookies.html` — update with your legal text before publishing.