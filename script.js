// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load dynamic content
document.addEventListener('DOMContentLoaded', () => {
    loadRoadmapContent();
    loadToolsContent();
    loadProjectsContent();
    loadResourcesContent();
});

function loadRoadmapContent() {
    const container = document.getElementById('roadmap-content');
    container.innerHTML = createRoadmapHTML();
}

function loadToolsContent() {
    const container = document.getElementById('tools-content');
    container.innerHTML = createToolsHTML();
}

function loadProjectsContent() {
    const container = document.getElementById('projects-content');
    container.innerHTML = createProjectsHTML();
}

function loadResourcesContent() {
    const container = document.getElementById('resources-content');
    container.innerHTML = createResourcesHTML();
}

function createRoadmapHTML() {
    return `<section class="section bg-alt" id="yol-haritasi"><div class="container"><h2 class="section-title">Öğrenme Yol Haritası</h2><p class="section-subtitle">Başlangıçtan ileri seviyeye kapsamlı eğitim planı</p><div class="roadmap"><div class="roadmap-phase"><div class="phase-header"><span class="phase-number">1</span><h3>Temel Bilgiler (0-3 Ay)</h3></div><div class="phase-content"><div class="topic-card"><h4><i class="fas fa-graduation-cap"></i> Moleküler Biyoloji</h4><ul><li><strong>DNA:</strong> Nükleotidler, baz çiftleri</li><li><strong>RNA:</strong> mRNA, tRNA, rRNA</li><li><strong>Proteinler:</strong> Amino asitler</li></ul></div></div></div></div></div></section>`;
}

function createToolsHTML() {
    return `<section class="section" id="araclar"><div class="container"><h2 class="section-title">Temel Araçlar</h2></div></section>`;
}

function createProjectsHTML() {
    return `<section class="section bg-alt" id="projeler"><div class="container"><h2 class="section-title">Pratik Projeler</h2></div></section>`;
}

function createResourcesHTML() {
    return `<section class="section" id="kaynaklar"><div class="container"><h2 class="section-title">Kaynaklar</h2></div></section>`;
}
