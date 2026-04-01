document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-expand');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o card pai EXCLUSIVO deste botão
            const card = this.closest('.spec-card');
            
            // Alterna a classe apenas no card clicado
            card.classList.toggle('expanded');

            // Muda o texto do botão clicado
            if (card.classList.contains('expanded')) {
                this.textContent = 'FECHAR';
            } else {
                this.textContent = 'DETALHES';
            }
        });
    });
});