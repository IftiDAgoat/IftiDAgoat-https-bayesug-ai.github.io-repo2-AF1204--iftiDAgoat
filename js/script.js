// Dataset - FTSE 50 Companies
const dataset = [
    // Healthcare
    { company: "AstraZeneca", sector: "healthcare", z_score: 32.5, cost_of_debt: 3.2, market_cap: 190 },
    { company: "GSK", sector: "healthcare", z_score: 28.8, cost_of_debt: 4.1, market_cap: 70 },
    { company: "Haleon", sector: "healthcare", z_score: 19.9, cost_of_debt: 5.5, market_cap: 30 },
    { company: "Smith & Nephew", sector: "healthcare", z_score: 22.2, cost_of_debt: 4.8, market_cap: 10 },
    
    // Energy
    { company: "Shell", sector: "energy", z_score: 15.5, cost_of_debt: 4.5, market_cap: 180 },
    { company: "BP", sector: "energy", z_score: 8.8, cost_of_debt: 5.2, market_cap: 90 },
    
    // Consumer Defensive
    { company: "Unilever", sector: "consumer-defensive", z_score: 42.2, cost_of_debt: 2.8, market_cap: 110 },
    { company: "Diageo", sector: "consumer-defensive", z_score: 31.1, cost_of_debt: 3.5, market_cap: 75 },
    { company: "British American Tobacco", sector: "consumer-defensive", z_score: 5.5, cost_of_debt: 6.8, market_cap: 60 },
    { company: "Reckitt Benckiser", sector: "consumer-defensive", z_score: 29.9, cost_of_debt: 3.1, market_cap: 45 },
    { company: "Tesco", sector: "consumer-defensive", z_score: 18.8, cost_of_debt: 4.2, market_cap: 25 },
    { company: "Imperial Brands", sector: "consumer-defensive", z_score: 3.2, cost_of_debt: 7.5, market_cap: 20 },
    
    // Basic Materials
    { company: "Glencore", sector: "basic-materials", z_score: 9.9, cost_of_debt: 6.1, market_cap: 60 },
    { company: "Rio Tinto", sector: "basic-materials", z_score: 25.5, cost_of_debt: 4.2, market_cap: 85 },
    { company: "Anglo American", sector: "basic-materials", z_score: 12.2, cost_of_debt: 5.8, market_cap: 35 },
    { company: "Antofagasta", sector: "basic-materials", z_score: 31.1, cost_of_debt: 3.9, market_cap: 20 },
    { company: "Croda International", sector: "basic-materials", z_score: 45.5, cost_of_debt: 2.5, market_cap: 8 },
    
    // Financial Services
    { company: "HSBC", sector: "financial-services", z_score: 15.5, cost_of_debt: 4.8, market_cap: 130 },
    { company: "Lloyds Banking Group", sector: "financial-services", z_score: 8.8, cost_of_debt: 5.5, market_cap: 35 },
    { company: "Barclays", sector: "financial-services", z_score: 5.5, cost_of_debt: 6.2, market_cap: 30 },
    { company: "NatWest Group", sector: "financial-services", z_score: 11.1, cost_of_debt: 5.1, market_cap: 25 },
    { company: "Standard Chartered", sector: "financial-services", z_score: 6.6, cost_of_debt: 6.5, market_cap: 20 },
    { company: "London Stock Exchange", sector: "financial-services", z_score: 38.8, cost_of_debt: 2.9, market_cap: 50 },
    { company: "Prudential", sector: "financial-services", z_score: 18.8, cost_of_debt: 4.5, market_cap: 22 },
    { company: "Aviva", sector: "financial-services", z_score: 14.4, cost_of_debt: 4.9, market_cap: 15 },
    { company: "Legal & General", sector: "financial-services", z_score: 12.2, cost_of_debt: 5.2, market_cap: 18 },
    { company: "Schroders", sector: "financial-services", z_score: 28.8, cost_of_debt: 3.5, market_cap: 8 },
    
    // Industrials
    { company: "RELX", sector: "industrials", z_score: 48.8, cost_of_debt: 2.4, market_cap: 65 },
    { company: "BAE Systems", sector: "industrials", z_score: 32.2, cost_of_debt: 3.8, market_cap: 40 },
    { company: "Rolls-Royce", sector: "industrials", z_score: 4.4, cost_of_debt: 8.5, market_cap: 30 },
    { company: "Ashtead Group", sector: "industrials", z_score: 25.5, cost_of_debt: 4.5, market_cap: 28 },
    { company: "Experian", sector: "industrials", z_score: 45.5, cost_of_debt: 2.8, market_cap: 35 },
    { company: "Rentokil Initial", sector: "industrials", z_score: 19.9, cost_of_debt: 5.1, market_cap: 12 },
    { company: "Intertek Group", sector: "industrials", z_score: 35.5, cost_of_debt: 3.2, market_cap: 10 },
    
    // Utilities
    { company: "National Grid", sector: "utilities", z_score: 8.8, cost_of_debt: 5.8, market_cap: 40 },
    { company: "SSE", sector: "utilities", z_score: 11.1, cost_of_debt: 5.2, market_cap: 20 },
    { company: "Centrica", sector: "utilities", z_score: 15.5, cost_of_debt: 4.8, market_cap: 10 },
    { company: "United Utilities", sector: "utilities", z_score: 5.5, cost_of_debt: 6.5, market_cap: 8 },
    
    // Consumer Cyclical
    { company: "Compass Group", sector: "consumer-cyclical", z_score: 28.8, cost_of_debt: 3.9, market_cap: 40 },
    { company: "InterContinental Hotels", sector: "consumer-cyclical", z_score: 22.2, cost_of_debt: 4.5, market_cap: 15 },
    { company: "Next", sector: "consumer-cyclical", z_score: 35.5, cost_of_debt: 3.2, market_cap: 12 },
    { company: "Whitbread", sector: "consumer-cyclical", z_score: 18.8, cost_of_debt: 5.1, market_cap: 8 },
    { company: "Burberry", sector: "consumer-cyclical", z_score: 29.9, cost_of_debt: 4.1, market_cap: 6 },
    
    // Communication Services
    { company: "Vodafone", sector: "communication-services", z_score: 1.5, cost_of_debt: 7.8, market_cap: 20 },
    { company: "BT Group", sector: "communication-services", z_score: 4.4, cost_of_debt: 6.5, market_cap: 12 },
    { company: "WPP", sector: "communication-services", z_score: 15.5, cost_of_debt: 5.2, market_cap: 9 },
    { company: "Auto Trader", sector: "communication-services", z_score: 42.5, cost_of_debt: 2.1, market_cap: 8 },
    { company: "Rightmove", sector: "communication-services", z_score: 48.2, cost_of_debt: 1.8, market_cap: 5 },
    
    // Technology
    { company: "Sage Group", sector: "technology", z_score: 48.8, cost_of_debt: 2.5, market_cap: 12 },
    { company: "Halma", sector: "technology", z_score: 49.1, cost_of_debt: 2.2, market_cap: 10 },
    
    // Real Estate
    { company: "Segro", sector: "real-estate", z_score: 25.5, cost_of_debt: 4.2, market_cap: 12 },
    { company: "Land Securities", sector: "real-estate", z_score: 11.1, cost_of_debt: 5.8, market_cap: 6 },
    { company: "British Land", sector: "real-estate", z_score: 8.8, cost_of_debt: 6.2, market_cap: 4 }
];

const sectorColors = {
    'consumer-defensive': '#6366f1',
    'consumer-cyclical': '#f87171',
    'communication-services': '#34d399',
    'basic-materials': '#a78bfa',
    'energy': '#fcd34d',
    'financial-services': '#3b82f6',
    'healthcare': '#ec4899',
    'industrials': '#8b5cf6',
    'real-estate': '#14b8a6',
    'technology': '#f97316',
    'utilities': '#06b6d4'
};

const allSectors = Object.keys(sectorColors);
let selectedSectors = new Set(allSectors);
let minMarketCap = 0;

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initMultiSelect();
    initFilterLogic();
    
    setTimeout(() => {
        renderScatterChart();
        renderMap();
    }, 100);
});

// --- Tab Logic ---
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            
            if (targetId === 'projects') {
                Plotly.relayout('scatterChart', { autosize: true });
            } else if (targetId === 'interests') {
                Plotly.relayout('worldMap', { autosize: true });
            }
        });
    });
}

// --- Multi-Select Logic (Replacing <select>) ---
function initMultiSelect() {
    const originalSelect = document.getElementById('sectorFilter');
    if (!originalSelect) return;
    
    // We create a custom UI element that matches the design but preserves the original layout spacing
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block';
    wrapper.style.width = '100%';
    
    const displayBox = document.createElement('div');
    displayBox.className = 'dropdown';
    displayBox.style.cursor = 'pointer';
    displayBox.style.display = 'flex';
    displayBox.style.justifyContent = 'space-between';
    displayBox.style.alignItems = 'center';
    
    const textSpan = document.createElement('span');
    textSpan.innerText = `${selectedSectors.size} selected`;
    
    const arrowSpan = document.createElement('span');
    arrowSpan.innerHTML = '&#9662;'; // Down arrow
    
    displayBox.appendChild(textSpan);
    displayBox.appendChild(arrowSpan);
    
    const dropdownMenu = document.createElement('div');
    dropdownMenu.style.display = 'none';
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.top = '100%';
    dropdownMenu.style.left = '0';
    dropdownMenu.style.width = '100%';
    dropdownMenu.style.backgroundColor = 'white';
    dropdownMenu.style.border = '1px solid #e2e8f0';
    dropdownMenu.style.borderRadius = '4px';
    dropdownMenu.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    dropdownMenu.style.zIndex = '1000';
    dropdownMenu.style.maxHeight = '200px';
    dropdownMenu.style.overflowY = 'auto';
    dropdownMenu.style.marginTop = '4px';
    
    const renderMenu = () => {
        dropdownMenu.innerHTML = '';
        
        const selectAllDiv = document.createElement('div');
        selectAllDiv.style.padding = '8px 12px';
        selectAllDiv.style.cursor = 'pointer';
        selectAllDiv.style.borderBottom = '1px solid #e2e8f0';
        selectAllDiv.innerText = selectedSectors.size === allSectors.length ? 'Deselect all' : 'Select all';
        selectAllDiv.style.color = '#3b82f6';
        
        selectAllDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            if (selectedSectors.size === allSectors.length) {
                selectedSectors.clear();
            } else {
                selectedSectors = new Set(allSectors);
            }
            updateChart();
            textSpan.innerText = `${selectedSectors.size} selected`;
            renderMenu();
        });
        dropdownMenu.appendChild(selectAllDiv);
        
        allSectors.forEach(sector => {
            const item = document.createElement('div');
            item.style.padding = '8px 12px';
            item.style.cursor = 'pointer';
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = selectedSectors.has(sector);
            checkbox.style.marginRight = '8px';
            checkbox.style.pointerEvents = 'none'; // let the div handle the click
            
            const label = document.createElement('span');
            label.innerText = sector;
            
            item.appendChild(checkbox);
            item.appendChild(label);
            
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                if (selectedSectors.has(sector)) {
                    selectedSectors.delete(sector);
                } else {
                    selectedSectors.add(sector);
                }
                updateChart();
                textSpan.innerText = `${selectedSectors.size} selected`;
                renderMenu();
            });
            
            item.addEventListener('mouseover', () => item.style.backgroundColor = '#f1f5f9');
            item.addEventListener('mouseout', () => item.style.backgroundColor = 'transparent');
            
            dropdownMenu.appendChild(item);
        });
    };
    
    displayBox.addEventListener('click', () => {
        const isHidden = dropdownMenu.style.display === 'none';
        dropdownMenu.style.display = isHidden ? 'block' : 'none';
        if (isHidden) renderMenu();
    });
    
    document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
    
    wrapper.appendChild(displayBox);
    wrapper.appendChild(dropdownMenu);
    
    originalSelect.parentNode.replaceChild(wrapper, originalSelect);
    renderMenu();
}

function initFilterLogic() {
    const slider = document.getElementById('marketCapSlider');
    const displayValue = document.getElementById('marketCapValue');

    if (slider) {
        minMarketCap = parseInt(slider.value);
        slider.addEventListener('input', (e) => {
            minMarketCap = parseInt(e.target.value);
            displayValue.textContent = minMarketCap;
            updateChart();
        });
    }
}

// --- Scatter Chart Logic ---
function updateChart() {
    const container = document.getElementById('scatterChart');
    if (!container) return;

    // Filter logic
    const filteredData = dataset.filter(d => 
        selectedSectors.has(d.sector) && d.market_cap >= minMarketCap
    );

    const traces = [];
    const grouped = {};
    
    filteredData.forEach(d => {
        if (!grouped[d.sector]) grouped[d.sector] = { x: [], y: [], text: [], size: [] };
        grouped[d.sector].x.push(d.z_score);
        grouped[d.sector].y.push(d.cost_of_debt);
        grouped[d.sector].text.push(`${d.company} (Cap: $${d.market_cap}B)`);
        grouped[d.sector].size.push(Math.sqrt(d.market_cap) * 1.5); // size scaling for bubble
    });

    // Plotly react handles trace colors well if we explicitly define them.
    Object.keys(grouped).forEach(sector => {
        traces.push({
            x: grouped[sector].x,
            y: grouped[sector].y,
            text: grouped[sector].text,
            mode: 'markers',
            type: 'scatter',
            name: sector,
            marker: { 
                size: grouped[sector].size,
                color: sectorColors[sector] || '#888',
                opacity: 0.7,
                line: { color: 'white', width: 1 }
            }
        });
    });

    Plotly.react('scatterChart', traces, getChartLayout());
}

function getChartLayout() {
    return {
        title: '',
        margin: { t: 20, r: 20, b: 50, l: 60 },
        xaxis: { 
            title: 'Altman Z-Score (lagged)',
            range: [0, 50],
            dtick: 10
        },
        yaxis: { 
            title: 'Avg. Cost of Debt (%)',
            range: [0, 14],
            dtick: 2
        },
        shapes: [
            { type: 'line', x0: 1.8, y0: 0, x1: 1.8, y1: 14, line: { color: '#ef4444', width: 2, dash: 'dash' } },
            { type: 'line', x0: 3.0, y0: 0, x1: 3.0, y1: 14, line: { color: '#10b981', width: 2, dash: 'dash' } }
        ],
        annotations: [
            { x: 1.8, y: 13.5, xref: 'x', yref: 'y', text: 'Distress Zone', showarrow: false, font: { color: '#ef4444' } },
            { x: 3.0, y: 13.5, xref: 'x', yref: 'y', text: 'Safe Zone', showarrow: false, font: { color: '#10b981' } }
        ],
        legend: { x: 1.02, y: 0.5, xanchor: 'left', yanchor: 'middle' },
        font: { family: 'Inter, sans-serif' },
        hovermode: 'closest',
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };
}

function renderScatterChart() {
    // Initial draw
    updateChart();
}

// --- Map Logic ---
function renderMap() {
    const container = document.getElementById('worldMap');
    if (!container) return;

    const traces = [
        { type: 'scattergeo', mode: 'markers', text: ['London', 'Paris', 'Rome'], lon: [-0.12, 2.35, 12.49], lat: [51.5, 48.85, 41.9], name: '2021', marker: { size: 8, color: '#3b82f6' } },
        { type: 'scattergeo', mode: 'markers', text: ['New York', 'Toronto', 'Chicago'], lon: [-74.0, -79.38, -87.62], lat: [40.71, 43.65, 41.87], name: '2022', marker: { size: 8, color: '#f97316' } },
        { type: 'scattergeo', mode: 'markers', text: ['Tokyo', 'Seoul', 'Singapore'], lon: [139.69, 126.97, 103.81], lat: [35.68, 37.56, 1.35], name: '2023', marker: { size: 8, color: '#10b981' } },
        { type: 'scattergeo', mode: 'markers', text: ['Rio de Janeiro', 'Cape Town'], lon: [-43.17, 18.42], lat: [-22.9, -33.92], name: '2024', marker: { size: 8, color: '#ef4444' } }
    ];

    const layout = {
        margin: { t: 10, r: 10, b: 10, l: 10 },
        geo: {
            showcoastlines: true, coastlinecolor: '#e5e7eb', showland: true, landcolor: '#f9fafb',
            showocean: true, oceancolor: '#ebf8ff', showlakes: true, lakecolor: '#ebf8ff',
            showcountries: true, countrycolor: '#e5e7eb', projection: { type: 'natural earth' }
        },
        legend: { x: 1, y: 0.5, xanchor: 'left', yanchor: 'middle' },
        font: { family: 'Inter, sans-serif' }
    };

    Plotly.newPlot('worldMap', traces, layout, {responsive: true});
}
