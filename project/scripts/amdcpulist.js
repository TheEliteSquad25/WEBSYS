function filterCPU(category) {
    // Hide all items
    const allItems = document.querySelectorAll('.grid-item');
    allItems.forEach(item => item.style.display = 'none');

    // Show items of the selected category
    const categoryItems = document.querySelectorAll(`.${category}`);
    categoryItems.forEach(item => item.style.display = 'block');
}

// Automatically highlight the CPU type based on the query parameter
const urlParams = new URLSearchParams(window.location.search);
const cpuId = urlParams.get('cpu');
if (cpuId) {
    filterCPU(cpuId);
}
