// SISSI — Main Application JS
// Product data from CSV (flat-shoes only) with Gemini-generated SEO names

const products = [
  {
    id: 'flat-shoes-x823806y',
    name: 'Luxury Quilted Black Leather Ballet Flats with Patent Cap Toe',
    nameEs: 'Bailarinas Negras Acolchadas de Cuero con Punta de Charol',
    nameAr: 'حذاء باليه أسود مبطن من الجلد بمقدمة لامعة',
    price: 79,
    originalPrice: 99,
    badge: 'new',
    images: [
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/2e25b430de920dfa7eb2f99ce1bd7766.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/632d5266bea76f525ba611fb94872132.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/e89b64031e2b88d6779b9f30cbd8e351.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/3e94c0d60ed9971fa56e547f0ed7a502.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/89474f14bbeeb0e5a11926da4803a050.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/0662c65753a21f2a85a925efe9bed28f.webp'
    ],
    description: 'Exquisite black ballet flats adorned with all-over rhinestone embellishments and elegant criss-cross Mary Jane straps. The sparkling crystal surface catches light beautifully, making these flats perfect for special occasions while maintaining ultimate comfort. Features a cushioned insole and adjustable buckle closure.',
    descriptionEs: 'Exquisitas bailarinas negras adornadas con incrustaciones de cristal y elegantes correas cruzadas estilo Mary Jane. Plantilla acolchada y cierre con hebilla ajustable.',
    descriptionAr: 'حذاء باليه أسود رائع مزين بأحجار الراين وأحزمة متقاطعة أنيقة. يتميز بنعل داخلي مبطن وإبزيم قابل للتعديل.',
    colors: ['#1a1a1a', '#8B6F47'],
    colorNames: ['Black', 'Bronze']
  },
  {
    id: 'flat-shoes-7qrjaytq',
    name: 'Elegant Beige and Black Cap Toe Ballerina Shoes',
    nameEs: 'Bailarinas Elegantes Beige y Negro con Punta',
    nameAr: 'حذاء باليرينا أنيق بيج وأسود بمقدمة مغطاة',
    price: 69,
    originalPrice: 89,
    badge: 'new',
    images: [
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/5c484cbb62ed992e8a44ba6c5f37a726.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/a376c8ce2ba91ce17df3d0cf40e4e123.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/96bbc9eab81fdeedd05b9ef7cc33e1cd.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/9e6917d75085e19101501b2cd9fc6eab.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/295be393ba0a419fb0d807d01bccc5c6.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/403f8a6f5f301c2cd482da1760805d2d.webp'
    ],
    description: 'Stunning camel leather ballet flats featuring a jeweled Mary Jane strap with turquoise, jade, and garnet cabochon stones set in gold-tone bezels. A bohemian-chic meets classic elegance design that transitions effortlessly from day to evening.',
    descriptionEs: 'Impresionantes bailarinas de cuero camel con una correa Mary Jane enjoyada con piedras de turquesa, jade y granate engastadas en biseles dorados.',
    descriptionAr: 'حذاء باليه من الجلد الجملي مع حزام ماري جين مرصع بأحجار الفيروز واليشم والعقيق في إطار ذهبي.',
    colors: ['#C4956A', '#1a1a1a'],
    colorNames: ['Camel', 'Black']
  },
  {
    id: 'flat-shoes-7pv429io',
    name: 'Shimmering Champagne Gold Metallic Ballet Flats',
    nameEs: 'Bailarinas Metálicas Doradas Champán Brillantes',
    nameAr: 'حذاء باليه ذهبي معدني لامع بلون الشمبانيا',
    price: 59,
    originalPrice: 79,
    badge: 'new',
    images: [
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/d0a244ac9b0f6a7a1047e34aa5666ad6.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/43b85621099c2139533a4630b750bba0.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/5bbbe2c48203eab6e15709187c69ad45.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/f70df868c8f4496ce46f7204652c7c29.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/2887b384fd30e0ce660e4a624d3e0ea7.webp',
      'https://r2.shopwis.cn/product/1512/image/2025/12/24/72c955ec0e3b4b158478ff80104c8442.webp'
    ],
    description: 'Classic champagne gold metallic ballet flats featuring a charming rhinestone-encrusted bow detail with polished gold aglets. The luminous metallic finish adds glamour to any outfit while the cushioned insole ensures all-day comfort.',
    descriptionEs: 'Bailarinas metálicas doradas clásicas con un encantador lazo incrustado de cristales. El acabado metálico luminoso añade un toque de glamour a cualquier atuendo.',
    descriptionAr: 'حذاء باليه ذهبي معدني كلاسيكي مع تفاصيل قوس مرصع بأحجار الراين. اللمسة المعدنية اللامعة تضيف أناقة لأي إطلالة.',
    colors: ['#D4A853', '#C0C0C0'],
    colorNames: ['Gold', 'Silver']
  }
];

// Expand to 6 display products (each product + one color variant)
const allDisplayProducts = [];
products.forEach(p => {
  allDisplayProducts.push({ ...p, displayColor: p.colorNames[0] });
  if (p.colorNames.length > 1) {
    allDisplayProducts.push({
      ...p,
      id: p.id + '-v2',
      name: p.name + ' - ' + p.colorNames[1],
      nameEs: p.nameEs + ' - ' + p.colorNames[1],
      nameAr: p.nameAr + ' - ' + p.colorNames[1],
      price: p.price + 5,
      originalPrice: p.originalPrice + 5,
      displayColor: p.colorNames[1],
      images: [...p.images].reverse()
    });
  }
});

// Render product grid
function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  grid.innerHTML = allDisplayProducts.map((p) => {
    const baseProduct = products.find(pp => p.id.startsWith(pp.id));
    const pid = baseProduct?.id || p.id;
    // Build variant thumbnails (use first image of each variant for this base product)
    const variants = allDisplayProducts.filter(v => v.id.startsWith(baseProduct?.id || p.id));
    const thumbsHtml = variants.length > 1
      ? variants.map((v, vi) => `<div class="product-color-thumb${v.id === p.id ? ' active' : ''}" data-card-id="${p.id}" data-img="${v.images[0]}" data-hover="${v.images[1] || v.images[0]}" onclick="event.stopPropagation(); switchCardImage(this)"><img src="${v.images[0]}" alt="${v.colorNames?.[vi] || ''}" loading="lazy"></div>`).join('')
      : '';
    return `
      <div class="product-card" data-card-id="${p.id}" onclick="goToProduct('${pid}')">
        <div class="product-card-image">
          ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'New' : p.badge}</span>` : ''}
          <img class="primary-img" src="${p.images[0]}" alt="${p.name}" loading="lazy">
          <img class="hover-img" src="${p.images[1] || p.images[0]}" alt="${p.name}" loading="lazy">
          <button class="quick-view-btn" data-i18n="quick_view" onclick="event.stopPropagation()">Quick View</button>
        </div>
        <div class="product-card-info">
          <div class="product-card-name">${p.name}</div>
          <div class="product-card-price">
            ${p.originalPrice > p.price ? `<span class="original">US$${p.originalPrice}</span>` : ''}
            <span class="${p.originalPrice > p.price ? 'sale' : 'current-price'}">US$${p.price}</span>
          </div>
          ${thumbsHtml ? `<div class="product-colors">${thumbsHtml}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  const countEl = document.querySelector('.product-count');
  if (countEl) countEl.textContent = `${allDisplayProducts.length} products`;

  if (typeof currentLang !== 'undefined' && currentLang !== 'en') {
    setLanguage(currentLang);
  }
}

function goToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

// Switch product card image from color thumbnail click
function switchCardImage(thumb) {
  const card = thumb.closest('.product-card');
  if (!card) return;
  const primaryImg = card.querySelector('.primary-img');
  const hoverImg = card.querySelector('.hover-img');
  if (primaryImg) primaryImg.src = thumb.getAttribute('data-img');
  if (hoverImg) hoverImg.src = thumb.getAttribute('data-hover');
  // Update active thumb
  card.querySelectorAll('.product-color-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function sortProducts(value) {
  switch (value) {
    case 'price-asc':
      allDisplayProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      allDisplayProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      allDisplayProducts.reverse();
      break;
    default:
      break;
  }
  renderProductGrid();
}

// === Header Interactions ===
function initHeaderInteractions() {
  const header = document.getElementById('site-header');

  // Sticky header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
  });

  // Mobile nav
  const hamburger = document.getElementById('hamburger-btn');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobileClose = document.getElementById('mobile-nav-close');

  if (hamburger && mobileOverlay) {
    hamburger.addEventListener('click', () => {
      mobileOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    mobileClose?.addEventListener('click', closeMobileNav);
    mobileOverlay.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeMobileNav();
    });
  }

  function closeMobileNav() {
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Mobile sub-nav toggles
  document.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.closest('.mobile-has-sub');
      parent.classList.toggle('open');
    });
  });

  // Desktop language dropdown
  const langDropdownBtn = document.getElementById('lang-dropdown-btn');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      setLanguage(lang);
      // Update active state
      document.querySelectorAll('.lang-option').forEach(o => o.classList.toggle('active', o.getAttribute('data-lang') === lang));
      // Update displayed language name
      const langCurrent = document.querySelector('.lang-current');
      if (langCurrent) langCurrent.textContent = opt.textContent;
      // Sync mobile lang buttons
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });
      // Close dropdown
      if (langDropdownMenu) langDropdownMenu.classList.remove('open');
    });
  });

  // Mobile lang switcher
  document.querySelectorAll('.mobile-lang-switcher .lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      // Sync active state across all lang controls
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === lang);
      });
      document.querySelectorAll('.lang-option').forEach(o => {
        o.classList.toggle('active', o.getAttribute('data-lang') === lang);
        if (o.getAttribute('data-lang') === lang) {
          const langCurrent = document.querySelector('.lang-current');
          if (langCurrent) langCurrent.textContent = o.textContent;
        }
      });
    });
  });

  // Search overlay
  const searchToggle = document.getElementById('search-toggle-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input');

  if (searchToggle && searchOverlay) {
    searchToggle.addEventListener('click', (e) => {
      e.preventDefault();
      searchOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput?.focus(), 350);
    });
    searchClose?.addEventListener('click', () => {
      searchOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay.classList.contains('open')) {
        searchOverlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Account drawer
  initDrawer('account-toggle-btn', 'account-overlay', 'account-close');

  // Cart drawer
  initDrawer('cart-toggle-btn', 'cart-overlay', 'cart-close');

  // Cart/Account links prevent default (they're <a> tags now)
  document.querySelectorAll('.header-action-link').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
  });
}

function initDrawer(toggleId, overlayId, closeId) {
  const toggle = document.getElementById(toggleId);
  const overlay = document.getElementById(overlayId);
  const close = document.getElementById(closeId);

  if (!toggle || !overlay) return;

  toggle.addEventListener('click', () => {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  close?.addEventListener('click', () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

// === Product Detail Page ===
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || products[0].id;
  const product = products.find(p => p.id === productId) || products[0];

  document.title = `${product.name} — SISSI`;

  const nameEl = document.getElementById('product-name');
  const priceEl = document.getElementById('product-price');
  const descEl = document.getElementById('product-desc');

  if (nameEl) nameEl.textContent = product.name;
  if (priceEl) {
    priceEl.innerHTML = product.originalPrice > product.price
      ? `<span class="original">US$${product.originalPrice}</span> <span class="sale">US$${product.price}</span>`
      : `<span class="current-price">US$${product.price}</span>`;
  }
  if (descEl) descEl.innerHTML = `<p>${product.description}</p>`;

  // Color select
  const colorSelect = document.getElementById('color-select');
  if (colorSelect) {
    colorSelect.innerHTML = product.colors.map((c, i) =>
      `<option value="${c}">${product.colorNames[i]}</option>`
    ).join('');
  }

  // Size select
  const sizeSelect = document.getElementById('size-select');
  if (sizeSelect) {
    const sizes = ['US-5 / UK-3 / EU-36', 'US-6 / UK-4 / EU-37', 'US-7 / UK-5 / EU-38', 'US-8 / UK-6 / EU-39', 'US-9 / UK-7 / EU-40', 'US-10 / UK-8 / EU-41'];
    sizeSelect.innerHTML = sizes.map(s => `<option value="${s}">${s}</option>`).join('');
  }

  // Accordion interaction
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.accordion-item').classList.toggle('open');
    });
  });

  // Recommended products
  const recGrid = document.getElementById('recommended-grid');
  if (recGrid) {
    const others = allDisplayProducts.filter(p => !p.id.startsWith(product.id)).slice(0, 4);
    recGrid.innerHTML = others.map(p => {
      const baseProduct = products.find(pp => p.id.startsWith(pp.id));
      const pid = baseProduct?.id || p.id;
      return `
        <div class="product-card" onclick="goToProduct('${pid}')">
          <div class="product-card-image">
            ${p.badge ? `<span class="product-badge ${p.badge}">${p.badge === 'new' ? 'New' : p.badge}</span>` : ''}
            <img class="primary-img" src="${p.images[0]}" alt="${p.name}" loading="lazy">
            <img class="hover-img" src="${p.images[1] || p.images[0]}" alt="${p.name}" loading="lazy">
          </div>
          <div class="product-card-info">
            <div class="product-card-name">${p.name}</div>
            <div class="product-card-price">
              ${p.originalPrice > p.price ? `<span class="original">US$${p.originalPrice}</span>` : ''}
              <span class="${p.originalPrice > p.price ? 'sale' : 'current-price'}">US$${p.price}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Gallery
  const mainImg = document.getElementById('gallery-main-img');
  const thumbsContainer = document.getElementById('gallery-thumbs');
  if (mainImg && thumbsContainer) {
    mainImg.src = product.images[0];
    mainImg.alt = product.name;
    thumbsContainer.innerHTML = product.images.slice(0, 6).map((img, i) => `
      <div class="thumb${i === 0 ? ' active' : ''}" onclick="changeMainImage('${img}', this)">
        <img src="${img}" alt="${product.name} - ${i + 1}" loading="lazy">
      </div>
    `).join('');
  }

  // (Color and Size selects already rendered above)
}

function changeMainImage(src, thumb) {
  const mainImg = document.getElementById('gallery-main-img');
  if (mainImg) {
    mainImg.src = src;
    document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectColor(swatch) {
  document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
  swatch.classList.add('active');
}
