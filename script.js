document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.getElementById('draw-button');
    const loader = document.getElementById('loader');
    const winnerElement = document.getElementById('winner');
    const container = document.querySelector('.container');
    const elementsToHide = Array.from(container.children).filter(
        (child) => child.id !== 'result'
    );

    // Lista de nomes para o sorteio
    const names = ["Isabelle", "Isabelle", "Isabelle", "Isabelle"];

    drawButton.addEventListener('click', () => {
        // Esconder outros elementos da container e mostrar o loader
        elementsToHide.forEach(element => element.style.display = 'none');
        loader.style.display = 'flex';
        winnerElement.style.display = 'none';
        winnerElement.innerHTML = '';

        // Definir um atraso de 3 segundos para exibir o resultado
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * names.length);
            const winner = names[randomIndex];

            // Esconder o loader e mostrar o resultado
            loader.style.display = 'none';
            winnerElement.innerHTML = `O nome sorteado é: <strong>${winner}</strong>`;
            winnerElement.style.display = 'block';

            // Mostrar outros elementos da container
            elementsToHide.forEach(element => {
                element.style.display = 'block';
                element.style.textAlign = 'center';
            });

            drawButton.style.margin = '0 auto'; // Centralizar o botão

            // Redirecionar para o vídeo no YouTube após 2 segundos
            setTimeout(() => {
                window.location.href = 'https://www.youtube.com/watch?v=chwyjJbcs1Y';
            }, 2200); // 2000 milissegundos = 2 segundos
        }, 3000); // 3000 milissegundos = 3 segundos
    });
});
