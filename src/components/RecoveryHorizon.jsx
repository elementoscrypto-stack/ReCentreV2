import { decisions, futurePath } from '../core/telemetry.js';
import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function RecoveryHorizon() {
  return (
    <section className="glassPanel horizonPanel">
      <ProjectionLabel kicker="Recovery Horizon / Time Machine" title="Future State Engine">
        Every move becomes a signal chain. ReCentre projects the recovery route from Level 8 to Level 5.
      </ProjectionLabel>
      <div className="horizonBody">
        <div className="timelineArc">
          <svg className="futureSvg" viewBox="0 0 900 310" preserveAspectRatio="none">
            <path d="M45 220 C 190 210, 235 150, 345 150 S 520 110, 630 92 S 780 82, 855 60" />
            <path className="branchA" d="M345 150 C 420 188, 490 208, 610 188" />
            <path className="branchB" d="M630 92 C 700 128, 760 142, 850 122" />
          </svg>
          {futurePath.map((node, i) => (
            <div className="timeNode" key={node.label} style={{ left: `${8 + i * 21}%`, top: `${72 - i * 11}%` }}>
              <span>{node.label}</span>
              <strong>L{node.level}</strong>
              <em>Trust {node.trust}</em>
            </div>
          ))}
        </div>
        <div className="decisionLedger">
          {decisions.map((decision) => (
            <div className="decisionRow" key={decision.name}>
              <div>
                <strong>{decision.name}</strong>
                <span>{decision.signal}</span>
              </div>
              <b>{decision.impact}</b>
              <em>{decision.days}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
