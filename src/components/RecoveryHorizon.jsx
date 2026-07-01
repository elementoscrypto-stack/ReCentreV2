import { peloton } from '../core/telemetry.js';
import { PanelHeader } from './TelemetrySupervisor.jsx';

export default function RecoveryHorizon() {
  return (
    <section className="glassPanel horizonPanel">
      <PanelHeader eyebrow="Time Machine / Recovery Horizon" title="Projected moves needed to reach Level 5" />
      <div className="horizonBody">
        <div className="timelineArc">
          {peloton.timeline.map((point, index) => (
            <div className="timeNode" key={point.stage} style={{ '--i': index }}>
              <span>{point.stage}</span>
              <strong>L{point.level}</strong>
              <em>Trust {point.trust}</em>
            </div>
          ))}
        </div>
        <div className="decisionLedger">
          {peloton.moves.map((move) => (
            <div className="decisionRow" key={move.title}>
              <div>
                <strong>{move.title}</strong>
                <span>{move.time} • {move.impact}</span>
              </div>
              <b>{move.confidence}%</b>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
