import { rooms, signals, company } from '../data/rooms.js';

export const state = {
  activeRoom: 'pulse',
  bootComplete: false,
  signalFocus: null,
  rooms,
  signals,
  company
};

export function setActiveRoom(id) {
  state.activeRoom = id;
  window.dispatchEvent(new CustomEvent('recentre:room', { detail: id }));
}

export function setSignalFocus(signal) {
  state.signalFocus = signal;
  window.dispatchEvent(new CustomEvent('recentre:signal', { detail: signal }));
}

export function markBootComplete() {
  state.bootComplete = true;
  window.dispatchEvent(new CustomEvent('recentre:boot'));
}
