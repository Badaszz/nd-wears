# Nadia's Wears — Website

A single-page site for Nadia's Wears: browse jeans, polos and hoodies, then order
straight to WhatsApp or email. No payment processing, no accounts — just a fast
path from "I like this" to "message sent."

## Editing content (no coding needed)

Everything you'll want to change day-to-day lives in **`js/config.js`**:

- **Store info** — your WhatsApp number and order email, at the top.
- **CATEGORIES** — add, remove or rename categories.
- **PRODUCTS** — add, remove or edit items: name, price, category, and photo.
- **CHATBOT** — the greeting message, and the FAQ answers about delivery,
  payment, sizing, returns, etc. Each entry has `keywords` (words that trigger
  it) and a `reply` (what the bot says).

Open the file in any text editor, change the text between the quote marks,
save, and redeploy (see below). You don't need to touch `script.js`,
`style.css`, or `index.html` for normal updates.

### Adding real product photos

1. Drop your photos into the `images/` folder (e.g. `images/jeans-01.jpg`).
2. In `js/config.js`, find the matching product and set:
   ```js
   image: "images/jeans-01.jpg",
   ```
3. Leave `image: ""` on any product without a photo yet — it'll show a clean
   placeholder box instead of breaking the layout.
4. For the hero photo, add `images/hero.jpg` and update the hero section in
   `index.html` (swap the placeholder `<div class="hero-image">` block for an
   `<img>` tag) — happy to do this for you once you've got the photo ready.
5. For social-media link previews, add a `images/og-cover.jpg` (roughly
   1200×630px).

**Important:** only use photos of items you actually have the right to
sell. Photos showing another brand's logo or trademarked pattern (e.g. a
Louis Vuitton, Lacoste, or Stussy design) shouldn't go on the site unless
you're an authorized reseller of that brand — it's a real legal risk
(trademark/counterfeit issues), separate from anything about the website
itself.

## Updating prices

Prices are plain text in `js/config.js` (e.g. `price: "₦18,000"`) — replace
the `₦0,000` placeholders with real prices.

## Deploying to Netlify

**Easiest way (no Git needed):**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `nadias-wears` folder into the browser window.
3. Netlify gives you a live URL immediately (e.g. `random-name-123.netlify.app`).
4. You can rename the site under **Site settings → Change site name** to
   something like `nadiaswears.netlify.app`.

**After your first deploy**, update these two files to match your real
Netlify URL:
- `index.html` — the `og:url`, `og:image`, `twitter:image`, and `canonical`
  tags near the top.
- `robots.txt` and `sitemap.xml` — the URLs listed there.

Every time you edit `config.js` (or anything else), just drag the folder
into Netlify Drop again to redeploy — or connect the folder to a GitHub repo
in Netlify for automatic redeploys on every push.

## About the chatbot

The chatbot on the site is **keyword-matched**, not a live AI model — it
looks for words like "delivery" or "payment" in what the customer types and
replies with the matching answer from `js/config.js`. This works entirely in
the browser, needs no server, and costs nothing to run — good fit for a
static Netlify site.

If you ever want it to hold a real free-flowing conversation (powered by an
actual AI model), that requires a small backend (e.g. a Netlify serverless
function calling the Anthropic API) so your API key isn't exposed in the
browser. Happy to build that as a follow-up when you're ready for it —
it's a bigger, and not-free, step up from what's here.

## SEO checklist already done

- Descriptive `<title>` and meta description
- Open Graph + Twitter card tags (add `images/og-cover.jpg` to complete)
- `ClothingStore` structured data (JSON-LD) with your phone/location
- `robots.txt` and `sitemap.xml`
- Semantic HTML (`header`, `main`, `section`, proper heading order)
- Mobile-responsive layout

Once live, submit the site to
[Google Search Console](https://search.google.com/search-console) and paste
in your sitemap URL for faster indexing.
"# nd-wears" 
