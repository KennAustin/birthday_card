document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('birthday-form');
    const formContainer = document.getElementById('form-container');
    const cardContainer = document.getElementById('card-container');
    const birthdayPerson = document.getElementById('birthday-person');
    const playMusicBtn = document.getElementById('play-music-btn');
    const resetBtn = document.getElementById('reset-btn');
    const birthdayMusic = document.getElementById('birthday-music');
    let isMusicPlaying = false;
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();
        
        if (name) {
            // Update the birthday person's name
            birthdayPerson.textContent = `Dear ${name}`;
            document.getElementById('name-placeholder').textContent = name;
            
            // Hide form and show card with animation
            formContainer.classList.add('hidden');
            cardContainer.classList.remove('hidden');
            
            // Create additional confetti elements
            createConfetti();
        }
    });
    
    // Play music button
    playMusicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            birthdayMusic.pause();
            playMusicBtn.textContent = 'Putar Musik';
            isMusicPlaying = false;
        } else {
            birthdayMusic.play();
            playMusicBtn.textContent = 'Berhenti Musik';
            isMusicPlaying = true;
        }
    });
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        cardContainer.classList.add('hidden');
        formContainer.classList.remove('hidden');
        document.getElementById('name').value = '';
        
        if (isMusicPlaying) {
            birthdayMusic.pause();
            playMusicBtn.textContent = 'Putar Musik';
            isMusicPlaying = false;
        }
    });
    
    // Create confetti elements
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti');
        
        // Clear existing confetti
        confettiContainer.innerHTML = '';
        
        // Create 50 confetti pieces
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti-piece');
            
            // Random properties
            const size = Math.random() * 10 + 5;
            const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            const animationDelay = Math.random() * 5;
            const shape = Math.random() > 0.5 ? '50%' : '0';
            
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor = color;
            confetti.style.left = `${left}%`;
            confetti.style.borderRadius = shape;
            confetti.style.animation = `confettiFall ${animationDuration}s linear ${animationDelay}s infinite`;
            
            confettiContainer.appendChild(confetti);
        }
    }
    
    // Add some interactive elements
    const cake = document.querySelector('.cake');
    cake.addEventListener('click', function() {
        // Make the flame bigger when cake is clicked
        const flame = document.querySelector('.flame');
        flame.style.transform = 'translateX(-50%) scale(1.5)';
        flame.style.boxShadow = '0 0 25px #ffec80';
        
        setTimeout(() => {
            flame.style.transform = 'translateX(-50%) scale(1)';
            flame.style.boxShadow = '0 0 15px #ffec80';
        }, 500);
        
        // Create extra sparkles
        for (let i = 0; i < 5; i++) {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            sparkle.style.width = `${Math.random() * 6 + 3}px`;
            sparkle.style.height = sparkle.style.width;
            sparkle.style.top = `${Math.random() * 30 - 50}px`;
            sparkle.style.left = `${Math.random() * 60 + 20}px`;
            sparkle.style.animation = `sparkle ${Math.random() * 1 + 0.5}s ease-out`;
            sparkle.style.backgroundColor = `hsl(${Math.random() * 60 + 30}, 100%, 50%)`;
            
            document.querySelector('.sparkles').appendChild(sparkle);
            
            // Remove after animation
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }
    });
});

// Add confetti animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .confetti-piece {
        position: absolute;
        top: -10px;
    }
`;
document.head.appendChild(style);