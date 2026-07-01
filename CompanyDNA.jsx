import { PanelHeader } from './TelemetrySupervisor.jsx';

const incoming = ['BUY', 'GAIN', 'BUILD', 'FLOW', 'ATTRACT'];
const outgoing = ['SELL', 'LOSS', 'LEAK', 'DECAY', 'REPEL'];

export default function ConfidenceRiver() {
  return (
    <section className="glassPanel riverPanel">
      <PanelHeader eyebrow="Confidence River" title="Value entering vs escaping the company" />
      <div className="riverCanvas">
        <div className="riverLine riverIn" />
        <div className="riverLine riverOut" />
        <div className="riverCore">FLOW</div>
        <div className="riverSignals leftSignals">
          {incoming.map((x) => <span key={x}>{x}</span>)}
        </div>
        <div className="riverSignals rightSignals">
          {outgoing.map((x) => <span key={x}>{x}</span>)}
        </div>
        {Array.from({ length: 18 }).map((_, i) => <i key={i} className={`riverDot dot${i % 2}`} style={{ animationDelay: `${i * .18}s` }} />)}
      </div>
    </section>
  );
}
