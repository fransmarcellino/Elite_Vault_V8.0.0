/**
 * @file script.js
 * @description Master-Optimized Core for Elite Vault v8.1.1
 * @author Frans Marcellino
 */

"use strict";

const VAULT_DATA = {
    owner: { firstName: "FRANS", lastName: "MARCELLINO", email: "fransmarselinosroyer@gmail.com" },
    content: { heroTitle: "Architecting Digital Sovereignty.", footer: "© 2026 FRANS MARCELLINO — ALL RIGHTS RESERVED" },
    products: [
        { name: "Titan Core", price: "$1,290", desc: "Enterprise SaaS Framework.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Titan+Core" },
        { name: "Quantum UI", price: "$750", desc: "Kinetic React Components.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Quantum+UI" },
        { name: "SecureAuth X", price: "$490", desc: "Zero-Knowledge Auth Suite.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=SecureAuth+X" },
        { name: "Nebula AI", price: "$2,999", desc: "Neural Integration Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Nebula+AI" },
        { name: "Apex CMS", price: "$1,800", desc: "Headless Content Engine.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Apex+CMS" },
        { name: "Zenith ERP", price: "$4,500", desc: "Global Logistics Logic.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Zenith+ERP" },
        { name: "Vortex DB", price: "$980", desc: "Real-time Vector Database.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Vortex+DB" },
        { name: "Cipher Mesh", price: "$1,100", desc: "P2P Encryption Layer.", img: "https://placehold.co/800x600/0f0f0f/ffd700?text=Cipher+Mesh" }
    ],
    menu: [
        { label: "Home", id: "home" },
        { label: "Vault", id: "market" },
        { label: "About", id: "about" }
    ]
};

let curN = "", curP = "", selectedGateway = "PayPal";
const cursorEl = document.getElementById("cursor");

// --- UI ENGINE (High Performance) ---
// Perbaikan: Menggunakan transform alih-alih top/left untuk FPS 60+
document.addEventListener("mousemove", (e) => {
    if (cursorEl) {
        window.requestAnimationFrame(() => {
            cursorEl.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        });
    }
}, { passive: true });

function navigateTo(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => {
        p.classList.remove("active");
        p.style.display = "none";
    });
    
    const target = document.getElementById(id);
    if (target) {
        target.style.display = "block";
        // Menggunakan requestAnimationFrame agar transisi mulus
        requestAnimationFrame(() => target.classList.add("active"));
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggleMenu(true);
}

function toggleTheme() {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    const btn = document.getElementById("theme-btn");
    if (btn) btn.innerText = isLight ? "DARK MODE" : "LIGHT MODE";
}

function toggleMenu(forceClose = false, event = null) {
    if (event) event.stopPropagation();
    const dropdown = document.getElementById("dropdown");
    if (!dropdown) return;
    
    if (forceClose || dropdown.classList.contains("active")) {
        dropdown.classList.remove("active");
        setTimeout(() => { 
            if(!dropdown.classList.contains("active")) dropdown.style.display = "none"; 
        }, 300);
    } else {
        dropdown.style.display = "block";
        dropdown.offsetHeight; // Trigger reflow
        dropdown.classList.add("active");
    }
}

// Click outside menu fix
document.addEventListener("click", (e) => {
    const dropdown = document.getElementById("dropdown");
    const kebabBtn = document.getElementById("kebab-menu-btn");
    if (dropdown?.classList.contains("active") && !dropdown.contains(e.target) && !kebabBtn.contains(e.target)) {
        toggleMenu(true);
    }
});

// --- TYPEWRITER (Performance Optimized) ---
function typeWriter(text, i) {
    const el = document.getElementById("hero-title");
    if (el) {
        if (i <= text.length) {
            // Optimization: Menggunakan textContent untuk efisiensi
            el.textContent = text.substring(0, i);
            setTimeout(() => typeWriter(text, i + 1), 50);
        }
    }
}

// --- PRODUCT RENDERER (LCP Optimized) ---
function renderProducts(data) {
    const grid = document.getElementById("main-grid");
    if (!grid) return;
    
    // Perbaikan CLS: Jangan kosongkan innerHTML langsung jika ada data
    const fragment = document.createDocumentFragment();

    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 20px;"><h3>Asset Not Found</h3></div>`;
        return;
    }

    data.forEach((p, index) => {
        const card = document.createElement("article");
        card.className = "card";
        
        // AKAR MASALAH FIX: Gambar pertama (index 0) TIDAK boleh lazy load untuk skor Performa 100
        const loadingStrategy = index === 0 ? "eager" : "lazy";
        const priority = index === 0 ? "fetchpriority='high'" : "";

        card.innerHTML = `
            <div class="price-tag">${p.price}</div>
            <img src="${p.img}" class="card-img" alt="${p.name}" width="800" height="600" loading="${loadingStrategy}" ${priority}>
            <h3 style="margin-bottom:10px;">${p.name}</h3>
            <p style="color:var(--text-dim);margin-bottom:25px;font-size:0.9rem;">${p.desc}</p>
            <button class="btn-premium" onclick="openModal('${p.name}', '${p.price}')">Acquire License</button>`;
        fragment.appendChild(card);
    });

    grid.innerHTML = "";
    grid.appendChild(fragment);
}

function handleSearch() {
    const q = document.getElementById("search-bar").value.toLowerCase();
    const filtered = VAULT_DATA.products.filter(p => 
        p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderProducts(filtered);
}

// --- MODAL & PAYMENT ---
function openModal(n, p) {
    curN = n; curP = p;
    document.getElementById("target-name").innerText = n.toUpperCase();
    document.getElementById("target-price").innerText = p;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() { document.getElementById("modal").style.display = "none"; }

function selectPayment(method, element) {
    document.querySelectorAll(".method-card").forEach(c => c.classList.remove("active"));
    element.classList.add("active");
    selectedGateway = method;
}

function confirmInquiry() {
    const clientName = document.getElementById("client-name").value;
    if (!clientName) return alert("Identity Verification Required.");
    const body = `CLIENT: ${clientName}\nASSET: ${curN}\nVALUE: ${curP}\nGATEWAY: ${selectedGateway}`;
    window.location.href = `mailto:${VAULT_DATA.owner.email}?subject=Inquiry: ${curN}&body=${encodeURIComponent(body)}`;
    closeModal();
}

// --- INITIALIZATION ---
function init() {
    // Theme Recovery
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        const btn = document.getElementById("theme-btn");
        if (btn) btn.innerText = "DARK MODE";
    }

    // Dynamic Footer
    const footerText = document.getElementById("footer-text");
    if (footerText) footerText.innerText = VAULT_DATA.content.footer;

    // Dropdown Menu Builder
    const linksBox = document.getElementById("social-links");
    if (linksBox) {
        linksBox.innerHTML = "";
        VAULT_DATA.menu.forEach(item => {
            const a = document.createElement("a");
            a.href = "#" + item.id;
            a.style = "padding:18px 25px; display:block; color:var(--text-main); text-decoration:none; font-size:0.75rem; border-bottom:1px solid var(--border); font-weight:700;";
            a.innerText = item.label.toUpperCase();
            a.onclick = (e) => { e.preventDefault(); navigateTo(item.id); };
            linksBox.appendChild(a);
        });
    }

    renderProducts(VAULT_DATA.products);
    typeWriter(VAULT_DATA.content.heroTitle, 0);
}

window.addEventListener('DOMContentLoaded', init);
