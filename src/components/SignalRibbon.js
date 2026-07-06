import { el } from '../utils/dom.js';
import { state, setSignalFocus } from '../core/state.js';

export function SignalRibbon() {
  const root = el('div', 'signal-ribbon');
  state.signals.forEach(s => {
    const chip = el('button', `signal-chip ${s.type}`);
    chip.innerHTML = `<b>${s.name}</b><span>${s.value}</span><small>${s.desc}</small>`;
    chip.addEventListener('mouseenter', () => setSignalFocus(s.name));
    chip.addEventListener('mouseleave', () => setSignalFocus(null));
    root.appendChild(chip);
  });
  return root;
}
