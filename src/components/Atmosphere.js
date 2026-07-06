import { el } from '../utils/dom.js';

export function Atmosphere() {
  const root = el('div', 'atmosphere');
  root.innerHTML = `
    <div class="aurora aurora-a"></div>
    <div class="aurora aurora-b"></div>
    <div class="aurora aurora-c"></div>
    <div class="perspective-grid"></div>
    <div class="fog fog-a"></div>
    <div class="fog fog-b"></div>
    <div class="particle-field">${Array.from({ length: 70 }, (_, i) => `<i style="--x:${Math.random()*100}%;--y:${Math.random()*100}%;--d:${3+Math.random()*8}s;--s:${Math.random()*1.6+.4}"></i>`).join('')}</div>
  `;
  return root;
}
