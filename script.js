<script>
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
</script>
chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('send-message').click();
    }
});

