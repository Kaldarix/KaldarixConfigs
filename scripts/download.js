document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const fileUrl = btn.href;
      const redirectUrl = btn.dataset.redirect;

      // Triggers download
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = '';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      // Redirects after download starts
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 100);
    });
  });
});
