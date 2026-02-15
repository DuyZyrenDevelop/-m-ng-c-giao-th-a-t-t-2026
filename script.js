const targetDate = new Date("2026-02-17T00:00:00+07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  let distance = targetDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML = `
      <h2 style="font-size:5rem; color:#FFD700; text-shadow:0 0 40px #FF4500; margin:40px 0;">
        CHÚC MỪNG NĂM MỚI BÍNH NGỌ 2026!<br>
        AN KHANG - THỊNH VƯỢNG!
      </h2>
    `;
    return;
  }

  const days    = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent    = String(days).padStart(2, '0');
  document.getElementById("hours").textContent   = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Tạo confetti rơi ngẫu nhiên
function createConfetti() {
  const layer = document.querySelector('.confetti-layer');
  for (let i = 0; i < 20; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.animationDuration = (Math.random() * 4 + 3) + 's';
    piece.style.animationDelay = Math.random() * 2 + 's';
    piece.style.background = Math.random() > 0.5 ? '#FFD700' : '#FF4500';
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 8000);
  }
}

setInterval(updateCountdown, 1000);
setInterval(createConfetti, 1500); // Confetti rơi liên tục

updateCountdown();