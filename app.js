// Míster Manager F7 - Alevín 26/27
// Software de Pizarra Táctica y Control de Minutos en Vivo (PWA)

// ------------------------------------------
// 1. FORMACIONES FÚTBOL 7 Y COORDENADAS (%)
// ------------------------------------------
const FORMATIONS = {
  '1-3-2-1': {
    name: '1-3-2-1 (Árbol de Navidad)',
    slots: [
      { id: 'pos-1', role: 'POR', name: 'Portero', top: 86, left: 50 },
      { id: 'pos-2', role: 'DEF', name: 'Lat. Izquierdo', top: 67, left: 20 },
      { id: 'pos-3', role: 'DEF', name: 'Central', top: 70, left: 50 },
      { id: 'pos-4', role: 'DEF', name: 'Lat. Derecho', top: 67, left: 80 },
      { id: 'pos-5', role: 'MED', name: 'Medio Centro', top: 45, left: 34 },
      { id: 'pos-6', role: 'MED', name: 'Medio Centro', top: 45, left: 66 },
      { id: 'pos-7', role: 'DEL', name: 'Delantero', top: 22, left: 50 }
    ]
  },
  '1-2-3-1': {
    name: '1-2-3-1 (Bandas Ofensivas)',
    slots: [
      { id: 'pos-1', role: 'POR', name: 'Portero', top: 86, left: 50 },
      { id: 'pos-2', role: 'DEF', name: 'Central Izq.', top: 68, left: 33 },
      { id: 'pos-3', role: 'DEF', name: 'Central Der.', top: 68, left: 67 },
      { id: 'pos-4', role: 'MED', name: 'Banda Izq.', top: 45, left: 18 },
      { id: 'pos-5', role: 'MED', name: 'Organizador', top: 48, left: 50 },
      { id: 'pos-6', role: 'MED', name: 'Banda Der.', top: 45, left: 82 },
      { id: 'pos-7', role: 'DEL', name: 'Delantero', top: 22, left: 50 }
    ]
  },
  '1-3-1-2': {
    name: '1-3-1-2 (Doble Punta)',
    slots: [
      { id: 'pos-1', role: 'POR', name: 'Portero', top: 86, left: 50 },
      { id: 'pos-2', role: 'DEF', name: 'Lat. Izquierdo', top: 67, left: 20 },
      { id: 'pos-3', role: 'DEF', name: 'Central', top: 70, left: 50 },
      { id: 'pos-4', role: 'DEF', name: 'Lat. Derecho', top: 67, left: 80 },
      { id: 'pos-5', role: 'MED', name: 'Medio Centro', top: 46, left: 50 },
      { id: 'pos-6', role: 'DEL', name: 'Punta Izq.', top: 23, left: 34 },
      { id: 'pos-7', role: 'DEL', name: 'Punta Der.', top: 23, left: 66 }
    ]
  },
  '1-2-2-2': {
    name: '1-2-2-2 (Cuadrado / Doble Pivote)',
    slots: [
      { id: 'pos-1', role: 'POR', name: 'Portero', top: 86, left: 50 },
      { id: 'pos-2', role: 'DEF', name: 'Defensa Izq.', top: 68, left: 32 },
      { id: 'pos-3', role: 'DEF', name: 'Defensa Der.', top: 68, left: 68 },
      { id: 'pos-4', role: 'MED', name: 'Medio Izq.', top: 46, left: 32 },
      { id: 'pos-5', role: 'MED', name: 'Medio Der.', top: 46, left: 68 },
      { id: 'pos-6', role: 'DEL', name: 'Delantero Izq.', top: 23, left: 35 },
      { id: 'pos-7', role: 'DEL', name: 'Delantero Der.', top: 23, left: 65 }
    ]
  }
};

// ------------------------------------------
// 2. PLANTILLA REAL: 15 JUGADORES ALEVÍN 26/27
// ------------------------------------------
const DEFAULT_SQUAD = [
  {
    id: "p1",
    name: "Adrián Montes Pérez",
    number: 9,
    mainPos: "DEL",
    secPositions: ["DC", "MI", "MD"],
    foot: "Diestro",
    roleNote: "Goleador / Estrella ofensiva",
    calidad: 85,
    talento: 93,
    velocidad: 90,
    potencia: 84,
    mental: 87,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Máxima referencia arriba. Altísimo talento y velocidad de desborde."
  },
  {
    id: "p2",
    name: "José Luis López Ramírez",
    number: 2,
    mainPos: "DEF",
    secPositions: ["LD", "LI", "DFC"],
    foot: "Diestro",
    roleNote: "Lateral potente y veloz",
    calidad: 76,
    talento: 78,
    velocidad: 85,
    potencia: 90,
    mental: 87,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Gran despliegue físico por banda. Contundente en duelos individuales."
  },
  {
    id: "p3",
    name: "Pepe Chavarino Martos",
    number: 3,
    mainPos: "DEF",
    secPositions: ["LD", "LI", "MC"],
    foot: "Diestro",
    roleNote: "Lateral / Medio recuperador",
    calidad: 72,
    talento: 74,
    velocidad: 83,
    potencia: 89,
    mental: 95,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Mentalidad sobresaliente (95). Polivalente, defiende y ayuda en la medular con enorme sacrificio."
  },
  {
    id: "p4",
    name: "Antonio Martínez Nicás",
    number: 4,
    mainPos: "DEF",
    secPositions: ["DFC"],
    foot: "Diestro",
    roleNote: "Mariscal de la defensa",
    calidad: 70,
    talento: 75,
    velocidad: 73,
    potencia: 89,
    mental: 94,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Central seguro y con gran concentración táctica (94). Muy fuerte al choque."
  },
  {
    id: "p5",
    name: "Rodrigo Enciso Ontiveros",
    number: 10,
    mainPos: "MED",
    secPositions: ["MC", "DC"],
    foot: "Diestro",
    roleNote: "Mediapunta creativo con pegada",
    calidad: 79,
    talento: 86,
    velocidad: 72,
    potencia: 85,
    mental: 75,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Visión entre líneas y gran talento de último pase con excelente disparo."
  },
  {
    id: "p6",
    name: "Enzo Pérez Seva",
    number: 6,
    mainPos: "MED",
    secPositions: ["MC", "MI", "MD"],
    foot: "Diestro",
    roleNote: "Mediocentro dinámico",
    calidad: 74,
    talento: 87,
    velocidad: 80,
    potencia: 78,
    mental: 72,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Talento brillante en la conducción y rapidez para superar líneas."
  },
  {
    id: "p7",
    name: "Jesús Castro Domingo",
    number: 8,
    mainPos: "MED",
    secPositions: ["MC"],
    foot: "Diestro",
    roleNote: "Organizador técnico",
    calidad: 84,
    talento: 84,
    velocidad: 76,
    potencia: 62,
    mental: 83,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Muy limpio técnicamente. Distribución precisa y toma de decisiones madura."
  },
  {
    id: "p8",
    name: "Jaime González Gómez",
    number: 5,
    mainPos: "DEF",
    secPositions: ["LD", "LI", "MD"],
    foot: "Diestro",
    roleNote: "Lateral técnico y ofensivo",
    calidad: 84,
    talento: 87,
    velocidad: 76,
    potencia: 74,
    mental: 61,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Mucha calidad con el balón en salida. Trabajar la concentración defensiva."
  },
  {
    id: "p9",
    name: "Fernando Enciso Ontiveros",
    number: 12,
    mainPos: "DEF",
    secPositions: ["DFC", "LD"],
    foot: "Diestro",
    roleNote: "Defensa aseado",
    calidad: 76,
    talento: 77,
    velocidad: 72,
    potencia: 74,
    mental: 63,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Buen manejo de balón desde atrás. Buen perfil de central/lateral."
  },
  {
    id: "p10",
    name: "Juan Martín Lagos-Díaz",
    number: 14,
    mainPos: "DEL",
    secPositions: ["MED", "MC", "DC"],
    foot: "Diestro",
    roleNote: "Delantero / Mediapunta asociativo",
    calidad: 80,
    talento: 72,
    velocidad: 67,
    potencia: 64,
    mental: 72,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Toque fino y gran calidad técnica para conectar con la delantera y finalizar jugadas."
  },
  {
    id: "p11",
    name: "Miguel Ángel Alonso Zafra",
    number: 15,
    mainPos: "MED",
    secPositions: ["MC"],
    foot: "Diestro",
    roleNote: "Mediocentro físico",
    calidad: 65,
    talento: 61,
    velocidad: 74,
    potencia: 77,
    mental: 62,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Aporta pulmón y potencia en los balones divididos del centro del campo."
  },
  {
    id: "p12",
    name: "Eduardo Recas Ruiz",
    number: 16,
    mainPos: "DEF",
    secPositions: ["DFC"],
    foot: "Diestro",
    roleNote: "Defensa sobrio",
    calidad: 73,
    talento: 65,
    velocidad: 63,
    potencia: 70,
    mental: 65,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Cumplidor en defensa con buen trato de balón."
  },
  {
    id: "p13",
    name: "Ignacio Lecina Navajas",
    number: 17,
    mainPos: "DEF",
    secPositions: ["DEF", "MED"],
    foot: "Diestro",
    roleNote: "Comodín / Parche",
    calidad: 27,
    talento: 12,
    velocidad: 27,
    potencia: 48,
    mental: 42,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Jugador comodín. Buen compromiso para sumar cuando el equipo lo requiera."
  },
  {
    id: "p14",
    name: "Carlos Sánchez Cuello",
    number: 18,
    mainPos: "MED",
    secPositions: ["MED", "DEL"],
    foot: "Diestro",
    roleNote: "Comodín / Parche",
    calidad: 37,
    talento: 26,
    velocidad: 23,
    potencia: 39,
    mental: 15,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Jugador de refresco en ataque y medio."
  },
  {
    id: "p15",
    name: "Adriano Rho López",
    number: 1,
    mainPos: "POR",
    secPositions: ["POR", "DEF"],
    foot: "Diestro",
    roleNote: "Pendiente de evaluación",
    calidad: 70,
    talento: 70,
    velocidad: 70,
    potencia: 70,
    mental: 70,
    playedSeconds: 0,
    isAvailable: true,
    unavailabilityReason: "",
    notes: "Pendiente de definir posición y evaluar atributos exactos en próximos entrenamientos."
  }
];

// ------------------------------------------
// 3. ESTADO GLOBAL DE LA APLICACIÓN
// ------------------------------------------
let squad = [];
let currentFormation = '1-3-2-1';
let lineup = {}; // { 'pos-1': 'p15', 'pos-2': 'p3', ... }
let currentFilter = 'ALL';
let radarChartInstance = null;
let currentMainView = 'match'; // 'match' o 'squad'

// Estado del Partido en Directo
let matchTimerInterval = null;
let matchSeconds = 0;
let isMatchRunning = false;
let matchPeriod = '1T'; // '1T', 'DESC', '2T', 'FIN'
let matchEvents = [];
let scoreHome = 0;
let scoreAway = 0;

// Estado de Sustitución Temporal
let pendingOutPlayerId = null;
let pendingOutSlotId = null;

// PWA Deferred Prompt
let deferredPrompt = null;

// ------------------------------------------
// 4. REGISTRO PWA (SERVICE WORKER & PROMPT)
// ------------------------------------------
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.log('SW registration error:', err);
    });
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.getElementById('pwa-install-btn');
  if (btn) btn.classList.remove('hidden');
});

function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        const btn = document.getElementById('pwa-install-btn');
        if (btn) btn.classList.add('hidden');
      }
      deferredPrompt = null;
    });
  }
}

// ------------------------------------------
// 5. INICIALIZACIÓN Y PERSISTENCIA
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  renderTacticsBoard();
  renderLiveBench();
  renderSquadTable();
  updateTeamStats();
  updatePeriodBadge();
  updateUnavailCount();
  if (window.lucide) {
    lucide.createIcons();
  }
});

function saveData() {
  localStorage.setItem('alevin_f7_real_players_v3', JSON.stringify(squad));
  localStorage.setItem('alevin_f7_formation', currentFormation);
  localStorage.setItem('alevin_f7_lineup', JSON.stringify(lineup));
}

function loadData() {
  const savedPlayers = localStorage.getItem('alevin_f7_real_players_v3');
  const savedFormation = localStorage.getItem('alevin_f7_formation');
  const savedLineup = localStorage.getItem('alevin_f7_lineup');

  if (savedPlayers) {
    try {
      squad = JSON.parse(savedPlayers);
    } catch (e) {
      squad = JSON.parse(JSON.stringify(DEFAULT_SQUAD));
    }
  } else {
    squad = JSON.parse(JSON.stringify(DEFAULT_SQUAD));
  }

  // Asegurar campos esenciales
  squad.forEach(p => {
    if (typeof p.playedSeconds === 'undefined') p.playedSeconds = 0;
    if (typeof p.isAvailable === 'undefined') p.isAvailable = true;
    if (typeof p.unavailabilityReason === 'undefined') p.unavailabilityReason = '';
  });

  // Juan Martín Lagos-Díaz: Delantero principal (puede jugar también de medio)
  const juan = squad.find(p => p.id === 'p10' || (p.name && p.name.includes('Juan Martín')));
  if (juan) {
    juan.mainPos = 'DEL';
    if (!juan.secPositions) juan.secPositions = [];
    if (!juan.secPositions.includes('MED')) juan.secPositions.unshift('MED');
    if (!juan.secPositions.includes('MC')) juan.secPositions.push('MC');
    juan.roleNote = 'Delantero / Mediapunta asociativo';
  }

  if (savedFormation && FORMATIONS[savedFormation]) {
    currentFormation = savedFormation;
    const formSelect = document.getElementById('formation-select');
    if (formSelect) formSelect.value = currentFormation;
  }

  if (savedLineup) {
    try {
      lineup = JSON.parse(savedLineup);
    } catch (e) {
      lineup = {};
    }
  } else {
    // 7 Titular óptimo inicial
    lineup = {
      'pos-1': 'p15', // Adriano Rho (POR)
      'pos-2': 'p3',  // Pepe Chavarino (83)
      'pos-3': 'p4',  // Antonio Martínez (80)
      'pos-4': 'p2',  // José Luis López (83)
      'pos-5': 'p5',  // Rodrigo Enciso (79)
      'pos-6': 'p6',  // Enzo Pérez (78)
      'pos-7': 'p1'   // Adrián Montes (88)
    };
  }
}

// ------------------------------------------
// 6. CÁLCULO DE MEDIA (ARITMÉTICA EXACTA)
// ------------------------------------------
function calculateGLR(player) {
  const c = parseInt(player.calidad) || 50;
  const t = parseInt(player.talento) || 50;
  const v = parseInt(player.velocidad) || 50;
  const p = parseInt(player.potencia) || 50;
  const m = parseInt(player.mental) || 50;
  return Math.round((c + t + v + p + m) / 5);
}

function getFMBadgeClass(val) {
  const v = parseInt(val) || 0;
  if (v >= 85) return 'badge-fm-elite';
  if (v >= 70) return 'badge-fm-high';
  if (v >= 50) return 'badge-fm-mid';
  return 'badge-fm-low';
}

function getPosBadgeColor(pos) {
  switch (pos) {
    case 'POR': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    case 'DEF': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    case 'MED': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'DEL': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    default: return 'bg-slate-700 text-slate-300 border-slate-600';
  }
}

// Estado de Selección Táctil / Drag
let draggedPlayerId = null;
let draggedFromSlotId = null;
let dragSourceType = null; // 'pitch' o 'bench'
let selectedPlayerId = null;
let selectedFromSlotId = null;
let selectedSourceType = null; // 'pitch' o 'bench'

// ------------------------------------------
// 7. PIZARRA TÁCTICA F7 CON MINUTOS EN VIVO
// ------------------------------------------
function changeFormation(formKey) {
  if (!FORMATIONS[formKey]) return;
  currentFormation = formKey;
  saveData();
  renderTacticsBoard();
  updateTeamStats();
}

function renderTacticsBoard() {
  const container = document.getElementById('pitch-slots');
  if (!container) return;
  container.innerHTML = '';

  const formationData = FORMATIONS[currentFormation];
  if (!formationData) return;

  formationData.slots.forEach(slot => {
    const playerId = lineup[slot.id];
    const player = squad.find(p => p.id === playerId);

    const slotEl = document.createElement('div');
    slotEl.className = 'absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto flex flex-col items-center select-none';
    slotEl.style.top = `${slot.top}%`;
    slotEl.style.left = `${slot.left}%`;

    // Dropzone en cada slot de la pizarra
    slotEl.ondragover = (e) => onPitchDragOver(e);
    slotEl.ondragleave = (e) => onPitchDragLeave(e);
    slotEl.ondrop = (e) => onPitchDrop(e, slot.id);

    if (player) {
      const glr = calculateGLR(player);
      const isPosMatch = player.mainPos === slot.role || (player.secPositions && player.secPositions.includes(slot.role));
      const mins = Math.floor((player.playedSeconds || 0) / 60);
      const secs = (player.playedSeconds || 0) % 60;
      const isSelected = (selectedPlayerId === player.id);

      slotEl.innerHTML = `
        <div class="pitch-token group relative flex flex-col items-center cursor-grab active:cursor-grabbing ${isSelected ? 'selected-player' : ''}" 
             draggable="true"
             ondragstart="onPitchDragStart(event, '${player.id}', '${slot.id}')"
             onclick="handlePlayerPitchClick('${player.id}', '${slot.id}')">

          <!-- Dorsal Circle con GLR Badge -->
          <div class="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-900 border-2 ${isPosMatch ? 'border-blue-400' : 'border-amber-400'} shadow-xl flex items-center justify-center overflow-hidden transition-transform">
            <span class="font-display font-black text-xl sm:text-2xl text-white">${player.number}</span>
            <div class="absolute bottom-0 inset-x-0 h-1.5 ${player.mainPos === 'POR' ? 'bg-amber-400' : player.mainPos === 'DEF' ? 'bg-emerald-400' : player.mainPos === 'MED' ? 'bg-blue-400' : 'bg-rose-400'}"></div>
          </div>

          <!-- GLR Pill superpuesto a la izquierda -->
          <div class="absolute -top-2 -left-2 z-10 px-1.5 py-0.5 rounded-md font-display font-bold text-[11px] ${getFMBadgeClass(glr)} shadow-lg">
            ${glr}
          </div>

          <!-- Nombre y Minutos en directo (Sin botón de cambio invasivo) -->
          <div class="mt-1 bg-slate-950/90 border border-slate-700/80 px-2 py-0.5 rounded-md text-center max-w-[85px] sm:max-w-[100px] shadow-lg">
            <div class="text-[11px] sm:text-xs font-bold text-white truncate">${player.name.split(' ')[0]}</div>
            
            <!-- CONTADOR DE MINUTOS EN DIRECTO -->
            <div class="text-[10px] font-black font-display ${isMatchRunning ? 'text-emerald-400 animate-pulse' : 'text-amber-400'} tracking-tight">
              ⏱️ ${mins}' ${String(secs).padStart(2, '0')}"
            </div>
          </div>
        </div>
      `;
    } else {
      // Slot Vacío en el campo (Dropzone para arrastrar o hacer tap)
      slotEl.innerHTML = `
        <div class="pitch-slot-empty w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex flex-col items-center justify-center cursor-pointer group"
             onclick="handleEmptySlotClick('${slot.id}', '${slot.role}')">
          <span class="text-xs font-bold text-slate-300 font-display">${slot.role}</span>
          <span class="text-[9px] text-slate-400 group-hover:text-blue-300 font-semibold">+ Meter</span>
        </div>
        <div class="mt-1 bg-black/60 px-1.5 py-0.5 rounded text-[9px] font-semibold text-slate-300 text-center">
          ${slot.name}
        </div>
      `;
    }

    container.appendChild(slotEl);
  });

  if (window.lucide) lucide.createIcons();
}

// ------------------------------------------
// 8. SIDEBAR: BANQUILLO, ROTACIONES Y MINUTOS
// ------------------------------------------
function renderLiveBench() {
  const container = document.getElementById('live-bench-list');
  const countEl = document.getElementById('bench-count');
  if (!container) return;
  container.innerHTML = '';

  const startingIds = Object.values(lineup);
  const benchPlayers = squad.filter(p => !startingIds.includes(p.id) && p.isAvailable !== false);
  const unavailables = squad.filter(p => p.isAvailable === false);

  if (countEl) countEl.innerText = `${benchPlayers.length} disp.`;

  if (benchPlayers.length === 0 && unavailables.length === 0) {
    container.innerHTML = `
      <div class="text-center py-6 text-slate-500 text-xs">
        <i data-lucide="check" class="w-6 h-6 text-emerald-500 mx-auto mb-1"></i>
        Todos los jugadores están en el campo.
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Ordenar suplentes: primero los que llevan MENOS minutos para favorecer reparto equitativo
  benchPlayers.sort((a, b) => (a.playedSeconds || 0) - (b.playedSeconds || 0));

  benchPlayers.forEach((player, idx) => {
    const glr = calculateGLR(player);
    const mins = Math.floor((player.playedSeconds || 0) / 60);
    const secs = (player.playedSeconds || 0) % 60;
    const isPriority = idx < 2 && benchPlayers.length > 2;
    const isSelected = (selectedPlayerId === player.id);

    const card = document.createElement('div');
    card.className = `bench-card p-2.5 rounded-xl border flex items-center justify-between gap-2 transition cursor-grab active:cursor-grabbing ${isSelected ? 'selected-player' : isPriority ? 'bg-slate-900 border-emerald-500/40 shadow-emerald-950/20 shadow-md' : 'bg-slate-900/80 border-fm-border'}`;
    card.draggable = true;

    card.ondragstart = (e) => onBenchDragStart(e, player.id);
    card.onclick = () => handleBenchCardClick(player.id);

    card.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0">
        <div class="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-display font-bold text-xs text-white">
          ${player.number}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-white truncate">${player.name}</span>
            <span class="px-1.5 py-0.2 rounded text-[9px] font-bold border ${getPosBadgeColor(player.mainPos)}">${player.mainPos}</span>
          </div>
          <div class="text-[10px] text-slate-400">
            Lleva jugado: <b class="text-amber-300 font-display">${mins}m ${secs}s</b>
            ${isPriority ? '<span class="text-emerald-400 font-bold ml-1">★ Le toca entrar</span>' : ''}
          </div>
        </div>
      </div>

      <div class="flex items-center gap-1.5">
        <span class="px-1.5 py-0.5 rounded font-display font-bold text-[11px] ${getFMBadgeClass(glr)}">
          ${glr}
        </span>
        <button onclick="event.stopPropagation(); quickBenchEntry('${player.id}')" class="px-2 py-1 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white rounded-lg text-xs font-bold transition flex items-center gap-1" title="Meter al campo en puesto libre o sustituir">
          <i data-lucide="arrow-up-circle" class="w-3.5 h-3.5"></i>
          <span class="hidden sm:inline">Meter</span>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Mostrar Bajas al final si las hay
  if (unavailables.length > 0) {
    const unavailDiv = document.createElement('div');
    unavailDiv.className = 'pt-2 mt-2 border-t border-slate-800/80';
    unavailDiv.innerHTML = `
      <div class="text-[10px] font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center justify-between">
        <span class="flex items-center gap-1">
          <i data-lucide="user-x" class="w-3 h-3"></i>
          Bajas / No disponibles (${unavailables.length})
        </span>
        <button onclick="openAttendanceModal()" class="text-slate-400 hover:text-white underline text-[10px]">Gestionar</button>
      </div>
      <div class="space-y-1">
        ${unavailables.map(p => `
          <div class="text-[11px] text-rose-300/80 bg-rose-950/20 px-2 py-0.5 rounded flex items-center justify-between">
            <span>#${p.number} ${p.name}</span>
            <span class="text-[9px] font-bold uppercase text-rose-400">${p.unavailabilityReason || 'Baja'}</span>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(unavailDiv);
  }

  if (window.lucide) lucide.createIcons();
}

// ------------------------------------------
// SISTEMA DE ARRASTRE Y SOLTADO (DRAG & DROP)
// ------------------------------------------
function onPitchDragStart(e, playerId, slotId) {
  draggedPlayerId = playerId;
  draggedFromSlotId = slotId;
  dragSourceType = 'pitch';

  e.dataTransfer.setData('text/plain', playerId);
  e.dataTransfer.setData('source', 'pitch');
  e.dataTransfer.setData('fromSlot', slotId);
}

function onBenchDragStart(e, playerId) {
  draggedPlayerId = playerId;
  draggedFromSlotId = null;
  dragSourceType = 'bench';

  e.dataTransfer.setData('text/plain', playerId);
  e.dataTransfer.setData('source', 'bench');
}

function onPitchDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('dragover');
}

function onPitchDragLeave(e) {
  e.currentTarget.classList.remove('dragover');
}

function onPitchDrop(e, targetSlotId) {
  e.preventDefault();
  e.currentTarget.classList.remove('dragover');

  const playerId = e.dataTransfer.getData('text/plain') || draggedPlayerId;
  const source = e.dataTransfer.getData('source') || dragSourceType;
  const fromSlot = e.dataTransfer.getData('fromSlot') || draggedFromSlotId;

  if (!playerId) return;

  const player = squad.find(p => p.id === playerId);
  if (!player) return;

  const existingPlayerId = lineup[targetSlotId];
  const existingPlayer = existingPlayerId ? squad.find(p => p.id === existingPlayerId) : null;

  if (source === 'bench') {
    // 1. Viene del banquillo
    lineup[targetSlotId] = playerId;

    if (existingPlayer) {
      // Sustitución
      recordMatchEvent(`🔄 ⬇️ Sale #${existingPlayer.number} ${existingPlayer.name} ➡️ ⬆️ Entra #${player.number} ${player.name}`);
    } else {
      // Entra en puesto vacío
      recordMatchEvent(`⬆️ Entra al campo #${player.number} ${player.name}`);
    }
  } else if (source === 'pitch') {
    // 2. Viene de otro puesto del campo
    if (fromSlot === targetSlotId) return;

    if (existingPlayer) {
      // Intercambio de puestos entre dos jugadores titulares
      lineup[targetSlotId] = playerId;
      lineup[fromSlot] = existingPlayerId;
      recordMatchEvent(`🔀 Intercambio táctico: #${player.number} ${player.name} ↔️ #${existingPlayer.number} ${existingPlayer.name}`);
    } else {
      // Mover a puesto vacío
      lineup[targetSlotId] = playerId;
      delete lineup[fromSlot];
    }
  }

  // Limpiar estado de arrastre
  draggedPlayerId = null;
  draggedFromSlotId = null;
  dragSourceType = null;
  clearSelection();

  saveData();
  renderTacticsBoard();
  renderLiveBench();
  updateTeamStats();
}

// Arrastrar jugador del campo al banquillo para retirarlo
function onBenchDragOver(e) {
  e.preventDefault();
  const benchContainer = document.getElementById('live-bench-container');
  if (benchContainer) benchContainer.classList.add('dragover');
}

function onBenchDrop(e) {
  e.preventDefault();
  const benchContainer = document.getElementById('live-bench-container');
  if (benchContainer) benchContainer.classList.remove('dragover');

  const source = e.dataTransfer.getData('source') || dragSourceType;
  const fromSlot = e.dataTransfer.getData('fromSlot') || draggedFromSlotId;
  const playerId = e.dataTransfer.getData('text/plain') || draggedPlayerId;

  if (source === 'pitch' && fromSlot) {
    const player = squad.find(p => p.id === playerId);
    delete lineup[fromSlot];

    if (player) {
      recordMatchEvent(`⬇️ Sale al banquillo #${player.number} ${player.name}`);
    }

    draggedPlayerId = null;
    draggedFromSlotId = null;
    dragSourceType = null;
    clearSelection();

    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
  }
}

// ------------------------------------------
// SISTEMA DE SELECCIÓN TÁCTIL (MÓVILES / TABLETS)
// ------------------------------------------
function handlePlayerPitchClick(playerId, slotId) {
  // Si ya había un jugador del banquillo seleccionado, hacer cambio directamente
  if (selectedSourceType === 'bench' && selectedPlayerId) {
    const inPlayer = squad.find(p => p.id === selectedPlayerId);
    const outPlayer = squad.find(p => p.id === playerId);

    lineup[slotId] = inPlayer.id;
    recordMatchEvent(`🔄 ⬇️ Sale #${outPlayer.number} ${outPlayer.name} ➡️ ⬆️ Entra #${inPlayer.number} ${inPlayer.name}`);

    clearSelection();
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
    return;
  }

  // Si ya había otro jugador del campo seleccionado, intercambiar puestos
  if (selectedSourceType === 'pitch' && selectedPlayerId && selectedFromSlotId !== slotId) {
    const p1 = squad.find(p => p.id === selectedPlayerId);
    const p2 = squad.find(p => p.id === playerId);

    lineup[slotId] = p1.id;
    lineup[selectedFromSlotId] = p2.id;
    recordMatchEvent(`🔀 Intercambio táctico: #${p1.number} ${p1.name} ↔️ #${p2.number} ${p2.name}`);

    clearSelection();
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
    return;
  }

  // Si pulsa sobre sí mismo por segunda vez, abrir perfil
  if (selectedPlayerId === playerId) {
    clearSelection();
    openPlayerProfile(playerId);
    return;
  }

  // Seleccionar este jugador del campo
  selectedPlayerId = playerId;
  selectedFromSlotId = slotId;
  selectedSourceType = 'pitch';
  renderTacticsBoard();
  renderLiveBench();
}

function handleEmptySlotClick(slotId, expectedRole) {
  if (selectedSourceType === 'bench' && selectedPlayerId) {
    const inPlayer = squad.find(p => p.id === selectedPlayerId);
    lineup[slotId] = inPlayer.id;
    recordMatchEvent(`⬆️ Entra al campo #${inPlayer.number} ${inPlayer.name}`);
    clearSelection();
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
    return;
  }

  if (selectedSourceType === 'pitch' && selectedPlayerId) {
    lineup[slotId] = selectedPlayerId;
    delete lineup[selectedFromSlotId];
    clearSelection();
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
    return;
  }

  // Si no hay nada seleccionado, asignar el mejor disponible para ese puesto
  showBenchForSlot(slotId, expectedRole);
}

function handleBenchCardClick(playerId) {
  // Si había un jugador del campo seleccionado, cambiarlo por este suplente
  if (selectedSourceType === 'pitch' && selectedPlayerId && selectedFromSlotId) {
    const outPlayer = squad.find(p => p.id === selectedPlayerId);
    const inPlayer = squad.find(p => p.id === playerId);

    lineup[selectedFromSlotId] = inPlayer.id;
    recordMatchEvent(`🔄 ⬇️ Sale #${outPlayer.number} ${outPlayer.name} ➡️ ⬆️ Entra #${inPlayer.number} ${inPlayer.name}`);

    clearSelection();
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
    return;
  }

  // Si pulsa por segunda vez, abrir perfil
  if (selectedPlayerId === playerId) {
    clearSelection();
    openPlayerProfile(playerId);
    return;
  }

  // Seleccionar jugador del banquillo para meterlo en el campo
  selectedPlayerId = playerId;
  selectedFromSlotId = null;
  selectedSourceType = 'bench';
  renderTacticsBoard();
  renderLiveBench();
}

function clearSelection() {
  selectedPlayerId = null;
  selectedFromSlotId = null;
  selectedSourceType = null;
}

// ------------------------------------------
// 9. SISTEMA DE AUDIO (SILBATO ARBITRAL OFFLINE)
// ------------------------------------------
let soundEnabled = true;
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('btn-sound-toggle');
  if (btn) {
    btn.innerHTML = soundEnabled 
      ? `<i data-lucide="volume-2" class="w-3.5 h-3.5 text-blue-400"></i>`
      : `<i data-lucide="volume-x" class="w-3.5 h-3.5 text-slate-500"></i>`;
    btn.title = soundEnabled ? 'Silbato de aviso a los 35m (Activado)' : 'Silbato de aviso (Silenciado)';
    if (window.lucide) lucide.createIcons();
  }
  showToast(soundEnabled ? 'Silbato arbitral activado' : 'Silbato silenciado', soundEnabled ? '🔊' : '🔇');
}

// Emula el sonido estridente y vibrante de un silbato de árbitro clásico
function playWhistleBurst(startTime, duration = 0.35) {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const modOsc = ctx.createOscillator();
  const modGain = ctx.createGain();
  const gain = ctx.createGain();

  // Frecuencia aguda (~2650Hz) con vibrato/bolita a 28-32Hz
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(2650, startTime);

  modOsc.type = 'sine';
  modOsc.frequency.setValueAtTime(30, startTime);
  modGain.gain.setValueAtTime(240, startTime);

  modOsc.connect(osc.frequency);

  // Envolvente de volumen (ataque rápido)
  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.linearRampToValueAtTime(0.3, startTime + 0.02);
  gain.gain.setValueAtTime(0.3, startTime + duration - 0.04);
  gain.gain.linearRampToValueAtTime(0.001, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(startTime);
  modOsc.start(startTime);
  osc.stop(startTime + duration);
  modOsc.stop(startTime + duration);
}

function playRefereeWhistle(type = 'halftime') {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime + 0.05;

    if (type === 'halftime') {
      // Pitido doble: pi - piiii! (Descanso)
      playWhistleBurst(now, 0.22);
      playWhistleBurst(now + 0.32, 0.55);
    } else if (type === 'fulltime') {
      // Pitido triple: pi - pi - piiiii! (Final del partido)
      playWhistleBurst(now, 0.2);
      playWhistleBurst(now + 0.28, 0.2);
      playWhistleBurst(now + 0.56, 0.75);
    } else {
      // Pitido simple de inicio o reanudación
      playWhistleBurst(now, 0.35);
    }
  } catch (err) {
    console.warn("Audio warning:", err);
  }
}

// ------------------------------------------
// 10. CRONÓMETRO, PERÍODOS Y MARCADOR
// ------------------------------------------
function toggleMatchTimer() {
  const btn = document.getElementById('btn-match-start');
  const btnText = document.getElementById('match-btn-text');

  if (isMatchRunning) {
    clearInterval(matchTimerInterval);
    isMatchRunning = false;
    if (btn) btn.className = 'px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition shadow-lg active:scale-95';
    if (btnText) btnText.innerText = 'Reanudar';
    renderTacticsBoard();
  } else {
    getAudioContext(); // Desbloquear audio con el gesto del usuario
    isMatchRunning = true;
    if (btn) btn.className = 'px-3.5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition shadow-lg active:scale-95';
    if (btnText) btnText.innerText = 'Pausar';

    matchTimerInterval = setInterval(() => {
      matchSeconds++;
      updateTimerDisplay();

      // Silbato arbitral automático al minuto 35:00 (descanso) o 70:00 (final)
      if (matchPeriod === '1T' && matchSeconds === 35 * 60) {
        playRefereeWhistle('halftime');
        showToast("⏱️ ¡Minuto 35:00 cumplido! Final de la 1ª Parte (Descanso)", "⏸️");
        recordMatchEvent("⏱️ Min 35:00 cumplido (Fin 1ª Parte)");
      } else if (matchPeriod === '2T' && matchSeconds === 70 * 60) {
        playRefereeWhistle('fulltime');
        showToast("🏁 ¡Minuto 70:00 cumplido! Final del Partido (2x35m)", "🏁");
        recordMatchEvent("🏁 Min 70:00 cumplido (Fin reglamentario)");
      }

      // Incrementar segundos jugados solo a los titulares sobre el campo
      const startingIds = Object.values(lineup);
      squad.forEach(p => {
        if (startingIds.includes(p.id) && p.isAvailable !== false) {
          p.playedSeconds = (p.playedSeconds || 0) + 1;
        }
      });

      // Refrescar cada 2 segundos para no sobrecargar
      if (matchSeconds % 2 === 0) {
        renderTacticsBoard();
        renderLiveBench();
      }
    }, 1000);
  }

  if (window.lucide) lucide.createIcons();
}

function updateTimerDisplay() {
  const display = document.getElementById('match-timer-display');
  if (!display) return;
  const mins = Math.floor(matchSeconds / 60);
  const secs = matchSeconds % 60;
  display.innerText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function resetMatchTimer() {
  openNewMatchModal();
}

// ------------------------------------------
// NUEVO PARTIDO: REINICIAR TODO
// ------------------------------------------
function openNewMatchModal() {
  const modal = document.getElementById('new-match-modal');
  if (modal) modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeNewMatchModal() {
  const modal = document.getElementById('new-match-modal');
  if (modal) modal.classList.add('hidden');
}

function confirmStartNewMatch() {
  // 1. Detener cronómetro
  if (matchTimerInterval) {
    clearInterval(matchTimerInterval);
    matchTimerInterval = null;
  }
  isMatchRunning = false;
  matchSeconds = 0;
  matchPeriod = '1T';

  // 2. Reiniciar marcador a 0 - 0
  scoreHome = 0;
  scoreAway = 0;
  const scoreHomeEl = document.getElementById('score-home');
  const scoreAwayEl = document.getElementById('score-away');
  if (scoreHomeEl) scoreHomeEl.innerText = '0';
  if (scoreAwayEl) scoreAwayEl.innerText = '0';

  // 3. Reiniciar minutos jugados de toda la plantilla a 0
  squad.forEach(player => {
    player.playedSeconds = 0;
  });

  // 4. Opciones de disponibilidad y alineación
  const resetAvail = document.getElementById('reset-availables-checkbox')?.checked;
  if (resetAvail) {
    squad.forEach(player => {
      player.isAvailable = true;
      player.unavailabilityReason = '';
    });
  }

  const keepLineup = document.getElementById('keep-lineup-checkbox')?.checked;
  if (!keepLineup) {
    lineup = {};
  } else {
    // Si no se han reseteado las bajas y algún titular estuviera de baja, retirarlo
    for (const slotId in lineup) {
      const p = squad.find(x => x.id === lineup[slotId]);
      if (!p || p.isAvailable === false) {
        delete lineup[slotId];
      }
    }
  }

  // 5. Limpiar historial de eventos y goles del partido
  matchEvents = [];

  // 6. Guardar en LocalStorage
  saveData();

  // 7. Actualizar display del cronómetro y período
  updateTimerDisplay();
  updatePeriodBadge();

  // 8. Restaurar botón de inicio de cronómetro
  const btnStart = document.getElementById('btn-match-start');
  if (btnStart) {
    btnStart.className = 'px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition shadow-lg shadow-emerald-600/20 active:scale-95';
    btnStart.innerHTML = `<i data-lucide="play" class="w-3.5 h-3.5"></i><span id="match-btn-text">Iniciar 1T</span>`;
  }

  // 9. Refrescar todas las vistas
  renderMatchEvents();
  renderTacticsBoard();
  renderLiveBench();
  renderSquadTable();
  updateTeamStats();
  updateUnavailCount();

  closeNewMatchModal();
  if (window.lucide) lucide.createIcons();

  showToast("¡Nuevo partido iniciado! Marcador 0-0, cronómetro a 00:00 y minutos a cero.", "⚽");
}

function showToast(message, icon = '⚽') {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  const iconEl = document.getElementById('toast-icon');
  if (!toast) {
    alert(message);
    return;
  }
  if (msgEl) msgEl.innerText = message;
  if (iconEl) iconEl.innerText = icon;
  toast.classList.remove('translate-y-16', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-16', 'opacity-0', 'pointer-events-none');
  }, 3200);
}

function changeMatchPeriod() {
  if (matchPeriod === '1T') {
    if (confirm("¿Pasar al Descanso? Se pausará el tiempo.")) {
      if (isMatchRunning) toggleMatchTimer();
      matchPeriod = 'DESC';
      recordMatchEvent("⏸️ Fin de la 1ª Parte (Descanso)");
    }
  } else if (matchPeriod === 'DESC') {
    matchPeriod = '2T';
    recordMatchEvent("▶️ Comienza la 2ª Parte");
    if (!isMatchRunning) toggleMatchTimer();
  } else if (matchPeriod === '2T') {
    if (confirm("¿Dar por finalizado el partido?")) {
      if (isMatchRunning) toggleMatchTimer();
      matchPeriod = 'FIN';
      recordMatchEvent("🏁 FINAL DEL PARTIDO");
    }
  } else if (matchPeriod === 'FIN') {
    if (confirm("¿Reiniciar el estado a la 1ª Parte?")) {
      matchPeriod = '1T';
      resetMatchTimer();
    }
  }
  updatePeriodBadge();
}

function updatePeriodBadge() {
  const badge = document.getElementById('match-period-badge');
  const btnNext = document.getElementById('btn-next-period');
  if (!badge) return;

  switch (matchPeriod) {
    case '1T':
      badge.innerText = '1ª PARTE (35m)';
      badge.className = 'px-1.5 py-0.2 rounded text-[9px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
      if (btnNext) btnNext.title = 'Ir al Descanso';
      break;
    case 'DESC':
      badge.innerText = 'DESCANSO';
      badge.className = 'px-1.5 py-0.2 rounded text-[9px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30';
      if (btnNext) btnNext.title = 'Comenzar 2ª Parte';
      break;
    case '2T':
      badge.innerText = '2ª PARTE (35m)';
      badge.className = 'px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
      if (btnNext) btnNext.title = 'Finalizar Partido';
      break;
    case 'FIN':
      badge.innerText = 'FINAL';
      badge.className = 'px-1.5 py-0.2 rounded text-[9px] font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30';
      if (btnNext) btnNext.title = 'Reiniciar a 1T';
      break;
  }
}

function adjustScore(team, delta) {
  if (team === 'home') {
    scoreHome = Math.max(0, scoreHome + delta);
    const el = document.getElementById('score-home');
    if (el) el.innerText = scoreHome;
  } else {
    scoreAway = Math.max(0, scoreAway + delta);
    const el = document.getElementById('score-away');
    if (el) el.innerText = scoreAway;
    if (delta > 0) {
      recordMatchEvent(`⚽ Gol del rival (${scoreHome} - ${scoreAway})`);
    }
  }
}

function openGoalModal() {
  const modal = document.getElementById('goal-modal');
  const select = document.getElementById('goal-scorer-select');
  if (!modal || !select) return;

  const startingIds = Object.values(lineup);
  const onPitchPlayers = squad.filter(p => startingIds.includes(p.id));

  select.innerHTML = onPitchPlayers.map(p => `
    <option value="${p.id}">#${p.number} ${p.name} (${p.mainPos})</option>
  `).join('');

  modal.classList.remove('hidden');
}

function closeGoalModal() {
  const modal = document.getElementById('goal-modal');
  if (modal) modal.classList.add('hidden');
}

function confirmGoal() {
  const select = document.getElementById('goal-scorer-select');
  const scorerId = select ? select.value : null;
  const scorer = squad.find(p => p.id === scorerId);

  adjustScore('home', 1);

  if (scorer) {
    recordMatchEvent(`⚽ ¡GOL DE #${scorer.number} ${scorer.name}! (${scoreHome} - ${scoreAway})`);
  } else {
    recordMatchEvent(`⚽ ¡GOL DEL ALEVÍN! (${scoreHome} - ${scoreAway})`);
  }

  closeGoalModal();
}

function recordMatchEvent(text) {
  const mins = Math.floor(matchSeconds / 60);
  matchEvents.unshift({
    min: mins,
    time: `${String(mins).padStart(2, '0')}:${String(matchSeconds % 60).padStart(2, '0')}`,
    text: text
  });
  renderMatchEvents();
}

function renderMatchEvents() {
  const log = document.getElementById('match-events-log');
  const count = document.getElementById('events-count');
  if (!log) return;

  if (count) count.innerText = `${matchEvents.length} eventos`;

  if (matchEvents.length === 0) {
    log.innerHTML = `<p class="text-[11px] italic text-slate-500">No se han registrado eventos todavía.</p>`;
    return;
  }

  log.innerHTML = matchEvents.map(e => `
    <div class="flex items-center gap-1.5 py-0.5 border-b border-slate-800/60 text-[11px]">
      <span class="font-display font-bold text-amber-400 bg-black/50 px-1 rounded">${e.time}</span>
      <span class="text-slate-200 truncate">${e.text}</span>
    </div>
  `).join('');
}

// ------------------------------------------
// 10. SUSTITUCIÓN TÁCTIL RÁPIDA
// ------------------------------------------
function promptSubstitute(outPlayerId, slotId) {
  const outPlayer = squad.find(p => p.id === outPlayerId);
  const startingIds = Object.values(lineup);
  const availableBench = squad.filter(p => !startingIds.includes(p.id) && p.isAvailable !== false);

  if (availableBench.length === 0) {
    alert("No hay suplentes disponibles en el banquillo.");
    return;
  }

  pendingOutPlayerId = outPlayerId;
  pendingOutSlotId = slotId;

  const modal = document.getElementById('substitute-picker-modal');
  const subtitle = document.getElementById('sub-picker-subtitle');
  const list = document.getElementById('sub-picker-list');

  if (subtitle) subtitle.innerText = `Sale: #${outPlayer.number} ${outPlayer.name} (${outPlayer.mainPos})`;

  if (list) {
    availableBench.sort((a, b) => (a.playedSeconds || 0) - (b.playedSeconds || 0));

    list.innerHTML = availableBench.map(p => {
      const mins = Math.floor((p.playedSeconds || 0) / 60);
      return `
        <div onclick="executeSubstitution('${p.id}')" class="p-3 rounded-xl bg-slate-900 hover:bg-blue-600 border border-fm-border hover:border-blue-400 flex items-center justify-between cursor-pointer transition group">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-blue-700 flex items-center justify-center font-display font-black text-sm text-white">
              ${p.number}
            </div>
            <div>
              <div class="text-xs font-bold text-white group-hover:text-white">${p.name}</div>
              <div class="text-[10px] text-slate-400 group-hover:text-blue-100">Media: ${calculateGLR(p)} • ${p.mainPos}</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-xs font-bold text-amber-300 group-hover:text-white font-display">${mins} min jugados</div>
            <span class="text-[9px] text-emerald-400 group-hover:text-blue-200 font-semibold">Tocar para meter ⬆️</span>
          </div>
        </div>
      `;
    }).join('');
  }

  if (modal) modal.classList.remove('hidden');
}

function closeSubstitutePicker() {
  const modal = document.getElementById('substitute-picker-modal');
  if (modal) modal.classList.add('hidden');
  pendingOutPlayerId = null;
  pendingOutSlotId = null;
}

function executeSubstitution(inPlayerId) {
  if (!pendingOutPlayerId || !pendingOutSlotId) return;

  const outPlayer = squad.find(p => p.id === pendingOutPlayerId);
  const inPlayer = squad.find(p => p.id === inPlayerId);

  if (outPlayer && inPlayer) {
    lineup[pendingOutSlotId] = inPlayer.id;
    recordMatchEvent(`🔄 ⬇️ #${outPlayer.number} ${outPlayer.name} ➡️ ⬆️ #${inPlayer.number} ${inPlayer.name}`);
    saveData();
    renderTacticsBoard();
    renderLiveBench();
  }

  closeSubstitutePicker();
}

function quickBenchEntry(inPlayerId) {
  const inPlayer = squad.find(p => p.id === inPlayerId);
  const formationData = FORMATIONS[currentFormation];

  let freeSlot = formationData.slots.find(s => !lineup[s.id]);
  if (freeSlot) {
    lineup[freeSlot.id] = inPlayerId;
    recordMatchEvent(`⬆️ Entra al campo #${inPlayer.number} ${inPlayer.name}`);
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
  } else {
    // Si no hay hueco, sugerir hacer cambio
    alert("Todos los puestos de titular están ocupados. Pulsa en el botón 'Cambio' del jugador del campo que quieras sustituir.");
  }
}

function showBenchForSlot(slotId, expectedRole) {
  const startingIds = Object.values(lineup);
  const candidates = squad.filter(p => !startingIds.includes(p.id) && p.isAvailable !== false);

  if (candidates.length === 0) {
    alert("No hay jugadores en el banquillo disponibles.");
    return;
  }

  candidates.sort((a, b) => {
    const aMatch = a.mainPos === expectedRole ? 1 : 0;
    const bMatch = b.mainPos === expectedRole ? 1 : 0;
    if (aMatch !== bMatch) return bMatch - aMatch;
    return calculateGLR(b) - calculateGLR(a);
  });

  lineup[slotId] = candidates[0].id;
  recordMatchEvent(`⬆️ Ocupa puesto #${candidates[0].number} ${candidates[0].name}`);
  saveData();
  renderTacticsBoard();
  renderLiveBench();
  updateTeamStats();
}

function autoFillLineup() {
  const formationData = FORMATIONS[currentFormation];
  if (!formationData) return;

  lineup = {};
  const available = squad.filter(p => p.isAvailable !== false);

  formationData.slots.forEach(slot => {
    if (available.length === 0) return;

    available.sort((a, b) => {
      const aExact = a.mainPos === slot.role ? 1 : 0;
      const bExact = b.mainPos === slot.role ? 1 : 0;
      if (aExact !== bExact) return bExact - aExact;

      const aSec = (a.secPositions && a.secPositions.includes(slot.role)) ? 1 : 0;
      const bSec = (b.secPositions && b.secPositions.includes(slot.role)) ? 1 : 0;
      if (aSec !== bSec) return bSec - aSec;

      return calculateGLR(b) - calculateGLR(a);
    });

    const chosen = available.shift();
    if (chosen) {
      lineup[slot.id] = chosen.id;
    }
  });

  saveData();
  renderTacticsBoard();
  renderLiveBench();
  updateTeamStats();
}

function updateTeamStats() {
  const startingIds = Object.values(lineup).filter(Boolean);
  const startingPlayers = squad.filter(p => startingIds.includes(p.id));

  const countEl = document.getElementById('titulares-count');
  const glrEl = document.getElementById('team-glr');

  if (countEl) countEl.innerText = startingPlayers.length;

  if (startingPlayers.length > 0) {
    const totalGLR = startingPlayers.reduce((sum, p) => sum + calculateGLR(p), 0);
    const avgGLR = Math.round(totalGLR / startingPlayers.length);
    if (glrEl) glrEl.innerText = avgGLR;
  } else {
    if (glrEl) glrEl.innerText = '--';
  }
}

// ------------------------------------------
// 11. CONVOCATORIA Y GESTIÓN DE BAJAS
// ------------------------------------------
function openAttendanceModal() {
  const modal = document.getElementById('attendance-modal');
  if (modal) modal.classList.remove('hidden');
  renderAttendanceList();
  if (window.lucide) lucide.createIcons();
}

function closeAttendanceModal() {
  const modal = document.getElementById('attendance-modal');
  if (modal) modal.classList.add('hidden');
}

function updateUnavailCount() {
  const unavails = squad.filter(p => p.isAvailable === false).length;
  const headerCount = document.getElementById('unavail-count-header');
  if (headerCount) headerCount.innerText = unavails;
}

function renderAttendanceList() {
  const container = document.getElementById('attendance-players-list');
  const availCount = document.getElementById('modal-avail-count');
  const unavailCount = document.getElementById('modal-unavail-count');
  if (!container) return;
  container.innerHTML = '';

  const availables = squad.filter(p => p.isAvailable !== false);
  const unavailables = squad.filter(p => p.isAvailable === false);

  if (availCount) availCount.innerText = availables.length;
  if (unavailCount) unavailCount.innerText = unavailables.length;
  updateUnavailCount();

  squad.forEach(player => {
    const isAvail = player.isAvailable !== false;
    const item = document.createElement('div');
    item.className = `p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition ${isAvail ? 'bg-slate-900/90 border-fm-border' : 'bg-rose-950/20 border-rose-800/40'}`;

    item.innerHTML = `
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-display font-black text-xs text-white">
          ${player.number}
        </div>
        <div>
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-white">${player.name}</span>
            <span class="text-[9px] font-bold px-1.5 py-0.2 rounded border ${getPosBadgeColor(player.mainPos)}">${player.mainPos}</span>
          </div>
          <div class="text-[10px] text-slate-400">Media: ${calculateGLR(player)}</div>
        </div>
      </div>

      <div class="flex items-center gap-2 self-end sm:self-center">
        ${!isAvail ? `
          <select onchange="updateUnavailabilityReason('${player.id}', this.value)" class="bg-slate-950 border border-rose-800/60 rounded-lg px-2 py-1 text-[11px] text-rose-300 focus:outline-none cursor-pointer">
            <option value="Lesión" ${player.unavailabilityReason === 'Lesión' ? 'selected' : ''}>Lesión</option>
            <option value="Enfermedad" ${player.unavailabilityReason === 'Enfermedad' ? 'selected' : ''}>Enfermedad</option>
            <option value="Viaje" ${player.unavailabilityReason === 'Viaje' ? 'selected' : ''}>Viaje</option>
            <option value="Descanso" ${player.unavailabilityReason === 'Descanso' ? 'selected' : ''}>Descanso</option>
            <option value="Sanción" ${player.unavailabilityReason === 'Sanción' ? 'selected' : ''}>Sanción</option>
            <option value="Otros" ${player.unavailabilityReason === 'Otros' ? 'selected' : ''}>Otros</option>
          </select>
        ` : ''}

        <button onclick="togglePlayerAvailability('${player.id}')" class="px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 ${isAvail ? 'bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white border border-emerald-500/40' : 'bg-rose-600 text-white hover:bg-rose-500 shadow-md'}">
          <i data-lucide="${isAvail ? 'check-circle' : 'user-x'}" class="w-3 h-3"></i>
          <span>${isAvail ? 'Disponible' : 'Baja'}</span>
        </button>
      </div>
    `;

    container.appendChild(item);
  });

  if (window.lucide) lucide.createIcons();
}

function togglePlayerAvailability(playerId) {
  const player = squad.find(p => p.id === playerId);
  if (!player) return;

  player.isAvailable = (player.isAvailable === false ? true : false);
  if (!player.isAvailable && !player.unavailabilityReason) {
    player.unavailabilityReason = 'Lesión';
  }

  // Si se marca como baja y estaba en el campo, retirarlo
  if (!player.isAvailable) {
    for (const slotId in lineup) {
      if (lineup[slotId] === playerId) {
        delete lineup[slotId];
        recordMatchEvent(`⚠️ Sale por baja #${player.number} ${player.name}`);
      }
    }
  }

  saveData();
  renderAttendanceList();
  renderTacticsBoard();
  renderLiveBench();
  updateTeamStats();
  renderSquadTable();
}

function updateUnavailabilityReason(playerId, reason) {
  const player = squad.find(p => p.id === playerId);
  if (player) {
    player.unavailabilityReason = reason;
    saveData();
  }
}

function setAllAvailable(status) {
  squad.forEach(p => {
    p.isAvailable = status;
    if (status) p.unavailabilityReason = '';
  });
  saveData();
  renderAttendanceList();
  renderTacticsBoard();
  renderLiveBench();
  updateTeamStats();
  renderSquadTable();
}

// ------------------------------------------
// 12. WHATSAPP: ACTA Y RESUMEN DEL PARTIDO
// ------------------------------------------
function copyMatchSummaryForWhatsApp() {
  const mins = Math.floor(matchSeconds / 60);
  let text = `⚽ *ACTA Y RESUMEN DEL PARTIDO - ALEVÍN 26/27 (2 x 35 min)* ⚽\n`;
  text += `🏆 *Marcador:* Alevín ${scoreHome} - ${scoreAway} Rival\n`;
  text += `⏱️ *Tiempo total jugado:* ${mins} minutos\n\n`;

  text += `📊 *MINUTOS JUGADOS POR CADA NIÑO:*\n`;
  const sorted = [...squad].filter(p => p.isAvailable !== false).sort((a,b) => (b.playedSeconds||0) - (a.playedSeconds||0));
  sorted.forEach(p => {
    const pMins = Math.floor((p.playedSeconds || 0) / 60);
    text += `▫️ #${p.number} ${p.name}: *${pMins} min*\n`;
  });

  const unavailables = squad.filter(p => p.isAvailable === false);
  if (unavailables.length > 0) {
    text += `\n❌ *NO DISPONIBLES / BAJAS (${unavailables.length}):*\n`;
    unavailables.forEach(p => {
      text += `🚫 #${p.number} ${p.name} (${p.unavailabilityReason || 'Baja'})\n`;
    });
  }

  if (matchEvents.length > 0) {
    text += `\n🔄 *REGISTRO DE CAMBIOS Y GOLES:*\n`;
    [...matchEvents].reverse().forEach(e => {
      text += `• Min ${e.min}: ${e.text}\n`;
    });
  }

  text += `\n👏 ¡Gran esfuerzo y compromiso de todo el equipo!`;

  navigator.clipboard.writeText(text).then(() => {
    alert("¡Resumen y minutos copiados al portapapeles! Ya puedes pegarlo en el grupo de WhatsApp.");
  }).catch(() => {
    prompt("Copia el siguiente texto para WhatsApp:", text);
  });
}

// ------------------------------------------
// 13. GESTIÓN DE PLANTILLA (TAB SECUNDARIO)
// ------------------------------------------
function switchMainView(view) {
  currentMainView = view;
  const tabMatch = document.getElementById('tab-match');
  const tabSquad = document.getElementById('tab-squad');
  const viewMatch = document.getElementById('view-match');
  const viewSquad = document.getElementById('view-squad');

  if (view === 'match') {
    tabMatch.className = 'tab-btn active px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition';
    tabSquad.className = 'tab-btn px-3 py-1.5 rounded-lg text-slate-400 hover:text-white flex items-center gap-1.5 transition';
    viewMatch.classList.remove('hidden');
    viewSquad.classList.add('hidden');
    renderTacticsBoard();
    renderLiveBench();
  } else {
    tabSquad.className = 'tab-btn active px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition';
    tabMatch.className = 'tab-btn px-3 py-1.5 rounded-lg text-slate-400 hover:text-white flex items-center gap-1.5 transition';
    viewSquad.classList.remove('hidden');
    viewMatch.classList.add('hidden');
    renderSquadTable();
  }
  if (window.lucide) lucide.createIcons();
}

function filterPosition(pos) {
  currentFilter = pos;
  document.querySelectorAll('.pos-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-pos') === pos) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderSquadTable();
}

function renderSquadTable() {
  const container = document.getElementById('squad-grid');
  const countBadge = document.getElementById('player-count');
  if (countBadge) countBadge.innerText = squad.length;

  if (!container) return;
  container.innerHTML = '';

  const searchInput = document.getElementById('squad-search');
  const term = (searchInput ? searchInput.value.toLowerCase().trim() : '');

  let filtered = squad.filter(player => {
    const matchesPos = (currentFilter === 'ALL' || player.mainPos === currentFilter);
    const matchesSearch = player.name.toLowerCase().includes(term) || String(player.number).includes(term);
    return matchesPos && matchesSearch;
  });

  filtered.sort((a, b) => calculateGLR(b) - calculateGLR(a));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12 bg-fm-card border border-fm-border rounded-2xl">
        <i data-lucide="user-x" class="w-10 h-10 text-slate-500 mx-auto mb-2"></i>
        <h4 class="text-slate-300 font-bold text-sm">No se encontraron niños</h4>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  filtered.forEach(player => {
    const glr = calculateGLR(player);
    const isStarting = Object.values(lineup).includes(player.id);

    const card = document.createElement('div');
    card.className = 'bg-fm-card hover:bg-fm-cardHover border border-fm-border hover:border-slate-600 rounded-2xl p-4 transition-all duration-200 shadow-lg flex flex-col justify-between group';

    const secPosBadges = (player.secPositions && player.secPositions.length > 0)
      ? player.secPositions.map(sp => `<span class="px-1.5 py-0.5 rounded text-[9px] bg-slate-800 text-slate-400 font-semibold">${sp}</span>`).join(' ')
      : '';

    card.innerHTML = `
      <div>
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center font-display font-black text-xl text-white shadow-inner">
              ${player.number}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-display font-bold text-base text-white group-hover:text-blue-400 transition cursor-pointer" onclick="openPlayerProfile('${player.id}')">
                  ${player.name}
                </h3>
              </div>
              <div class="flex items-center gap-1.5 mt-0.5 flex-wrap">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold border ${getPosBadgeColor(player.mainPos)}">${player.mainPos}</span>
                ${secPosBadges}
                ${player.isAvailable === false ? `<span class="px-1.5 py-0.5 rounded text-[9px] bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">BAJA (${player.unavailabilityReason || 'No disponible'})</span>` : ''}
                ${isStarting ? '<span class="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">TITULAR F7</span>' : ''}
              </div>
            </div>
          </div>

          <div class="text-right">
            <span class="font-display font-black text-2xl px-2.5 py-1 rounded-xl shadow-md ${getFMBadgeClass(glr)}">
              ${glr}
            </span>
          </div>
        </div>

        <div class="space-y-1 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 mb-3 text-xs">
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Calidad: <b class="text-slate-200">${player.calidad}</b></span>
            <span class="text-slate-400">Talento: <b class="text-slate-200">${player.talento}</b></span>
            <span class="text-slate-400">Velocidad: <b class="text-slate-200">${player.velocidad}</b></span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-400">Potencia: <b class="text-slate-200">${player.potencia}</b></span>
            <span class="text-slate-400">Mental: <b class="text-slate-200">${player.mental}</b></span>
            <span class="text-slate-400">Jugado: <b class="text-amber-300">${Math.floor((player.playedSeconds||0)/60)}m</b></span>
          </div>
        </div>

        <div class="text-[11px] text-slate-400 line-clamp-1 italic mb-2">
          ${player.roleNote ? `“${player.roleNote}”` : (player.notes || 'Sin observaciones.')}
        </div>
      </div>

      <div class="pt-2 border-t border-fm-border flex items-center justify-between">
        <button onclick="openPlayerProfile('${player.id}')" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition">
          <i data-lucide="eye" class="w-3.5 h-3.5"></i>
          <span>Ver Ficha</span>
        </button>

        <div class="flex items-center gap-1">
          <button onclick="editPlayer('${player.id}')" class="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition" title="Editar">
            <i data-lucide="edit-2" class="w-4 h-4"></i>
          </button>
          <button onclick="deletePlayer('${player.id}')" class="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 rounded-lg transition" title="Eliminar">
            <i data-lucide="trash" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) lucide.createIcons();
}

// ------------------------------------------
// 14. MODAL CREAR / EDITAR JUGADOR
// ------------------------------------------
function openPlayerModal(isEdit = false) {
  const modal = document.getElementById('player-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  if (!isEdit) {
    document.getElementById('player-id').value = '';
    document.getElementById('modal-title').innerText = 'Nuevo Jugador Alevín';
    document.getElementById('player-form').reset();

    ['calidad', 'talento', 'velocidad', 'potencia', 'mental'].forEach(attr => {
      updateAttrValue(attr, 70);
      const input = document.getElementById(`input-${attr}`);
      if (input) input.value = 70;
    });

    document.querySelectorAll('.sec-pos-checkbox').forEach(cb => cb.checked = false);
    updateModalGLRPreview();
  }

  if (window.lucide) lucide.createIcons();
}

function closePlayerModal() {
  const modal = document.getElementById('player-modal');
  if (modal) modal.classList.add('hidden');
}

function updateAttrValue(attrName, val) {
  const label = document.getElementById(`val-${attrName}`);
  if (label) {
    label.innerText = val;
    label.className = `fm-val font-display font-bold text-xs px-2 py-0.5 rounded ${getFMBadgeClass(val)}`;
  }
  updateModalGLRPreview();
}

function updateModalGLRPreview() {
  const c = parseInt(document.getElementById('input-calidad')?.value) || 50;
  const t = parseInt(document.getElementById('input-talento')?.value) || 50;
  const v = parseInt(document.getElementById('input-velocidad')?.value) || 50;
  const p = parseInt(document.getElementById('input-potencia')?.value) || 50;
  const m = parseInt(document.getElementById('input-mental')?.value) || 50;

  const previewPlayer = { calidad: c, talento: t, velocidad: v, potencia: p, mental: m };
  const glr = calculateGLR(previewPlayer);

  const previewEl = document.getElementById('modal-glr-preview');
  if (previewEl) {
    previewEl.innerText = glr;
    previewEl.className = `font-display font-black text-xl px-2.5 py-0.5 rounded-lg shadow-md ${getFMBadgeClass(glr)}`;
  }
}

function onPositionChanged(pos) {
  updateModalGLRPreview();
}

function savePlayer(e) {
  e.preventDefault();

  const id = document.getElementById('player-id').value;
  const name = document.getElementById('input-name').value.trim();
  const number = parseInt(document.getElementById('input-number').value) || 0;
  const mainPos = document.getElementById('input-pos').value;
  const foot = document.getElementById('input-foot').value;
  const roleNote = document.getElementById('input-role').value.trim();
  const notes = document.getElementById('input-notes').value.trim();

  const secPositions = [];
  document.querySelectorAll('.sec-pos-checkbox:checked').forEach(cb => {
    secPositions.push(cb.value);
  });

  const calidad = parseInt(document.getElementById('input-calidad').value) || 50;
  const talento = parseInt(document.getElementById('input-talento').value) || 50;
  const velocidad = parseInt(document.getElementById('input-velocidad').value) || 50;
  const potencia = parseInt(document.getElementById('input-potencia').value) || 50;
  const mental = parseInt(document.getElementById('input-mental').value) || 50;

  if (id) {
    const index = squad.findIndex(p => p.id === id);
    if (index !== -1) {
      squad[index] = {
        ...squad[index],
        name, number, mainPos, secPositions, foot, roleNote, notes,
        calidad, talento, velocidad, potencia, mental
      };
    }
  } else {
    const newPlayer = {
      id: 'p_' + Date.now(),
      name, number, mainPos, secPositions, foot, roleNote, notes,
      calidad, talento, velocidad, potencia, mental,
      playedSeconds: 0, isAvailable: true, unavailabilityReason: ''
    };
    squad.push(newPlayer);
  }

  saveData();
  closePlayerModal();
  renderSquadTable();
  renderTacticsBoard();
  renderLiveBench();
  updateTeamStats();
}

function editPlayer(id) {
  const player = squad.find(p => p.id === id);
  if (!player) return;

  openPlayerModal(true);
  document.getElementById('modal-title').innerText = 'Editar a ' + player.name;
  document.getElementById('player-id').value = player.id;
  document.getElementById('input-name').value = player.name;
  document.getElementById('input-number').value = player.number;
  document.getElementById('input-pos').value = player.mainPos;
  document.getElementById('input-foot').value = player.foot || 'Diestro';
  document.getElementById('input-role').value = player.roleNote || '';
  document.getElementById('input-notes').value = player.notes || '';

  ['calidad', 'talento', 'velocidad', 'potencia', 'mental'].forEach(attr => {
    const input = document.getElementById(`input-${attr}`);
    if (input) input.value = player[attr] || 70;
    updateAttrValue(attr, player[attr] || 70);
  });

  document.querySelectorAll('.sec-pos-checkbox').forEach(cb => {
    cb.checked = (player.secPositions && player.secPositions.includes(cb.value));
  });

  updateModalGLRPreview();
}

function deletePlayer(id) {
  const player = squad.find(p => p.id === id);
  if (!player) return;

  if (confirm(`¿Seguro que deseas eliminar a ${player.name} de la plantilla?`)) {
    squad = squad.filter(p => p.id !== id);

    for (const slotId in lineup) {
      if (lineup[slotId] === id) {
        delete lineup[slotId];
      }
    }

    saveData();
    renderSquadTable();
    renderTacticsBoard();
    renderLiveBench();
    updateTeamStats();
  }
}

// ------------------------------------------
// 15. FICHA DETALLADA / RADAR PENTAGONAL
// ------------------------------------------
function openPlayerProfile(id) {
  const player = squad.find(p => p.id === id);
  if (!player) return;

  const modal = document.getElementById('profile-modal');
  if (!modal) return;
  modal.classList.remove('hidden');

  const glr = calculateGLR(player);

  document.getElementById('profile-name').innerText = player.name;
  document.getElementById('profile-avatar').innerText = player.number;
  document.getElementById('profile-pos').innerText = player.mainPos;
  document.getElementById('profile-pos').className = `px-2.5 py-0.5 rounded text-xs font-bold border ${getPosBadgeColor(player.mainPos)}`;

  const secPosText = (player.secPositions && player.secPositions.length > 0)
    ? ` • También: ${player.secPositions.join(', ')}`
    : '';

  document.getElementById('profile-meta').innerText = `Dorsal ${player.number} • ${player.foot || 'Diestro'}${secPosText}`;

  const glrBadge = document.getElementById('profile-glr');
  glrBadge.innerText = glr;
  glrBadge.className = `font-display font-black text-2xl sm:text-3xl px-3 py-1 rounded-xl shadow-md ${getFMBadgeClass(glr)}`;

  document.getElementById('profile-notes').innerText = player.notes || 'Sin observaciones registradas por el entrenador.';

  const listContainer = document.getElementById('profile-attributes-list');
  if (listContainer) {
    const attrs = [
      { name: 'Calidad', key: 'calidad', desc: 'Control de balón y pase limpio', icon: 'zap' },
      { name: 'Talento', key: 'talento', desc: 'Creatividad, desborde y regate', icon: 'sparkles' },
      { name: 'Velocidad', key: 'velocidad', desc: 'Arrancada y aceleración', icon: 'gauge' },
      { name: 'Potencia', key: 'potencia', desc: 'Fuerza física y pegada', icon: 'shield' },
      { name: 'Mental', key: 'mental', desc: 'Colocación y toma de decisiones', icon: 'brain' },
    ];

    listContainer.innerHTML = attrs.map(a => {
      const val = player[a.key] || 50;
      return `
        <div class="bg-slate-900/60 p-2 sm:p-2.5 rounded-xl border border-fm-border flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
              <i data-lucide="${a.icon}" class="w-3.5 h-3.5 text-blue-400"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-white">${a.name}</div>
              <div class="text-[10px] text-slate-400">${a.desc}</div>
            </div>
          </div>
          <span class="font-display font-bold text-xs px-2 py-0.5 rounded ${getFMBadgeClass(val)}">${val}</span>
        </div>
      `;
    }).join('');
  }

  renderRadarChart(player);

  const editBtn = document.getElementById('profile-btn-edit');
  if (editBtn) {
    editBtn.onclick = () => {
      closeProfileModal();
      editPlayer(player.id);
    };
  }

  if (window.lucide) lucide.createIcons();
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) modal.classList.add('hidden');
}

function renderRadarChart(player) {
  const canvas = document.getElementById('profile-radar');
  if (!canvas) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  const ctx = canvas.getContext('2d');
  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Calidad', 'Talento', 'Velocidad', 'Potencia', 'Mental'],
      datasets: [{
        label: player.name,
        data: [
          player.calidad || 50,
          player.talento || 50,
          player.velocidad || 50,
          player.potencia || 50,
          player.mental || 50
        ],
        backgroundColor: 'rgba(56, 189, 248, 0.25)',
        borderColor: '#38bdf8',
        borderWidth: 2,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#38bdf8',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 100,
          ticks: { stepSize: 20, display: false },
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.15)' },
          pointLabels: {
            color: '#94a3b8',
            font: { size: 11, weight: 'bold', family: 'Inter' }
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// ------------------------------------------
// 16. EXPORTACIÓN, IMPORTACIÓN Y AJUSTES
// ------------------------------------------
function toggleSettingsMenu() {
  const menu = document.getElementById('settings-menu');
  if (menu) menu.classList.toggle('hidden');
}

function exportData() {
  const data = {
    teamName: "Alevín 26/27",
    exportDate: new Date().toISOString(),
    formation: currentFormation,
    lineup: lineup,
    players: squad
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Alevin_26-27_Plantilla_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toggleSettingsMenu();
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.players && Array.isArray(data.players)) {
        squad = data.players;
        if (data.formation && FORMATIONS[data.formation]) {
          currentFormation = data.formation;
          document.getElementById('formation-select').value = currentFormation;
        }
        if (data.lineup) {
          lineup = data.lineup;
        }
        saveData();
        renderTacticsBoard();
        renderLiveBench();
        renderSquadTable();
        updateTeamStats();
        alert('¡Plantilla cargada con éxito!');
        toggleSettingsMenu();
      } else {
        alert('El archivo no contiene un formato válido.');
      }
    } catch (err) {
      alert('Error al leer el archivo JSON.');
    }
  };
  reader.readAsText(file);
}

function restoreSampleData() {
  if (confirm('¿Restaurar los 15 jugadores reales de la plantilla?')) {
    squad = JSON.parse(JSON.stringify(DEFAULT_SQUAD));
    lineup = {
      'pos-1': 'p15',
      'pos-2': 'p3',
      'pos-3': 'p4',
      'pos-4': 'p2',
      'pos-5': 'p5',
      'pos-6': 'p6',
      'pos-7': 'p1'
    };
    currentFormation = '1-3-2-1';
    document.getElementById('formation-select').value = '1-3-2-1';
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    renderSquadTable();
    updateTeamStats();
    toggleSettingsMenu();
  }
}

function clearAllData() {
  if (confirm('¿Vaciar toda la plantilla? Esta acción no se puede deshacer.')) {
    squad = [];
    lineup = {};
    saveData();
    renderTacticsBoard();
    renderLiveBench();
    renderSquadTable();
    updateTeamStats();
    toggleSettingsMenu();
  }
}
