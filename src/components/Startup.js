import { el } from '../utils/dom.js';
import { markBootComplete } from '../core/state.js';

export function Startup() {
  const root = el('section', 'startup');
  root.innerHTML = `
    <div class="startup-orb"><span></span><span></span><span></span></div>
    <div class="startup-copy">
      <p class="eyebrow">ReCentre OS V3</p>
      <h1>Initializing Company Recovery Environment</h1>
      <div class="boot-lines">
        <div><b>Telemetry Supervisor</b><span>ONLINE</span></div>
        <div><b>Recovery Engine</b><span>ONLINE</span></div>
        <div><b>Company Core</b><span>IGNITING</span></div>
        <div><b>Specialist Rooms</b><span>READY</span></div>
      </div>
    </div>
  `;
  setTimeout(() => {
    root.classList.add('startup-out');
    markBootComplete();
    setTimeout(() => root.remove(), 900);
  }, 2600);
  return root;
}
