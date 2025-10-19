/* app.js - landing page behavior and navigation helpers
   Teaching-focused JavaScript: clear, commented, and simple.
   Responsibilities:
   - Attach click handlers for the primary CTA buttons
   - Provide small helpers for client-side navigation
   - Show how to add simple form validation (used later)
*/

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Buttons on the landing page
  const joinClient = document.getElementById('join-client');
  const joinProvider = document.getElementById('join-provider');

  if (joinClient) {
    joinClient.addEventListener('click', function (e) {
      // We intentionally use JS navigation so you learn both link and script ways
      e.preventDefault();
      // Navigate to the client sign up page
      window.location.href = 'client-signup.html';
    });
  }

  if (joinProvider) {
    joinProvider.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = 'provider-signup.html';
    });
  }

  // Example: intercept all internal anchor links and log (teaching)
  document.body.addEventListener('click', function (e) {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    // Only log internal navigation (for learning) -- not required for production
    if (href && href.endsWith('.html')) {
      // Simple client-side router hook: you could extend this into an SPA later
      console.log('Navigating to:', href);
    }
  });
});

/* Small helper: simple client-side form validator (used on signup pages)
   - fields: an array of { el: HTMLInputElement, name: 'Email' }
   - returns: { ok: boolean, errors: Array }
*/
function validateRequired(fields) {
  const errors = [];
  fields.forEach((f) => {
    if (!f.el || !f.el.value || f.el.value.trim() === '') {
      errors.push(`${f.name} is required`);
    }
  });
  return { ok: errors.length === 0, errors };
}

// Export helpers for dev console testing
window.Waasha = {
  validateRequired,
};
