/* ============================================================
   NADIA'S WEARS — SITE CONTENT CONFIG
   This is the ONLY file you should need to touch to update
   the store. No coding knowledge needed — just edit the text
   between the quote marks below and save the file.

   After editing, re-upload/redeploy to Netlify (see README.md).
   ============================================================ */

const STORE = {
  name: "Nadia's Wears",
  whatsappNumber: "0916959823".replace(/[^0-9]/g, ""), // digits only, no + or spaces
  email: "mathewelizabeth299@gmail.com",
};

/* ------------------------------------------------------------
   CATEGORIES
   Add or remove categories here. "id" must be unique, no spaces.
   ------------------------------------------------------------ */
const CATEGORIES = [
  { id: "jeans", label: "Jeans" },
  { id: "polos", label: "Polos" },
  { id: "hoodies", label: "Hoodies" },
];

/* ------------------------------------------------------------
   PRODUCTS
   - category: must match one of the "id" values above
   - price: EDIT ME — replace with the real price, e.g. "₦18,000"
   - image: path to a photo in the /images folder. Leave blank
     ("") to show a placeholder box instead.
   ------------------------------------------------------------ */
const PRODUCTS = [
  // ---- JEANS ----
  {
    id: "jeans-01",
    category: "jeans",
    name: "Straight Fit Denim",
    price: "₦0,000",
    image: "/images/img1.jpeg",
  },
  {
    id: "jeans-02",
    category: "jeans",
    name: "Slim Taper Jeans",
    price: "₦0,000",
    image: "/images/img2.jpeg",
  },
  {
    id: "jeans-03",
    category: "jeans",
    name: "Wide Leg Denim",
    price: "₦0,000",
    image: "/images/img3.jpeg",
  },

  // ---- POLOS ----
  {
    id: "polo-01",
    category: "polos",
    name: "Classic Pique Polo",
    price: "₦0,000",
    image: "/images/img4.jpeg",
  },
  {
    id: "polo-02",
    category: "polos",
    name: "Long Sleeve Polo",
    price: "₦0,000",
    image: "/images/img5.jpeg",
  },
  {
    id: "polo-03",
    category: "polos",
    name: "Ribbed Collar Polo",
    price: "₦0,000",
    image: "/images/img6.jpeg",
  },

  // ---- HOODIES ----
  {
    id: "hoodie-01",
    category: "hoodies",
    name: "Essential Pullover Hoodie",
    price: "₦0,000",
    image: "/images/img7.jpeg",
  },
  {
    id: "hoodie-02",
    category: "hoodies",
    name: "Zip-Up Hoodie",
    price: "₦0,000",
    image: "/images/img8.jpeg",
  },
  {
    id: "hoodie-03",
    category: "hoodies",
    name: "Oversized Hoodie",
    price: "₦0,000",
    image: "/images/img9.jpeg",
  },
];

/* ------------------------------------------------------------
   CHATBOT
   "greeting" = the first message the bot sends when opened.
   "persona"  = a short description of tone — shown nowhere on
                the site, but keep your replies below consistent
                with it so the bot feels like one voice.
   "fallback" = what the bot says when it doesn't understand.

   "faqs" = a list of question groups. For each group:
     - keywords: words/phrases that trigger this answer if the
       customer's message contains any of them (not case sensitive)
     - reply: what the bot says back

   To add a new topic, copy one of the blocks below, change the
   keywords and reply, and add a comma after the closing }.
   ------------------------------------------------------------ */
const CHATBOT = {
  agentName: "Nadia's Wears",
  greeting: "Hiii! 😊 Welcome to Nadia's Wears — I can help with delivery, payment, sizing or anything else. What would you like to know?",
  persona: "Warm, friendly, upbeat, uses the occasional emoji, keeps answers short and clear.",
  fallback: "Hmm, I'm not sure I caught that 😊 You can ask me about delivery, payment or sizing — or message us directly on WhatsApp and we'll sort you out personally!",

  faqs: [
    {
      keywords: ["delivery", "deliver", "shipping", "how long", "when will", "arrive"],
      reply: "We deliver across Lagos within 1–2 working days, and to other states within Nigeria in 3–5 working days 🚚 Delivery fees depend on your location and get confirmed before your order is finalised.",
    },
    {
      keywords: ["payment", "pay", "bank transfer", "how do i pay", "cash"],
      reply: "You can pay by bank transfer or cash on delivery (Lagos only) 💳 Once you place your order on WhatsApp, we'll send account details or confirm your preferred option.",
    },
    {
      keywords: ["return", "exchange", "refund", "wrong size"],
      reply: "If something doesn't fit right, message us within 3 days of delivery and we'll sort an exchange, as long as the item is unworn with tags still on 🙌",
    },
    {
      keywords: ["size", "sizing", "fit", "measurement"],
      reply: "Good question! Sizes are noted on each product, but if you're ever unsure, send us your usual size and we'll help you pick the best fit before you order 📏",
    },
    {
      keywords: ["price", "cost", "how much"],
      reply: "Prices are listed under each item in the shop section 🛍️ Tap 'Order' on anything you like and we'll take it from there.",
    },
    {
      keywords: ["hi", "hello", "hey", "good morning", "good afternoon"],
      reply: "Hi there! 😊 What can I help you with — delivery, payment, or picking out something nice?",
    },
  ],
};
