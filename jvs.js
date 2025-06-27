const darkToggle = document.getElementById('dark-toggle');
const lightToggle = document.getElementById('light-toggle');

darkToggle.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('dark');
});

lightToggle.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.remove('dark');
});

const slides = [
  {
    bg:'url(assets/images/cali.png)',
    title:'Carolina From <span class="color-change">Above</span>',
    desc:'Float gently over vineyards, forests, and valleys — a magical aerial journey through one of the South\'s most iconic landscapes.'
  },
  {
    bg:'url(assets/images/japan.png)',
    title:'Discover Vibrant <span class="color-changes">Japan',
    desc:'Experience the perfect blend of tradition and innovation, from ancient temples to neon-lit cities and breathtaking landscapes'
  },
  {
    bg:'url(assets/images/boracay.png)',
    title:'Escape to <span class="color-changes">Boracay</span>',
    desc:'White sand beaches, crystal clear waters, stunning sunsets, and endless adventures await you on this island paradise.'
  },
  {
    bg:'url(assets/images/rio.png)',
    title:'Rythm Of <span class="color-changes">Rio</span>',
    desc:'Feel the energy of vibrant festivals, golden beaches, samba beats, and breathtaking views in Brazil’s iconic coastal city.'
  },
  {
    bg:'url(assets/images/s-a.png)',
    title:'Unforgettable<span class="color-changes"> South africa</span>',
    desc:'Witness diverse wildlife, stunning coastlines, rich culture, and unforgettable adventures in one of Africa’s most beautiful countries.'
  },

];

const heroSection = document.getElementById('hero-section');
const heroContent = document.getElementById('hero-content');
const titleEl = document.getElementById('hero-title');
const textdes = document.getElementById('hero-desc');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let currentIndex = 0;
function updateHero(index) {
  // Slide-up animation on hero section
  heroSection.classList.remove('animate-slide');
  void heroSection.offsetWidth;
  heroSection.classList.add('animate-slide');

  // Fade out hero content before updating
  heroContent.classList.add('fade-out');

  // Re-trigger fadeSide animation

  heroContent.classList.add('animate-fade');

  // Update content after fade-out delay
  setTimeout(() => {
    heroSection.style.backgroundImage = slides[index].bg;
    titleEl.innerHTML = slides[index].title;
    textdes.textContent = slides[index].desc;

    heroContent.classList.remove('fade-out');

    // Re-apply fade animation again to ensure it retriggers
    heroContent.classList.remove('animate-fade');
    void heroContent.offsetWidth;
    heroContent.classList.add('animate-fade');
  }, 300);
}

// LEFT arrow (previous slide)
leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateHero(currentIndex);
});

// RIGHT arrow (next slide)
rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateHero(currentIndex);
});