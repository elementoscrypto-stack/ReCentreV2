import { company, signals } from '../core/telemetry.js';

function ringLabels(labels, radius, className) {
  return labels.map((label, i) => {
    const angle = (360 / labels.length) * i;
    return (
      <span
        key={label}
        style={{ transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)` }}
      >
        {label}
      </span>
    );
  });
}

export default function CompanyCore() {
  const particles = Array.from({ length: 42 }, (_, i) => signals[i % signals.length]);
  return (
    <section className="companyCorePanel">
      <div className="coreIntro">
        <p>Company Pulse / Living Digital Twin</p>
        <h1>Company Core</h1>
        <span>Every Peloton signal flows into one recovery intelligence surface.</span>
      </div>

      <div className="coreStage">
        <div className="coreHalo haloOne" />
        <div className="coreHalo haloTwo" />
        <div className="coreHalo haloThree" />
        <div className="coreHalo haloFour" />

        <div className="orbitLabelRing ringOuter">
          {ringLabels(['BUY', 'GAIN', 'BUILD', 'FLOW', 'LOCK', 'TRUST'], 255)}
        </div>
        <div className="orbitLabelRing ringMiddle">
          {ringLabels(['Recovery', 'Momentum', 'Market', 'Confidence', 'Level 5'], 185)}
        </div>

        <div className="signalBeam beamA" />
        <div className="signalBeam beamB" />
        <div className="signalBeam beamC" />

        {particles.map((s, i) => (
          <i
            key={i}
            className={`coreParticle ${s.type}`}
            style={{
              '--angle': `${(i * 37) % 360}deg`,
              '--start': `${260 + (i % 6) * 16}px`,
              '--end': `${78 + (i % 4) * 16}px`,
              animationDelay: `${i * -0.18}s`,
              animationDuration: `${4.8 + (i % 7) * 0.24}s`
            }}
          />
        ))}

        <div className="companyCrystal">
          <div className="crystalFacet facetA" />
          <div className="crystalFacet facetB" />
          <div className="crystalFacet facetC" />
          <div className="crystalShine" />
          <div className="coreText">
            <span>{company.name}</span>
            <strong>L{company.level}</strong>
            <em>{company.weather}</em>
          </div>
        </div>
      </div>

      <div className="coreMetrics">
        <div className="coreMetric"><span>Health</span><strong>{company.health}%</strong></div>
        <div className="coreMetric"><span>Confidence</span><strong>{company.confidence}%</strong></div>
        <div className="coreMetric"><span>Recovery</span><strong>{company.recoveryProbability}%</strong></div>
        <div className="coreMetric warningMetric"><span>Target</span><strong>Level {company.target}</strong></div>
      </div>
    </section>
  );
}
