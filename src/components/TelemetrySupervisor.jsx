import { peloton, formulas } from '../core/telemetry.js';

export default function TelemetrySupervisor() {
  return (
    <section className="glassPanel supervisorPanel">
      <PanelHeader eyebrow="Telemetry Supervisor" title="Supervising De-Markation + Category Recovery" />
      <div className="supervisorStatus">
        <div>
          <span>Supervisor</span>
          <strong>ACTIVE</strong>
        </div>
        <div>
          <span>Signals</span>
          <strong>127</strong>
        </div>
        <div>
          <span>Priority</span>
          <strong>HIGH</strong>
        </div>
      </div>
      <div className="supervisorList">
        {peloton.supervisor.map((item) => (
          <div className="supervisorRow" key={item.label}>
            <div>
              <strong>{item.label}</strong>
              <span>{item.status}</span>
            </div>
            <code>{item.signal}</code>
          </div>
        ))}
      </div>
      <div className="formulaStack">
        {formulas.slice(0, 4).map((f) => <span key={f}>{f}</span>)}
      </div>
    </section>
  );
}

export function PanelHeader({ eyebrow, title }) {
  return (
    <header className="panelHeader">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </header>
  );
}
