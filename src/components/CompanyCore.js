import { el } from '../utils/dom.js';
import { state } from '../core/state.js';

export function CompanyCore() {
  const c = state.company;
  const root = el('section', 'company-core-shell');
  root.innerHTML = `
    <div class="core-title">
      <p class="eyebrow">Persistent Company Core</p>
      <h2>${c.name}</h2>
      <span>${c.weather}</span>
    </div>
    <div class="core-stage">
      <div class="shockwave"></div>
      <div class="ring ring-1"><em>BUY</em><em>GAIN</em><em>FLOW</em><em>LOCK</em></div>
      <div class="ring ring-2"><em>TRUST</em><em>VALUE</em><em>CENTRE</em><em>BUILD</em></div>
      <div class="ring ring-3"><em>LEVEL ${c.level}</em><em>TARGET ${c.target}</em><em>${c.confidence}%</em></div>
      <div class="signal-beam beam-a"></div>
      <div class="signal-beam beam-b"></div>
      <div class="core-crystal">
        <div class="crystal-facet f1"></div>
        <div class="crystal-facet f2"></div>
        <div class="core-number">${c.recovery}</div>
        <div class="core-label">Recovery Index</div>
      </div>
      <div class="core-particles">${Array.from({length: 34}, (_, i) => `<i style="--r:${i*10.6}deg;--delay:${(i%9)*.16}s"></i>`).join('')}</div>
    </div>
    <div class="core-metrics">
      <div><b>${c.confidence}%</b><span>Executive Confidence</span></div>
      <div><b>L${c.level}</b><span>Current Level</span></div>
      <div><b>L${c.target}</b><span>Target State</span></div>
    </div>
  `;
  window.addEventListener('recentre:signal', () => {
    root.classList.add('core-react');
    setTimeout(() => root.classList.remove('core-react'), 700);
  });
  return root;
}
