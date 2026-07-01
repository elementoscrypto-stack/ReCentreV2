import { supervisorRules } from '../core/telemetry.js';
import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function TelemetrySupervisor() {
  return (
    <section className="glassPanel supervisorPanel">
      <ProjectionLabel kicker="Telemetry Supervisor" title="Signal Brain">
        The supervisor watches every signal, decides when de-markation is required, and routes the company toward recategorization.
      </ProjectionLabel>
      <div className="supervisorStatus">
        <div><span>Monitoring</span><strong>127 Signals</strong></div>
        <div><span>Priority</span><strong>High</strong></div>
        <div><span>Engines</span><strong>Active</strong></div>
      </div>
      <div className="supervisorList">
        {supervisorRules.map((rule) => (
          <div className="supervisorRow" key={rule.trigger}>
            <div>
              <strong>{rule.trigger}</strong>
              <span>{rule.action}</span>
            </div>
            <code>{rule.outcome}</code>
          </div>
        ))}
      </div>
      <div className="formulaStack">
        <span>DRIFT + LOSS = DE-MARKATION</span>
        <span>TRUST + BUILD = CATEGORY STABILITY</span>
        <span>CENTRE + GAIN = RECOVERY CONFIRMED</span>
      </div>
    </section>
  );
}
