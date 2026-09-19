/* ==========================================================================
   Portfolio Master Scripts & Dynamic Multi-Page Interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initTypewriter();
  initProjects();
  initProjectDetails();
  initContactForm();
  initFaqAccordion();
  initCounterAnimations();
});

/* ==========================================================================
   1. Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".header");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Sticky Header Blur effect on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      mobileToggle.innerHTML = isOpen ? "✕" : "☰";
    });

    // Close when clicking a nav link
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        if (mobileToggle) mobileToggle.innerHTML = "☰";
      });
    });
  }

  // Active Link Highlighter based on current path
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* ==========================================================================
   2. Hero Dynamic Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const target = document.querySelector(".role-typing");
  if (!target) return;

  const roles = [
    "AI Software Engineer",
    "Generative AI & LLM Specialist",
    "Python & Full-Stack Developer",
    "Autonomous Agent Architect"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      speed = 50;
    } else {
      target.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      speed = 120;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      speed = 1800; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(type, speed);
  }

  type();
}

/* ==========================================================================
   3. Projects Render & Filter System (Home & Projects Catalog)
   ========================================================================== */
function createProjectCardHtml(p) {
  return `
    <article class="project-card" data-category="${p.category}">
      <div class="project-card-image">
        <span class="project-badge-tag">${p.categoryName}</span>
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy" />
        <div class="project-card-overlay">
          <a href="project-detail.html?id=${p.id}" class="btn btn-primary btn-sm">
            View Details ↗
          </a>
          ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">Live Demo</a>` : ''}
        </div>
      </div>
      <div class="project-card-content">
        <div class="project-card-category">${p.year} • ${p.role}</div>
        <h3 class="project-card-title">
          <a href="project-detail.html?id=${p.id}">${p.title}</a>
        </h3>
        <p class="project-card-desc">${p.tagline || p.overview}</p>
        <div class="project-card-tech">
          ${p.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${p.technologies.length > 4 ? `<span class="tech-tag">+${p.technologies.length - 4}</span>` : ''}
        </div>
        <div class="project-card-footer">
          <a href="project-detail.html?id=${p.id}" class="view-details-link">
            Explore Case Study <span>→</span>
          </a>
          <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">${p.client.split(',')[0]}</span>
        </div>
      </div>
    </article>
  `;
}

function initProjects() {
  // 1. Featured Projects on Home Page
  const featuredContainer = document.getElementById("featured-projects-grid");
  if (featuredContainer && typeof projectsData !== "undefined") {
    const featured = projectsData.filter(p => p.featured);
    featuredContainer.innerHTML = featured.map(p => createProjectCardHtml(p)).join("");
  }

  // 2. Full Projects Catalog on projects.html
  const catalogContainer = document.getElementById("catalog-projects-grid");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const searchInput = document.getElementById("project-search");

  if (catalogContainer && typeof projectsData !== "undefined") {
    let currentCategory = "all";
    let searchQuery = "";

    function renderCatalog() {
      let filtered = projectsData;

      if (currentCategory !== "all") {
        filtered = filtered.filter(p => p.category === currentCategory);
      }

      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q)) ||
          p.categoryName.toLowerCase().includes(q)
        );
      }

      if (filtered.length === 0) {
        catalogContainer.innerHTML = `
          <div class="no-projects-msg">
            <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
            <p>No matching projects found for "<strong>${searchQuery}</strong>".</p>
            <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="resetProjectFilters()">Reset Filters</button>
          </div>
        `;
      } else {
        catalogContainer.innerHTML = filtered.map(p => createProjectCardHtml(p)).join("");
      }
    }

    // Initial render
    renderCatalog();

    // Tab clicks
    filterTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        filterTabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentCategory = tab.getAttribute("data-filter");
        renderCatalog();
      });
    });

    // Search input
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderCatalog();
      });
    }

    // Expose reset function globally
    window.resetProjectFilters = () => {
      currentCategory = "all";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      filterTabs.forEach(t => t.classList.toggle("active", t.getAttribute("data-filter") === "all"));
      renderCatalog();
    };
  }
}

/* ==========================================================================
   4. Project Detail / Case Study Dynamic Loader
   ========================================================================== */
function initProjectDetails() {
  const detailContainer = document.getElementById("project-detail-container");
  if (!detailContainer || typeof projectsData === "undefined") return;

  // Read URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id") || projectsData[0].id;
  const project = getProjectById(projectId);

  // Find next and previous projects
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  // Update Page Title
  document.title = `${project.title} — Case Study | Portfolio`;

  detailContainer.innerHTML = `
    <div class="case-study-hero">
      <div class="case-study-breadcrumb">
        <a href="index.html">Home</a> / <a href="projects.html">Projects</a> / <span>${project.categoryName}</span>
      </div>
      <h1 class="case-study-title">${project.title}</h1>
      <p class="case-study-tagline">${project.tagline}</p>
      
      <div class="case-study-meta-grid">
        <div class="meta-item">
          <div class="meta-item-label">Client</div>
          <div class="meta-item-val">${project.client}</div>
        </div>
        <div class="meta-item">
          <div class="meta-item-label">Timeline</div>
          <div class="meta-item-val">${project.duration} (${project.year})</div>
        </div>
        <div class="meta-item">
          <div class="meta-item-label">Role</div>
          <div class="meta-item-val">${project.role}</div>
        </div>
        <div class="meta-item">
          <div class="meta-item-label">Category</div>
          <div class="meta-item-val">${project.categoryName}</div>
        </div>
      </div>
      
      <div class="case-study-banner">
        <img src="${project.banner || project.thumbnail}" alt="${project.title}" />
      </div>
    </div>

    <div class="case-study-content-grid">
      <div class="case-study-main">
        <!-- Overview -->
        <section class="case-study-block">
          <h2 class="case-study-block-title">Project Overview</h2>
          <p class="case-study-body">${project.overview}</p>
        </section>

        <!-- Challenge & Solution -->
        <section class="case-study-block">
          <h2 class="case-study-block-title">The Challenge & Engineering Solution</h2>
          <div class="challenge-solution-grid">
            <div class="cs-card cs-card-challenge">
              <div class="cs-card-title">⚠️ The Challenge</div>
              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${project.challenge}</p>
            </div>
            <div class="cs-card cs-card-solution">
              <div class="cs-card-title">⚡ Our Solution</div>
              <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">${project.solution}</p>
            </div>
          </div>
        </section>

        <!-- Key Impact Metrics -->
        <section class="case-study-block">
          <h2 class="case-study-block-title">Key Impact & Results</h2>
          <div class="metrics-row">
            ${project.metrics.map(m => `
              <div class="metric-box">
                <div class="metric-box-val">${m.value}</div>
                <div class="metric-box-label">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Key Features -->
        <section class="case-study-block">
          <h2 class="case-study-block-title">Core Architecture Features</h2>
          <ul class="service-bullets">
            ${project.features.map(f => `
              <li class="service-bullet-item" style="font-size: 1rem; color: var(--text-primary); margin-bottom: 8px;">
                ${f}
              </li>
            `).join('')}
          </ul>
        </section>

        <!-- Gallery Showcase -->
        <section class="case-study-block">
          <h2 class="case-study-block-title">Visual Showcase & Screenshots</h2>
          <div class="case-study-gallery-grid">
            ${project.gallery.map(img => `
              <div class="gallery-item">
                <img src="${img}" alt="Project visual" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </section>
      </div>

      <!-- Sticky Sidebar -->
      <aside class="case-study-sidebar">
        <h3 class="sidebar-heading">Project Actions</h3>
        <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px;">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
            Launch Live Demo ↗
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%;">
            View Source Code ⎇
          </a>
        </div>

        <h3 class="sidebar-heading">Tech Stack</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 30px;">
          ${project.technologies.map(t => `<span class="tech-tag" style="padding: 6px 12px; font-size: 0.8rem;">${t}</span>`).join('')}
        </div>

        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 20px; text-align: center;">
          <h4 style="font-size: 1rem; margin-bottom: 8px;">Interested in building something similar?</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Let's discuss how we can turn your product vision into high-performance reality.</p>
          <a href="contact.html" class="btn btn-glow btn-sm" style="width: 100%;">Start a Conversation</a>
        </div>
      </aside>
    </div>

    <!-- Next & Previous Project Navigation -->
    <div class="project-nav-pagination">
      <a href="project-detail.html?id=${prevProject.id}" class="btn btn-secondary">
        ← Previous: ${prevProject.title.split(' - ')[0]}
      </a>
      <a href="projects.html" class="btn btn-glow btn-sm">
        All Projects
      </a>
      <a href="project-detail.html?id=${nextProject.id}" class="btn btn-primary">
        Next: ${nextProject.title.split(' - ')[0]} →
      </a>
    </div>
  `;
}

/* ==========================================================================
   5. Interactive Contact Form with Toast Alerts
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const messageInput = document.getElementById("contact-message");
    const submitBtn = form.querySelector("button[type='submit']");

    if (!nameInput?.value.trim() || !emailInput?.value.trim() || !messageInput?.value.trim()) {
      showToast("⚠️ Incomplete Form", "Please fill in all required fields.");
      return;
    }

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sending...</span>`;

    // Simulate asynchronous submission
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();

      showToast("🎉 Message Sent!", "Thank you! I will respond to your message within 24 hours.");
    }, 1000);
  });
}

function showToast(title, description) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-icon">✓</div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${description}</div>
    </div>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4500);
}

/* ==========================================================================
   6. Interactive FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close other items
      faqItems.forEach(i => i.classList.remove("open"));
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
}

/* ==========================================================================
   7. Animated Stats Counters
   ========================================================================== */
function initCounterAnimations() {
  const stats = document.querySelectorAll(".stat-number[data-count]");
  if (!stats.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute("data-count"), 10);
        const suffix = target.getAttribute("data-suffix") || "";
        let current = 0;
        const step = Math.ceil(countTo / 40);

        const timer = setInterval(() => {
          current += step;
          if (current >= countTo) {
            target.textContent = countTo + suffix;
            clearInterval(timer);
          } else {
            target.textContent = current + suffix;
          }
        }, 30);

        obs.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(stat => observer.observe(stat));
}
