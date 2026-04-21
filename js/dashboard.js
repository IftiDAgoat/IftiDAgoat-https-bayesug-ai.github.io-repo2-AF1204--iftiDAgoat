let stockChart = null;

window.updateDashboard = () => {
    const canvas = document.getElementById('stockChart');
    if (!canvas) return;

    // Check if the canvas is visible
    if (document.getElementById('projects').style.display === 'none') return;

    const ctx = canvas.getContext('2d');

    // Data corresponding to the image (Jan to Jun)
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const data = [2000, 4500, 5200, 8500, 10200, 11500]; // Simulated values

    if (stockChart) {
        stockChart.destroy();
    }

    const lineColor = '#2563eb'; // blue
    const bgColor = 'rgba(37, 99, 235, 0.1)'; // light blue

    stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Portfolio Value',
                data: data,
                borderColor: lineColor,
                backgroundColor: bgColor,
                borderWidth: 2,
                fill: true,
                pointBackgroundColor: lineColor,
                pointBorderColor: '#ffffff',
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleFont: { family: 'Inter' },
                    bodyFont: { family: 'Inter' },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString('en-GB');
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { font: { family: 'Inter' } }
                },
                y: {
                    min: 0,
                    max: 12000,
                    ticks: {
                        stepSize: 2000,
                        font: { family: 'Inter' }
                    },
                    grid: { color: '#e2e8f0', borderDash: [5, 5] }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });
};

// Initial load (won't render chart until tab is opened due to visibility check)
document.addEventListener('DOMContentLoaded', () => {
    // Use timeout to ensure DOM is fully ready
    setTimeout(() => {
        window.updateDashboard();
    }, 100);
});
