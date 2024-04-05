document.addEventListener('DOMContentLoaded', () => {
    const readMoreBtn = document.getElementById('read-more');
    const moreAboutMe = document.getElementById('more-about-me');

    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default action of the anchor tag
        
        // Determine if the content is visible
        const isExpanded = moreAboutMe.style.maxHeight !== '0px';
        
        // Toggle the max-height and opacity based on current state
        if (isExpanded) {
            moreAboutMe.style.maxHeight = '0';
            moreAboutMe.style.opacity = '0';
            readMoreBtn.textContent = 'Read More';
        } else {
            // Estimate or set a fixed max-height that can contain your content
            moreAboutMe.style.maxHeight = '500px'; // Adjust this value based on your content's needs
            moreAboutMe.style.opacity = '1';
            readMoreBtn.textContent = 'Read Less';
        }
    });
});
