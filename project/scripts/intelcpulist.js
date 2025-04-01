function filterCPU(cpuId) {
    // Logic to filter or highlight the grid items based on the selected CPU type
    console.log(`Filtering for ${cpuId}`);
}

// Automatically highlight the CPU type based on the query parameter
const urlParams = new URLSearchParams(window.location.search);
const cpuId = urlParams.get('cpu');
if (cpuId) {
    filterCPU(cpuId);
}
