let currentFilter = 'all';
let searchQuery = '';
let currentColor = null;

function init() {
    renderColors();
    setupEventListeners();
    updateColorCount();
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderColors();
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.currentTarget;
            const filter = button.dataset.filter;

            filterButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            currentFilter = filter;
            renderColors();
        });
    });
}

function renderColors() {
    const colorsGrid = document.getElementById('colorsGrid');

    const filteredColors = PAINT_COLORS.filter(color => {
        const matchesFilter = currentFilter === 'all' || color.category === currentFilter;
        const matchesSearch = searchQuery === '' ||
            color.name.toLowerCase().includes(searchQuery) ||
            color.code.toLowerCase().includes(searchQuery);

        return matchesFilter && matchesSearch;
    });

    if (filteredColors.length === 0) {
        colorsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Không tìm thấy màu phù hợp</p>
            </div>
        `;
        return;
    }

    colorsGrid.innerHTML = filteredColors.map(color => `
        <div class="color-card" onclick="openColorModal('${color.code}', '${color.name.replace(/'/g, "\\'")}')">
            <div class="color-swatch" style="background-color: ${color.code}"></div>
            <div class="color-info-card">
                <div class="color-name">${color.name}</div>
                <div class="color-code">${color.code}</div>
            </div>
        </div>
    `).join('');
}

function openColorModal(colorCode, colorName) {
    currentColor = { code: colorCode, name: colorName };

    const modal = document.getElementById('colorModal');
    const modalColorPreview = document.getElementById('modalColorPreview');
    const modalColorName = document.getElementById('modalColorName');
    const modalColorCode = document.getElementById('modalColorCode');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const hslValue = document.getElementById('hslValue');

    modalColorPreview.style.backgroundColor = colorCode;
    modalColorName.textContent = colorName;
    modalColorCode.textContent = colorCode;
    hexValue.textContent = colorCode.toUpperCase();

    const rgb = hexToRgb(colorCode);
    rgbValue.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    hslValue.textContent = `hsl(${hsl.h}°, ${hsl.s}%, ${hsl.l}%)`;

    generateHarmonyColors(colorCode);

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('colorModal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function hslToHex(h, s, l) {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }

    const toHex = (n) => {
        const hex = Math.round((n + m) * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function generateHarmonyColors(hexColor) {
    const rgb = hexToRgb(hexColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

    const harmonyColors = [
        hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 60) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l)
    ];

    const harmonyColorsContainer = document.getElementById('harmonyColors');
    harmonyColorsContainer.innerHTML = harmonyColors.map(color => `
        <div class="harmony-color"
             style="background-color: ${color}"
             onclick="copyToClipboard('${color}')"
             title="${color}">
        </div>
    `).join('');
}

function copyColorCode() {
    if (currentColor) {
        copyToClipboard(currentColor.code);
        showNotification(`Đã sao chép ${currentColor.code}`);
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`Đã sao chép ${text}`);
    });
}

function toggleFavorite() {
    showNotification('Tính năng yêu thích đang được phát triển');
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function updateColorCount() {
    const countAll = document.getElementById('countAll');
    countAll.textContent = PAINT_COLORS.length;
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

window.onload = init;