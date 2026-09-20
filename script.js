// =============================================================
// DATA
// Add a new style by adding an object to this array — a card,
// filter entry, modal, and selector option are generated
// automatically. To add a sample video, drop the file at
// /videos/style-XX.mp4 (or point videoSrc at an external URL).
// =============================================================
const STYLES = [
  {
    num: "01",
    name: "Struggle → Motivation",
    tags: ["MOTIVATIONAL", "EMOTIONAL"],
    desc: "Show Mary facing a difficult moment and turn it into a motivational story.",
    best: "Emotional, difficult or relatable footage.",
    structure: "Struggle → Lowest moment → Mindset shift → Motivational payoff",
    hook: "Some days, continuing is the hardest part.",
    why: "The payoff only lands because the low point was allowed to feel real. Don't rush past the struggle to get to the motivation.",
    videoSrc: "videos/style-01.mp4",
  },
  {
    num: "02",
    name: "Before → After",
    tags: ["MOTIVATIONAL", "STORY"],
    desc: "Contrast an earlier difficult phase with growth, progress or confidence.",
    best: "Footage that spans two clearly different points in time.",
    structure: "Before → Struggle → Progress → After",
    hook: "Look where she started.",
    why: "The contrast does the work for you — keep the 'before' honest instead of softening it.",
    videoSrc: "videos/style-02.mp4",
  },
  {
    num: "03",
    name: "The Hard Truth",
    tags: ["MOTIVATIONAL", "CINEMATIC"],
    desc: "Build the video around one uncomfortable but relatable truth, delivered with minimal visuals and strong typography.",
    best: "A single sharp statement that needs no extra footage to support it.",
    structure: "Statement → Beat → Reinforcement → Silence",
    hook: "Talent means nothing without consistency.",
    why: "Restraint is the format. One idea, deliberate pacing, no visual noise competing with the line.",
    videoSrc: "videos/style-03.mp4",
  },
  {
    num: "04",
    name: "POV / Relatable",
    tags: ["RELATABLE"],
    desc: "Make the viewer feel that Mary's experience represents their own situation.",
    best: "Footage that mirrors a feeling most viewers have had themselves.",
    structure: "POV setup → Shared feeling → Recognition",
    hook: "POV: you're tired, but you refuse to quit.",
    why: "It works because the viewer sees themselves, not Mary. Keep the framing second-person.",
    videoSrc: "videos/style-04.mp4",
  },
  {
    num: "06",
    name: "Cinematic Quote",
    tags: ["CINEMATIC"],
    desc: "Use one powerful quote as the central idea, with Mary's footage supporting it rather than competing with it.",
    best: "Strong, self-contained quotes paired with visually calm footage.",
    structure: "Quote in → Supporting visual → Quote lingers",
    hook: "\u201cDiscipline is choosing between what you want now and what you want most.\u201d",
    why: "One video, one dominant idea. Avoid filling the screen with unnecessary text around the quote.",
    videoSrc: "videos/style-06.mp4",
  },
  {
    num: "07",
    name: "Voiceover Story",
    tags: ["STORY"],
    desc: "Use Mary's footage as the visual layer while a voiceover tells a short story or motivational message.",
    best: "B-roll style footage without strong sync-sound moments.",
    structure: "Hook → Story → Lesson → Final line",
    hook: "There was a version of this year where she almost stopped.",
    why: "The voiceover carries the narrative, so the footage can stay atmospheric rather than illustrative.",
    videoSrc: "videos/style-07.mp4",
  },
  {
    num: "08",
    name: "Inner Monologue",
    tags: ["EMOTIONAL", "STORY"],
    desc: "Write the video as if the viewer is hearing Mary's internal thoughts.",
    best: "Emotional or reflective footage with quiet, still moments.",
    structure: "Thought → Doubt → Turn → Resolve",
    hook: "I wanted to quit. Maybe nobody would've blamed me.",
    why: "Intimacy is the whole appeal — first person, unpolished, spoken like a private thought, not a caption.",
    videoSrc: "videos/style-08.mp4",
  },
  {
    num: "09",
    name: "Failure → Comeback",
    tags: ["MOTIVATIONAL", "STORY"],
    desc: "Focus on setbacks, doubt and resilience rather than generic 'never give up' messaging.",
    best: "Footage with a visible setback or low point followed by real progress.",
    structure: "Failure → Doubt → Decision → Comeback",
    hook: "This didn't go the way she planned.",
    why: "Specificity beats slogans — name the actual setback instead of a vague 'hard time'.",
    videoSrc: "videos/style-09.mp4",
  },
  {
    num: "11",
    name: "Emotional / Vulnerable",
    tags: ["EMOTIONAL"],
    desc: "Use slower, quieter and more emotional footage — loneliness, doubt, pressure, fear, sacrifice, exhaustion.",
    best: "Quiet, unguarded moments rather than highlight-reel energy.",
    structure: "Sit with it → Name it → Let it breathe",
    hook: "Nobody sees this part.",
    why: "The payoff should feel emotional, not aggressively motivational — resist the urge to end on a hype line.",
    videoSrc: "videos/style-11.mp4",
  },
  {
    num: "12",
    name: "High-Energy Motivation",
    tags: ["HIGH ENERGY", "MOTIVATIONAL"],
    desc: "Fast cuts, strong music, movement and impactful typography.",
    best: "Achievement, performance, action, competition, progress, victory.",
    structure: "Build → Build → Peak → Release",
    hook: "She wasn't supposed to be here.",
    why: "Energy comes from pacing and music sync, not from stacking effects — cut on the beat, not on the clock.",
    videoSrc: "videos/style-12.mp4",
  },
  {
    num: "14",
    name: "Documentary Style",
    tags: ["STORY", "CINEMATIC"],
    desc: "Make the video feel like a miniature documentary — natural footage, subtle captions, context, voiceover, deliberate pacing.",
    best: "Footage with real context worth explaining rather than dramatizing.",
    structure: "Context → Observation → Insight",
    hook: "This is what a normal Tuesday actually looks like.",
    why: "The result should feel like storytelling, not a generic Instagram edit — let moments run a beat longer than feels comfortable.",
    videoSrc: "videos/style-14.mp4",
  },
  {
    num: "15",
    name: "Expectation vs Reality",
    tags: ["RELATABLE", "CINEMATIC"],
    desc: "Contrast what people think success looks like with what the journey actually looks like.",
    best: "Footage that can be split cleanly into a polished side and a raw side.",
    structure: "Expectation → Cut → Reality",
    hook: "Success looks effortless. Here's what it actually looks like.",
    why: "The cut between the two halves is the joke and the point — keep it sharp, not gradual.",
    videoSrc: "videos/style-15.mp4",
  },
  {
    num: "16",
    name: "Question → Answer",
    tags: ["STORY", "RELATABLE"],
    desc: "Start with a question that creates curiosity, then use Mary's footage to visually answer it.",
    best: "Footage that can serve as a clear, satisfying answer to a specific question.",
    structure: "Question → Pause → Footage answers → Final line",
    hook: "What does it actually take to succeed?",
    why: "The question has to be one people actually wonder about — not rhetorical filler before the 'real' video starts.",
    videoSrc: "videos/style-16.mp4",
  },
  {
    num: "19",
    name: "Slow-Burn Cinematic",
    tags: ["CINEMATIC", "EMOTIONAL"],
    desc: "Very few cuts, longer shots, ambient music, subtle typography, deliberate pacing.",
    best: "Emotional, reflective or visually striking footage that can hold the frame.",
    structure: "Hold → Hold → Single line → Hold",
    hook: "(No hook line — let the first shot hold.)",
    why: "The stillness is the style. Resist cutting sooner than the shot has earned.",
    videoSrc: "videos/style-19.mp4",
  },
  {
    num: "20",
    name: "Rapid-Fire Text Edit",
    tags: ["HIGH ENERGY", "CINEMATIC"],
    desc: "Fast visual progression with short statements appearing one after another.",
    best: "Footage that can support a quick sequence of short, punchy statements.",
    structure: "Statement → Statement → Statement → Turn → Payoff",
    hook: "She failed. She doubted herself. She kept going.",
    why: "Each line should earn its own beat — the rhythm breaks if any statement feels like filler.",
    videoSrc: "videos/style-20.mp4",
  },
];

const RULES = [
  {
    num: "01",
    title: "No repetitive formats",
    body: "Don't repeatedly use the same content style. If your previous video used one format, choose a substantially different format next, whenever possible. Changing the music or swapping clips doesn't count as a different style.",
  },
  {
    num: "02",
    title: "Every video needs a distinct angle",
    body: "The story, hook, message, pacing or narrative treatment must feel different. Don't create multiple versions of the same idea.",
  },
  {
    num: "03",
    title: "Don't force motivation on everything",
    body: "Not every clip needs to become a generic motivational edit. Use emotional, documentary, relatable, cinematic, story-driven or high-energy formats depending on the footage.",
  },
  {
    num: "04",
    title: "Video length: 10–20 seconds",
    body: "Keep submitted videos between 10 and 20 seconds. Avoid unnecessarily long edits — the content should communicate its idea quickly.",
  },
  {
    num: "05",
    title: "One core message",
    body: "One video should communicate one main idea. Don't cram multiple unrelated lessons into a single short.",
  },
  {
    num: "06",
    title: "Avoid generic editing",
    body: "Avoid unnecessary random zooms, excessive shakes, flash transitions, overused effects, random overlays and unnecessary typography. Every edit should serve the story.",
  },
  {
    num: "07",
    title: "Match the style to the footage",
    body: "Emotional footage → Emotional / Vulnerable. Action footage → High-Energy Motivation. Reflective footage → Slow-Burn Cinematic. A strong quote → Cinematic Quote. Don't force footage into a format that doesn't fit.",
  },
  {
    num: "08",
    title: "Hooks must be different",
    body: "Even when reusing an approved style, avoid recycling the same opening line. The first seconds should give the viewer a new reason to keep watching.",
  },
  {
    num: "10",
    title: "The viewer must understand the point",
    body: "After watching, the viewer should be able to answer: \u201cWhat was this video trying to say?\u201d If the answer is unclear, the edit needs improvement.",
  },
];

const SAMPLE_SEQUENCE = [
  { video: "Video 01", styleNum: "01", styleName: "Struggle → Motivation" },
  { video: "Video 02", styleNum: "12", styleName: "High-Energy Motivation" },
  { video: "Video 03", styleNum: "08", styleName: "Inner Monologue" },
  { video: "Video 04", styleNum: "16", styleName: "Question → Answer" },
  { video: "Video 05", styleNum: "14", styleName: "Documentary Style" },
];

const CHECKLIST = [
  "Video is 10–20 seconds",
  "Style is from the approved list",
  "Hook is clear",
  "One core message",
  "Footage matches the style",
  "Not a copy of my previous edit",
  "Editing is clean and intentional",
  "Viewer understands the point",
  "No unnecessary effects",
  "Video is ready for submission",
];

// =============================================================
// RENDER: STYLE CARDS
// =============================================================
const styleGrid = document.getElementById("style-grid");

function playIconSVG() {
  return '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
}

STYLES.forEach((style) => {
  const card = document.createElement("article");
  card.className = "style-card";
  card.dataset.tags = style.tags.join("|");
  card.dataset.search = (style.name + " " + style.desc).toLowerCase();

  card.innerHTML = `
    <div class="style-card-top">
      <span class="style-num">${style.num}</span>
      <span class="approved-badge">✓ Approved</span>
    </div>
    <h3 class="style-name">${style.name}</h3>
    <p class="style-desc">${style.desc}</p>
    <p class="style-best"><strong>Best for:</strong> ${style.best}</p>
    <div class="style-preview">
      <span class="style-preview-ratio">9:16</span>
      <button class="play-btn" aria-label="Watch example for ${style.name}">${playIconSVG()}</button>
    </div>
    <button class="watch-link">Watch example</button>
  `;

  const openModal = () => openStyleModal(style);
  card.querySelector(".play-btn").addEventListener("click", openModal);
  card.querySelector(".watch-link").addEventListener("click", openModal);

  styleGrid.appendChild(card);
});

// =============================================================
// RENDER: RULES
// =============================================================
const rulesGrid = document.getElementById("rules-grid");
RULES.forEach((rule) => {
  const el = document.createElement("div");
  el.className = "rule-card";
  el.innerHTML = `
    <div class="rule-num">${rule.num}</div>
    <h3 class="rule-title">${rule.title}</h3>
    <p class="rule-body">${rule.body}</p>
  `;
  rulesGrid.appendChild(el);
});

// =============================================================
// RENDER: SELECTOR OPTIONS
// =============================================================
const selStyle = document.getElementById("sel-style");
STYLES.forEach((style) => {
  const opt = document.createElement("option");
  opt.value = `#${style.num} — ${style.name}`;
  opt.textContent = `#${style.num} — ${style.name}`;
  selStyle.appendChild(opt);
});

// =============================================================
// RENDER: DIVERSITY TIMELINE
// =============================================================
const timeline = document.getElementById("timeline");
SAMPLE_SEQUENCE.forEach((item, i) => {
  const el = document.createElement("div");
  el.className = "timeline-item";
  el.innerHTML = `
    <p class="timeline-video">${item.video}</p>
    <p class="timeline-style">#${item.styleNum} ${item.styleName}</p>
  `;
  timeline.appendChild(el);
  if (i < SAMPLE_SEQUENCE.length - 1) {
    const arrow = document.createElement("div");
    arrow.className = "timeline-arrow";
    arrow.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    timeline.appendChild(arrow);
  }
});

// =============================================================
// RENDER: CHECKLIST
// =============================================================
const checklistList = document.getElementById("checklist-list");
CHECKLIST.forEach((item, i) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" data-index="${i}">
      <span>${item}</span>
    </label>
  `;
  checklistList.appendChild(li);
});

const progressFill = document.getElementById("progress-fill");
const progressLabel = document.getElementById("progress-label");
const readyBanner = document.getElementById("ready-banner");

checklistList.addEventListener("change", () => {
  const boxes = checklistList.querySelectorAll('input[type="checkbox"]');
  const checked = checklistList.querySelectorAll('input[type="checkbox"]:checked').length;
  const total = boxes.length;
  progressFill.style.width = `${(checked / total) * 100}%`;
  progressLabel.textContent = `${checked}/${total} complete`;
  readyBanner.hidden = checked !== total;
});

// =============================================================
// FILTER + SEARCH
// =============================================================
const filterRow = document.getElementById("filter-row");
const searchInput = document.getElementById("style-search");
const noResults = document.getElementById("no-results");
let activeFilter = "ALL";

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const cards = styleGrid.querySelectorAll(".style-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const tags = card.dataset.tags.split("|");
    const matchesFilter = activeFilter === "ALL" || tags.includes(activeFilter);
    const matchesSearch = !query || card.dataset.search.includes(query);
    const visible = matchesFilter && matchesSearch;
    card.classList.toggle("is-hidden", !visible);
    if (visible) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
}

filterRow.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-chip");
  if (!btn) return;
  filterRow.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("is-active"));
  btn.classList.add("is-active");
  activeFilter = btn.dataset.filter;
  applyFilters();
});

searchInput.addEventListener("input", applyFilters);

// =============================================================
// VIDEO MODAL
// Video src is only set when a card is opened (lazy-loaded),
// and cleared again on close so nothing keeps buffering.
// =============================================================
const modal = document.getElementById("video-modal");
const modalVideo = document.getElementById("modal-video-el");
const modalNum = document.getElementById("modal-num");
const modalTitle = document.getElementById("modal-title");
const modalHook = document.getElementById("modal-hook");
const modalStructure = document.getElementById("modal-structure");
const modalWhy = document.getElementById("modal-why");

function openStyleModal(style) {
  modalNum.textContent = `Style #${style.num} · Approved`;
  modalTitle.textContent = style.name;
  modalHook.textContent = `“${style.hook}”`;
  modalStructure.textContent = style.structure;
  modalWhy.textContent = style.why;
  modalVideo.src = style.videoSrc; // replace placeholder paths in STYLES above with real files
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  modalVideo.load();
  document.body.style.overflow = "";
}

document.getElementById("modal-close").addEventListener("click", closeModal);
document.getElementById("modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// =============================================================
// STYLE SELECTOR / EDIT PLAN
// =============================================================
const selectorForm = document.getElementById("selector-form");
const planCard = document.getElementById("plan-card");
const planDetails = document.getElementById("plan-details");

selectorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const values = {
    Style: document.getElementById("sel-style").value,
    Hook: document.getElementById("sel-hook").value,
    "Core message": document.getElementById("sel-message").value,
    "Visual treatment": document.getElementById("sel-visual").value,
    Audio: document.getElementById("sel-audio").value,
    Clips: document.getElementById("sel-clips").value,
  };

  planDetails.innerHTML = Object.entries(values)
    .map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`)
    .join("");

  planCard.hidden = false;
  planCard.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("plan-reset").addEventListener("click", () => {
  selectorForm.reset();
  planCard.hidden = true;
  selectorForm.scrollIntoView({ behavior: "smooth", block: "center" });
});

// =============================================================
// NAV: mobile toggle + smooth close on link click
// =============================================================
const siteNav = document.getElementById("site-nav");
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

// =============================================================
// INIT
// =============================================================
applyFilters();
