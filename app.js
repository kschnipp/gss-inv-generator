const fields = ['name', 'email', 'notes'];

// Load saved values
window.addEventListener('DOMContentLoaded', () => {
  fields.forEach(field => {
    const saved = localStorage.getItem(field);
    if (saved) document.getElementById(field).value = saved;
  });
});

function saveForm() {
  fields.forEach(field => {
    const value = document.getElementById(field).value;
    localStorage.setItem(field, value);
  });
  alert("Form saved locally.");
}

function printForm() {
  window.print();
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.error('Service Worker registration failed:', err));
}
