/* ═══════════════════════════════════════════════
   Ocean Depths – script.js
   Author: Ocean Depths Project
   Description: All interactivity — creature data,
   scroll effects, animations, popup, sound, cursor
═══════════════════════════════════════════════ */

/* ════════════════════════════════════
   1. CREATURE DATA
════════════════════════════════════ */
const creatureData = {

  sunlight: [
    {
      emoji: '🐬',
      name: 'Bottlenose Dolphin',
      sci: 'Tursiops truncatus',
      depth: '0–200m',
      pressure: '1–20 atm',
      zone: 'Sunlight',
      temp: '20–28°C',
      desc: 'Playful and intelligent mammals known for their acrobatics',
      adapt: 'Uses echolocation to locate prey with extraordinary precision up to 300m away. Each dolphin has a unique whistle — essentially a name — it uses to identify itself.'
    },
    {
      emoji: '🐢',
      name: 'Green Sea Turtle',
      sci: 'Chelonia mydas',
      depth: '0–200m',
      pressure: '1–20 atm',
      zone: 'Sunlight',
      temp: '20–28°C',
      desc: 'Ancient mariners navigating oceans for over 100 million years',
      adapt: 'Can hold breath for 7 hours while sleeping. Uses Earth\'s magnetic field as a GPS to return to the exact beach where they were born — decades later.'
    },
    {
      emoji: '🪼',
      name: 'Moon Jellyfish',
      sci: 'Aurelia aurita',
      depth: '0–200m',
      pressure: '1–20 atm',
      zone: 'Sunlight',
      temp: '15–30°C',
      desc: 'Ethereal drifters with translucent bells and delicate tentacles',
      adapt: '95% water. Some species can reverse their aging process — when stressed, they revert to their juvenile polyp state, making them effectively biologically immortal.'
    },
    {
      emoji: '🐠',
      name: 'Clownfish',
      sci: 'Amphiprioninae',
      depth: '0–30m',
      pressure: '1–4 atm',
      zone: 'Sunlight',
      temp: '24–27°C',
      desc: 'Vivid orange fish living in symbiosis with sea anemones',
      adapt: 'Immune to anemone stings through a special mucus coating. All clownfish are born male — the dominant fish in a group will change sex to become female if needed.'
    },
    {
      emoji: '🦈',
      name: 'Great White Shark',
      sci: 'Carcharodon carcharias',
      depth: '0–1200m',
      pressure: '1–120 atm',
      zone: 'Sunlight–Twilight',
      temp: '12–24°C',
      desc: 'Apex predator with 300 serrated teeth in multiple rows',
      adapt: 'Electroreceptors called ampullae of Lorenzini detect the heartbeat of prey buried in sand up to 1 meter away. Teeth regenerate continuously throughout their life.'
    },
    {
      emoji: '🐙',
      name: 'Common Octopus',
      sci: 'Octopus vulgaris',
      depth: '0–200m',
      pressure: '1–20 atm',
      zone: 'Sunlight',
      temp: '15–25°C',
      desc: 'Masters of disguise with three hearts and blue blood',
      adapt: 'Can change color and texture in milliseconds. Has distributed intelligence — each arm has its own nerve cluster and can act semi-independently without brain input.'
    }
  ],

  twilight: [
    {
      emoji: '🐟',
      name: 'Lanternfish',
      sci: 'Myctophidae',
      depth: '200–1000m',
      pressure: '20–100 atm',
      zone: 'Twilight',
      temp: '5–10°C',
      desc: 'Tiny but among the most abundant vertebrates on Earth',
      adapt: 'Billions migrate 400m upward every night to feed — the largest daily animal migration on the planet. They return to depth at dawn to avoid predators.'
    },
    {
      emoji: '🦑',
      name: 'Vampire Squid',
      sci: 'Vampyroteuthis infernalis',
      depth: '600–900m',
      pressure: '60–90 atm',
      zone: 'Twilight',
      temp: '2–6°C',
      desc: 'Not a true squid — a living fossil in its own taxonomic order',
      adapt: 'Can invert its webbed cloak over its body, disappearing into darkness. Controls 360° of bioluminescent photophores to confuse predators. Feeds on marine snow — dead organic matter.'
    },
    {
      emoji: '🐡',
      name: 'Hatchetfish',
      sci: 'Argyropelecus aculeatus',
      depth: '200–600m',
      pressure: '20–60 atm',
      zone: 'Twilight',
      temp: '5–10°C',
      desc: 'Silver-bodied fish shaped like a hatchet blade',
      adapt: 'Produces light from its belly that exactly matches the faint downwelling sunlight from above — a technique called counterillumination that makes it completely invisible from below.'
    },
    {
      emoji: '🦑',
      name: 'Firefly Squid',
      sci: 'Watasenia scintillans',
      depth: '200–400m',
      pressure: '20–40 atm',
      zone: 'Twilight',
      temp: '5–12°C',
      desc: 'Tiny squid covered in thousands of light-producing photophores',
      adapt: 'Uses bioluminescent flashes for communication, camouflage, and attracting prey in absolute darkness. Can produce three different colors of light simultaneously.'
    }
  ],

  midnight: [
    {
      emoji: '🐟',
      name: 'Anglerfish',
      sci: 'Melanocetus johnsonii',
      depth: '1000–4000m',
      pressure: '100–400 atm',
      zone: 'Midnight',
      temp: '1–4°C',
      desc: 'Famous for its bioluminescent lure dangling above its gaping mouth',
      adapt: 'The glowing lure is powered by symbiotic bacteria. Males are 10x smaller — they bite the female and fuse permanently, sharing her bloodstream for life. Only females have the lure.'
    },
    {
      emoji: '🐍',
      name: 'Gulper Eel',
      sci: 'Eurypharynx pelecanoides',
      depth: '1000–3000m',
      pressure: '100–300 atm',
      zone: 'Midnight',
      temp: '2–4°C',
      desc: 'Its enormous hinged mouth can swallow prey larger than itself',
      adapt: 'The stomach stretches to hold prey many times its own body size. The tail tip glows pink and red to lure prey toward its waiting mouth in complete darkness.'
    },
    {
      emoji: '🦑',
      name: 'Giant Squid',
      sci: 'Architeuthis dux',
      depth: '300–1000m',
      pressure: '30–100 atm',
      zone: 'Midnight',
      temp: '2–7°C',
      desc: 'Legendary sea monster with eyes the size of dinner plates',
      adapt: 'The largest invertebrate on Earth — reaching 13 meters. Its basketball-sized eyes evolved specifically to detect the silhouettes of sperm whales hunting in complete darkness.'
    },
    {
      emoji: '🐉',
      name: 'Black Dragonfish',
      sci: 'Idiacanthus atlanticus',
      depth: '1500–2000m',
      pressure: '150–200 atm',
      zone: 'Midnight',
      temp: '2–4°C',
      desc: 'Jet black body with rows of photophores and long fang-like teeth',
      adapt: 'Produces far-red bioluminescence that is invisible to most deep-sea fish, but it can see it — acting like a secret infrared sniper scope to hunt prey that doesn\'t know it\'s being watched.'
    },
    {
      emoji: '🐙',
      name: 'Dumbo Octopus',
      sci: 'Grimpoteuthis',
      depth: '3000–5000m',
      pressure: '300–500 atm',
      zone: 'Abyssal',
      temp: '1–3°C',
      desc: 'Adorable octopus with ear-like fins used for graceful swimming',
      adapt: 'Flaps its ear-like fins to hover and glide through the abyss. Swallows prey whole as jaw muscles cannot function well under extreme pressure. The deepest-living octopus known.'
    },
    {
      emoji: '🥒',
      name: 'Sea Cucumber',
      sci: 'Holothuroidea',
      depth: '1000–5000m',
      pressure: '100–500 atm',
      zone: 'Abyssal',
      temp: '1–3°C',
      desc: 'Soft-bodied animals that vacuum organic debris off the seafloor',
      adapt: 'Can liquefy its own body to squeeze through rock crevices. When threatened, ejects its own internal organs at predators then regrows them over several weeks.'
    },
    {
      emoji: '🕷️',
      name: 'Tripod Fish',
      sci: 'Bathypterois grallator',
      depth: '2000–6000m',
      pressure: '200–600 atm',
      zone: 'Abyssal',
      temp: '1–2°C',
      desc: 'Uses three elongated fin rays as stilts to stand above the seafloor',
      adapt: 'Stands motionless facing the current with pectoral fins spread wide. Detects vibrations to catch crustaceans without moving. Can live completely alone — it is a hermaphrodite.'
    }
  ],

  hadal: [
    {
      emoji: '🐟',
      name: 'Mariana Snailfish',
      sci: 'Pseudoliparis swirei',
      depth: '6000–8200m',
      pressure: '600–820 atm',
      zone: 'Hadal',
      temp: '1–2°C',
      desc: 'The deepest fish ever recorded — a pale, translucent wraith',
      adapt: 'Accumulated TMAO (trimethylamine oxide) molecules prevent proteins from being crushed by pressure. Its transparent gelatinous body contains no swim bladder — nothing left to implode.'
    },
    {
      emoji: '🦐',
      name: 'Amphipod',
      sci: 'Hirondellea gigas',
      depth: '6000–11000m',
      pressure: '600–1100 atm',
      zone: 'Hadal',
      temp: '1–2°C',
      desc: 'Shrimp-like scavengers that swarm carcasses in vast numbers',
      adapt: 'Produces unique enzymes that digest wood and cellulose carried from land thousands of miles away. Can detect a whale carcass from miles away using chemical sensors. Thrives where nothing else can.'
    },
    {
      emoji: '🌊',
      name: 'Xenophyophore',
      sci: 'Syringammina fragilissima',
      depth: '4000–10600m',
      pressure: '400–1060 atm',
      zone: 'Hadal',
      temp: '1–2°C',
      desc: 'Single-celled organisms that grow larger than a soccer ball',
      adapt: 'The largest individual cells on Earth. Concentrates heavy metals including lead, mercury, and uranium in its body — potentially detoxifying the surrounding sediment for other organisms.'
    }
  ]
};


/* ════════════════════════════════════
   2. RENDER CREATURE CARDS
════════════════════════════════════ */
function renderCreatures(zone, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  creatureData[zone].forEach((creature, index) => {
    const card = document.createElement('div');
    card.className = 'creature-card';
    card.style.animationDelay = `${index * 0.12}s`;
    card.innerHTML = `
      <span class="creature-emoji" style="animation-delay:${index * 0.3}s">${creature.emoji}</span>
      <div class="creature-name">${creature.name}</div>
      <div class="creature-depth">${creature.depth}</div>
      <div class="creature-desc">${creature.desc}</div>
    `;
    card.addEventListener('click', () => openPopup(creature));
    container.appendChild(card);
  });
}

renderCreatures('sunlight', 'sunlight-grid');
renderCreatures('twilight', 'twilight-grid');
renderCreatures('midnight', 'midnight-grid');
renderCreatures('hadal',    'hadal-grid');


/* ════════════════════════════════════
   3. POPUP MODAL
════════════════════════════════════ */
function openPopup(creature) {
  document.getElementById('popup-emoji').textContent    = creature.emoji;
  document.getElementById('popup-name').textContent     = creature.name;
  document.getElementById('popup-sciname').textContent  = creature.sci;
  document.getElementById('popup-depth').textContent    = creature.depth;
  document.getElementById('popup-pressure').textContent = creature.pressure;
  document.getElementById('popup-zone').textContent     = creature.zone;
  document.getElementById('popup-temp').textContent     = creature.temp;
  document.getElementById('popup-adapt').textContent    = creature.adapt;

  document.getElementById('popup-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePopup() {
  document.getElementById('popup-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

// Close button
document.getElementById('popup-close-btn').addEventListener('click', closePopup);

// Click outside popup card closes it
document.getElementById('popup-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closePopup();
});

// ESC key closes popup
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePopup();
});


/* ════════════════════════════════════
   4. BUBBLE GENERATOR
════════════════════════════════════ */
function createBubbles(targetSectionId, count, color = 'rgba(255,255,255,0.4)') {
  const section = document.getElementById(targetSectionId);
  if (!section) return;

  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1;';

  for (let i = 0; i < count; i++) {
    const bubble    = document.createElement('div');
    const size      = Math.random() * 14 + 4;
    const left      = Math.random() * 100;
    const delay     = Math.random() * 8;
    const duration  = 6 + Math.random() * 10;
    const drift     = (Math.random() - 0.5) * 60;

    bubble.className = 'bubble';
    bubble.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${left}%;
      bottom:${Math.random() * 30}%;
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      --drift:${drift}px;
      background: radial-gradient(circle at 30% 30%, ${color}, rgba(255,255,255,.05));
      border: 1px solid rgba(255,255,255,.25);
    `;
    wrap.appendChild(bubble);
  }

  section.appendChild(wrap);
}

createBubbles('hero',     20, 'rgba(255,255,255,0.4)');
createBubbles('sunlight', 15, 'rgba(144,224,239,0.4)');


/* ════════════════════════════════════
   5. BIOLUMINESCENT PARTICLES (Twilight)
════════════════════════════════════ */
function createBiolum() {
  const section = document.getElementById('twilight');
  if (!section) return;

  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1;';

  const colors = ['#4895ef', '#4cc9f0', '#7209b7', '#b5179e', '#3a86ff', '#00f5ff'];

  for (let i = 0; i < 40; i++) {
    const p     = document.createElement('div');
    const size  = Math.random() * 6 + 2;
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.className = 'biolum-particle';
    p.style.cssText = `
      width:${size}px;
      height:${size}px;
      background:${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      left:${Math.random() * 100}%;
      bottom:${Math.random() * 80}%;
      animation-duration:${8 + Math.random() * 12}s;
      animation-delay:${Math.random() * 8}s;
      --px-drift:${(Math.random() - 0.5) * 100}px;
    `;
    wrap.appendChild(p);
  }

  section.insertBefore(wrap, section.firstChild);
}
createBiolum();


/* ════════════════════════════════════
   6. MIDNIGHT DUST PARTICLES
════════════════════════════════════ */
function createMidnightParticles() {
  const section = document.getElementById('midnight');
  if (!section) return;

  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1;';

  for (let i = 0; i < 60; i++) {
    const p    = document.createElement('div');
    const size = Math.random() * 3 + 1;

    p.className = 'abyss-particle';
    p.style.cssText = `
      width:${size}px;
      height:${size}px;
      opacity:${Math.random() * 0.6 + 0.1};
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation-duration:${15 + Math.random() * 20}s;
      animation-direction:${Math.random() > 0.5 ? 'normal' : 'reverse'};
      animation-iteration-count:infinite;
      animation-timing-function:ease-in-out;
      --drift-y:${(Math.random() - 0.5) * 200}px;
      --drift-x:${(Math.random() - 0.5) * 200}px;
    `;
    wrap.appendChild(p);
  }

  section.insertBefore(wrap, section.firstChild);
}
createMidnightParticles();


/* ════════════════════════════════════
   7. SCROLL REVEAL (Intersection Observer)
════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      if (entry.target.classList.contains('creature-card')) {
        // Staggered card reveal based on animation-delay
        const delay = parseFloat(entry.target.style.animationDelay || '0') * 1000;
        setTimeout(() => entry.target.classList.add('revealed'), delay);

      } else if (entry.target.classList.contains('reveal')) {
        entry.target.classList.add('in-view');
      }

      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.creature-card').forEach(card => revealObserver.observe(card));
document.querySelectorAll('.reveal').forEach(el   => revealObserver.observe(el));


/* ════════════════════════════════════
   8. DEPTH METER
════════════════════════════════════ */
let sliderActive = false;

function updateDepth() {
  const scrollY = window.scrollY;
  const docH    = document.documentElement.scrollHeight - window.innerHeight;
  const prog    = Math.min(scrollY / docH, 1);

  // Update depth number display
  const depth = Math.round(prog * 11000);
  const display = document.getElementById('depth-display');
  if (display) display.textContent = depth.toLocaleString() + 'm';

  // Update depth track fill and thumb
  const fillH = prog * 220;
  const fill  = document.getElementById('depth-fill');
  const thumb = document.getElementById('depth-thumb');
  if (fill)  fill.style.height  = fillH + 'px';
  if (thumb) thumb.style.bottom = fillH + 'px';

  // Sync slider (without triggering scroll)
  if (!sliderActive) {
    const slider = document.getElementById('zone-slider');
    if (slider) slider.value = prog * 100;
  }
}


/* ════════════════════════════════════
   9. ZONE SLIDER → JUMP TO DEPTH
════════════════════════════════════ */
const zoneSlider = document.getElementById('zone-slider');
if (zoneSlider) {
  zoneSlider.addEventListener('input', function () {
    sliderActive = true;
    const prog = this.value / 100;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: prog * docH, behavior: 'smooth' });
    setTimeout(() => { sliderActive = false; }, 600);
  });
}


/* ════════════════════════════════════
   10. PARALLAX (Hero Bubbles)
════════════════════════════════════ */
function handleParallax() {
  const scrollY = window.scrollY;
  document.querySelectorAll('#hero .bubble').forEach((bubble, i) => {
    const speed = 0.2 + (i % 5) * 0.1;
    bubble.style.transform = `translateY(${-scrollY * speed}px)`;
  });
}


/* ════════════════════════════════════
   11. SCROLL EVENT HANDLER
════════════════════════════════════ */
window.addEventListener('scroll', () => {
  updateDepth();
  handleParallax();
}, { passive: true });


/* ════════════════════════════════════
   12. CUSTOM CURSOR
════════════════════════════════════ */
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorDot) {
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  }
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;
  if (cursor) {
    cursor.style.left = cursorX + 'px';
    cursor.style.top  = cursorY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor grows on interactive elements
document.querySelectorAll('.creature-card, button, #zone-slider, a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (!cursor) return;
    cursor.style.width      = '36px';
    cursor.style.height     = '36px';
    cursor.style.background = 'rgba(0,245,255,0.15)';
  });
  el.addEventListener('mouseleave', () => {
    if (!cursor) return;
    cursor.style.width      = '18px';
    cursor.style.height     = '18px';
    cursor.style.background = 'transparent';
  });
});


/* ════════════════════════════════════
   13. AMBIENT SOUND (Web Audio API)
════════════════════════════════════ */
let soundEnabled = false;
let audioCtx     = null;
let soundNodes   = null;

function createUnderwaterSound() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // ── Low underwater rumble ──
  const oscillator = audioCtx.createOscillator();
  const gainNode   = audioCtx.createGain();
  const filter     = audioCtx.createBiquadFilter();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(60, audioCtx.currentTime);
  oscillator.frequency.linearRampToValueAtTime(80, audioCtx.currentTime + 4);

  filter.type           = 'lowpass';
  filter.frequency.value = 400;
  gainNode.gain.value    = 0.08;

  oscillator.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();

  // ── Random sonar pings ──
  function ping() {
    if (!soundEnabled) return;
    const osc = audioCtx.createOscillator();
    const g   = audioCtx.createGain();

    osc.type          = 'sine';
    osc.frequency.value = 300 + Math.random() * 500;

    g.gain.setValueAtTime(0.05, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);

    osc.connect(g);
    g.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 1.5);

    setTimeout(ping, 800 + Math.random() * 2000);
  }
  ping();

  return { oscillator, gainNode };
}

const soundBtn = document.getElementById('sound-toggle');
if (soundBtn) {
  soundBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;

    if (soundEnabled) {
      soundNodes = createUnderwaterSound();
      soundBtn.textContent = '🔊';
      soundBtn.classList.add('active');
    } else {
      if (soundNodes && audioCtx) {
        soundNodes.gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
        setTimeout(() => {
          soundNodes.oscillator.stop();
          audioCtx.close();
        }, 600);
      }
      soundBtn.textContent = '🔇';
      soundBtn.classList.remove('active');
    }
  });
}


/* ════════════════════════════════════
   14. LOADING SCREEN
════════════════════════════════════ */
let loadProgress = 0;
const loaderBar  = document.getElementById('loader-bar');

const loadInterval = setInterval(() => {
  loadProgress += Math.random() * 15;

  if (loadProgress >= 100) {
    loadProgress = 100;
    clearInterval(loadInterval);

    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 800);
      }
    }, 400);
  }

  if (loaderBar) loaderBar.style.width = loadProgress + '%';
}, 120);


/* ════════════════════════════════════
   15. TOUCH / MOBILE SUPPORT
════════════════════════════════════ */
document.addEventListener('touchstart', () => {}, { passive: true });

document.addEventListener('touchmove', () => {
  updateDepth();
}, { passive: true });


/* ════════════════════════════════════
   16. INITIALISE
════════════════════════════════════ */
updateDepth();