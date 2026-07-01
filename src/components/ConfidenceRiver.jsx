import { ProjectionLabel } from './ProjectionLabel.jsx';

export default function ConfidenceRiver() {
  const dots = Array.from({ length: 22 }, (_, i) => i);
  return (
    <section className="glassPanel riverPanel">
      <ProjectionLabel kicker="Signal Flow" title="Confidence River">
        Watch confidence entering and escaping the company in real time.
      </ProjectionLabel>
      <div className="riverCanvas">
        <div className="riverLine riverIn" />
        <div className="riverLine riverOut" />
        <div className="riverCore">FLOW</div>
        <div className="riverSignals leftSignals"><span>BUY</span><span>BUILD</span><span>GAIN</span><span>ATTRACT</span></div>
        <div className="riverSignals rightSignals"><span>SELL</span><span>LOSS</span><span>LEAK</span><span>REPEL</span></div>
        {dots.map((_, i) => (
          <i
            className={`riverDot ${i % 3 === 0 ? 'out' : 'in'}`}
            key={i}
            style={{ top: `${70 + (i % 8) * 22}px`, animationDelay: `${i * -0.28}s` }}
          />
        ))}
      </div>
    </section>
  );
}
