import { supabase } from './supabase.js';

const form = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

function showMessage(message, isError = false) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${isError ? 'error' : 'success'} show`;

  setTimeout(() => {
    formMessage.classList.remove('show');
  }, 5000);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = 'Inscribiendo...';

  const formData = {
    child_name: document.getElementById('childName').value.trim(),
    age: parseInt(document.getElementById('age').value),
    parent_name: document.getElementById('parentName').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    special_requirements: document.getElementById('specialRequirements').value.trim()
  };

  try {
    const { data, error } = await supabase
      .from('workshop_registrations')
      .insert([formData])
      .select();

    if (error) throw error;

    showMessage('¡Inscripción exitosa! Nos pondremos en contacto pronto con más detalles.');
    form.reset();

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);

  } catch (error) {
    console.error('Registration error:', error);
    showMessage('La inscripción falló. Por favor intenta nuevamente o contáctanos directamente.', true);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .schedule-card, .testimonial-card').forEach(el => {
  observer.observe(el);
});
