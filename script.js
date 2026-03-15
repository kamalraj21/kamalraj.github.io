// script.js
function showPopup(id) {
    var popups = document.querySelectorAll('.skill-popup');
    popups.forEach(function(popup) {
        popup.classList.remove('show-popup');
    });

    var element = document.getElementById(id);
    if (element) {
        element.classList.add('show-popup');
        var overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.style.display = 'block';
            setTimeout(() => { overlay.classList.add('show'); }, 10);
        }
    }
}

function closePopup() {
    var popups = document.querySelectorAll('.skill-popup');
    popups.forEach(function(popup) {
        popup.classList.remove('show-popup');
    });
    var overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.classList.remove('show');
        setTimeout(() => { overlay.style.display = 'none'; }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const rootElement = document.documentElement;

    // Apply exact initial theme on load to prevent flicker
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        rootElement.setAttribute('data-theme', currentTheme);
    }

    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');

        // Set initial icon based on theme
        if (themeIcon) {
            themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        themeToggleBtn.addEventListener('click', () => {
            let theme = rootElement.getAttribute('data-theme');
            if (theme === 'dark') {
                rootElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (themeIcon) themeIcon.className = 'fas fa-moon';
            } else {
                rootElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) themeIcon.className = 'fas fa-sun';
            }
        });
    }

    // Portfolio Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
});
