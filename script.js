document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay');
    const triggers = document.querySelectorAll('.trans-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.classList.add('active');
            setTimeout(() => {
                overlay.classList.remove('active');
            }, 1200);
        });
    });
});
