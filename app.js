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

const MAP_CONFIG = {
  states: {
    badge: "Interaktive Deutschlandkarte",
    image: "./assets/maps/germany-states-blank.png",
    alt: "Karte Deutschlands mit den 16 Bundesländern",
    legendTitle: "Deutschlandkarte",
    legendText:
      "Mal sucht ihr direkt nach dem Bundesland, mal über seine Hauptstadt. Kleine Länder haben bewusst etwas größere Tippfelder, damit die Karte auf dem iPad entspannter spielbar bleibt.",
    hotspots: [
      { id: "sh", label: "Schleswig-Holstein", x: 58, y: 8, w: 18, h: 8 },
      { id: "hh", label: "Hamburg", x: 55.5, y: 15.5, w: 11, h: 7 },
      { id: "mv", label: "Mecklenburg-Vorpommern", x: 77, y: 13, w: 21, h: 10 },
      { id: "hb", label: "Bremen", x: 35, y: 21, w: 10, h: 7 },
      { id: "ni", label: "Niedersachsen", x: 42, y: 27, w: 26, h: 19 },
      { id: "be", label: "Berlin", x: 70.5, y: 26, w: 10, h: 7 },
      { id: "bb", label: "Brandenburg", x: 75, y: 31, w: 21, h: 17 },
      { id: "st", label: "Sachsen-Anhalt", x: 58.5, y: 36, w: 17, h: 12 },
      { id: "nw", label: "Nordrhein-Westfalen", x: 20, y: 38, w: 22, h: 16 },
      { id: "he", label: "Hessen", x: 35.5, y: 50, w: 16, h: 13 },
      { id: "th", label: "Thüringen", x: 54, y: 51, w: 14, h: 11 },
      { id: "sn", label: "Sachsen", x: 68.5, y: 51.5, w: 19, h: 12 },
      { id: "rp", label: "Rheinland-Pfalz", x: 26, y: 60, w: 15, h: 13 },
      { id: "sl", label: "Saarland", x: 18, y: 66, w: 11, h: 9 },
      { id: "bw", label: "Baden-Württemberg", x: 34, y: 80, w: 23, h: 18 },
      { id: "by", label: "Bayern", x: 66, y: 79, w: 32, h: 20 },
    ],
  },
  continents: {
    badge: "Interaktive Weltkarte",
    image: "./assets/maps/world-oceans.svg",
    alt: "Weltkarte mit Kontinenten und Ozeanen",
    legendTitle: "Weltkarte",
    legendText:
      "Der Pazifik hat zwei Klickfelder, weil er links und rechts auf der Weltkarte zu sehen ist. So bleibt die Lage realistischer.",
    hotspots: [
      { id: "arctic-ocean", label: "Arktischer Ozean", x: 50, y: 7, w: 78, h: 10 },
      { id: "pacific-ocean", label: "Pazifischer Ozean", x: 8, y: 43, w: 12, h: 37 },
      { id: "pacific-ocean", label: "Pazifischer Ozean", x: 94, y: 43, w: 10, h: 34 },
      { id: "atlantic-ocean", label: "Atlantischer Ozean", x: 40, y: 45, w: 15, h: 31 },
      { id: "indian-ocean", label: "Indischer Ozean", x: 68, y: 54, w: 17, h: 18 },
      { id: "southern-ocean", label: "Südlicher Ozean", x: 50, y: 79, w: 70, h: 13 },
      { id: "north-america", label: "Nordamerika", x: 19, y: 28, w: 22, h: 21 },
      { id: "south-america", label: "Südamerika", x: 30, y: 58, w: 14, h: 24 },
      { id: "europe", label: "Europa", x: 51, y: 24, w: 10, h: 10 },
      { id: "africa", label: "Afrika", x: 51, y: 46, w: 14, h: 21 },
      { id: "asia", label: "Asien", x: 69, y: 29, w: 31, h: 25 },
      { id: "australia", label: "Australien", x: 82, y: 64, w: 13, h: 11 },
      { id: "antarctica", label: "Antarktis", x: 50, y: 93, w: 55, h: 8 },
    ],
  },
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
    title: "Kartenreise",
    description: "Klickt auf der Karte den richtigen Bereich an. Das verbindet Namen direkt mit dem passenden Ort.",
  },
};

const MAP_VARIANT_INFO = {
  states: {
    shortTitle: "Karte: Länder",
    fullTitle: "Kartenreise · Länder finden",
    badgeTitle: "Interaktive Deutschlandkarte · Länder",
    legendTitle: "Deutschlandkarte · Länder",
  },
  capitals: {
    shortTitle: "Karte: Hauptstädte",
    fullTitle: "Kartenreise · Hauptstädte zuordnen",
    badgeTitle: "Interaktive Deutschlandkarte · Hauptstädte",
    legendTitle: "Deutschlandkarte · Hauptstädte",
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
  topic: "states",
  mode: "cards",
  mapVariant: "states",
  mobileSidebarOpen: false,
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
  recentCardIds: {},
  recentMemoryIds: {},
  secretClicks: 0,
  soundEnabled: loadSoundPreference(),
  unlockedBadges: new Set(),
  locked: false,
  stats: loadStats(),
};

const elements = {
  menuScreen: document.querySelector("#menu-screen"),
  playScreen: document.querySelector("#play-screen"),
  mobileSidebarToggle: document.querySelector("#mobile-sidebar-toggle"),
  startGameBtn: document.querySelector("#start-game-btn"),
  backToMenuBtn: document.querySelector("#back-to-menu-btn"),
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
  playSidebar: document.querySelector("#play-sidebar"),
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
  mapBadge: document.querySelector("#map-badge"),
  mapFrame: document.querySelector("#map-frame"),
  mapBaseImage: document.querySelector("#map-base-image"),
  mapHotspots: document.querySelector("#map-hotspots"),
  mapLegendTitle: document.querySelector("#map-legend-title"),
  mapLegendText: document.querySelector("#map-legend-text"),
  mapVariantToggle: document.querySelector("#map-variant-toggle"),
  mapVariantButtons: [...document.querySelectorAll("[data-map-variant]")],
  mapQuestion: document.querySelector("#map-question"),
  mapSubtext: document.querySelector("#map-subtext"),
  mapFeedback: document.querySelector("#map-feedback"),
  nextMapBtn: document.querySelector("#next-map-btn"),
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
  if (appState.topic === "states" && appState.mode === "map") {
    return appState.mapVariant === "capitals"
      ? "Hier wird jede Hauptstadt gezielt ihrem Bundesland zugeordnet. Das ist klarer und stärkt die Verknüpfung noch besser."
      : "Hier wird nur die Lage der Bundesländer geübt. So bleibt der Kartenmodus ruhig und übersichtlich.";
  }
  if (appState.topic === "continents" && appState.mode === "cards") {
    return "Lernt Kontinente und Ozeane mit kurzen Merksätzen und sprecht die Antworten laut mit.";
  }
  if (appState.topic === "continents" && appState.mode === "memory") {
    return "Hier wird Begriff mit Merksatz verbunden. Das hilft besonders beim Wiedererkennen auf der Karte.";
  }
  if (appState.topic === "continents" && appState.mode === "map") {
    return "Die Weltkarte trainiert Lagegefühl und Namen zusammen. So wird aus Begriffslernen echtes Kartenwissen.";
  }
  return MODE_INFO[appState.mode].description;
}

function currentModeTitle() {
  if (appState.mode === "map" && appState.topic === "states") {
    return MAP_VARIANT_INFO[appState.mapVariant].fullTitle;
  }
  return MODE_INFO[appState.mode].title;
}

function currentMapBadgeTitle() {
  if (appState.topic === "states") {
    return MAP_VARIANT_INFO[appState.mapVariant].badgeTitle;
  }
  return getMapConfig()?.badge || MODE_INFO.map.title;
}

function currentMapLegendTitle() {
  if (appState.topic === "states") {
    return MAP_VARIANT_INFO[appState.mapVariant].legendTitle;
  }
  return getMapConfig()?.legendTitle || "Karte";
}

function updateSelectionPreview() {
  elements.selectedTopicLabel.textContent = TOPIC_LABELS[appState.topic];
  elements.selectedModeLabel.textContent =
    appState.mode === "map" && appState.topic === "states"
      ? MAP_VARIANT_INFO[appState.mapVariant].fullTitle
      : MODE_INFO[appState.mode].title;
  elements.playTopicPill.textContent = TOPIC_LABELS[appState.topic];
  elements.playModePill.textContent =
    appState.mode === "map" && appState.topic === "states"
      ? MAP_VARIANT_INFO[appState.mapVariant].shortTitle
      : MODE_INFO[appState.mode].title;
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
  if (screen !== "play") {
    setMobileSidebarOpen(false);
  }
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
    elements.resetStatus.textContent = "Reset ist entsperrt.";
    appState.secretClicks = 0;
  }
}

function resetProgress() {
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
  appState.recentCardIds = {};
  appState.recentMemoryIds = {};
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

function preventZoomGestures() {
  ["gesturestart", "gesturechange", "gestureend"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => event.preventDefault(), { passive: false });
  });
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

function getMapConfig(topic = appState.topic) {
  return MAP_CONFIG[topic] || null;
}

function mapModeAvailable(topic = appState.topic) {
  return Boolean(getMapConfig(topic));
}

function getMapRegions() {
  return [...elements.mapHotspots.querySelectorAll(".map-hotspot")];
}

function stateMapLegendText() {
  return appState.mapVariant === "capitals"
    ? "Hier sucht ihr immer das Bundesland zu einer Hauptstadt. So wird die Hauptstadt gezielt mit der Lage verknüpft."
    : "Hier sucht ihr nur die Namen der Bundesländer auf der Karte. Das ist der ruhige Kartenmodus zum Lage-Lernen.";
}

function refreshMapVariantUI() {
  const showVariants = appState.mode === "map" && appState.topic === "states";
  elements.mapVariantToggle.classList.toggle("visible", showVariants);
  elements.mapVariantToggle.setAttribute("aria-hidden", String(!showVariants));
  elements.mapVariantButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mapVariant === appState.mapVariant);
  });
}

function setMobileSidebarOpen(open) {
  appState.mobileSidebarOpen = open;
  elements.playSidebar.classList.toggle("open", open);
  elements.mobileSidebarToggle.setAttribute("aria-expanded", String(open));
  elements.mobileSidebarToggle.textContent = open
    ? "Merkhilfe & Fortschritt ausblenden"
    : "Merkhilfe & Fortschritt einblenden";
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

function drawCardItem(items) {
  const historyKey = appState.topic;
  const recentIds = appState.recentCardIds[historyKey] || [];
  const historyLimit = Math.max(1, Math.min(4, items.length - 1));
  const availableItems = items.filter((item) => !recentIds.includes(item.id));
  const pool = availableItems.length ? availableItems : items;
  const choice = weightedChoice(pool);

  appState.recentCardIds[historyKey] = [...recentIds, choice.id].slice(-historyLimit);
  return choice;
}

function drawMemorySelection(items, amount) {
  const historyKey = appState.topic;
  const recentIds = appState.recentMemoryIds[historyKey] || [];
  const targetAmount = Math.min(amount, items.length);
  const freshItems = shuffle(items.filter((item) => !recentIds.includes(item.id))).slice(0, targetAmount);

  if (freshItems.length < targetAmount) {
    const fallbackItems = shuffle(
      items.filter((item) => !freshItems.some((selected) => selected.id === item.id))
    ).slice(0, targetAmount - freshItems.length);
    freshItems.push(...fallbackItems);
  }

  const historyLimit = Math.max(targetAmount, Math.min(items.length - 1, targetAmount * 2));
  appState.recentMemoryIds[historyKey] = [...recentIds, ...freshItems.map((item) => item.id)].slice(
    -historyLimit
  );
  return freshItems;
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
  if (mode === "map" && !mapModeAvailable()) {
    return;
  }
  appState.mode = mode;
  appState.sessionAnswered = 0;
  refreshProgressGoal();
  elements.modeButtons.forEach((button) =>
    button.classList.toggle("active", button.dataset.mode === mode)
  );
  elements.modeViews.forEach((view) => view.classList.toggle("active", view.id === `${mode}-view`));
  elements.modeTitle.textContent = currentModeTitle();
  elements.modeDescription.textContent = currentModeDescription();
  refreshMapVariantUI();
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
  if (appState.mode === "map" && !mapModeAvailable(topic)) {
    setMode("cards");
    return;
  }
  refreshProgressGoal();
  elements.modeTitle.textContent = currentModeTitle();
  elements.modeDescription.textContent = currentModeDescription();
  refreshMapVariantUI();
  updateSelectionPreview();
  updateDashboard();

  if (appState.mode === "cards") renderCard();
  if (appState.mode === "quiz") renderQuizQuestion();
  if (appState.mode === "write") renderWriteQuestion();
  if (appState.mode === "memory") renderMemoryBoard();
  if (appState.mode === "map") renderMapTask(true);
}

function setMapVariant(variant) {
  if (!MAP_VARIANT_INFO[variant] || appState.mapVariant === variant) {
    refreshMapVariantUI();
    return;
  }

  appState.mapVariant = variant;
  appState.mapQueue = [];
  appState.mapIndex = 0;
  appState.currentMapTarget = null;
  elements.modeTitle.textContent = currentModeTitle();
  elements.modeDescription.textContent = currentModeDescription();
  refreshMapVariantUI();
  updateSelectionPreview();

  if (appState.mode === "map" && appState.topic === "states") {
    renderMapTask(true);
  }
}

function renderCard() {
  const item = drawCardItem(getPool());
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
  const selection = drawMemorySelection(getPool(), appState.progressGoal);
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
  const config = getMapConfig();
  const hotspot = config?.hotspots.find((entry) => entry.id === mapId);
  if (hotspot) return hotspot.label;

  const item = [...STATES, ...DATASETS.continents].find(
    (entry) => entry.id === mapId || entry.mapId === mapId
  );
  return item ? pretty(item.name) : "dieser Bereich";
}

function refreshModeAvailability() {
  elements.modeButtons.forEach((button) => {
    if (button.dataset.mode === "map") {
      button.disabled = !mapModeAvailable();
    }
  });
}

function renderMapSurface() {
  const config = getMapConfig();
  if (!config) return;

  elements.mapBadge.textContent = currentMapBadgeTitle();
  elements.mapLegendTitle.textContent = currentMapLegendTitle();
  elements.mapLegendText.textContent =
    appState.topic === "states" ? stateMapLegendText() : config.legendText;
  elements.mapFrame.dataset.map = appState.topic;
  elements.mapBaseImage.src = config.image;
  elements.mapBaseImage.alt = config.alt;
  elements.mapHotspots.innerHTML = "";

  config.hotspots.forEach((hotspot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "map-hotspot";
    button.dataset.id = hotspot.id;
    button.setAttribute("aria-label", hotspot.label);
    button.style.setProperty("--x", hotspot.x);
    button.style.setProperty("--y", hotspot.y);
    button.style.setProperty("--w", hotspot.w);
    button.style.setProperty("--h", hotspot.h);
    button.innerHTML = `<span class="map-hotspot-label">${hotspot.label}</span>`;
    elements.mapHotspots.append(button);
  });
}

function buildMapQueue() {
  return shuffle(getPool())
    .slice(0, appState.progressGoal)
    .map((item) => {
      if (appState.topic === "states") {
        const askForCapital = appState.mapVariant === "capitals";
        return {
          item,
          mapId: item.id,
          label: askForCapital
            ? `das Bundesland mit der Hauptstadt ${pretty(item.capital)}`
            : pretty(item.name),
          prompt: askForCapital
            ? `Klicke auf das Bundesland mit der Hauptstadt ${pretty(item.capital)}.`
            : `Klicke auf ${pretty(item.name)}.`,
          subtext: askForCapital
            ? "Ordne die Hauptstadt auf der Deutschlandkarte dem richtigen Bundesland zu."
            : "Suche auf der Deutschlandkarte das passende Bundesland.",
          feedback: `${pretty(item.capital)} ist die Hauptstadt von ${pretty(item.name)}.`,
          completionText:
            appState.mapVariant === "capitals"
              ? "Super. Ihr habt die Hauptstädte dieser Runde sicher zugeordnet."
              : "Super. Ihr habt die Bundesländer dieser Kartenrunde sicher gefunden.",
          finishSubtext:
            appState.mapVariant === "capitals"
              ? "Ihr habt alle Hauptstädte dieser Runde richtig zugeordnet."
              : "Ihr habt alle Bundesländer dieser Runde gefunden.",
          celebrateText:
            appState.mapVariant === "capitals"
              ? "Super. Die Hauptstädte und ihre Bundesländer sitzen schon richtig gut."
              : "Super. Die Lage der Bundesländer sitzt schon richtig gut.",
        };
      }

      return {
        item,
        mapId: item.mapId,
        label: pretty(item.name),
        prompt: `Klicke auf ${pretty(item.name)}.`,
        subtext:
          item.group === "oceans"
            ? "Suche das richtige Weltmeer auf der Karte."
            : "Suche den richtigen Kontinent auf der Karte.",
        feedback: pretty(item.detail),
        completionText: "Super. Ihr habt alle Aufgaben dieser Kartenrunde gelöst.",
        finishSubtext: "Ihr habt alle Kontinente und Ozeane dieser Runde gefunden.",
        celebrateText: pretty(
          item.group === "oceans"
            ? "Auch die Weltmeere sitzen schon gut."
            : "Die Kontinente sitzen schon gut."
        ),
      };
    });
}

function startGame() {
  setMobileSidebarOpen(false);
  showScreen("play");
  if (appState.mode === "cards") renderCard();
  if (appState.mode === "quiz") renderQuizQuestion();
  if (appState.mode === "write") renderWriteQuestion();
  if (appState.mode === "memory") renderMemoryBoard();
  if (appState.mode === "map") renderMapTask(true);
}

function clearMapState() {
  getMapRegions().forEach((region) => region.classList.remove("correct", "wrong"));
}

function renderMapTask(resetQueue = false) {
  renderMapSurface();
  refreshProgressGoal();
  if (resetQueue || !appState.mapQueue.length) {
    appState.mapQueue = buildMapQueue();
    appState.mapIndex = 0;
    appState.sessionAnswered = 0;
  }

  clearMapState();
  elements.nextMapBtn.disabled = true;
  elements.nextMapBtn.textContent = "Nächste Aufgabe";

  const target = appState.mapQueue[appState.mapIndex];
  if (!target) {
    appState.currentMapTarget = null;
    elements.mapQuestion.textContent =
      appState.topic === "states" ? "Deutschlandrunde geschafft." : "Weltreise geschafft.";
    elements.mapSubtext.textContent = "Startet gern gleich die nächste Runde.";
    elements.mapFeedback.textContent = "Super. Ihr habt alle Aufgaben dieser Kartenrunde gelöst.";
    elements.nextMapBtn.disabled = false;
    elements.nextMapBtn.textContent = "Neue Runde";
    return;
  }

  appState.currentMapTarget = target;
  elements.mapQuestion.textContent = target.prompt;
  elements.mapSubtext.textContent = target.subtext;
  elements.mapFeedback.textContent = "";
}

function handleMapChoice(region) {
  if (!appState.currentMapTarget || elements.nextMapBtn.disabled === false) {
    return;
  }

  const isCorrect = region.dataset.id === appState.currentMapTarget.mapId;
  clearMapState();
  region.classList.add(isCorrect ? "correct" : "wrong");
  markAnswer(appState.currentMapTarget.item, isCorrect, 12);
  playSound(isCorrect ? "correct" : "wrong");

  if (isCorrect) {
    elements.mapFeedback.textContent = `Richtig. ${appState.currentMapTarget.feedback}`;
    appState.mapIndex += 1;
    if (appState.mapIndex >= appState.mapQueue.length) {
      const completedTarget = appState.currentMapTarget;
      appState.currentMapTarget = null;
      elements.mapQuestion.textContent =
        appState.topic === "states" ? "Deutschlandrunde geschafft." : "Weltreise geschafft.";
      elements.mapSubtext.textContent = completedTarget.finishSubtext;
      playSound("celebrate");
      elements.mapFeedback.textContent = completedTarget.celebrateText;
      elements.nextMapBtn.textContent = "Neue Runde";
    }
    elements.nextMapBtn.disabled = false;
    return;
  }

  elements.mapFeedback.textContent = `Das ist ${getMapLabel(region.dataset.id)}. Gesucht war ${appState.currentMapTarget.label}.`;
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
  elements.mobileSidebarToggle.addEventListener("click", () => {
    setMobileSidebarOpen(!appState.mobileSidebarOpen);
  });
  elements.soundToggleBtn.addEventListener("click", toggleSound);
  elements.soundToggleBtnPlay.addEventListener("click", toggleSound);
  elements.secretTrigger.addEventListener("click", revealSecretPanel);
  elements.resetProgressBtn.addEventListener("click", resetProgress);
  elements.mapVariantButtons.forEach((button) => {
    button.addEventListener("click", () => setMapVariant(button.dataset.mapVariant));
  });
  elements.nextMapBtn.addEventListener("click", () => renderMapTask(appState.currentMapTarget === null));
  elements.mapHotspots.addEventListener("click", (event) => {
    const region = event.target.closest(".map-hotspot");
    if (region) {
      handleMapChoice(region);
    }
  });
  elements.mapHotspots.addEventListener("keydown", (event) => {
    const region = event.target.closest(".map-hotspot");
    if (region && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      handleMapChoice(region);
    }
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
  preventZoomGestures();
  refreshMapVariantUI();
  setMobileSidebarOpen(false);
  updateDashboard();
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
      .then((registration) => {
        swRegistration = registration;
        registration.update().catch(() => {
          // Wenn das Service-Worker-Update-Pruefen fehlschlaegt, bleibt die App normal nutzbar.
        });
      })
      .catch(() => {
        // Die App funktioniert auch ohne Service Worker weiter.
      });
  });
}
