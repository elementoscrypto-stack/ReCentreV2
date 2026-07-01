import { opportunities } from '../core/telemetry.js';
import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function OpportunityGalaxy() {
  return (
    <section className="glassPanel galaxyPanel">
      <ProjectionLabel kicker="Recovery Constellation" title="Opportunity Galaxy">
        Highest-potential recovery moves orbiting Peloton right now.
      </ProjectionLabel>
      <div className="galaxyCanvas">
        <div className="galaxyOrbit orbitA" />
        <div className="galaxyOrbit orbitB" />
        <div className="galaxyOrbit orbitC" />
        <div className="galaxyCenter">Level 5</div>
        {opportunities.map((planet, i) => (
          <div className="planet" key={planet.name} style={{ left: `${planet.x}%`, top: `${planet.y}%`, animationDelay: `${i * -0.5}s` }}>
            <strong>{planet.name}</strong>
            <span>{planet.gain} Recovery</span>
          </div>
        ))}
      </div>
    </section>
  );
}
