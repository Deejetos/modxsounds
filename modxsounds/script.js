// Navegação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Evita o comportamento padrão do link
      const targetId = this.getAttribute('href').substring(1); // Pega o id da seção
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
      }
    });
  });
  