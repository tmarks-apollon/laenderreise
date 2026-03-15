const STATES = [
  { id: "bw", group: "states", name: "Baden-Württemberg", capital: "Stuttgart" },
  { id: "by", group: "states", name: "Bayern", capital: "München" },
  { id: "be", group: "states", name: "Berlin", capital: "Berlin" },
  { id: "bb", group: "states", name: "Brandenburg", capital: "Potsdam" },
  { id: "hb", group: "states", name: "Bremen", capital: "Bremen" },
  { id: "hh", group: "states", name: "Hamburg", capital: "Hamburg" },
  { id: "he", group: "states", name: "Hessen", capital: "Wiesbaden" },
  { id: "mv", group: "states", name: "Mecklenburg-Vorpommern", capital: "Schwerin" },
  { id: "ni", group: "states", name: "Niedersachsen", capital: "Hannover" },
  { id: "nw", group: "states", name: "Nordrhein-Westfalen", capital: "Düsseldorf" },
  { id: "rp", group: "states", name: "Rheinland-Pfalz", capital: "Mainz" },
  { id: "sl", group: "states", name: "Saarland", capital: "Saarbrücken" },
  { id: "sn", group: "states", name: "Sachsen", capital: "Dresden" },
  { id: "st", group: "states", name: "Sachsen-Anhalt", capital: "Magdeburg" },
  { id: "sh", group: "states", name: "Schleswig-Holstein", capital: "Kiel" },
  { id: "th", group: "states", name: "Thüringen", capital: "Erfurt" },
];

const NEIGHBORS = [
  { id: "dk", group: "neighbors", name: "Dänemark", capital: "Kopenhagen" },
  { id: "pl", group: "neighbors", name: "Polen", capital: "Warschau" },
  { id: "cz", group: "neighbors", name: "Tschechien", capital: "Prag" },
  { id: "at", group: "neighbors", name: "Österreich", capital: "Wien" },
  { id: "ch", group: "neighbors", name: "Schweiz", capital: "Bern" },
  { id: "fr", group: "neighbors", name: "Frankreich", capital: "Paris" },
  { id: "lu", group: "neighbors", name: "Luxemburg", capital: "Luxemburg" },
  { id: "be2", group: "neighbors", name: "Belgien", capital: "Brüssel" },
  { id: "nl", group: "neighbors", name: "Niederlande", capital: "Amsterdam" },
];

const CONTINENTS = [
  {
    id: "europe",
    group: "continents",
    name: "Europa",
    prompt: "Auf welchem Kontinent liegt Deutschland?",
    matchText: "Hier liegt Deutschland.",
    detail: "Europa ist der Kontinent, auf dem Deutschland liegt.",
    mapId: "europe",
  },
  {
    id: "asia",
    group: "continents",
    name: "Asien",
    prompt: "Welcher Kontinent ist der größte der Erde?",
    matchText: "Der größte Kontinent der Erde.",
    detail: "Asien ist der größte Kontinent der Erde.",
    mapId: "asia",
  },
  {
    id: "africa",
    group: "continents",
    name: "Afrika",
    prompt: "Auf welchem Kontinent liegt die Sahara?",
    matchText: "Hier liegt die Sahara.",
    detail: "Afrika ist der Kontinent, auf dem die Sahara liegt.",
    mapId: "africa",
  },
  {
    id: "north-america",
    group: "continents",
    name: "Nordamerika",
    prompt: "Auf welchem Kontinent liegen Kanada, die USA und Mexiko?",
    matchText: "Hier liegen Kanada, USA und Mexiko.",
    detail: "Nordamerika umfasst Kanada, die USA und Mexiko.",
    mapId: "north-america",
  },
  {
    id: "south-america",
    group: "continents",
    name: "Südamerika",
    aliases: ["Südamerika"],
    prompt: "Auf welchem Kontinent liegt Brasilien?",
    matchText: "Hier liegt Brasilien.",
    detail: "Südamerika ist der Kontinent, auf dem Brasilien liegt.",
    mapId: "south-america",
  },
  {
    id: "australia",
    group: "continents",
    name: "Australien",
    prompt: "Welcher Kontinent ist der kleinste in unserem 7-Kontinente-Modell?",
    matchText: "Der kleinste Kontinent in diesem Modell.",
    detail: "Australien ist im 7-Kontinente-Modell der kleinste Kontinent.",
    mapId: "australia",
  },
  {
    id: "antarctica",
    group: "continents",
    name: "Antarktis",
    aliases: ["Antarktika"],
    prompt: "Welcher Kontinent liegt am Südpol?",
    matchText: "Der eisige Kontinent am Südpol.",
    detail: "Die Antarktis ist der eisige Kontinent am Südpol.",
    mapId: "antarctica",
  },
];

const OCEANS = [
  {
    id: "pacific-ocean",
    group: "oceans",
    name: "Pazifischer Ozean",
    aliases: ["Pazifik"],
    prompt: "Welcher Ozean ist der größte der Erde?",
    matchText: "Der größte Ozean der Erde.",
    detail: "Der Pazifische Ozean ist der größte Ozean der Erde.",
    mapId: "pacific-ocean",
  },
  {
    id: "atlantic-ocean",
    group: "oceans",
    name: "Atlantischer Ozean",
    aliases: ["Atlantik"],
    prompt: "Welcher Ozean liegt zwischen Amerika und Europa sowie Afrika?",
    matchText: "Zwischen Amerika und Europa/Afrika.",
    detail: "Der Atlantische Ozean liegt zwischen Amerika und Europa sowie Afrika.",
    mapId: "atlantic-ocean",
  },
  {
    id: "indian-ocean",
    group: "oceans",
    name: "Indischer Ozean",
    prompt: "Welcher Ozean liegt zwischen Afrika, Asien und Australien?",
    matchText: "Zwischen Afrika, Asien und Australien.",
    detail: "Der Indische Ozean liegt zwischen Afrika, Asien und Australien.",
    mapId: "indian-ocean",
  },
  {
    id: "arctic-ocean",
    group: "oceans",
    name: "Arktischer Ozean",
    aliases: ["Nordpolarmeer"],
    prompt: "Welcher Ozean liegt rund um den Nordpol?",
    matchText: "Das Weltmeer rund um den Nordpol.",
    detail: "Der Arktische Ozean liegt rund um den Nordpol.",
    mapId: "arctic-ocean",
  },
  {
    id: "southern-ocean",
    group: "oceans",
    name: "Südlicher Ozean",
    aliases: ["Südlicher Ozean", "Suedpolarmeer", "Südpolarmeer"],
    prompt: "Welcher Ozean umgibt die Antarktis?",
    matchText: "Er umgibt die Antarktis.",
    detail: "Der Südliche Ozean umgibt die Antarktis.",
    mapId: "southern-ocean",
  },
];

const DATASETS = {
  states: STATES,
  neighbors: NEIGHBORS,
  continents: [...CONTINENTS, ...OCEANS],
  mixed: [...STATES, ...NEIGHBORS],
};

const MODE_INFO = {
  cards: {
    title: "Lernkarten",
    description: "Schaut euch eine Karte an, nennt die Antwort laut und dreht dann um. Perfekt zum gemeinsamen Wiederholen.",
  },
  quiz: {
    title: "Quizduell",
    description: "Vier Antwortmöglichkeiten, eine ist richtig. Für schnelle Erfolgserlebnisse und sichere Wiederholung.",
  },
  write: {
    title: "Schreibprofi",
    description: "Hier wird frei eingetippt. Das trainiert das aktive Erinnern besonders stark.",
  },
  memory: {
    title: "Memory",
    description: "Findet passende Paare aus Land und Hauptstadt. So verknüpft sich das Wissen spielerisch.",
  },
  map: {
    title: "Weltkarte",
    description: "Klickt auf der Karte den richtigen Kontinent oder Ozean an. Das verbindet Namen direkt mit der Weltkarte.",
  },
};

const TOPIC_LABELS = {
  states: "Bundesländer",
  neighbors: "Nachbarländer",
  continents: "Kontinente & Ozeane",
  mixed: "Gemischt",
};

const HINTS = {
  states: [
    "Denkt an die Landkarte von Deutschland: Der Norden, Westen, Osten und Süden helfen oft beim Erinnern.",
    "Viele Landeshauptstädte sind nicht die größten Städte. Genau das macht das Spiel spannend.",
    "Sprecht die Paare laut aus: Hessen - Wiesbaden, Rheinland-Pfalz - Mainz. Das merkt man sich besser.",
  ],
  neighbors: [
    "Deutschland hat genau neun Nachbarstaaten. Zählt sie ruhig einmal an der Karte entlang ab.",
    "Bei den Nachbarländern lohnt sich der Blick im Uhrzeigersinn um Deutschland herum.",
    "Wenn ihr die Hauptstädte mit Urlaub, Sprache oder Flaggen verknüpft, bleiben sie leichter hängen.",
  ],
  continents: [
    "Im Weltwissen-Modul übt ihr mit sieben Kontinenten und fünf Ozeanen.",
    "Sagt beim Kartenklick den Namen laut mit: So merkt man sich Lage und Begriff zusammen.",
    "Ozeane sind die großen Weltmeere zwischen den Kontinenten.",
  ],
  mixed: [
    "Im Mix tauchen Bundesländer und Nachbarländer durcheinander auf. Genau das macht euch richtig fit.",
    "Nach einer falschen Antwort gleich noch einmal laut richtig sagen: Das stärkt die Erinnerung.",
    "Kurze Runden sind oft besser als eine sehr lange. Zwei Minuten Pause hilft dem Kopf beim Merken.",
  ],
};

const BADGES = [
  { id: "start", label: "Reisestart", icon: "🧭", check: (stats) => stats.totalAnswered >= 1 },
  { id: "spark", label: "Sternesammler", icon: "⭐", check: (stats) => stats.stars >= 50 },
  { id: "streak", label: "Serienstar", icon: "🔥", check: (stats) => stats.bestStreak >= 5 },
  { id: "writer", label: "Schreibprofi", icon: "✍️", check: (stats) => stats.writeCorrect >= 5 },
  { id: "memory", label: "Merkmeister", icon: "🧠", check: (stats) => stats.memoryWins >= 1 },
  { id: "master", label: "Länderchampion", icon: "🏆", check: (stats) => stats.masteredCount >= 10 },
];

let audioContext = null;
let swRegistration = null;

const appState = {
  screen: "menu",
  updateReady: false,
  topic: "states",
  mode: "cards",
  progressGoal: 8,
  sessionAnswered: 0,
  currentCard: null,
  currentQuestion: null,
  memoryDeck: [],
  memoryFlipped: [],
  memoryMatches: 0,
  memoryTarget: 0,
  currentMapTarget: null,
  mapQueue: [],
  mapIndex: 0,
  secretClicks: 0,
  resetTimer: null,
  resetJustFinished: false,
  soundEnabled: loadSoundPreference(),
  unlockedBadges: new Set(),
  locked: false,
  stats: loadStats(),
};

const elements = {
  menuScreen: document.querySelector("#menu-screen"),
  playScreen: document.querySelector("#play-screen"),
  startGameBtn: document.querySelector("#start-game-btn"),
  backToMenuBtn: document.querySelector("#back-to-menu-btn"),
  updateBanner: document.querySelector("#update-banner"),
  reloadUpdateBtn: document.querySelector("#reload-update-btn"),
  soundToggleBtn: document.querySelector("#sound-toggle-btn"),
  soundToggleBtnPlay: document.querySelector("#sound-toggle-btn-play"),
  secretTrigger: document.querySelector("#secret-trigger"),
  secretPanel: document.querySelector("#secret-panel"),
  resetProgressBtn: document.querySelector("#reset-progress-btn"),
  resetStatus: document.querySelector("#reset-status"),
  selectedTopicLabel: document.querySelector("#selected-topic-label"),
  selectedModeLabel: document.querySelector("#selected-mode-label"),
  playTopicPill: document.querySelector("#play-topic-pill"),
  playModePill: document.querySelector("#play-mode-pill"),
  todayLabel: document.querySelector("#today-label"),
  starsCount: document.querySelector("#stars-count"),
  streakCount: document.querySelector("#streak-count"),
  bestCount: document.querySelector("#best-count"),
  masteredCount: document.querySelector("#mastered-count"),
  missionText: document.querySelector("#mission-text"),
  helperText: document.querySelector("#helper-text"),
  practiceList: document.querySelector("#practice-list"),
  badgesList: document.querySelector("#badges-list"),
  modeTitle: document.querySelector("#mode-title"),
  modeDescription: document.querySelector("#mode-description"),
  memoryHeadline: document.querySelector("#memory-headline"),
  progressFill: document.querySelector("#progress-fill"),
  progressLabel: document.querySelector("#progress-label"),
  topicButtons: [...document.querySelectorAll("#topic-toggle [data-topic]")],
  modeButtons: [...document.querySelectorAll("#mode-toggle [data-mode]")],
  modeViews: [...document.querySelectorAll(".mode-view")],
  flashcard: document.querySelector("#flashcard"),
  cardTag: document.querySelector("#card-tag"),
  cardQuestion: document.querySelector("#card-question"),
  cardAnswer: document.querySelector("#card-answer"),
  cardDetail: document.querySelector("#card-detail"),
  flipCardBtn: document.querySelector("#flip-card-btn"),
  knewCardBtn: document.querySelector("#knew-card-btn"),
  practiceCardBtn: document.querySelector("#practice-card-btn"),
  nextCardBtn: document.querySelector("#next-card-btn"),
  quizBadge: document.querySelector("#quiz-badge"),
  quizQuestion: document.querySelector("#quiz-question"),
  quizOptions: document.querySelector("#quiz-options"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  nextQuizBtn: document.querySelector("#next-quiz-btn"),
  writeBadge: document.querySelector("#write-badge"),
  writeQuestion: document.querySelector("#write-question"),
  writeForm: document.querySelector("#write-form"),
  writeInput: document.querySelector("#write-input"),
  hintBtn: document.querySelector("#hint-btn"),
  writeFeedback: document.querySelector("#write-feedback"),
  nextWriteBtn: document.querySelector("#next-write-btn"),
  memoryBoard: document.querySelector("#memory-board"),
  memoryFeedback: document.querySelector("#memory-feedback"),
  resetMemoryBtn: document.querySelector("#reset-memory-btn"),
  mapQuestion: document.querySelector("#map-question"),
  mapSubtext: document.querySelector("#map-subtext"),
  mapFeedback: document.querySelector("#map-feedback"),
  nextMapBtn: document.querySelector("#next-map-btn"),
  mapRegions: [...document.querySelectorAll("#world-map .map-region")],
};

function loadStats() {
  const fallback = defaultStats();

  try {
    const saved = JSON.parse(localStorage.getItem("laenderreise-stats"));
    return saved ? { ...fallback, ...saved, items: saved.items || {} } : fallback;
  } catch {
    return fallback;
  }
}

function defaultStats() {
  return {
    stars: 0,
    streak: 0,
    bestStreak: 0,
    totalAnswered: 0,
    writeCorrect: 0,
    memoryWins: 0,
    items: {},
  };
}

function loadSoundPreference() {
  try {
    const saved = localStorage.getItem("laenderreise-sound");
    return saved === null ? true : saved === "on";
  } catch {
    return true;
  }
}

function saveSoundPreference() {
  localStorage.setItem("laenderreise-sound", appState.soundEnabled ? "on" : "off");
}

function ensureAudioContext() {
  if (!("AudioContext" in window || "webkitAudioContext" in window)) {
    return null;
  }

  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {
      // Die App funktioniert auch ohne Ton.
    });
  }

  return audioContext;
}

function playToneSequence(notes, volume = 0.045) {
  if (!appState.soundEnabled) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;

  let offset = 0;
  notes.forEach(({ frequency, duration, type = "sine", gain = 1 }) => {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const start = ctx.currentTime + offset;
    const end = start + duration;

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gainNode.gain.setValueAtTime(0.0001, start);
    gainNode.gain.exponentialRampToValueAtTime(volume * gain, start + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(end);
    offset += duration * 0.95;
  });
}

function playSound(kind) {
  const patterns = {
    correct: [
      { frequency: 523.25, duration: 0.08, type: "triangle" },
      { frequency: 659.25, duration: 0.11, type: "triangle" },
    ],
    wrong: [
      { frequency: 320, duration: 0.12, type: "sine", gain: 0.75 },
      { frequency: 260, duration: 0.12, type: "sine", gain: 0.65 },
    ],
    celebrate: [
      { frequency: 523.25, duration: 0.08, type: "triangle" },
      { frequency: 659.25, duration: 0.08, type: "triangle" },
      { frequency: 783.99, duration: 0.14, type: "triangle" },
    ],
    reveal: [
      { frequency: 440, duration: 0.07, type: "sine", gain: 0.45 },
      { frequency: 554.37, duration: 0.09, type: "sine", gain: 0.4 },
    ],
    toggleOn: [
      { frequency: 392, duration: 0.06, type: "triangle" },
      { frequency: 523.25, duration: 0.08, type: "triangle" },
    ],
  };

  if (kind === "toggleOff") {
    const wasEnabled = appState.soundEnabled;
    appState.soundEnabled = true;
    playToneSequence(
      [
        { frequency: 392, duration: 0.06, type: "triangle", gain: 0.7 },
        { frequency: 293.66, duration: 0.08, type: "triangle", gain: 0.65 },
      ],
      0.04
    );
    appState.soundEnabled = wasEnabled;
    return;
  }

  if (patterns[kind]) {
    playToneSequence(patterns[kind]);
  }
}

function saveStats() {
  localStorage.setItem("laenderreise-stats", JSON.stringify(appState.stats));
}

function normalized(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ae/g, "a")
    .replace(/oe/g, "o")
    .replace(/ue/g, "u")
    .replace(/ss/g, "s")
    .replace(/[^a-z]/g, "");
}

function pretty(text) {
  return text
    .replace(/Ae/g, "Ä")
    .replace(/Oe/g, "Ö")
    .replace(/Ue/g, "Ü")
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, "ü");
}

function getMatchLabel(item) {
  if (item.group === "states" || item.group === "neighbors") {
    return item.capital;
  }
  return item.matchText;
}

function getAcceptedAnswers(question) {
  return [question.answer, ...(question.acceptedAnswers || [])];
}

function isCorrectAnswer(value, question) {
  return getAcceptedAnswers(question).some((answer) => normalized(value) === normalized(answer));
}

function refreshProgressGoal() {
  appState.progressGoal = appState.mode === "memory" ? Math.min(6, getPool().length) : Math.min(8, getPool().length);
}

function currentModeDescription() {
  if (appState.topic === "continents" && appState.mode === "cards") {
    return "Lernt Kontinente und Ozeane mit kurzen Merksätzen und sprecht die Antworten laut mit.";
  }
  if (appState.topic === "continents" && appState.mode === "memory") {
    return "Hier wird Begriff mit Merksatz verbunden. Das hilft besonders beim Wiedererkennen auf der Karte.";
  }
  return MODE_INFO[appState.mode].description;
}

function updateSelectionPreview() {
  elements.selectedTopicLabel.textContent = TOPIC_LABELS[appState.topic];
  elements.selectedModeLabel.textContent = MODE_INFO[appState.mode].title;
  elements.playTopicPill.textContent = TOPIC_LABELS[appState.topic];
  elements.playModePill.textContent = MODE_INFO[appState.mode].title;
}

function setUpdateBanner(visible) {
  appState.updateReady = visible;
  elements.updateBanner.hidden = !visible;
}

function updateSoundButtons() {
  const label = `Sound: ${appState.soundEnabled ? "an" : "aus"}`;
  elements.soundToggleBtn.textContent = label;
  elements.soundToggleBtnPlay.textContent = label;
}

function showScreen(screen) {
  appState.screen = screen;
  elements.menuScreen.classList.toggle("active", screen === "menu");
  elements.playScreen.classList.toggle("active", screen === "play");
}

function setSecretPanel(open) {
  elements.secretPanel.classList.toggle("visible", open);
  elements.secretPanel.setAttribute("aria-hidden", String(!open));
  if (!open) {
    elements.resetStatus.textContent = "";
  }
}

function revealSecretPanel() {
  appState.secretClicks += 1;
  if (appState.secretClicks >= 5) {
    setSecretPanel(true);
    elements.resetStatus.textContent = "Reset ist entsperrt. Zum Auslösen Taste gedrückt halten.";
    appState.secretClicks = 0;
  }
}

function cancelResetHold(message = "") {
  if (appState.resetTimer) {
    clearTimeout(appState.resetTimer);
    appState.resetTimer = null;
  }
  if (appState.resetJustFinished) {
    appState.resetJustFinished = false;
    return;
  }
  if (message) {
    elements.resetStatus.textContent = message;
  }
}

function resetProgress() {
  cancelResetHold();
  appState.resetJustFinished = true;
  localStorage.removeItem("laenderreise-stats");
  appState.stats = defaultStats();
  appState.sessionAnswered = 0;
  appState.memoryDeck = [];
  appState.memoryFlipped = [];
  appState.memoryMatches = 0;
  appState.memoryTarget = 0;
  appState.currentMapTarget = null;
  appState.mapQueue = [];
  appState.mapIndex = 0;
  elements.resetStatus.textContent = "Fortschritt gelöscht. Neue Testläufe starten jetzt wieder bei null.";
  appState.unlockedBadges = new Set();
  updateSelectionPreview();
  updateDashboard();

  if (appState.screen === "play") {
    if (appState.mode === "cards") renderCard();
    if (appState.mode === "quiz") renderQuizQuestion();
    if (appState.mode === "write") renderWriteQuestion();
    if (appState.mode === "memory") renderMemoryBoard();
    if (appState.mode === "map") renderMapTask(true);
  }
}

function startResetHold() {
  cancelResetHold();
  elements.resetStatus.textContent = "Weiter halten ... nach 2 Sekunden wird wirklich zurückgesetzt.";
  appState.resetTimer = window.setTimeout(resetProgress, 2000);
}

function toggleSound() {
  ensureAudioContext();
  const willEnable = !appState.soundEnabled;
  appState.soundEnabled = willEnable;
  saveSoundPreference();
  updateSoundButtons();
  playSound(willEnable ? "toggleOn" : "toggleOff");
}

function seedUnlockedBadges() {
  appState.unlockedBadges = new Set(
    BADGES.filter((badge) => badge.check(appState.stats)).map((badge) => badge.id)
  );
}

function formatDate() {
  const formatter = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  elements.todayLabel.textContent = formatter.format(new Date());
}

function getPool() {
  return DATASETS[appState.topic];
}

function getItemStats(id) {
  if (!appState.stats.items[id]) {
    appState.stats.items[id] = { correct: 0, wrong: 0, seen: 0 };
  }
  return appState.stats.items[id];
}

function weightedChoice(items) {
  const weighted = items.flatMap((item) => {
    const itemStats = getItemStats(item.id);
    const weight = Math.max(1, 1 + itemStats.wrong * 2 - itemStats.correct);
    return Array.from({ length: weight }, () => item);
  });
  return weighted[Math.floor(Math.random() * weighted.length)];
}

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function randomQuestion() {
  const pool = getPool();
  const item = weightedChoice(pool);

  if (appState.topic === "continents") {
    return {
      item,
      answerType: "name",
      answer: item.name,
      acceptedAnswers: item.aliases || [],
      badge: item.group === "oceans" ? "Ozeane" : "Kontinente",
      prompt: item.prompt,
      hint: `Die richtige Antwort beginnt mit ${pretty(item.name).slice(0, 1)}.`,
      explanation: pretty(item.detail),
    };
  }

  const askForCapital = Math.random() > 0.35;
  const isState = item.group === "states";
  const label = isState ? "Bundesland" : "Nachbarland";
  const badge = isState ? "Deutschland" : "Europa";

  if (askForCapital) {
    return {
      item,
      answerType: "capital",
      answer: item.capital,
      badge,
      prompt: `Wie heißt die Hauptstadt von ${pretty(item.name)}?`,
      hint: `Die gesuchte Hauptstadt beginnt mit ${pretty(item.capital).slice(0, 1)}.`,
      explanation: `${pretty(item.name)} gehört zur Gruppe ${label.toLowerCase()} - die Hauptstadt ist ${pretty(item.capital)}.`,
    };
  }

  return {
    item,
    answerType: "name",
    answer: item.name,
    badge,
    prompt: `${pretty(item.capital)} ist die Hauptstadt von welchem ${label.toLowerCase()}?`,
    hint: `Die richtige Antwort beginnt mit ${pretty(item.name).slice(0, 1)}.`,
    explanation: `${pretty(item.capital)} gehört zu ${pretty(item.name)}.`,
  };
}

function updateDashboard() {
  const masteredCount = Object.values(appState.stats.items).filter(
    (entry) => entry.correct >= 3 && entry.correct > entry.wrong
  ).length;

  appState.stats.masteredCount = masteredCount;

  elements.starsCount.textContent = appState.stats.stars;
  elements.streakCount.textContent = appState.stats.streak;
  elements.bestCount.textContent = appState.stats.bestStreak;
  elements.masteredCount.textContent = masteredCount;
  elements.missionText.textContent = missionText();
  elements.helperText.textContent = randomFrom(HINTS[appState.topic]);

  const weakItems = [...getPool()]
    .map((item) => ({
      item,
      score: getItemStats(item.id).wrong - getItemStats(item.id).correct,
    }))
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  elements.practiceList.innerHTML = "";
  if (!weakItems.length) {
    const li = document.createElement("li");
    li.textContent = "Noch keine Wackelkandidaten. Super Start.";
    elements.practiceList.append(li);
  } else {
    weakItems.forEach(({ item }) => {
      const li = document.createElement("li");
      li.textContent = `${pretty(item.name)} - ${pretty(getMatchLabel(item))}`;
      elements.practiceList.append(li);
    });
  }

  renderBadges();
  updateProgress();
  saveStats();
}

function renderBadges() {
  elements.badgesList.innerHTML = "";
  BADGES.forEach((badge) => {
    const unlocked = badge.check(appState.stats);
    if (unlocked && !appState.unlockedBadges.has(badge.id)) {
      appState.unlockedBadges.add(badge.id);
      if (appState.stats.totalAnswered > 0) {
        playSound("celebrate");
      }
    }
    const badgeEl = document.createElement("div");
    badgeEl.className = `badge${unlocked ? "" : " locked"}`;
    badgeEl.textContent = `${badge.icon} ${badge.label}`;
    elements.badgesList.append(badgeEl);
  });
}

function updateProgress() {
  const amount = Math.min(100, (appState.sessionAnswered / appState.progressGoal) * 100);
  elements.progressFill.style.width = `${amount}%`;
  elements.progressLabel.textContent = `${appState.sessionAnswered} / ${appState.progressGoal}`;
}

function missionText() {
  if (appState.mode === "memory") {
    return `Findet im Modus ${MODE_INFO[appState.mode].title} ${appState.progressGoal} passende Paare für ${TOPIC_LABELS[appState.topic]}.`;
  }
  if (appState.mode === "map") {
    return `Trefft im Modus ${MODE_INFO[appState.mode].title} ${appState.progressGoal} Aufgaben auf der Karte richtig.`;
  }
  return `Sammelt in ${MODE_INFO[appState.mode].title} ${appState.progressGoal} richtige Antworten für ${TOPIC_LABELS[appState.topic]}.`;
}

function randomFrom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function markAnswer(item, correct, stars) {
  const itemStats = getItemStats(item.id);
  itemStats.seen += 1;
  appState.stats.totalAnswered += 1;
  if (correct) {
    itemStats.correct += 1;
    appState.stats.stars += stars;
    appState.stats.streak += 1;
    appState.stats.bestStreak = Math.max(appState.stats.bestStreak, appState.stats.streak);
    appState.sessionAnswered += 1;
  } else {
    itemStats.wrong += 1;
    appState.stats.streak = 0;
  }
  updateDashboard();
}

function setMode(mode) {
  if (mode === "map" && appState.topic !== "continents") {
    return;
  }
  appState.mode = mode;
  appState.sessionAnswered = 0;
  refreshProgressGoal();
  elements.modeButtons.forEach((button) =>
    button.classList.toggle("active", button.dataset.mode === mode)
  );
  elements.modeViews.forEach((view) => view.classList.toggle("active", view.id === `${mode}-view`));
  elements.modeTitle.textContent = MODE_INFO[mode].title;
  elements.modeDescription.textContent = currentModeDescription();
  updateSelectionPreview();
  updateDashboard();

  if (mode === "cards") renderCard();
  if (mode === "quiz") renderQuizQuestion();
  if (mode === "write") renderWriteQuestion();
  if (mode === "memory") renderMemoryBoard();
  if (mode === "map") renderMapTask(true);
}

function setTopic(topic) {
  appState.topic = topic;
  appState.sessionAnswered = 0;
  refreshModeAvailability();
  elements.topicButtons.forEach((button) =>
    button.classList.toggle("active", button.dataset.topic === topic)
  );
  if (appState.mode === "map" && topic !== "continents") {
    setMode("cards");
    return;
  }
  refreshProgressGoal();
  elements.modeDescription.textContent = currentModeDescription();
  updateSelectionPreview();
  updateDashboard();

  if (appState.mode === "cards") renderCard();
  if (appState.mode === "quiz") renderQuizQuestion();
  if (appState.mode === "write") renderWriteQuestion();
  if (appState.mode === "memory") renderMemoryBoard();
  if (appState.mode === "map") renderMapTask(true);
}

function renderCard() {
  const item = weightedChoice(getPool());
  appState.currentCard = item;
  elements.flashcard.classList.remove("flipped");
  elements.cardTag.textContent =
    item.group === "states"
      ? "Bundesland"
      : item.group === "neighbors"
        ? "Nachbarland"
        : item.group === "oceans"
          ? "Ozean"
          : "Kontinent";
  elements.cardQuestion.textContent = pretty(item.name);
  elements.cardAnswer.textContent = pretty(getMatchLabel(item));
  if (item.group === "states") {
    elements.cardDetail.textContent = `${pretty(item.capital)} ist die Landeshauptstadt von ${pretty(item.name)}.`;
  } else if (item.group === "neighbors") {
    elements.cardDetail.textContent = `${pretty(item.capital)} ist die Hauptstadt von Deutschlands Nachbarland ${pretty(item.name)}.`;
  } else {
    elements.cardDetail.textContent = pretty(item.detail);
  }
}

function renderQuizQuestion() {
  appState.currentQuestion = randomQuestion();
  elements.quizBadge.textContent = appState.currentQuestion.badge;
  elements.quizQuestion.textContent = appState.currentQuestion.prompt;
  elements.quizFeedback.textContent = "";
  elements.nextQuizBtn.disabled = true;

  const pool = getPool();
  const distractors = shuffle(
    pool
      .filter((entry) => entry.id !== appState.currentQuestion.item.id)
      .map((entry) =>
        appState.currentQuestion.answerType === "capital"
          ? entry.capital
          : entry.name
      )
  ).slice(0, 3);

  const options = shuffle([appState.currentQuestion.answer, ...distractors]);
  elements.quizOptions.innerHTML = "";

  options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = pretty(option);
    button.addEventListener("click", () => scoreQuizAnswer(option, button));
    elements.quizOptions.append(button);
  });
}

function scoreQuizAnswer(option, button) {
  const correct = normalized(option) === normalized(appState.currentQuestion.answer);
  const allButtons = [...elements.quizOptions.querySelectorAll("button")];
  allButtons.forEach((btn) => {
    btn.disabled = true;
    if (normalized(btn.textContent) === normalized(appState.currentQuestion.answer)) {
      btn.classList.add("correct");
    }
  });
  if (!correct) {
    button.classList.add("wrong");
  }
  markAnswer(appState.currentQuestion.item, correct, 10);
  playSound(correct ? "correct" : "wrong");
  elements.quizFeedback.textContent = correct
    ? `Richtig. ${appState.currentQuestion.explanation}`
    : `Fast. ${appState.currentQuestion.explanation}`;
  elements.nextQuizBtn.disabled = false;
}

function renderWriteQuestion() {
  appState.currentQuestion = randomQuestion();
  elements.writeBadge.textContent = `${appState.currentQuestion.badge} · Freitext`;
  elements.writeQuestion.textContent = appState.currentQuestion.prompt;
  elements.writeFeedback.textContent = "";
  elements.writeInput.value = "";
  elements.writeInput.disabled = false;
  elements.nextWriteBtn.disabled = true;
}

function submitWriteAnswer(event) {
  event.preventDefault();
  const answer = elements.writeInput.value.trim();
  if (!answer) return;

  const correct = isCorrectAnswer(answer, appState.currentQuestion);
  markAnswer(appState.currentQuestion.item, correct, 15);
  playSound(correct ? "correct" : "wrong");
  if (correct) {
    appState.stats.writeCorrect += 1;
  }
  elements.writeFeedback.textContent = correct
    ? `Perfekt. ${appState.currentQuestion.explanation}`
    : `Noch nicht. Richtig ist ${pretty(appState.currentQuestion.answer)}.`;
  elements.writeInput.disabled = true;
  elements.nextWriteBtn.disabled = false;
  updateDashboard();
}

function showHint() {
  elements.writeFeedback.textContent = appState.currentQuestion.hint;
}

function buildMemoryDeck() {
  const selection = shuffle(getPool()).slice(0, appState.progressGoal);
  appState.memoryTarget = selection.length;
  return shuffle(
    selection.flatMap((item) => [
      { pairId: item.id, label: pretty(item.name), role: "name" },
      { pairId: item.id, label: pretty(getMatchLabel(item)), role: "match" },
    ])
  );
}

function renderMemoryBoard() {
  refreshProgressGoal();
  appState.memoryDeck = buildMemoryDeck();
  appState.memoryFlipped = [];
  appState.memoryMatches = 0;
  appState.locked = false;
  elements.memoryHeadline.textContent =
    appState.topic === "continents"
      ? "Finde jeweils das passende Paar aus Begriff und Merksatz."
      : "Finde jeweils das passende Paar aus Land und Hauptstadt.";
  elements.memoryFeedback.textContent =
    appState.topic === "continents"
      ? "Merkt euch gut, welcher Kontinent oder Ozean zu welchem Hinweis passt."
      : "Merkt euch gut, wo Land und Hauptstadt liegen.";
  elements.memoryBoard.innerHTML = "";

  appState.memoryDeck.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "memory-card";
    button.dataset.index = String(index);
    button.innerHTML = `
      <div class="memory-card-inner">
        <div class="memory-face memory-front">?</div>
        <div class="memory-face memory-back">${card.label}</div>
      </div>
    `;
    button.addEventListener("click", () => flipMemoryCard(button, index));
    elements.memoryBoard.append(button);
  });
}

function flipMemoryCard(button, index) {
  if (appState.locked || button.classList.contains("revealed") || button.classList.contains("matched")) {
    return;
  }

  button.classList.add("revealed");
  appState.memoryFlipped.push({ button, card: appState.memoryDeck[index] });

  if (appState.memoryFlipped.length < 2) return;

  const [first, second] = appState.memoryFlipped;
  const isMatch =
    first.card.pairId === second.card.pairId && first.card.role !== second.card.role;

  if (isMatch) {
    first.button.classList.add("matched");
    second.button.classList.add("matched");
    appState.memoryFlipped = [];
    appState.memoryMatches += 1;
    appState.stats.stars += 6;
    playSound("correct");
    elements.memoryFeedback.textContent = "Treffer. Das Paar passt zusammen.";
    updateDashboard();

    if (appState.memoryMatches === appState.memoryTarget) {
      appState.stats.memoryWins += 1;
      appState.sessionAnswered = appState.progressGoal;
      appState.stats.bestStreak = Math.max(appState.stats.bestStreak, appState.stats.streak);
      playSound("celebrate");
      elements.memoryFeedback.textContent = "Geschafft. Alle Paare gefunden.";
      updateDashboard();
    }
    return;
  }

  appState.locked = true;
  playSound("wrong");
  elements.memoryFeedback.textContent = "Noch kein Paar. Dreht weiter.";
  setTimeout(() => {
    first.button.classList.remove("revealed");
    second.button.classList.remove("revealed");
    appState.memoryFlipped = [];
    appState.locked = false;
  }, 800);
}

function getMapLabel(mapId) {
  const item = DATASETS.continents.find((entry) => entry.mapId === mapId);
  return item ? pretty(item.name) : "dieser Bereich";
}

function refreshModeAvailability() {
  elements.modeButtons.forEach((button) => {
    if (button.dataset.mode === "map") {
      button.disabled = appState.topic !== "continents";
    }
  });
}

function startGame() {
  showScreen("play");
  if (appState.mode === "cards") renderCard();
  if (appState.mode === "quiz") renderQuizQuestion();
  if (appState.mode === "write") renderWriteQuestion();
  if (appState.mode === "memory") renderMemoryBoard();
  if (appState.mode === "map") renderMapTask(true);
}

function promptForUpdate(registration) {
  swRegistration = registration;
  setUpdateBanner(true);
}

function getWorkerVersion(worker) {
  return new Promise((resolve) => {
    if (!worker) {
      resolve(null);
      return;
    }

    const channel = new MessageChannel();
    channel.port1.onmessage = (event) => {
      resolve(event.data?.version || null);
    };

    worker.postMessage({ type: "GET_VERSION" }, [channel.port2]);
  });
}

async function maybePromptForUpdate(registration) {
  if (!registration?.waiting) {
    setUpdateBanner(false);
    return;
  }

  const [waitingVersion, activeVersion] = await Promise.all([
    getWorkerVersion(registration.waiting),
    getWorkerVersion(registration.active),
  ]);

  if (waitingVersion && waitingVersion !== activeVersion) {
    promptForUpdate(registration);
    return;
  }

  setUpdateBanner(false);
}

function watchInstallingWorker(worker, registration) {
  worker.addEventListener("statechange", async () => {
    if (worker.state === "installed" && navigator.serviceWorker.controller) {
      await maybePromptForUpdate(registration);
    }
  });
}

function activateUpdate() {
  if (!swRegistration || !swRegistration.waiting) {
    setUpdateBanner(false);
    return;
  }
  setUpdateBanner(false);
  swRegistration.waiting.postMessage({ type: "SKIP_WAITING" });
}

function clearMapState() {
  elements.mapRegions.forEach((region) => region.classList.remove("correct", "wrong"));
}

function renderMapTask(resetQueue = false) {
  refreshProgressGoal();
  if (resetQueue || !appState.mapQueue.length) {
    appState.mapQueue = shuffle(getPool()).slice(0, appState.progressGoal);
    appState.mapIndex = 0;
    appState.sessionAnswered = 0;
  }

  clearMapState();
  elements.nextMapBtn.disabled = true;
  elements.nextMapBtn.textContent = "Nächste Aufgabe";

  const target = appState.mapQueue[appState.mapIndex];
  if (!target) {
    appState.currentMapTarget = null;
    elements.mapQuestion.textContent = "Weltreise geschafft.";
    elements.mapSubtext.textContent = "Startet gern gleich die nächste Runde.";
    elements.mapFeedback.textContent = "Super. Ihr habt alle Aufgaben dieser Kartenrunde gelöst.";
    elements.nextMapBtn.disabled = false;
    elements.nextMapBtn.textContent = "Neue Runde";
    return;
  }

  appState.currentMapTarget = target;
  elements.mapQuestion.textContent = `Klicke auf ${pretty(target.name)}.`;
  elements.mapSubtext.textContent =
    target.group === "oceans"
      ? "Suche das richtige Weltmeer auf der Karte."
      : "Suche den richtigen Kontinent auf der Karte.";
  elements.mapFeedback.textContent = "";
}

function handleMapChoice(region) {
  if (!appState.currentMapTarget || elements.nextMapBtn.disabled === false) {
    return;
  }

  const isCorrect = region.dataset.id === appState.currentMapTarget.mapId;
  clearMapState();
  region.classList.add(isCorrect ? "correct" : "wrong");
  markAnswer(appState.currentMapTarget, isCorrect, 12);
  playSound(isCorrect ? "correct" : "wrong");

  if (isCorrect) {
    elements.mapFeedback.textContent = `Richtig. ${pretty(appState.currentMapTarget.detail)}`;
    appState.mapIndex += 1;
    if (appState.mapIndex >= appState.mapQueue.length) {
      appState.currentMapTarget = null;
      elements.mapQuestion.textContent = "Weltreise geschafft.";
      elements.mapSubtext.textContent = "Ihr habt alle Kontinente und Ozeane dieser Runde gefunden.";
      playSound("celebrate");
      elements.mapFeedback.textContent = `Super. ${pretty(region.dataset.id.includes("ocean") ? "Auch die Weltmeere sitzen schon gut." : "Die Kontinente sitzen schon gut.")}`;
      elements.nextMapBtn.textContent = "Neue Runde";
    }
    elements.nextMapBtn.disabled = false;
    return;
  }

  elements.mapFeedback.textContent = `Das ist ${getMapLabel(region.dataset.id)}. Gesucht war ${pretty(appState.currentMapTarget.name)}.`;
}

function attachEvents() {
  elements.topicButtons.forEach((button) => {
    button.addEventListener("click", () => setTopic(button.dataset.topic));
  });

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  elements.flipCardBtn.addEventListener("click", () => {
    ensureAudioContext();
    elements.flashcard.classList.add("flipped");
    playSound("reveal");
  });

  elements.knewCardBtn.addEventListener("click", () => {
    markAnswer(appState.currentCard, true, 5);
    playSound("correct");
    renderCard();
  });

  elements.practiceCardBtn.addEventListener("click", () => {
    markAnswer(appState.currentCard, false, 0);
    playSound("wrong");
    renderCard();
  });

  elements.nextCardBtn.addEventListener("click", renderCard);
  elements.nextQuizBtn.addEventListener("click", renderQuizQuestion);
  elements.writeForm.addEventListener("submit", submitWriteAnswer);
  elements.hintBtn.addEventListener("click", showHint);
  elements.nextWriteBtn.addEventListener("click", renderWriteQuestion);
  elements.resetMemoryBtn.addEventListener("click", renderMemoryBoard);
  elements.startGameBtn.addEventListener("click", startGame);
  elements.backToMenuBtn.addEventListener("click", () => showScreen("menu"));
  elements.reloadUpdateBtn.addEventListener("click", activateUpdate);
  elements.soundToggleBtn.addEventListener("click", toggleSound);
  elements.soundToggleBtnPlay.addEventListener("click", toggleSound);
  elements.secretTrigger.addEventListener("click", revealSecretPanel);
  elements.resetProgressBtn.addEventListener("mousedown", startResetHold);
  elements.resetProgressBtn.addEventListener("touchstart", startResetHold, { passive: true });
  elements.resetProgressBtn.addEventListener("mouseup", () =>
    cancelResetHold("Reset abgebrochen. Für einen echten Reset bitte wirklich gedrückt halten.")
  );
  elements.resetProgressBtn.addEventListener("mouseleave", () => cancelResetHold());
  elements.resetProgressBtn.addEventListener("touchend", () =>
    cancelResetHold("Reset abgebrochen. Für einen echten Reset bitte wirklich gedrückt halten.")
  );
  elements.resetProgressBtn.addEventListener("touchcancel", () => cancelResetHold());
  elements.nextMapBtn.addEventListener("click", () => renderMapTask(appState.currentMapTarget === null));
  elements.mapRegions.forEach((region) => {
    region.addEventListener("click", () => handleMapChoice(region));
    region.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleMapChoice(region);
      }
    });
  });
}

function init() {
  formatDate();
  attachEvents();
  refreshModeAvailability();
  refreshProgressGoal();
  updateSelectionPreview();
  updateSoundButtons();
  seedUnlockedBadges();
  updateDashboard();
  setUpdateBanner(false);
  setSecretPanel(false);
  setMode("cards");
  setTopic("states");
  showScreen("menu");
}

init();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    let refreshing = false;

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });

    navigator.serviceWorker
      .register("./sw.js")
      .then(async (registration) => {
        swRegistration = registration;

        await maybePromptForUpdate(registration);

        registration.addEventListener("updatefound", () => {
          if (registration.installing) {
            watchInstallingWorker(registration.installing, registration);
          }
        });
      })
      .catch(() => {
        // Die App funktioniert auch ohne Service Worker weiter.
      });
  });
}
