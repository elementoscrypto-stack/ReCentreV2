import { peloton } from '../core/telemetry.js';
import { PanelHeader } from './TelemetrySupervisor.jsx';

const opportunities = [
  ['Pricing', '+8 Trust', 35, 38],
  ['AI Coach', '+7 Growth', 66, 30],
  ['Family', '+9 Lock', 72, 67],
  ['Retail', '+6 Buy', 28, 70],
  ['Corporate', '+5 Flow', 52, 82]
];

export default function OpportunityGalaxy() {
  return (
    <section className="glassPanel galaxyPanel">
      <PanelHeader eyebrow="Opportunity Galaxy" title="Recovery moves orbiting Peloton" />
      <div className="galaxyCanvas">
        <div className="galaxyCenter">{peloton.name}</div>
        {opportunities.map(([name, impact, x, y], i) => (
          <div className="planet" key={name} style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${i * .35}s` }}>
            <strong>{name}</strong>
            <span>{impact}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
