import { el } from '../utils/dom.js';

export function RoomHeader(room) {
  const root = el('header', `room-header ${room.accent}`);
  root.innerHTML = `
    <div>
      <p class="eyebrow">Specialist Room</p>
      <h1>${room.title}</h1>
      <span>${room.subtitle}</span>
    </div>
    <div class="room-status"><b>ACTIVE</b><span>${room.icon}</span></div>
  `;
  return root;
}
