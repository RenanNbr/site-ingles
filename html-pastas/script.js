const options = document.querySelectorAll('button');
const result = document.getElementById('result');

options.forEach((option) => {
  option.addEventListener('click', (e) => {
    const correctAnswer = 'apple'; // Substitua com a resposta certa
    if (e.target.textContent === correctAnswer) {
      result.textContent = 'Parabéns! Você acertou!';
    } else {
      result.textContent = 'Erro! Tente novamente.';
    }
  });
});