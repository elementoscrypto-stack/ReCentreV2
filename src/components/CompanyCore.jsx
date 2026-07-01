import { peloton } from '../core/telemetry.js';

const orbitLabels = ['BUY', 'GAIN', 'BUILD', 'FLOW', 'LOCK', 'TRUST'];
const outerLabels = ['Customers', 'Competitors', 'Media', 'Investors', 'Employees'];

export default function CompanyCore() {
  return (
    <section className="companyCorePanel">
      <div className="coreIntro">
        <p>Company Pulse</p>
        <h1>Recover. Rebuild. ReCentre.</h1>
        <span>The living digital twin of {peloton.name}</span>
      </div>

      <div className="coreStage">
        <div className="coreHalo haloOne" />
        <div className="coreHalo haloTwo" />
        <div className="coreHalo haloThree" />

        <div className="ring ringOne">
          {orbitLabels.map((label, i) => (
            <span key={label} style={{ transform: `rotate(${i * 60}deg) translateX(205px) rotate(-${i * 60}deg)` }}>{label}</span>
          ))}
        </div>
        <div className="ring ringTwo">
          {outerLabels.map((label, i) => (
            <span key={label} style={{ transform: `rotate(${i * 72}deg) translateX(265px) rotate(-${i * 72}deg)` }}>{label}</span>
          ))}
        </div>

        {Array.from({ length: 26 }).map((_, i) => (
          <i
            key={i}
            className={`coreParticle ${i % 3 === 0 ? 'negativeParticle' : ''}`}
            style={{
              transform: `rotate(${i * 14}deg) translateX(${125 + (i % 7) * 22}px)`,
              animationDelay: `${i * 0.11}s`
            }}
          />
        ))}

        <div className="crystal">
          <div className="crystalFacet facetA" />
          <div className="crystalFacet facetB" />
          <div className="coreText">
            <span>{peloton.name}</span>
            <strong>Level {peloton.level}</strong>
            <em>Target Level {peloton.target}</em>
          </div>
        </div>
      </div>

      <div className="coreMetrics">
        <Metric label="Trust" value="74" />
        <Metric label="Recovery" value="84%" />
        <Metric label="Centre" value="82" />
        <Metric label="Drift" value="18" warning />
      </div>
    </section>
  );
}

function Metric({ label, value, warning }) {
  return (
    <div className={`coreMetric ${warning ? 'warningMetric' : ''}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
