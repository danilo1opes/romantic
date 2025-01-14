function playSolasMusic() {
  // Seleção dos elementos
  const playButton = document.getElementById('playbutton');
  const muteButton = document.getElementById('mutebutton');
  const audioPlayer = document.getElementById('audioPlayer');
  const playIcon = document.getElementById('playIcon');
  const muteIcon = document.getElementById('muteIcon');

  // Caminhos dos ícones
  const playIconPath = 'icons/play.svg';
  const pauseIconPath = 'icons/pause.svg';
  const muteIconPath = 'icons/mute.svg';
  const volumeIconPath = 'icons/volume.svg';

  // Controle de reprodução
  let isPlaying = false;

  playButton.addEventListener('click', () => {
    if (isPlaying) {
      audioPlayer.pause();
      playIcon.src = playIconPath; // Ícone de Play
    } else {
      audioPlayer.play();
      playIcon.src = pauseIconPath; // Ícone de Pause
    }
    isPlaying = !isPlaying;
  });

  // Controle de mute/unmute
  muteButton.addEventListener('click', () => {
    audioPlayer.muted = !audioPlayer.muted;
    muteIcon.src = audioPlayer.muted ? muteIconPath : volumeIconPath;
  });
}

playSolasMusic();

function noTextNone() {
  //comportamento para clique - mobile
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const overlay = card.querySelector('info-overlay');
      overlay.classList.toggle('visible');
    });
  });
}

noTextNone();

function animationScroll() {
  const sections = document.querySelectorAll('.js-scroll');

  if (sections.length > 0) {
    const windowMiddle = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const inSectionVisible = sectionTop - windowMiddle < 0;
        if (inSectionVisible) section.classList.add('ativo');
        else {
          section.classList.remove('ativo');
        }
      });
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}

animationScroll();
