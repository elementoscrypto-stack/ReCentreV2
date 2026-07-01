import { company } from '../core/telemetry.js';
import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function CompanyWeather() {
  return (
    <section className="glassPanel weatherPanel">
      <ProjectionLabel kicker="Company Weather" title={company.weather}>
        The atmosphere of the recovery mission shifts as signals strengthen or weaken.
      </ProjectionLabel>
      <div className="weatherOrb"><span>84%</span><em>Recovery Probability</em></div>
      <div className="weatherRows">
        <div><span>Atmosphere</span><strong>Clear Recovery</strong></div>
        <div><span>Pressure</span><strong>Competitor Drift</strong></div>
        <div><span>Outlook</span><strong>Level 5 Possible</strong></div>
      </div>
    </section>
  );
}
