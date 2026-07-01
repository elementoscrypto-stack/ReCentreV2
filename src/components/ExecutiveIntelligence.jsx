import { peloton } from '../core/telemetry.js';
import { PanelHeader } from './TelemetrySupervisor.jsx';

export default function ExecutiveIntelligence() {
  return (
    <section className="glassPanel executivePanel">
      <PanelHeader eyebrow="Executive Intelligence" title="Today's highest-impact recovery move" />
      <div className="aiThesis">
        <span>Board memo</span>
        <p>{peloton.thesis}</p>
      </div>
      <div className="aiStats">
        <div><span>Expected Trust Gain</span><strong>+11</strong></div>
        <div><span>Recovery Confidence</span><strong>{peloton.recoveryProbability}%</strong></div>
        <div><span>Risk</span><strong>Low</strong></div>
      </div>
      <button className="primaryButton">Generate Board Report</button>
    </section>
  );
}
