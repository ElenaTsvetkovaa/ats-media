
document.addEventListener('DOMContentLoaded', loadLogos);

async function loadLogos() {
    try {
        const response = await fetch('assets/js/brands.json');
        const data = await response.json();

        populateRow('row1', data.row1);
        populateRow('row2', data.row2);
        populateRow('row3', data.row3);
    } catch (e) {
        console.error('Failed to load logos:', e);
    }
}

function createLogoCard(src, alt) {
    const card = document.createElement('div');
    card.className = 'logo-card';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.loading = 'lazy';

    card.appendChild(img);
    return card;
}

function populateRow(rowID, logos) {
    const row = document.getElementById(rowID);
    const duplicatedLogos = [...logos, ...logos];

    duplicatedLogos.forEach(l => {
        const card = createLogoCard(l.src, l.alt);
        row.appendChild(card);
    })
}