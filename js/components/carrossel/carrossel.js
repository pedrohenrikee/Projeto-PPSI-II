document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.carrossel-wrapper').forEach(wrapper => {
        const carousel = wrapper.querySelector('.carrossel-produtos');
        const prevBtn  = wrapper.querySelector('.btn-anterior');
        const nextBtn  = wrapper.querySelector('.btn-proximo');
        const STEP     = 240;

        function updateButtons() {
            prevBtn.disabled = carousel.scrollLeft <= 0;
            nextBtn.disabled = carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1;
        }

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -STEP, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: STEP, behavior: 'smooth' });
        });

        carousel.addEventListener('scroll', updateButtons, { passive: true });

        updateButtons();
    });
});