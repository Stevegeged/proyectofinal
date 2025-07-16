 document.getElementById('searchBar').addEventListener('input', function() {
    const search = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card-container .card');
    cards.forEach(card => {
      const title = card.querySelector('h2').textContent.toLowerCase();
      if (title.includes(search)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });