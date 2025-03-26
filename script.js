// Smooth Scroll functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get all links that point to internal sections (href="#id")
    const links = document.querySelectorAll('a[href^="#"]');
    
    // If no internal links are found, log a message
    if (links.length === 0) {
        console.log("No internal links (href='#') found on the page.");
        return;  // Exit if no links
    }

    // Attach the smooth scroll event to each link
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();  // Prevent default behavior of link (no jumping)

            // Extract the target element ID from href (e.g., href="#section2" -> "section2")
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);

            // Check if target element exists
            if (target) {
                // Perform smooth scroll to the target element
                target.scrollIntoView({
                    behavior: "smooth",  // Smooth scrolling
                    block: "start"       // Align the target element to the top of the viewport
                });

                // Log a message for debugging
                console.log(`Scrolling to ${targetId}`);
            } else {
                // Inform the user if the target element was not found
                console.error(`Element with ID "${targetId}" not found.`);
            }
        });
    });
});
