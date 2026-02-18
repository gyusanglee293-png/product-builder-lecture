const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const numberDivs = document.querySelectorAll('.number');

// Theme Toggle Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeButton(theme);
});

function updateThemeButton(theme) {
    themeToggle.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

// Lotto Generation Logic
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

// Sharing Logic
const shareFacebook = document.getElementById('share-facebook');
const shareTwitter = document.getElementById('share-twitter');
const shareLink = document.getElementById('share-link');

const siteUrl = window.location.href;
const siteTitle = '로또 번호 생성기 - 행운의 숫자를 뽑아보세요!';

shareFacebook.addEventListener('click', () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank');
});

shareTwitter.addEventListener('click', () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(siteTitle)}&url=${encodeURIComponent(siteUrl)}`, '_blank');
});

shareLink.addEventListener('click', () => {
    navigator.clipboard.writeText(siteUrl).then(() => {
        alert('링크가 복사되었습니다!');
    }).catch(err => {
        console.error('링크 복사 실패:', err);
    });
});
