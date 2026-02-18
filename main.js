
const generateBtn = document.getElementById('generate-btn');
const numberDivs = document.querySelectorAll('.number');

generateBtn.addEventListener('click', () => {
    const lottoNumbers = new Set();
    while (lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const numbersArray = Array.from(lottoNumbers).sort((a, b) => a - b);
    numberDivs.forEach((div, index) => {
        div.textContent = numbersArray[index];
        // Add color based on number range
        if (numbersArray[index] <= 10) {
            div.style.backgroundColor = '#f9e45b'; // Yellow
        } else if (numbersArray[index] <= 20) {
            div.style.backgroundColor = '#58b7e2'; // Blue
        } else if (numbersArray[index] <= 30) {
            div.style.backgroundColor = '#dc635f'; // Red
        } else if (numbersArray[index] <= 40) {
            div.style.backgroundColor = '#888888'; // Gray
        } else {
            div.style.backgroundColor = '#64c890'; // Green
        }
    });
});
