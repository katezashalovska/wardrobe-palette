document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('get-early-access');
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfPYixWtCq7nwhCKRU1VLV-zbjmQbir7H6alLXnwWST77Je6w/viewform?usp=header';

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.open(googleFormUrl, '_blank');
        });
    }
});
