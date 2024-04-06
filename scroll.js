document.addEventListener('DOMContentLoaded', () => {
    const timelineDots = document.querySelectorAll('.timeline-dot');

    const magnifyDots = () => {
        const screenMiddle = window.innerHeight / 2;
        let closestDot = null;
        let closestDistance = Infinity;

        // First, reset all dots to their original size
        timelineDots.forEach(dot => {
            dot.style.transform = `scale(1)`;
        });

        // Then, find the dot closest to the center
        timelineDots.forEach(dot => {
            const rect = dot.getBoundingClientRect();
            const dotCenter = rect.top + rect.height / 2;
            const distanceFromMiddle = Math.abs(dotCenter - screenMiddle);

            if (distanceFromMiddle < closestDistance) {
                closestDistance = distanceFromMiddle;
                closestDot = dot;
            }
        });

        // Apply a more significant magnification to the closest dot, if any
        if (closestDot) {
            const scale = calculateScale(closestDistance, screenMiddle);
            closestDot.style.transform = `scale(${scale})`;
        }
    };

    // Function to calculate scale based on distance
    function calculateScale(distance, screenMiddle) {
        let scale = 1 - Math.min(distance / screenMiddle, 1);
        scale = 1 + scale * 1; // Adjust the multiplier for desired effect
        return scale;
    }

    // Run magnifyDots on scroll and initially
    window.addEventListener('scroll', magnifyDots);
    magnifyDots();
});
