document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('transition-overlay');
    const triggers = document.querySelectorAll('.trans-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();

            overlay.classList.add('active');

            setTimeout(() => {
                const targetHash = this.getAttribute('href');

                if (targetHash && targetHash.startsWith('#')) {
                    window.location.hash = targetHash;
                    document.querySelector(targetHash).scrollIntoView({ behavior: 'smooth' });
                    
                    setTimeout(() => overlay.classList.remove('active'), 200);
                } else {
                    console.log(`Transitioning to new page: ${this.href}`);
                    setTimeout(() => overlay.classList.remove('active'), 500);
                }
            }, 800);
        });
    });
});