function showLandingPage(cpuId) {
    // Hide the initial boxes
    document.querySelector('.cpu-intel-boxes').classList.add('hidden');
    document.querySelector('.cpu-intel-title').classList.add('hidden');

    // Show the landing page
    document.querySelector('.landing-page').classList.remove('hidden');
}
