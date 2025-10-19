/* pages.js - page-specific logic for sign-up and login pages
   This file uses the helper validateRequired from app.js and demonstrates
   small client-side validation and navigation logic useful for learning.
*/

document.addEventListener('DOMContentLoaded', function(){
  const page = document.body.getAttribute('data-page');

  if(page === 'client-signup'){
    const form = document.getElementById('client-signup-form');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fields = [
        { el: document.getElementById('firstName'), name: 'First name' },
        { el: document.getElementById('lastName'), name: 'Last name' },
        { el: document.getElementById('email'), name: 'Email' },
        { el: document.getElementById('password'), name: 'Password' }
      ];
      const result = window.Waasha.validateRequired(fields);
      if(!result.ok){
        alert(result.errors.join('\n'));
        return;
      }
      // Fake signup success — in a real app you'd POST to the server
      window.location.href = 'client-dashboard.html';
    });
  }

  if(page === 'provider-signup'){
    const form = document.getElementById('provider-signup-form');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fields = [
        { el: document.getElementById('pFirstName'), name: 'First name' },
        { el: document.getElementById('pLastName'), name: 'Last name' },
        { el: document.getElementById('pEmail'), name: 'Email' },
        { el: document.getElementById('serviceType'), name: 'Service type' },
        { el: document.getElementById('pPassword'), name: 'Password' }
      ];
      const result = window.Waasha.validateRequired(fields);
      if(!result.ok){
        alert(result.errors.join('\n'));
        return;
      }
      window.location.href = 'provider-dashboard.html';
    });
  }

  if(page === 'login'){
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('loginEmail').value || '';
      // Simple fake logic for learning: if email contains "provider" send to provider dashboard
      if(email.toLowerCase().includes('provider')){
        window.location.href = 'provider-dashboard.html';
      } else {
        window.location.href = 'client-dashboard.html';
      }
    });
  }
});
