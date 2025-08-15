  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.client-card').forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) window.location.href = url;
      });
    });
  });