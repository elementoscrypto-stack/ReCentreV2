import './styles/reset.css';
import './styles/tokens.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/rooms.css';
import './styles/animations.css';
import { el } from './utils/dom.js';
import { Atmosphere } from './components/Atmosphere.js';
import { Startup } from './components/Startup.js';
import { NavRail } from './components/NavRail.js';
import { CompanyCore } from './components/CompanyCore.js';
import { SignalRibbon } from './components/SignalRibbon.js';
import { RoomRenderer } from './rooms/RoomRenderer.js';

const app = document.querySelector('#app');
const shell = el('div', 'os-shell');
shell.appendChild(Atmosphere());
shell.appendChild(NavRail());

const surface = el('div', 'command-surface');
const top = el('header', 'topbar');
top.innerHTML = `
  <div>
    <p class="eyebrow">ReCentre Operating System</p>
    <h1>Company Recovery Mission Control</h1>
  </div>
  <div class="top-actions"><button>Peloton</button><button>Live Mode</button><button>Level 5 Target</button></div>
`;
surface.appendChild(top);
surface.appendChild(SignalRibbon());
const work = el('div', 'workspace');
work.appendChild(CompanyCore());
work.appendChild(RoomRenderer());
surface.appendChild(work);
shell.appendChild(surface);
app.appendChild(shell);
app.appendChild(Startup());
