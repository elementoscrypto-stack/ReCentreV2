import { el } from '../utils/dom.js';
import { state } from '../core/state.js';
import { RoomHeader } from '../components/RoomHeader.js';

const roomContent = {
  pulse: {
    feature: 'Living company health, market signals, and recovery direction.',
    panels: ['Company Core', 'Market Signals', 'Executive Priority', 'Recovery Weather'],
    action: 'Stabilize subscriber confidence and reduce hardware friction.'
  },
  executive: {
    feature: 'Board-level recommendation engine with impact, confidence and evidence.',
    panels: ['Today’s Highest ROI Action', 'Expected Trust Gain', 'Risk Estimate', 'Board Memo'],
    action: 'Shift messaging toward premium connected coaching.'
  },
  supervisor: {
    feature: 'Telemetry Supervisor observes every signal and activates engines when intervention is required.',
    panels: ['Signal Monitor', 'Anomaly Queue', 'Engine Activation', 'Rule Trace'],
    action: 'LOSS + DRIFT detected. De-Markation and Category Studio ready.'
  },
  evidence: {
    feature: 'A reasoning graph connecting evidence to recommendations.',
    panels: ['Financial Signals', 'News Signals', 'Review Signals', 'Competitor Signals'],
    action: 'Trace pricing friction → churn pressure → trust drift.'
  },
  horizon: {
    feature: 'Time Machine mode for future recovery branches and decision propagation.',
    panels: ['30 Day Future', '90 Day Future', '180 Day Future', 'Level 5 Path'],
    action: 'Compare Conservative, Balanced, Aggressive and Transformational futures.'
  },
  dna: {
    feature: 'Company structure represented as living strands.',
    panels: ['Brand Strand', 'Product Strand', 'Pricing Strand', 'Audience Strand'],
    action: 'Repair pricing strand and reinforce coaching identity.'
  },
  river: {
    feature: 'Confidence entering and leaving the company visualized as flow.',
    panels: ['BUY Flow', 'SELL Leak', 'LOCK Retention', 'BLOCK Friction'],
    action: 'Increase inflow through bundles and reduce outflow through churn repair.'
  },
  galaxy: {
    feature: 'Recovery opportunities orbiting the company by confidence and impact.',
    panels: ['AI Coach', 'Family Bundle', 'Corporate Wellness', 'Retail Partnerships'],
    action: 'Pull Family Bundle closest to the core for immediate execution.'
  },
  demark: {
    feature: 'Strategic subtraction engine: identifies what should no longer define the company.',
    panels: ['Remove', 'Retire', 'Rewrite', 'Reposition'],
    action: 'De-mark from premium hardware dependency.'
  },
  category: {
    feature: 'Creates the next strategic category and trust promise.',
    panels: ['New Category', 'Audience Promise', 'Narrative', 'Positioning'],
    action: 'Recategorize as premium connected coaching.'
  },
  simulator: {
    feature: 'Recovery moves tested before leadership commits.',
    panels: ['Reprice', 'Bundle', 'Partner', 'Launch'],
    action: 'Simulate family bundle + AI coaching + flexible financing.'
  },
  reports: {
    feature: 'Executive briefing room for board packs and Level 5 certification.',
    panels: ['Board Summary', 'Decision Ledger', 'Export', 'Certification'],
    action: 'Generate Level 5 recovery pack.'
  }
};

export function RoomRenderer() {
  const root = el('main', 'room-viewport');

  function render() {
    const room = state.rooms.find(r => r.id === state.activeRoom) || state.rooms[0];
    const content = roomContent[room.id];
    root.innerHTML = '';
    root.appendChild(RoomHeader(room));

    const body = el('section', `room-body room-${room.id}`);
    body.innerHTML = `
      <div class="room-narrative glass-xl">
        <p class="eyebrow">Room Purpose</p>
        <h2>${content.feature}</h2>
        <p>${content.action}</p>
      </div>
      <div class="room-grid">
        ${content.panels.map((p, i) => `
          <article class="specialist-card glass-panel" style="--i:${i}">
            <div class="card-orb"></div>
            <p class="eyebrow">System ${String(i + 1).padStart(2, '0')}</p>
            <h3>${p}</h3>
            <span>${buildPanelCopy(room.id, p)}</span>
          </article>
        `).join('')}
      </div>
      ${specialVisual(room.id)}
    `;
    root.appendChild(body);
    root.classList.remove('transitioning');
    requestAnimationFrame(() => root.classList.add('transitioning'));
  }

  window.addEventListener('recentre:room', render);
  render();
  return root;
}

function buildPanelCopy(roomId, panel) {
  const map = {
    horizon: 'Future branches bloom from the Company Core as each decision changes trust, flow and recovery probability.',
    evidence: 'Evidence nodes connect raw events to telemetry signals and executive recommendations.',
    galaxy: 'Opportunities orbit by estimated impact, confidence, cost and time to execute.',
    river: 'Incoming and outgoing confidence streams show where value enters and escapes.',
    supervisor: 'The supervisor observes, ranks, and activates the correct recovery engine.'
  };
  return map[roomId] || `${panel} is ready for detailed intelligence, live data and recovery simulation.`;
}

function specialVisual(roomId) {
  if (roomId === 'horizon') {
    return `<div class="time-machine-surface glass-xl">
      <div class="future-branch b1"><b>Pricing</b><span>Trust +6 → Level 6</span></div>
      <div class="future-branch b2"><b>AI Coach</b><span>Retention +9 → Level 5</span></div>
      <div class="future-branch b3"><b>Retail</b><span>Awareness +11 → Level 5</span></div>
    </div>`;
  }
  if (roomId === 'dna') {
    return `<div class="dna-helix glass-xl">${['Brand','Product','Pricing','Audience','Leadership','Technology','Support'].map((x,i)=>`<i style="--i:${i}"><b>${x}</b></i>`).join('')}</div>`;
  }
  if (roomId === 'galaxy') {
    return `<div class="opportunity-system glass-xl">${['AI Coach','Family Bundle','Corporate','Retail','Partnership','Category Shift'].map((x,i)=>`<i style="--i:${i}">${x}</i>`).join('')}</div>`;
  }
  return `<div class="signal-orchestra glass-xl"><span>BUY → TRUST → VALUE → RECENTRE</span><span>LOSS → LEAK → DRIFT → REPAIR</span></div>`;
}
