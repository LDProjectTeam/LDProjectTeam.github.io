// ─── Translations ───────────────────────────────────────────────────────────
const T = {
  ru: {
    navFeatures: 'Возможности',
    navGames: 'Игры',
    navDownload: 'Скачать',
    navCommunity: 'Сообщество',
    navDownloadBtn: '⬇ Скачать',
    heroBadge: 'v3.2.0 · Доступно сейчас',
    heroTitle: 'LDLauncher',
    heroSubtitle: 'LDProject · 2026',
    heroDesc: 'Профессиональный лаунчер для серии модпаков <strong>Lost Death</strong> — с автооптимизатором системы, встроенным чатом поддержки и уникальным CRT-интерфейсом.',
    heroDownload: '⬇ Скачать для Windows',
    heroGitHub: 'GitHub',
    heroVersion: 'Windows 10/11 · x64 · Electron 33',
    screenshotsLabel: 'Скриншоты интерфейса',
    featuresLabel: 'Функциональность',
    featuresTitle: 'Всё что нужно для игры',
    featuresDesc: 'LDLauncher берёт на себя всё — от установки Java до оптимизации JVM под ваш ПК.',
    features: [
      { icon: '🎮', name: 'Несколько игр', desc: 'Управляйте несколькими инстансами серии Lost Death из одного окна.' },
      { icon: '🖥️', name: 'CRT Dark-Fantasy UI', desc: 'Уникальный интерфейс с плавными анимациями, глоу-эффектами и сканлайнами.' },
      { icon: '⚙️', name: 'Автооптимизатор', desc: 'Определяет тир железа и автоматически настраивает JVM-аргументы и RAM.' },
      { icon: '🛡️', name: 'Guard Mod', desc: 'Встроенная защита от читов на базе Fabric Mod — честная игра гарантирована.' },
      { icon: '💬', name: 'Поддержка в приложении', desc: 'Встроенный чат с командой LDProject прямо в лаунчере. Powered by Supabase.' },
      { icon: '💳', name: 'Оплата', desc: 'Встроенная оплата через Telegram Stars и TON-кошелёк.' },
      { icon: '🌍', name: 'Мультиязычность', desc: 'Авто-определение языка системы. Поддержка RU / EN / UA.' },
      { icon: '🎵', name: 'Discord RPC', desc: 'Отображение активности в Discord — все знают во что ты играешь.' },
      { icon: '🔄', name: 'Авто-обновление', desc: 'Лаунчер сам устанавливает обновления — всегда актуальная версия.' },
    ],
    gamesLabel: 'Библиотека',
    gamesTitle: 'Доступные игры',
    gamesDesc: 'Серия модпаков Lost Death — тёмное фэнтези в мире Minecraft.',
    games: [
      { badge: 'РЕКОМЕНДУЕМАЯ', badgeClass: 'badge-featured', title: 'Lost Death', desc: 'Игра, с которой всё началось. Сможете ли вы пережить убийство богов? Исследуйте проклятый мир.', img: 'assets/ld1.jpg', color: '#7CFC00' },
      { badge: 'БЕТА ВЕРСИЯ', badgeClass: 'badge-beta', title: 'Lost Death 2', desc: 'Продолжение признанного шедевра. Разгадайте тайны проклятого леса. Новые механики и биомы.', img: 'assets/ld2.jpg', color: '#1E90FF' },
      { badge: 'В РАЗРАБОТКЕ', badgeClass: 'badge-indev', title: 'Lost Death 3', desc: 'Третья часть уже в разработке. Следите за обновлениями в нашем Telegram-канале.', img: 'assets/ld3.jpg', color: '#FF4500' },
      { badge: 'СКОРО', badgeClass: 'badge-soon', title: 'Witcher LD', desc: 'Охотьтесь на монстров и зарабатывайте чеканную монету в тёмном фэнтезийном мире.', img: null, color: '#C0C0C0' },
      { badge: 'СКОРО', badgeClass: 'badge-soon', title: 'Cyberpunk LD', desc: 'Добро пожаловать в Найт-Сити. Станьте легендой.', img: null, color: '#FFD700' },
    ],
    dlLabel: 'Загрузка',
    dlTitle: 'Скачать LDLauncher',
    dlDesc: 'Бесплатно для Windows. Лаунчер автоматически установит Java, скачает модпак и настроит игру.',
    dlInstaller: 'Установщик',
    dlInstallerSub: 'Рекомендуется · NSIS Setup',
    dlPortable: 'Портативная версия',
    dlPortableSub: 'Без установки · .exe',
    dlNote: 'Требуется Windows 10/11 (64-bit) · Автоматически устанавливает Java · <a href="https://github.com/LDProjectTeam/LDL">Исходный код на GitHub</a>',
    comLabel: 'Сообщество',
    comTitle: 'Присоединяйтесь',
    comDesc: 'Следите за обновлениями, задавайте вопросы и общайтесь с другими игроками.',
    comGitHub: 'Исходный код',
    comTelegram: 'Канал & чат',
    comDiscord: 'Сервер',
    comEmail: 'Поддержка',
    footerRights: '© 2026 LDProject. Все права защищены.',
    footerProp: 'Проприетарное ПО — копирование запрещено.',
  },
  en: {
    navFeatures: 'Features',
    navGames: 'Games',
    navDownload: 'Download',
    navCommunity: 'Community',
    navDownloadBtn: '⬇ Download',
    heroBadge: 'v3.2.0 · Available Now',
    heroTitle: 'LDLauncher',
    heroSubtitle: 'LDProject · 2026',
    heroDesc: 'A professional launcher for the <strong>Lost Death</strong> modpack series — with a system auto-optimizer, built-in support chat, and a unique CRT-style interface.',
    heroDownload: '⬇ Download for Windows',
    heroGitHub: 'GitHub',
    heroVersion: 'Windows 10/11 · x64 · Electron 33',
    screenshotsLabel: 'Interface Screenshots',
    featuresLabel: 'Features',
    featuresTitle: 'Everything You Need',
    featuresDesc: 'LDLauncher handles everything — from installing Java to tuning JVM for your PC.',
    features: [
      { icon: '🎮', name: 'Multiple Games', desc: 'Manage multiple instances of the Lost Death series from a single window.' },
      { icon: '🖥️', name: 'CRT Dark-Fantasy UI', desc: 'Unique interface with smooth animations, glow effects and scanlines.' },
      { icon: '⚙️', name: 'Auto-Optimizer', desc: 'Detects your hardware tier and automatically tunes JVM args and RAM.' },
      { icon: '🛡️', name: 'Guard Mod', desc: 'Built-in anti-cheat protection powered by Fabric Mod — fair play guaranteed.' },
      { icon: '💬', name: 'In-App Support', desc: 'Chat with the LDProject team directly inside the launcher. Powered by Supabase.' },
      { icon: '💳', name: 'Payments', desc: 'Integrated payment via Telegram Stars and TON wallet.' },
      { icon: '🌍', name: 'Multi-language', desc: 'Auto-detects system language. Supports RU / EN / UA.' },
      { icon: '🎵', name: 'Discord RPC', desc: 'Show your launcher activity in Discord — let everyone know what you\'re playing.' },
      { icon: '🔄', name: 'Auto-update', desc: 'The launcher installs updates automatically — always the latest version.' },
    ],
    gamesLabel: 'Library',
    gamesTitle: 'Available Games',
    gamesDesc: 'The Lost Death modpack series — dark fantasy in the Minecraft universe.',
    games: [
      { badge: 'FEATURED', badgeClass: 'badge-featured', title: 'Lost Death', desc: 'The game that started it all. Can you survive the killing of gods? Explore the cursed world.', img: 'assets/ld1.jpg', color: '#7CFC00' },
      { badge: 'BETA', badgeClass: 'badge-beta', title: 'Lost Death 2', desc: 'Sequel to the acclaimed masterpiece. Unravel the mysteries of the cursed forest. New mechanics and biomes.', img: 'assets/ld2.jpg', color: '#1E90FF' },
      { badge: 'IN DEVELOPMENT', badgeClass: 'badge-indev', title: 'Lost Death 3', desc: 'The third chapter is already in development. Stay tuned via our Telegram channel.', img: 'assets/ld3.jpg', color: '#FF4500' },
      { badge: 'COMING SOON', badgeClass: 'badge-soon', title: 'Witcher LD', desc: 'Hunt monsters and earn your coin in this dark fantasy world.', img: null, color: '#C0C0C0' },
      { badge: 'COMING SOON', badgeClass: 'badge-soon', title: 'Cyberpunk LD', desc: 'Welcome to Night City. Become a legend.', img: null, color: '#FFD700' },
    ],
    dlLabel: 'Download',
    dlTitle: 'Download LDLauncher',
    dlDesc: 'Free for Windows. The launcher automatically installs Java, downloads the modpack and configures the game.',
    dlInstaller: 'Installer',
    dlInstallerSub: 'Recommended · NSIS Setup',
    dlPortable: 'Portable Version',
    dlPortableSub: 'No installation · .exe',
    dlNote: 'Requires Windows 10/11 (64-bit) · Java installed automatically · <a href="https://github.com/LDProjectTeam/LDL">Source Code on GitHub</a>',
    comLabel: 'Community',
    comTitle: 'Join Us',
    comDesc: 'Follow updates, ask questions and connect with other players.',
    comGitHub: 'Source Code',
    comTelegram: 'Channel & Chat',
    comDiscord: 'Server',
    comEmail: 'Support',
    footerRights: '© 2026 LDProject. All rights reserved.',
    footerProp: 'Proprietary software — copying prohibited.',
  },
  ua: {
    navFeatures: 'Можливості',
    navGames: 'Ігри',
    navDownload: 'Завантажити',
    navCommunity: 'Спільнота',
    navDownloadBtn: '⬇ Завантажити',
    heroBadge: 'v3.2.0 · Доступно зараз',
    heroTitle: 'LDLauncher',
    heroSubtitle: 'LDProject · 2026',
    heroDesc: 'Професійний лаунчер для серії модпаків <strong>Lost Death</strong> — з автооптимізатором системи, вбудованим чатом підтримки та унікальним CRT-інтерфейсом.',
    heroDownload: '⬇ Завантажити для Windows',
    heroGitHub: 'GitHub',
    heroVersion: 'Windows 10/11 · x64 · Electron 33',
    screenshotsLabel: 'Скріншоти інтерфейсу',
    featuresLabel: 'Функціональність',
    featuresTitle: 'Всe що потрібно для гри',
    featuresDesc: 'LDLauncher бере на себе все — від встановлення Java до оптимізації JVM під ваш ПК.',
    features: [
      { icon: '🎮', name: 'Декілька ігор', desc: 'Керуйте декількома інстансами серії Lost Death з одного вікна.' },
      { icon: '🖥️', name: 'CRT Dark-Fantasy UI', desc: 'Унікальний інтерфейс із плавними анімаціями, гло-ефектами та сканлайнами.' },
      { icon: '⚙️', name: 'Автооптимізатор', desc: 'Визначає тир заліза та автоматично налаштовує JVM-аргументи та RAM.' },
      { icon: '🛡️', name: 'Guard Mod', desc: 'Вбудований захист від читів на базе Fabric Mod — чесна гра гарантована.' },
      { icon: '💬', name: 'Підтримка в додатку', desc: 'Вбудований чат з командою LDProject прямо в лаунчері. Powered by Supabase.' },
      { icon: '💳', name: 'Оплата', desc: 'Вбудована оплата через Telegram Stars та TON-гаманець.' },
      { icon: '🌍', name: 'Мультимовність', desc: 'Авто-визначення мови системи. Поддержка RU / EN / UA.' },
      { icon: '🎵', name: 'Discord RPC', desc: 'Відображення активності в Discord — всі знають у що ти граєш.' },
      { icon: '🔄', name: 'Авто-оновлення', desc: 'Лаунчер сам встановлює оновлення — завжди актуальна версія.' },
    ],
    gamesLabel: 'Бібліотека',
    gamesTitle: 'Доступні ігри',
    gamesDesc: 'Серія модпаков Lost Death — темне фентезі у світі Minecraft.',
    games: [
      { badge: 'РЕКОМЕНДОВАНА', badgeClass: 'badge-featured', title: 'Lost Death', desc: 'Гра, з якої все почалося. Чи зможете ви пережити вбивство богів? Досліджуйте проклятий світ.', img: 'assets/ld1.jpg', color: '#7CFC00' },
      { badge: 'БЕТА ВЕРСІЯ', badgeClass: 'badge-beta', title: 'Lost Death 2', desc: 'Продовження визнаного шедевра. Розгадайте таємниці проклятого лісу. Нові механіки та біоми.', img: 'assets/ld2.jpg', color: '#1E90FF' },
      { badge: 'В РОЗРОБЦІ', badgeClass: 'badge-indev', title: 'Lost Death 3', desc: 'Третя частина вже в розробці. Стежте за оновленнями в нашому Telegram-каналі.', img: 'assets/ld3.jpg', color: '#FF4500' },
      { badge: 'СКОРО', badgeClass: 'badge-soon', title: 'Witcher LD', desc: 'Полюйте на монстрів та заробляйте карбовану монету в темному фентезійному світі.', img: null, color: '#C0C0C0' },
      { badge: 'СКОРО', badgeClass: 'badge-soon', title: 'Cyberpunk LD', desc: 'Ласкаво просимо до Найт-Сіті. Станьте легендою.', img: null, color: '#FFD700' },
    ],
    dlLabel: 'Загрузка',
    dlTitle: 'Завантажити LDLauncher',
    dlDesc: 'Безкоштовно для Windows. Лаунчер автоматично встановить Java, скачає модпак та налаштує гру.',
    dlInstaller: 'Інсталятор',
    dlInstallerSub: 'Рекомендується · NSIS Setup',
    dlPortable: 'Портативна версія',
    dlPortableSub: 'Без встановлення · .exe',
    dlNote: 'Потрібна Windows 10/11 (64-bit) · Java встановлюється автоматично · <a href="https://github.com/LDProjectTeam/LDL">Вихідний код на GitHub</a>',
    comLabel: 'Спільнота',
    comTitle: 'Приєднуйтесь',
    comDesc: 'Слідкуйте за оновленнями, ставте питання та спілкуйтесь з іншими гравцями.',
    comGitHub: 'Вихідний код',
    comTelegram: 'Канал & чат',
    comDiscord: 'Сервер',
    comEmail: 'Підтримка',
    footerRights: '© 2026 LDProject. Усі права захищені.',
    footerProp: 'Пропрієтарне ПЗ — копіювання заборонено.',
  }
};

const DOWNLOAD_URL = 'https://github.com/LDProjectTeam/LDL/releases/latest';

// ─── State ──────────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('ldl-lang') || 'ru';

// ─── Render ─────────────────────────────────────────────────────────────────
function render() {
  const t = T[currentLang];

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Nav
  document.getElementById('nav-features').textContent = t.navFeatures;
  document.getElementById('nav-games').textContent = t.navGames;
  document.getElementById('nav-download').textContent = t.navDownload;
  document.getElementById('nav-community').textContent = t.navCommunity;
  document.getElementById('nav-dl-btn').textContent = t.navDownloadBtn;

  // Hero
  document.getElementById('hero-badge').querySelector('span').textContent = t.heroBadge;
  document.getElementById('hero-desc').innerHTML = t.heroDesc;
  document.getElementById('hero-dl-btn').textContent = t.heroDownload;
  document.getElementById('hero-gh-btn').textContent = t.heroGitHub;
  document.getElementById('hero-version').textContent = t.heroVersion;
  document.getElementById('screenshots-label').textContent = t.screenshotsLabel;

  // Features
  document.getElementById('features-label').textContent = t.featuresLabel;
  document.getElementById('features-title').textContent = t.featuresTitle;
  document.getElementById('features-desc').textContent = t.featuresDesc;
  const fGrid = document.getElementById('features-grid');
  fGrid.innerHTML = t.features.map(f => `
    <div class="feature-card fade-in">
      <span class="feature-icon">${f.icon}</span>
      <div class="feature-name">${f.name}</div>
      <div class="feature-desc">${f.desc}</div>
    </div>
  `).join('');

  // Games
  document.getElementById('games-label').textContent = t.gamesLabel;
  document.getElementById('games-title').textContent = t.gamesTitle;
  document.getElementById('games-desc').textContent = t.gamesDesc;
  const gGrid = document.getElementById('games-grid');
  gGrid.innerHTML = t.games.map(g => `
    <div class="game-card fade-in">
      ${g.img
        ? `<img class="game-card-img" src="${g.img}" alt="${g.title}" loading="lazy">`
        : `<div class="game-card-img-placeholder">⚔️</div>`}
      <div class="game-card-body">
        <span class="game-badge ${g.badgeClass}">${g.badge}</span>
        <div class="game-title">${g.title}</div>
        <div class="game-desc">${g.desc}</div>
      </div>
      <div class="game-accent-line" style="background:${g.color};opacity:0.6;box-shadow:0 0 8px ${g.color}40"></div>
    </div>
  `).join('');

  // Download
  document.getElementById('dl-label').textContent = t.dlLabel;
  document.getElementById('dl-title').textContent = t.dlTitle;
  document.getElementById('dl-desc').textContent = t.dlDesc;
  document.getElementById('dl-installer-label').textContent = t.dlInstaller;
  document.getElementById('dl-installer-sub').textContent = t.dlInstallerSub;
  document.getElementById('dl-portable-label').textContent = t.dlPortable;
  document.getElementById('dl-portable-sub').textContent = t.dlPortableSub;
  document.getElementById('dl-note').innerHTML = t.dlNote;

  // Community
  document.getElementById('com-label').textContent = t.comLabel;
  document.getElementById('com-title').textContent = t.comTitle;
  document.getElementById('com-desc').textContent = t.comDesc;
  document.getElementById('com-github').textContent = t.comGitHub;
  document.getElementById('com-telegram').textContent = t.comTelegram;
  document.getElementById('com-discord').textContent = t.comDiscord;
  document.getElementById('com-email').textContent = t.comEmail;

  // Footer
  document.getElementById('footer-rights').textContent = t.footerRights;
  document.getElementById('footer-prop').textContent = t.footerProp;

  // Re-observe new fade-in elements
  observeFadeIns();
}

// ─── Intersection Observer for fade-ins ─────────────────────────────────────
function observeFadeIns() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => io.observe(el));
}

// ─── Init ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      localStorage.setItem('ldl-lang', currentLang);
      render();
    });
  });

  render();
  observeFadeIns();

  // Support Email Link Trigger (ИСПРАВЛЕНО: ОТКРЫВАЕТ ССЫЛКУ)
  const emailCard = document.querySelector('.social-card.email');
  if (emailCard) {
    emailCard.addEventListener('click', () => {
      const toast = document.getElementById('toast');
      if (toast) {
        const msg = {
          ru: 'Открытие поддержки Gmail...',
          en: 'Opening Gmail support...',
          ua: 'Відкриття підтримки Gmail...'
        };
        toast.textContent = msg[currentLang];
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2500);
      }
    });
  }

  // Navbar scroll shrink
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(2,2,5,0.97)'
      : 'rgba(2,2,5,0.85)';
  });
});
