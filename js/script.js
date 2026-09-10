(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ============================================================
     RENDER CATEGORY TABS + PRODUCT GRID (from config.js)
     ============================================================ */
  const tabsEl = document.querySelector(".category-tabs");
  const gridEl = document.getElementById("product-grid");

  function productImageMarkup(product) {
    if (product.image) {
      return `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
    }
    return `<span>Photo placeholder — ${product.name}</span>`;
  }

  function render() {
    CATEGORIES.forEach((cat, i) => {
      const tab = document.createElement("button");
      tab.className = "category-tab";
      tab.type = "button";
      tab.textContent = cat.label;
      tab.dataset.category = cat.id;
      tab.setAttribute("role", "tab");
      tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
      tab.addEventListener("click", () => selectCategory(cat.id));
      tabsEl.appendChild(tab);

      const block = document.createElement("div");
      block.className = "category-block";
      block.id = `cat-${cat.id}`;
      if (i !== 0) block.hidden = true;

      const title = document.createElement("h3");
      title.className = "category-block-title";
      title.textContent = cat.label;
      block.appendChild(title);

      const grid = document.createElement("div");
      grid.className = "product-grid";

      PRODUCTS.filter((p) => p.category === cat.id).forEach((p) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <div class="product-image">${productImageMarkup(p)}</div>
          <div class="product-info">
            <span class="product-name">${p.name}</span>
            <span class="product-price">${p.price}</span>
            <button class="product-order-btn" type="button">Order</button>
          </div>
        `;
        card.querySelector(".product-order-btn").addEventListener("click", () => openOrderModal(p));
        grid.appendChild(card);
      });

      block.appendChild(grid);
      gridEl.appendChild(block);
    });
  }

  function selectCategory(id) {
    document.querySelectorAll(".category-tab").forEach((t) => {
      t.setAttribute("aria-selected", t.dataset.category === id ? "true" : "false");
    });
    document.querySelectorAll(".category-block").forEach((b) => {
      b.hidden = b.id !== `cat-${id}`;
    });
  }

  render();

  /* ============================================================
     ORDER MODAL — WhatsApp / Email handoff
     ============================================================ */
  const modal = document.getElementById("order-modal");
  const itemLine = document.getElementById("modal-item-line");
  const locationInput = document.getElementById("delivery-location");
  const nameInput = document.getElementById("customer-name");
  let currentProduct = null;

  function openOrderModal(product) {
    currentProduct = product;
    itemLine.textContent = `${product.name} — ${product.price}`;
    locationInput.value = "";
    nameInput.value = "";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    locationInput.focus();
  }

  function closeOrderModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    currentProduct = null;
  }

  document.querySelectorAll("[data-close-modal]").forEach((el) =>
    el.addEventListener("click", closeOrderModal)
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeOrderModal();
  });

  function buildMessage() {
    const name = nameInput.value.trim();
    const location = locationInput.value.trim() || "(not provided)";
    return (
      `Hi Nadia's Wears! I'd like to order:\n\n` +
      `Item: ${currentProduct.name}\n` +
      `Category: ${currentProduct.category}\n` +
      `Price: ${currentProduct.price}\n` +
      `Delivery location: ${location}` +
      (name ? `\nName: ${name}` : "")
    );
  }

  document.getElementById("order-via-whatsapp").addEventListener("click", () => {
    if (!currentProduct) return;
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${STORE.whatsappNumber}?text=${text}`, "_blank", "noopener");
    closeOrderModal();
  });

  document.getElementById("order-via-email").addEventListener("click", () => {
    if (!currentProduct) return;
    const subject = encodeURIComponent(`Order: ${currentProduct.name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${STORE.email}?subject=${subject}&body=${body}`;
    closeOrderModal();
  });

  /* ============================================================
     CHATBOT — keyword-matched FAQ, config-driven
     ============================================================ */
  const chatToggle = document.getElementById("chat-toggle");
  const chatPanel = document.getElementById("chat-panel");
  const chatClose = document.getElementById("chat-close");
  const chatMessages = document.getElementById("chat-messages");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  document.getElementById("chat-agent-name").textContent = CHATBOT.agentName;

  let chatOpened = false;

  function addMessage(text, from) {
    const div = document.createElement("div");
    div.className = `chat-msg ${from}`;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function botReply(userText) {
    const lower = userText.toLowerCase();
    const match = CHATBOT.faqs.find((group) =>
      group.keywords.some((kw) => lower.includes(kw.toLowerCase()))
    );
    const reply = match ? match.reply : CHATBOT.fallback;
    // small delay so it reads as a reply, not an instant echo
    setTimeout(() => addMessage(reply, "bot"), 350);
  }

  function openChat() {
    chatPanel.classList.add("open");
    chatPanel.setAttribute("aria-hidden", "false");
    chatToggle.setAttribute("aria-expanded", "true");
    if (!chatOpened) {
      addMessage(CHATBOT.greeting, "bot");
      chatOpened = true;
    }
    chatInput.focus();
  }

  function closeChat() {
    chatPanel.classList.remove("open");
    chatPanel.setAttribute("aria-hidden", "true");
    chatToggle.setAttribute("aria-expanded", "false");
  }

  chatToggle.addEventListener("click", () => {
    chatPanel.classList.contains("open") ? closeChat() : openChat();
  });
  chatClose.addEventListener("click", closeChat);

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, "user");
    chatInput.value = "";
    botReply(text);
  });
})();
