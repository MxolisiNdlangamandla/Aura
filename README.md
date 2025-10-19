WAASHA — Learning project manual
===============================

Overview
--------
This repository is a teaching scaffold for a small web app called WAASHA.
You asked for code samples for a landing page, client sign-up, provider sign-up,
and a login page — plus a clear manual explaining how to link pages and
use HTML, CSS, and JavaScript with Bootstrap.

Files included (so far)
-----------------------
- index.html           — Landing page (Bootstrap + custom CSS + app.js)
- css/styles.css       — Project styles and overrides
- js/app.js            — Landing page JavaScript helpers and navigation
- assets/              — images and other static assets (you add these)

Planned next files (you will create manually using the templates below)
--------------------------------------------------------------------
- client-signup.html
- provider-signup.html
- login.html
- client-dashboard.html
- provider-dashboard.html

How the pages link together
---------------------------
- Use standard <a href="..."> links for navigation (works without JS).
- We add JavaScript to handle clicks for enhanced behavior. Example:
  - The landing page buttons call `window.location.href = 'client-signup.html'`.

Using Bootstrap
---------------
I included Bootstrap via CDN in `index.html` to keep setup simple while you're
learning. When you move to production, prefer installing Bootstrap via npm and
building with a bundler.

Example CDN includes (already in `index.html`):

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

Note: the integrity attributes are placeholders. For learning, CDN without SRI
is fine, but when you publish, include correct integrity attributes.

Templates you can copy and create (step-by-step)
-----------------------------------------------
1) client-signup.html (create in project root)
   - Purpose: allow clients to create accounts.
   - Keep form fields: first name, last name, email, phone, password, submit.
   - Add client-side validation using the `validateRequired` helper in `js/app.js`.
   - On successful (fake) signup redirect to `client-dashboard.html`.

2) provider-signup.html
   - Similar to client signup but add fields for: service type, license/id
   - On successful (fake) signup redirect to `provider-dashboard.html`.

3) login.html
   - Include email and password fields.
   - Validate, then redirect to either `client-dashboard.html` or `provider-dashboard.html`.
   - For now, implement simple logic (if email contains "provider" go to provider dashboard.)

4) Dashboards
   - Keep placeholders for now. Add a "Log out" button that returns to `index.html`.

Good practices and teaching notes
---------------------------------
- Structure: keep files small and focused (one responsibility per file).
- Accessibility: always add `alt` to images, use semantic tags (nav, main, header, footer),
  and ensure keyboard focus is visible.
- Forms: use `label` elements associated with inputs via `for` and `id`.
- Validation: perform client-side validation for UX, always re-check on server in production.
- Security: never store plaintext passwords; use HTTPS and server-side hashing.
- Version control: use git from day one and write useful commits.
- Clean code: name variables and functions clearly, keep functions small, comment non-obvious logic.

How to test locally
-------------------
You can open `index.html` directly in a browser, but a small local server is
recommended to avoid mixed-content problems or CORS when you expand.

Using Python (if installed):

```powershell
# run from project root (Windows PowerShell)
python -m http.server 5500
# then open http://localhost:5500 in your browser
```

Or use VS Code Live Server extension — it automatically serves files.

What I changed and why (delta)
------------------------------
- Replaced the previous example pages with a clean, teaching-focused landing
  `index.html` that uses Bootstrap and a small `app.js` demonstrating navigation
  and helper functions.
- Fixed and simplified `css/styles.css` to avoid nested rules and keep
  overrides minimal.

Next steps for you (practical exercise)
---------------------------------------
1. Create `client-signup.html` by copying one of the templates above.
2. Implement the form and call `Waasha.validateRequired` on submit.
3. Create `provider-signup.html` and add provider-specific fields.
4. Create `login.html` and implement simple redirect logic.
5. Build the dashboards and connect navigation between them.

If you want, I can now generate the complete templates for `client-signup.html`,
`provider-signup.html`, `login.html`, `client-dashboard.html` and
`provider-dashboard.html` with commented code so you can study and modify them.

Happy learning — tell me which file you'd like me to add next and I will
create it with clear comments and exercises.
