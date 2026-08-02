document.addEventListener('DOMContentLoaded', () => {
    const revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('in-view'));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        revealEls.forEach(el => observer.observe(el));
    }

    // Experience stepper: highlight the step matching the job in view,
    // and let clicking a step scroll to that job.
    const steps = document.querySelectorAll('.exp-stepper .step');
    if (!steps.length) return;

    steps.forEach(step => {
        step.addEventListener('click', () => {
            const target = document.getElementById(step.dataset.target);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    if ('IntersectionObserver' in window) {
        const jobObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    steps.forEach(s => s.classList.toggle('active', s.dataset.target === entry.target.id));
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.job').forEach(job => jobObserver.observe(job));
    }
});
