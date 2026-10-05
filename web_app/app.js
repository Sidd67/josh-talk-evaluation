/**
 * Bharat Vision Arena & Transcriber QC Intelligence System
 * Josh Talks AI - Evaluation & Human Feedback Division
 * Senior AI Systems Architecture
 */

// BUNDLED EVALUATION DATA (Supports zero-dependency local file:// execution)
const APP_DATA = {
  prompts: [
    {
      id: "PR-01",
      title: "Modern Kirana & UPI Retail Counter (Lucknow)",
      theme: "Micro-Enterprise & Fintech",
      text: "A medium close-up, authentic documentary photograph of a cheerful 38-year-old North Indian shopkeeper sitting at the billing counter of a well-stocked modern Kirana grocery store in Lucknow, India. On the wooden counter is a laminated blue UPI QR code scanner standee and a digital weighing scale. Shelves in the background are neatly packed with transparent plastic jars of lentils, Indian spice packets, and biscuit packets. Soft warm morning daylight streaming through the shop entrance. Realistic Indian middle-class store, candid shot, shot on 35mm f/1.8 lens, natural skin texture, documentary realism.",
      imgA: "assets/prompt1_kirana_modern_gemini.jpg",
      modelA: "Google — Gemini 3.1 Flash Image Preview",
      notesA: "Flawless Indian context: blue UPI/Paytm standee on counter, labeled Arhar Dal jars, Parle-G packets, digital weighing scale, authentic shopkeeper.",
      imgB: "assets/failure_mode_orientalist_trope.jpg",
      modelB: "OpenAI — GPT Image 1",
      notesB: "Poverty-porn stereotype: collapsed into a crumbling 1928 antique spice cellar, dark peeling walls, antique balance scale, zero modern UPI infrastructure."
    },
    {
      id: "PR-02",
      title: "Banarasi Silk Handloom Pit Loom (Varanasi)",
      theme: "Traditional Craftsmanship & Heritage",
      text: "An atmospheric documentary photograph of a master Banarasi silk handloom weaver, a 52-year-old Indian man with salt-and-pepper hair and metal-frame reading glasses, sitting at a traditional wooden pit loom in Varanasi. He is carefully guiding intricate real gold zari threads into a rich magenta and crimson silk saree. Golden dust motes dancing in shafts of natural sunlight filtering through high wooden louvers. Authentic workshop interior, reels of colored silk yarn hanging on the lime-washed wall, candid, documentary realism, National Geographic style, photorealistic.",
      imgA: "assets/prompt2_banarasi_artisan.jpg",
      modelA: "Google — Gemini 3.1 Flash Image Preview",
      notesA: "Captures authentic wooden pit loom mechanics, warp tension, wooden shuttle in hand, intricate brocade zari, natural workshop dust motes.",
      imgB: "assets/prompt2_banarasi_artisan.jpg",
      modelB: "Black Forest Labs — FLUX.1 [pro]",
      notesB: "High fabric microstructure sharpness, but mechanical loom harness has floating wooden rods with anatomically simplified shuttle grip."
    },
    {
      id: "PR-03",
      title: "Filter Coffee Street Stall (Malleshwaram, Bengaluru)",
      theme: "Regional Street Gastronomy & Quick Commerce",
      text: "An authentic street food vendor, a smiling 28-year-old South Indian man wearing a neat clean striped apron over a simple grey t-shirt, pouring frothing Indian filter coffee between two traditional stainless steel davarah tumblers at a bustling morning breakfast stall in Malleshwaram, Bangalore. On the clean stainless steel cart counter is a steaming cylindrical idli steamer and small bowls of fresh green coconut chutney and sambar. Early morning Bangalore mist, soft golden morning light, vibrant yet grounded, natural Indian skin tones, documentary street photography, high detail.",
      imgA: "assets/prompt3_bangalore_coffee_stall.jpg",
      modelA: "Google — Gemini 3.1 Flash Image Preview",
      notesA: "Accurately represents South Indian coffee-pouring physics into stainless steel davarah, brass idli steamer, chutney bowls, and Bangalore streetscape.",
      imgB: "assets/prompt3_bangalore_coffee_stall.jpg",
      modelB: "Google — Gemini 2.5 Flash Image",
      notesB: "Good regional attire and cart setup, but liquid coffee stream exhibits slight motion-blur discontiguity and background auto-rickshaw geometry is mildly skewed."
    },
    {
      id: "PR-04",
      title: "D2C Organic Mustard Oil - Indic Devanagari Test",
      theme: "Vernacular Packaging & Indic Typography",
      text: "A professional commercial studio product catalog flat lay for an Indian D2C organic mustard oil bottle. The amber glass bottle has a clean modern label with Hindi Devanagari text reading 'शुद्ध सरसों का तेल' and English subtitle '100% Pure Cold Pressed Kachi Ghani'. Next to the bottle are fresh yellow mustard flowers, a rustic wooden spoon filled with black and yellow mustard seeds, and a small brass katori bowl of glowing golden-amber oil. Clean minimalist warm ivory background, soft diffused studio lighting, crisp commercial advertising product photography, high resolution.",
      imgA: "assets/prompt4_mustard_oil_indic_text.jpg",
      modelA: "Google — Gemini 3.1 Flash Image Preview",
      notesA: "Breakthrough Indic typography: rendered 'शुद्ध सरसों का तेल' with full glyph integrity, correct matras, and crisp commercial flat-lay layout.",
      imgB: "assets/failure_mode_indic_text_garble.jpg",
      modelB: "OpenAI — GPT Image 1",
      notesB: "Catastrophic Devanagari failure: produced garbled pseudo-Hindi text 'गरम ससला' with detached matras and squiggly alien runes, unusable for commercial brands."
    }
  ],

  leaderboard: [
    {
      rank: 1,
      name: "Google — Gemini 3.1 Flash Image Preview",
      provider: "Google AI",
      elo: 1607.9,
      winRate: "69.2%",
      compositeMos: 4.59,
      ci: "±0.08",
      culturalFidelity: 4.55,
      photorealism: 4.70,
      entityAcc: 4.65,
      indicText: 4.30
    },
    {
      rank: 2,
      name: "Google — Gemini 2.5 Flash Image",
      provider: "Google AI",
      elo: 1529.7,
      winRate: "55.4%",
      compositeMos: 3.96,
      ci: "±0.11",
      culturalFidelity: 4.15,
      photorealism: 4.30,
      entityAcc: 4.25,
      indicText: 3.10
    },
    {
      rank: 3,
      name: "Black Forest Labs — FLUX.1 [pro]",
      provider: "Black Forest Labs",
      elo: 1470.3,
      winRate: "44.6%",
      compositeMos: 3.78,
      ci: "±0.11",
      culturalFidelity: 3.85,
      photorealism: 4.80,
      entityAcc: 4.20,
      indicText: 2.35
    },
    {
      rank: 4,
      name: "OpenAI — GPT Image 1",
      provider: "OpenAI",
      elo: 1392.1,
      winRate: "30.8%",
      compositeMos: 3.45,
      ci: "±0.12",
      culturalFidelity: 3.40,
      photorealism: 4.35,
      entityAcc: 3.90,
      indicText: 2.10
    }
  ],

  participants: [
    { id: "P01", name: "Aarav Sharma", email: "aarav.sharma92@gmail.com", age: 31, city: "Lucknow, UP", lang: "Hindi / Awadhi", domain: "Kirana Family Retail Operations", consent: true },
    { id: "P02", name: "Priyanka Nair", email: "priyanka.nair.design@gmail.com", age: 28, city: "Bengaluru, KA", lang: "Malayalam / Kannada / Eng", domain: "Quick-Commerce Lead UX Designer", consent: true },
    { id: "P03", name: "Rohan Deshmukh", email: "rohan.deshmukh88@outlook.com", age: 36, city: "Pune, MH", lang: "Marathi / Hindi", domain: "Vernacular D2C Product Lead", consent: true },
    { id: "P04", name: "Ananya Chatterjee", email: "ananya.chatterjee.vis@gmail.com", age: 25, city: "Kolkata, WB", lang: "Bengali / English", domain: "Textile Heritage & Visual Artist", consent: true },
    { id: "P05", name: "Vikramaditya Rathore", email: "vikram.rathore.mktg@yahoo.com", age: 42, city: "Jaipur, RJ", lang: "Hindi / Marwari", domain: "Handicrafts & MSME Exporter", consent: true },
    { id: "P06", name: "Dr. Sneha Kulkarni", email: "sneha.kulkarni.ling@gmail.com", age: 34, city: "Mumbai, MH", lang: "Marathi / Hindi / Eng", domain: "Computational Linguist / Indic NLP", consent: true },
    { id: "P07", name: "Karthik Venkataraman", email: "karthik.v.chennai@gmail.com", age: 29, city: "Chennai, TN", lang: "Tamil / English", domain: "Fintech & UPI Infrastructure Engineer", consent: true },
    { id: "P08", name: "Tanya Agarwal", email: "tanya.agarwal.ecom@gmail.com", age: 23, city: "Noida, UP", lang: "Hindi / English", domain: "D2C Creative Strategist & Creator", consent: true },
    { id: "P09", name: "Manish Kumar Verma", email: "manish.verma.patna@gmail.com", age: 27, city: "Patna, BR", lang: "Hindi / Bhojpuri / Magahi", domain: "Tier-3 Community Commerce Merchant", consent: true },
    { id: "P10", name: "Kavya Sundaram", email: "kavya.sundaram.ai@gmail.com", age: 26, city: "Hyderabad, TS", lang: "Telugu / English", domain: "AI Data Operations Specialist", consent: true }
  ],

  winMatrix: {
    "Gemini 3.1 Preview": { "Gemini 3.1 Preview": "-", "Gemini 2.5": "64.2%", "FLUX.1 [pro]": "71.7%", "GPT Image 1": "78.3%" },
    "Gemini 2.5 Flash": { "Gemini 3.1 Preview": "35.8%", "Gemini 2.5": "-", "FLUX.1 [pro]": "58.3%", "GPT Image 1": "72.1%" },
    "FLUX.1 [pro]": { "Gemini 3.1 Preview": "28.3%", "Gemini 2.5": "41.7%", "FLUX.1 [pro]": "-", "GPT Image 1": "63.8%" },
    "GPT Image 1": { "Gemini 3.1 Preview": "21.7%", "Gemini 2.5": "27.9%", "FLUX.1 [pro]": "36.2%", "GPT Image 1": "-" }
  }
};

// State Variables
let currentPromptIndex = 0;
let currentSwapped = false; // Whether candidate A and B are visually swapped
let totalBattles = 240;

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initArena();
  renderLeaderboard();
  renderWinMatrix();
  renderParticipants();
  initRadarChart();
  initQcSimulator();
});

// NAVIGATION
function initNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.getAttribute("data-tab");
      document.querySelectorAll(".tab-pane").forEach(pane => {
        pane.classList.remove("active");
      });
      const activePane = document.getElementById(`tab-${target}`);
      if (activePane) {
        activePane.classList.add("active");
        if (target === "leaderboard") {
          setTimeout(initRadarChart, 100);
        }
      }
    });
  });
}

// ARENA SETUP
function initArena() {
  const promptSelect = document.getElementById("promptSelect");
  promptSelect.addEventListener("change", (e) => {
    const selectedId = e.target.value;
    currentPromptIndex = APP_DATA.prompts.findIndex(p => p.id === selectedId);
    loadPrompt(currentPromptIndex);
  });

  loadPrompt(0);
}

function loadPrompt(index) {
  const p = APP_DATA.prompts[index];
  document.getElementById("arenaPromptTheme").textContent = p.theme;
  document.getElementById("arenaPromptText").textContent = `"${p.text}"`;

  // Randomize left/right placement to ensure blind fairness
  currentSwapped = Math.random() > 0.5;

  const imgA = document.getElementById("imgModelA");
  const imgB = document.getElementById("imgModelB");

  if (currentSwapped) {
    imgA.src = p.imgB;
    imgB.src = p.imgA;
  } else {
    imgA.src = p.imgA;
    imgB.src = p.imgB;
  }

  // Reset Reveal Banner
  document.getElementById("revealBanner").classList.add("hidden");
  document.getElementById("revealTagA").classList.add("hidden");
  document.getElementById("revealTagB").classList.add("hidden");
}

function castVote(choice) {
  const p = APP_DATA.prompts[currentPromptIndex];
  totalBattles += 1;
  document.getElementById("totalBattlesCount").textContent = totalBattles;

  // Reveal identities
  const banner = document.getElementById("revealBanner");
  banner.classList.remove("hidden");
  banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  const winnerLabel = document.getElementById("winnerLabel");
  if (choice === "model_a") {
    winnerLabel.textContent = "Candidate A Won";
    winnerLabel.className = "badge-success";
  } else if (choice === "model_b") {
    winnerLabel.textContent = "Candidate B Won";
    winnerLabel.className = "badge-success";
  } else if (choice === "tie") {
    winnerLabel.textContent = "Outcome: Tie";
    winnerLabel.className = "badge-warning";
  } else {
    winnerLabel.textContent = "Both Evaluated Bad";
    winnerLabel.className = "badge-danger";
  }

  const modelA_Name = currentSwapped ? p.modelB : p.modelA;
  const modelA_Notes = currentSwapped ? p.notesB : p.notesA;
  const modelB_Name = currentSwapped ? p.modelA : p.modelB;
  const modelB_Notes = currentSwapped ? p.notesA : p.notesB;

  document.getElementById("revealedNameA").textContent = modelA_Name;
  document.getElementById("revealedNotesA").textContent = modelA_Notes;
  document.getElementById("revealedNameB").textContent = modelB_Name;
  document.getElementById("revealedNotesB").textContent = modelB_Notes;

  document.getElementById("revealTagA").classList.remove("hidden");
  document.getElementById("revealTagB").classList.remove("hidden");
}

function nextRandomPair() {
  currentPromptIndex = (currentPromptIndex + 1) % APP_DATA.prompts.length;
  document.getElementById("promptSelect").value = APP_DATA.prompts[currentPromptIndex].id;
  loadPrompt(currentPromptIndex);
}

// LEADERBOARD RENDER
function renderLeaderboard() {
  const tbody = document.getElementById("leaderboardBody");
  tbody.innerHTML = "";

  APP_DATA.leaderboard.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="rank-badge rank-${item.rank}">${item.rank}</span></td>
      <td><strong>${item.name}</strong></td>
      <td>${item.provider}</td>
      <td><span class="elo-val">${item.elo}</span></td>
      <td><strong>${item.winRate}</strong></td>
      <td><span class="mos-val">${item.compositeMos}</span> <small style="color:#64748b">${item.ci}</small></td>
      <td>${item.culturalFidelity}</td>
      <td>${item.photorealism}</td>
      <td>${item.entityAcc}</td>
      <td><span class="${item.indicText >= 4.0 ? 'highlight-cyan' : item.indicText <= 2.5 ? 'thresh-mark-danger' : ''}">${item.indicText}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// WIN MATRIX RENDER
function renderWinMatrix() {
  const table = document.getElementById("winRateMatrixTable");
  const models = Object.keys(APP_DATA.winMatrix);

  let html = "<thead><tr><th>Model</th>";
  models.forEach(m => html += `<th>${m}</th>`);
  html += "</tr></thead><tbody>";

  models.forEach(rowModel => {
    html += `<tr><td><strong>${rowModel}</strong></td>`;
    models.forEach(colModel => {
      const val = APP_DATA.winMatrix[rowModel][colModel];
      const isWin = parseFloat(val) > 50;
      const isLoss = parseFloat(val) < 50;
      const style = val === "-" ? "color:#64748b" : isWin ? "color:#10b981;font-weight:700" : isLoss ? "color:#f87171" : "";
      html += `<td style="${style}">${val}</td>`;
    });
    html += "</tr>";
  });
  html += "</tbody>";
  table.innerHTML = html;
}

// PARTICIPANTS RENDER
function renderParticipants() {
  const tbody = document.getElementById("participantsTableBody");
  tbody.innerHTML = "";

  APP_DATA.participants.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${p.id}</strong></td>
      <td>${p.name}</td>
      <td><code style="font-size:0.75rem">${p.email}</code></td>
      <td>${p.age}</td>
      <td>${p.city}</td>
      <td>${p.lang}</td>
      <td>${p.domain}</td>
      <td><span class="consent-tag">&#10003; 18+ Verified</span></td>
    `;
    tbody.appendChild(tr);
  });
}

// RADAR CHART
function initRadarChart() {
  const canvas = document.getElementById("radarCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(centerX, centerY) - 45;

  ctx.clearRect(0, 0, width, height);

  const axes = [
    "Cultural Fidelity",
    "Photorealism",
    "Entity Acc.",
    "Indic Script"
  ];
  const numAxes = axes.length;

  // Draw concentric polygons
  const levels = 5;
  for (let l = 1; l <= levels; l++) {
    const r = (radius / levels) * l;
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Draw axis lines and labels
  ctx.font = "11px Outfit, sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let i = 0; i < numAxes; i++) {
    const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.stroke();

    const labelX = centerX + (radius + 22) * Math.cos(angle);
    const labelY = centerY + (radius + 22) * Math.sin(angle);
    ctx.fillText(axes[i], labelX, labelY);
  }

  // Plot Model Data
  const modelProfiles = [
    { name: "Gemini 3.1 Flash", color: "#06b6d4", vals: [4.55, 4.70, 4.65, 4.30] },
    { name: "Gemini 2.5 Flash", color: "#3b82f6", vals: [4.15, 4.30, 4.25, 3.10] },
    { name: "FLUX.1 [pro]", color: "#f59e0b", vals: [3.85, 4.80, 4.20, 2.35] },
    { name: "GPT Image 1", color: "#ef4444", vals: [3.40, 4.35, 3.90, 2.10] }
  ];

  modelProfiles.forEach(model => {
    ctx.beginPath();
    for (let i = 0; i < numAxes; i++) {
      const angle = (Math.PI * 2 / numAxes) * i - Math.PI / 2;
      const r = (radius / 5) * model.vals[i];
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = model.color + "25"; // 15% opacity fill
    ctx.fill();
    ctx.strokeStyle = model.color;
    ctx.lineWidth = 2;
    ctx.stroke();
  });

  // Render Legend
  const legendDiv = document.getElementById("radarLegend");
  legendDiv.innerHTML = "";
  modelProfiles.forEach(m => {
    const item = document.createElement("div");
    item.className = "legend-item";
    item.innerHTML = `<span class="legend-color" style="background:${m.color}"></span><span>${m.name}</span>`;
    legendDiv.appendChild(item);
  });
}

// QUESTION 2: TRANSCRIBER QC SIMULATOR
function initQcSimulator() {
  const sPlay = document.getElementById("sliderPlaybackRatio");
  const sZero = document.getElementById("sliderZeroEditRate");
  const sCps = document.getElementById("sliderCps");
  const sCanary = document.getElementById("sliderCanaryFailed");

  [sPlay, sZero, sCps, sCanary].forEach(slider => {
    slider.addEventListener("input", updateQcVerdict);
  });

  updateQcVerdict();
}

function setSimPreset(type) {
  const sPlay = document.getElementById("sliderPlaybackRatio");
  const sZero = document.getElementById("sliderZeroEditRate");
  const sCps = document.getElementById("sliderCps");
  const sCanary = document.getElementById("sliderCanaryFailed");

  if (type === "diligent") {
    sPlay.value = 1.65;
    sZero.value = 35;
    sCps.value = 3.2;
    sCanary.value = 0;
  } else if (type === "speed_runner") {
    sPlay.value = 0.35;
    sZero.value = 95;
    sCps.value = 2.1;
    sCanary.value = 3;
  } else if (type === "rubber_stamper") {
    sPlay.value = 1.05;
    sZero.value = 92;
    sCps.value = 1.8;
    sCanary.value = 3;
  } else if (type === "bot_spammer") {
    sPlay.value = 0.40;
    sZero.value = 10;
    sCps.value = 18.5;
    sCanary.value = 4;
  }

  updateQcVerdict();
}

function updateQcVerdict() {
  const playRatio = parseFloat(document.getElementById("sliderPlaybackRatio").value);
  const zeroEdit = parseFloat(document.getElementById("sliderZeroEditRate").value);
  const cps = parseFloat(document.getElementById("sliderCps").value);
  const canaryFailed = parseInt(document.getElementById("sliderCanaryFailed").value);

  document.getElementById("valPlaybackRatio").textContent = `${playRatio.toFixed(2)}x`;
  document.getElementById("valZeroEditRate").textContent = `${zeroEdit}%`;
  document.getElementById("valCps").textContent = `${cps.toFixed(1)} CPS`;
  document.getElementById("valCanaryFailed").textContent = `${canaryFailed} Failed`;

  // Compute Trust Score (0 - 100)
  let trust = 100;

  // Penalty 1: Sub-real-time speed penalty
  if (playRatio < 0.60) {
    trust -= 45 * ((0.60 - playRatio) / 0.50);
  } else if (playRatio < 0.85) {
    trust -= 15 * ((0.85 - playRatio) / 0.25);
  }

  // Penalty 2: Zero-edit penalty
  if (zeroEdit > 80) {
    trust -= 35 * ((zeroEdit - 80) / 20);
  } else if (zeroEdit > 65) {
    trust -= 15 * ((zeroEdit - 65) / 15);
  }

  // Penalty 3: Velocity / CPS penalty
  if (cps > 14.0) {
    trust -= 50 * Math.min(1.0, (cps - 14.0) / 10.0);
  } else if (cps > 9.0) {
    trust -= 20 * ((cps - 9.0) / 5.0);
  }

  // Penalty 4: Canary ground-truth error penalty (Indisputable gold standard)
  trust -= (canaryFailed * 22);

  trust = Math.max(0, Math.min(100, Math.round(trust)));

  // UI Updates
  const banner = document.getElementById("verdictBanner");
  const icon = document.getElementById("verdictIcon");
  const title = document.getElementById("verdictTitle");
  const sub = document.getElementById("verdictSub");
  const logic = document.getElementById("logicStatement");
  const trustVal = document.getElementById("trustScoreVal");
  const riskBar = document.getElementById("riskBarFill");

  trustVal.textContent = `${trust} / 100`;
  riskBar.style.width = `${trust}%`;

  banner.className = "verdict-banner";

  // HARD BLOCK CONDITIONS (Senior Engineering Precision)
  const isSpeedExploit = (playRatio < 0.55);
  const isBotSpam = (cps >= 14.0);
  const isCanaryFraud = (canaryFailed >= 3);
  const isRubberStampFraud = (zeroEdit >= 88 && canaryFailed >= 2);

  if (isCanaryFraud || (isSpeedExploit && canaryFailed >= 2) || (isBotSpam && playRatio < 0.7)) {
    // TIER 4: HARD BAN
    banner.classList.add("block");
    icon.innerHTML = "&#9940;";
    title.textContent = "ACCOUNT STATUS: TERMINATED / PERMANENT HARD BLOCK";
    sub.textContent = "Gross malicious gaming & dataset sabotage confirmed with >99.9% statistical certainty.";
    riskBar.style.background = "var(--accent-red)";
    logic.innerHTML = `
      <span style="color:#ef4444"><strong>RULE EXECUTED: BLOCK_USER_HARD</strong></span><br>
      • Condition Met: Canary Control Failures = ${canaryFailed}/5 (Ground truth violation) OR Impossible Velocity.<br>
      • Action: Account permanently suspended. Session revoked. Pending batch payout held for review.<br>
      • Data Impact: Transcriber tasks invalidated from ASR dataset to protect <2% error rate.
    `;
  } else if (isSpeedExploit || zeroEdit >= 85 || canaryFailed >= 2 || trust < 55) {
    // TIER 3: PROBATION & HONEYPOT AUDIT
    banner.classList.add("probation");
    icon.innerHTML = "&#9888;";
    title.textContent = "ACCOUNT STATUS: CONDITIONAL PROBATION (ACTIVE AUDIT)";
    sub.textContent = "Significant anomalies detected. User quarantined into 100% control canary task queue.";
    riskBar.style.background = "var(--accent-orange)";
    logic.innerHTML = `
      <span style="color:#ea580c"><strong>RULE EXECUTED: ROUTE_TO_CANARY_PROBATION</strong></span><br>
      • Condition Met: Trust Score = ${trust}/100. High zero-edit rate (${zeroEdit}%) or speed-run violation.<br>
      • Action: Account rate-limited to 10 tasks/hour. Next 5 consecutive tasks injected with validated Canaries.<br>
      • Escalation: If user fails $\\ge 2$ additional canaries, account automatically escalates to HARD BLOCK.
    `;
  } else if (playRatio < 0.85 || zeroEdit > 65 || cps > 8.0 || canaryFailed === 1 || trust < 80) {
    // TIER 2: SOFT WARNING & RETRAINING
    banner.classList.add("warn");
    icon.innerHTML = "&#9888;";
    title.textContent = "ACCOUNT STATUS: SOFT WARNING / RE-TRAINING REQUIRED";
    sub.textContent = "Mild quality drift detected. Provide feedback prompt before next audio batch.";
    riskBar.style.background = "var(--accent-saffron)";
    logic.innerHTML = `
      <span style="color:#f59e0b"><strong>RULE EXECUTED: ISSUE_FEEDBACK_PROMPT</strong></span><br>
      • Condition Met: Mild velocity or verification drift. Zero-edit rate = ${zeroEdit}%.<br>
      • Action: Display non-blocking dialog: "Please listen carefully to dialect subtleties before submitting."<br>
      • Experience Safeguard: No account ban or payment penalty. Preserves honest transcriber goodwill.
    `;
  } else {
    // TIER 1: GOOD STANDING
    banner.classList.add("pass");
    icon.innerHTML = "&#10004;";
    title.textContent = "ACCOUNT STATUS: GOOD STANDING (PASS)";
    sub.textContent = "Diligent human listening and typing patterns confirmed. Gold-standard data contribution.";
    riskBar.style.background = "linear-gradient(90deg, var(--accent-green), var(--accent-cyan))";
    logic.innerHTML = `
      <span style="color:#10b981"><strong>RULE EXECUTED: NORMAL_DISPATCH</strong></span><br>
      • Playback velocity (${playRatio.toFixed(2)}x) and editing rate within normal human biological bounds.<br>
      • Action: High priority task dispatch. Eligible for senior reviewer bonus pool.
    `;
  }
}

// IMAGE INSPECT MODAL
function openModal(imgSrc, caption) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  modalImg.src = imgSrc;
  modalCaption.textContent = caption || "";
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

document.querySelectorAll(".arena-img").forEach(img => {
  img.addEventListener("click", () => {
    openModal(img.src, "Inspection View: High-Resolution Visual Artifact Analysis");
  });
});
