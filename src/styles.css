:root {
  color-scheme: dark;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --bg: #050612;
  --cyan: #72f7ff;
  --blue: #6797ff;
  --violet: #b567ff;
  --pink: #ff5fde;
  --green: #72ffc6;
  --amber: #ffd47b;
  --glass: rgba(255,255,255,.068);
  --glass2: rgba(255,255,255,.035);
  --line: rgba(255,255,255,.115);
  --muted: rgba(255,255,255,.58);
  --soft: rgba(255,255,255,.35);
}

* { box-sizing: border-box; }
html, body, #root { min-height: 100%; margin: 0; }
body { background: var(--bg); color: white; overflow-x: hidden; }
button, a { font: inherit; }
button { color: white; cursor: pointer; }

.appShell {
  min-height: 100vh;
  position: relative;
  padding-left: 92px;
}

.environment { position: fixed; inset: 0; overflow: hidden; pointer-events: none; background: radial-gradient(circle at 50% 30%, #10194b 0%, #060713 34%, #02030a 100%); }
.gridHorizon { position: absolute; inset: 0; opacity: .5; background-image: linear-gradient(rgba(114,247,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(114,247,255,.08) 1px, transparent 1px); background-size: 70px 70px; mask-image: linear-gradient(to bottom, transparent, black 16%, transparent 94%); transform: perspective(900px) rotateX(62deg) translateY(130px) scale(1.3); transform-origin: center bottom; animation: horizonShift 12s linear infinite; }
.nebula { position: absolute; border-radius: 999px; filter: blur(70px); opacity: .42; mix-blend-mode: screen; }
.nebulaA { width: 680px; height: 680px; left: -190px; top: -160px; background: rgba(45,210,255,.33); }
.nebulaB { width: 720px; height: 720px; right: -240px; top: 120px; background: rgba(255,68,216,.28); }
.nebulaC { width: 560px; height: 560px; left: 36%; bottom: -240px; background: rgba(110,95,255,.30); }
.noise { position: absolute; inset: 0; opacity: .075; background-image: radial-gradient(circle at center, white 1px, transparent 1px); background-size: 19px 19px; }
.ambientParticle { position: absolute; width: 2px; height: 2px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 12px var(--cyan); opacity: .7; animation: floatParticle linear infinite; }

.navRail { position: fixed; z-index: 10; left: 18px; top: 18px; bottom: 18px; width: 58px; border: 1px solid var(--line); border-radius: 28px; background: rgba(255,255,255,.055); backdrop-filter: blur(22px); display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 12px 8px; box-shadow: 0 24px 80px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.12); }
.brandMark { width: 38px; height: 38px; border-radius: 16px; display: grid; place-items: center; font-weight: 950; background: linear-gradient(135deg, rgba(114,247,255,.35), rgba(255,95,222,.28)); box-shadow: 0 0 34px rgba(114,247,255,.35); }
.navRail a { writing-mode: vertical-rl; transform: rotate(180deg); text-decoration: none; color: var(--soft); font-size: 11px; letter-spacing: .16em; text-transform: uppercase; padding: 9px 4px; border-radius: 999px; transition: .25s ease; }
.navRail a.active, .navRail a:hover { color: white; background: rgba(114,247,255,.13); box-shadow: inset 0 0 0 1px rgba(114,247,255,.18); }

.contentSurface { position: relative; z-index: 1; max-width: 1580px; margin: 0 auto; padding: 28px 28px 52px; }
.topBar { display: flex; justify-content: space-between; gap: 22px; align-items: center; padding: 14px 0 22px; }
.eyebrow { display: inline-flex; color: var(--cyan); font-size: 12px; letter-spacing: .22em; text-transform: uppercase; font-weight: 800; }
.topBar h1 { margin: 6px 0 0; font-size: clamp(28px, 4vw, 58px); line-height: .95; letter-spacing: -.06em; max-width: 780px; }
.topActions { display: flex; gap: 10px; align-items: center; }
.topActions button, .primaryButton { border: 1px solid var(--line); background: rgba(255,255,255,.075); border-radius: 999px; padding: 12px 16px; box-shadow: inset 0 1px 0 rgba(255,255,255,.12); }
.primaryButton { background: linear-gradient(135deg, rgba(114,247,255,.23), rgba(255,95,222,.18)); border-color: rgba(114,247,255,.28); font-weight: 850; box-shadow: 0 0 45px rgba(114,247,255,.18), inset 0 1px 0 rgba(255,255,255,.16); }
.primaryButton.small { padding: 11px 15px; }

.tickerShell { border: 1px solid var(--line); border-radius: 28px; background: rgba(255,255,255,.055); backdrop-filter: blur(18px); overflow: hidden; display: grid; grid-template-columns: 150px 1fr; align-items: center; box-shadow: 0 22px 65px rgba(0,0,0,.22); }
.tickerTitle { padding: 18px 20px; color: var(--cyan); font-weight: 900; letter-spacing: .12em; text-transform: uppercase; font-size: 12px; border-right: 1px solid var(--line); }
.tickerTrack { display: flex; gap: 12px; padding: 12px; animation: tickerMove 48s linear infinite; width: max-content; }
.signalPill { min-width: 120px; border: 1px solid var(--line); border-radius: 999px; padding: 10px 12px; display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,.055); }
.signalPill span { color: var(--soft); font-size: 11px; letter-spacing: .14em; }
.signalPill strong { font-size: 14px; }
.signalPill.positive strong { color: var(--green); }
.signalPill.negative strong { color: var(--pink); }
.signalPill.warning strong { color: var(--amber); }

.heroGrid { display: grid; grid-template-columns: minmax(260px, .8fr) minmax(460px, 1.55fr) minmax(300px, .95fr); gap: 18px; margin-top: 18px; align-items: stretch; }
.midGrid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; margin-top: 18px; }
.lowerGrid { display: grid; grid-template-columns: 1.3fr .7fr; gap: 18px; margin-top: 18px; }
.glassPanel, .companyCorePanel { position: relative; border: 1px solid var(--line); border-radius: 34px; background: linear-gradient(145deg, rgba(255,255,255,.085), rgba(255,255,255,.035)); backdrop-filter: blur(24px); box-shadow: 0 28px 100px rgba(0,0,0,.34), inset 0 1px 0 rgba(255,255,255,.13); overflow: hidden; }
.glassPanel::before, .companyCorePanel::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 30% 0%, rgba(114,247,255,.13), transparent 34%), radial-gradient(circle at 90% 70%, rgba(255,95,222,.1), transparent 36%); pointer-events: none; }
.glassPanel { padding: 22px; min-height: 260px; }
.panelHeader { position: relative; z-index: 1; margin-bottom: 18px; }
.panelHeader span { color: var(--cyan); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; font-weight: 900; }
.panelHeader h2 { margin: 6px 0 0; letter-spacing: -.04em; font-size: 20px; line-height: 1.05; }

.companyCorePanel { min-height: 650px; padding: 26px; display: flex; flex-direction: column; justify-content: space-between; }
.coreIntro { position: relative; z-index: 4; }
.coreIntro p { margin: 0; color: var(--cyan); font-size: 11px; letter-spacing: .22em; text-transform: uppercase; font-weight: 900; }
.coreIntro h1 { margin: 8px 0 4px; font-size: clamp(34px, 4.5vw, 72px); line-height: .86; letter-spacing: -.08em; max-width: 600px; }
.coreIntro span { color: var(--muted); }
.coreStage { position: relative; z-index: 2; min-height: 420px; display: grid; place-items: center; margin: -10px 0; perspective: 1100px; }
.coreHalo { position: absolute; border-radius: 50%; border: 1px solid rgba(114,247,255,.2); box-shadow: 0 0 80px rgba(114,247,255,.13); }
.haloOne { width: 440px; height: 440px; animation: rotate 34s linear infinite; }
.haloTwo { width: 330px; height: 330px; border-color: rgba(255,95,222,.22); animation: rotate 25s linear infinite reverse; }
.haloThree { width: 220px; height: 220px; border-color: rgba(114,255,198,.24); animation: breathe 3.2s ease-in-out infinite; }
.ring { position: absolute; width: 0; height: 0; display: grid; place-items: center; animation: rotate 28s linear infinite; transform-style: preserve-3d; }
.ringTwo { animation-duration: 42s; animation-direction: reverse; }
.ring span { position: absolute; color: rgba(255,255,255,.68); font-size: 10px; letter-spacing: .18em; text-transform: uppercase; border: 1px solid rgba(255,255,255,.12); background: rgba(0,0,0,.28); border-radius: 999px; padding: 8px 10px; backdrop-filter: blur(8px); }
.coreParticle { position: absolute; width: 4px; height: 4px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 14px var(--cyan); animation: particleIntoCore 3.2s ease-in-out infinite; transform-origin: 0 0; }
.negativeParticle { background: var(--pink); box-shadow: 0 0 16px var(--pink); animation-name: particleOut; }
.crystal { position: relative; width: 188px; height: 222px; display: grid; place-items: center; filter: drop-shadow(0 0 48px rgba(114,247,255,.42)); animation: crystalFloat 5s ease-in-out infinite; }
.crystal::before { content: ""; position: absolute; inset: 0; clip-path: polygon(50% 0, 93% 22%, 80% 80%, 50% 100%, 20% 80%, 7% 22%); background: linear-gradient(145deg, rgba(114,247,255,.58), rgba(112,92,255,.18) 44%, rgba(255,95,222,.32)); border: 1px solid rgba(255,255,255,.24); }
.crystalFacet { position: absolute; background: rgba(255,255,255,.14); clip-path: polygon(50% 0, 100% 25%, 50% 100%, 0 25%); }
.facetA { width: 78px; height: 198px; left: 20px; transform: skewY(-11deg); }
.facetB { width: 86px; height: 198px; right: 18px; transform: skewY(11deg); background: rgba(114,247,255,.12); }
.coreText { position: relative; z-index: 2; text-align: center; text-shadow: 0 0 18px rgba(0,0,0,.8); }
.coreText span { display: block; font-size: 12px; letter-spacing: .28em; color: rgba(255,255,255,.66); text-transform: uppercase; font-weight: 900; }
.coreText strong { display: block; font-size: 44px; line-height: .9; letter-spacing: -.07em; }
.coreText em { display: block; font-style: normal; font-size: 12px; color: var(--cyan); margin-top: 6px; }
.coreMetrics { position: relative; z-index: 4; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.coreMetric { border: 1px solid var(--line); border-radius: 22px; background: rgba(0,0,0,.22); padding: 14px; }
.coreMetric span { display: block; color: var(--soft); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }
.coreMetric strong { display: block; margin-top: 6px; font-size: 26px; letter-spacing: -.05em; }
.warningMetric strong { color: var(--amber); }

.dnaHelix { position: relative; z-index: 1; display: grid; gap: 16px; padding-top: 8px; }
.dnaRung { display: grid; grid-template-columns: 72px 1fr 34px; gap: 10px; align-items: center; transform: translateX(calc(sin(var(--i)) * 10px)); }
.dnaRung span, .dnaRung strong { color: var(--muted); font-size: 12px; }
.dnaRung div { height: 10px; border-radius: 999px; background: rgba(255,255,255,.08); overflow: hidden; box-shadow: inset 0 0 0 1px rgba(255,255,255,.07); }
.dnaRung i { display: block; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--cyan), var(--pink)); box-shadow: 0 0 18px rgba(114,247,255,.4); }

.aiThesis { position: relative; z-index: 1; border: 1px solid rgba(114,247,255,.18); background: rgba(114,247,255,.08); border-radius: 24px; padding: 18px; }
.aiThesis span { color: var(--cyan); text-transform: uppercase; font-size: 11px; letter-spacing: .16em; font-weight: 900; }
.aiThesis p { margin: 10px 0 0; color: rgba(255,255,255,.78); line-height: 1.55; }
.aiStats { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr; gap: 10px; margin: 14px 0; }
.aiStats div { display: flex; justify-content: space-between; align-items: center; padding: 12px 14px; border-radius: 18px; background: rgba(255,255,255,.055); border: 1px solid var(--line); }
.aiStats span { color: var(--soft); font-size: 12px; }
.aiStats strong { font-size: 20px; }

.supervisorStatus { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px; }
.supervisorStatus div { border: 1px solid var(--line); background: rgba(0,0,0,.18); border-radius: 20px; padding: 14px; }
.supervisorStatus span { display: block; color: var(--soft); font-size: 11px; text-transform: uppercase; letter-spacing: .14em; }
.supervisorStatus strong { display: block; margin-top: 5px; color: var(--green); }
.supervisorList { position: relative; z-index: 1; display: grid; gap: 9px; }
.supervisorRow { display: flex; justify-content: space-between; gap: 14px; align-items: center; padding: 12px; border: 1px solid var(--line); border-radius: 20px; background: rgba(255,255,255,.045); }
.supervisorRow strong { display: block; font-size: 14px; }
.supervisorRow span { color: var(--muted); font-size: 12px; }
.supervisorRow code { color: var(--cyan); font-size: 12px; white-space: nowrap; }
.formulaStack { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
.formulaStack span { border: 1px solid rgba(255,255,255,.1); border-radius: 999px; padding: 8px 10px; color: var(--muted); font-size: 11px; background: rgba(0,0,0,.18); }

.riverCanvas { position: relative; z-index: 1; min-height: 305px; border-radius: 28px; border: 1px solid var(--line); background: radial-gradient(circle at 50% 50%, rgba(114,247,255,.12), transparent 38%), rgba(0,0,0,.16); overflow: hidden; }
.riverLine { position: absolute; left: 8%; right: 8%; height: 54px; border-radius: 999px; filter: blur(.2px); }
.riverIn { top: 80px; background: linear-gradient(90deg, transparent, rgba(114,247,255,.16), rgba(114,255,198,.4), transparent); box-shadow: 0 0 34px rgba(114,247,255,.35); animation: riverFlow 4s linear infinite; }
.riverOut { bottom: 80px; background: linear-gradient(270deg, transparent, rgba(255,95,222,.3), rgba(255,95,222,.09), transparent); box-shadow: 0 0 30px rgba(255,95,222,.28); animation: riverFlow 5s linear infinite reverse; }
.riverCore { position: absolute; left: 50%; top: 50%; width: 108px; height: 108px; transform: translate(-50%, -50%); border-radius: 50%; display: grid; place-items: center; border: 1px solid rgba(114,247,255,.28); background: rgba(114,247,255,.11); box-shadow: 0 0 45px rgba(114,247,255,.25); font-weight: 950; letter-spacing: .14em; }
.riverSignals { position: absolute; top: 20px; bottom: 20px; display: flex; flex-direction: column; justify-content: space-around; }
.leftSignals { left: 18px; } .rightSignals { right: 18px; text-align: right; }
.riverSignals span { font-size: 11px; letter-spacing: .16em; color: var(--muted); }
.riverDot { position: absolute; width: 5px; height: 5px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 14px var(--cyan); top: 100px; left: 8%; animation: riverDot 3.4s linear infinite; }
.riverDot.dot1 { top: 205px; background: var(--pink); box-shadow: 0 0 14px var(--pink); animation-direction: reverse; }

.horizonBody { position: relative; z-index: 1; display: grid; grid-template-columns: 1.1fr .9fr; gap: 18px; }
.timelineArc { min-height: 310px; position: relative; border-radius: 28px; border: 1px solid var(--line); background: radial-gradient(circle at 50% 80%, rgba(114,247,255,.14), transparent 40%), rgba(0,0,0,.18); overflow: hidden; }
.timelineArc::before { content: ""; position: absolute; left: 8%; right: 8%; top: 56%; height: 2px; background: linear-gradient(90deg, rgba(255,95,222,.35), rgba(114,247,255,.9), rgba(114,255,198,.8)); box-shadow: 0 0 18px rgba(114,247,255,.5); }
.timeNode { position: absolute; top: calc(56% - (var(--i) * 18px)); left: calc(9% + var(--i) * 21%); transform: translate(-50%, -50%); width: 92px; border: 1px solid rgba(114,247,255,.22); border-radius: 22px; padding: 12px; background: rgba(0,0,0,.35); backdrop-filter: blur(12px); box-shadow: 0 0 28px rgba(114,247,255,.14); }
.timeNode span, .timeNode em { display: block; color: var(--soft); font-size: 11px; font-style: normal; }
.timeNode strong { display: block; font-size: 28px; letter-spacing: -.05em; }
.decisionLedger { display: grid; gap: 10px; }
.decisionRow { display: flex; justify-content: space-between; align-items: center; gap: 12px; border: 1px solid var(--line); border-radius: 22px; background: rgba(255,255,255,.05); padding: 14px; }
.decisionRow span { color: var(--muted); font-size: 12px; display: block; margin-top: 4px; }
.decisionRow b { color: var(--green); font-size: 22px; }

.galaxyCanvas { position: relative; z-index: 1; min-height: 360px; border: 1px solid var(--line); border-radius: 28px; background: radial-gradient(circle at center, rgba(114,247,255,.14), transparent 36%), rgba(0,0,0,.18); overflow: hidden; }
.galaxyCanvas::before, .galaxyCanvas::after { content: ""; position: absolute; inset: 48px; border: 1px solid rgba(114,247,255,.12); border-radius: 50%; animation: rotate 18s linear infinite; }
.galaxyCanvas::after { inset: 84px; border-color: rgba(255,95,222,.13); animation-direction: reverse; animation-duration: 24s; }
.galaxyCenter { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 116px; height: 116px; border-radius: 50%; display: grid; place-items: center; border: 1px solid rgba(114,247,255,.25); background: rgba(114,247,255,.1); box-shadow: 0 0 55px rgba(114,247,255,.25); font-weight: 950; }
.planet { position: absolute; transform: translate(-50%, -50%); border: 1px solid var(--line); border-radius: 20px; padding: 12px 14px; background: rgba(0,0,0,.33); backdrop-filter: blur(10px); animation: planetFloat 4.5s ease-in-out infinite; }
.planet strong, .planet span { display: block; }
.planet span { color: var(--cyan); font-size: 12px; margin-top: 3px; }

@keyframes horizonShift { to { background-position: 0 70px, 70px 0; } }
@keyframes floatParticle { 0% { transform: translate3d(0, 20px, 0); opacity: .05; } 50% { opacity: .8; } 100% { transform: translate3d(40px, -120px, 0); opacity: 0; } }
@keyframes tickerMove { to { transform: translateX(-50%); } }
@keyframes rotate { to { transform: rotate(360deg); } }
@keyframes breathe { 50% { transform: scale(1.09); opacity: .55; } }
@keyframes particleIntoCore { 0% { opacity: 0; } 35% { opacity: .8; } 100% { transform: rotate(0deg) translateX(42px); opacity: 0; } }
@keyframes particleOut { 0% { transform: rotate(0deg) translateX(48px); opacity: 0; } 45% { opacity: .9; } 100% { opacity: 0; } }
@keyframes crystalFloat { 50% { transform: translateY(-12px) rotateX(7deg) rotateY(-7deg); } }
@keyframes riverFlow { to { background-position: 360px 0; } }
@keyframes riverDot { to { left: 92%; opacity: 0; } }
@keyframes planetFloat { 50% { margin-top: -10px; filter: brightness(1.15); } }

@media (max-width: 1180px) {
  .heroGrid, .midGrid, .lowerGrid { grid-template-columns: 1fr; }
  .companyCorePanel { min-height: 620px; }
  .horizonBody { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  .appShell { padding-left: 0; }
  .navRail { display: none; }
  .contentSurface { padding: 18px; }
  .topBar { align-items: flex-start; flex-direction: column; }
  .topActions { width: 100%; flex-wrap: wrap; }
  .tickerShell { grid-template-columns: 1fr; }
  .tickerTitle { border-right: 0; border-bottom: 1px solid var(--line); }
  .coreMetrics { grid-template-columns: repeat(2, 1fr); }
  .coreStage { transform: scale(.78); margin: -50px 0; }
  .supervisorStatus { grid-template-columns: 1fr; }
  .supervisorRow { align-items: flex-start; flex-direction: column; }
}
