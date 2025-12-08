const themeToggle = document.getElementById('theme-toggle');
const scrollTopBtn = document.getElementById('scroll-top');

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
        localStorage.setItem('togetherly-theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('togetherly-theme', 'light');
    }
}

function initTheme() {
    const saved = localStorage.getItem('togetherly-theme') || 'light';
    applyTheme(saved);
    if (themeToggle) {
        themeToggle.textContent = saved === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark');
        const next = isDark ? 'light' : 'dark';
        applyTheme(next);
        themeToggle.textContent = next === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
}

function checkScroll() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

if (scrollTopBtn) {
    window.addEventListener('scroll', checkScroll);
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', initTheme);
