import { company } from '../core/telemetry.js';
import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function ExecutiveIntelligence() {
  return (
    <section className="glassPanel executivePanel">
      <ProjectionLabel kicker="Board Advisor" title="Executive Intelligence">
        Calm strategic recommendations generated from the telemetry graph.
      </ProjectionLabel>
      <div className="aiThesis">
        <span>Today's priority</span>
        <h3>Reduce hardware friction. Amplify coaching identity.</h3>
        <p>{company.thesis}</p>
      </div>
      <div className="aiStats">
        <div><span>Expected trust gain</span><strong>+11</strong></div>
        <div><span>Recovery confidence</span><strong>{company.recoveryProbability}%</strong></div>
        <div><span>Execution risk</span><strong>Low</strong></div>
      </div>
      <button className="primaryButton full">Open Board Memo</button>
    </section>
  );
}
