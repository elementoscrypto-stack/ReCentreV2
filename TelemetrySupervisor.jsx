import { dna } from '../core/telemetry.js';
import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function CompanyDNA() {
  return (
    <section className="glassPanel dnaPanel">
      <ProjectionLabel kicker="Structure" title="Company DNA">
        The structural strands that determine Peloton's ability to recover.
      </ProjectionLabel>
      <div className="helixShell">
        <div className="helixSpine spineA" />
        <div className="helixSpine spineB" />
        {dna.map((row, i) => (
          <div className="dnaRung" key={row.label} style={{ '--score': `${row.score}%`, '--offset': `${i % 2 ? 12 : -12}px` }}>
            <span>{row.label}</span>
            <div><i /></div>
            <strong>{row.score}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
