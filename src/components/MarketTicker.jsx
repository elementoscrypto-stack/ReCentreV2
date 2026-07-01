import { signals } from '../core/telemetry.js';

export default function MarketTicker() {
  return (
    <section className="tickerShell">
      <div className="tickerTitle">Market Signals</div>
      <div className="tickerTrack">
        {[...signals, ...signals].map((signal, index) => (
          <div className={`signalPill ${signal.polarity}`} key={`${signal.key}-${index}`}>
            <span>{signal.key}</span>
            <strong>{typeof signal.value === 'number' && signal.value > 0 && signal.key !== 'TARGET' && signal.key !== 'LEVEL' ? '+' : ''}{signal.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
