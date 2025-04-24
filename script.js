// DOM ready function
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements we need
    const selectors = {
        form: '.dm-slide',
        // Simplified selectors since we're using CSS for most effects
    };
    
    // Text animation and X pattern now handled by CSS
    
    // main setup function for events and effects
    function setup() {
        // Form handling - keep this in JS since it requires interaction logic
        const form = document.querySelector(selectors.form);
        if (form) {
            form.addEventListener('submit', e => {
                e.preventDefault();
                
                // get values
                const name = form.querySelector('#name').value.trim();
                const email = form.querySelector('#email').value.trim();
                const msg = form.querySelector('#message').value.trim();
                
                // basic validation
                if (!name || !email || !msg) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // TODO: add actual form processing instead of alert
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            });
        }
    };
    
    // Only initialize the form handling
    setup();
});