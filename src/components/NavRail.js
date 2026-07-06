import { el } from '../utils/dom.js';
import { state, setActiveRoom } from '../core/state.js';

export function NavRail() {
  const root = el('aside', 'nav-rail');
  root.innerHTML = `
    <div class="brand-mark"><span>R</span></div>
    <div class="nav-scroll"></div>
    <div class="rail-footer"><button class="rail-dot">?</button><button class="rail-dot">⚙</button></div>
  `;
  const list = root.querySelector('.nav-scroll');
  state.rooms.forEach(room => {
    const btn = el('button', `nav-room ${room.id === state.activeRoom ? 'active' : ''}`);
    btn.innerHTML = `<span class="nav-icon">${room.icon}</span><span class="nav-label">${room.label}</span>`;
    btn.addEventListener('click', () => setActiveRoom(room.id));
    list.appendChild(btn);
  });
  window.addEventListener('recentre:room', (e) => {
    root.querySelectorAll('.nav-room').forEach((btn, idx) => btn.classList.toggle('active', state.rooms[idx].id === e.detail));
  });
  return root;
}
