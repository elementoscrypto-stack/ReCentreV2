import { signals } from '../core/telemetry.js';

export default function MarketTicker() {
  const rows = [...signals, ...signals];
  return (
    <section className="tickerShell glassBeam">
      <div className="tickerTitle">Live Market Signals</div>
      <div className="tickerViewport">
        <div className="tickerTrack">
          {rows.map((signal, i) => (
            <div className={`signalPill ${signal.type}`} key={`${signal.code}-${i}`}>
              <span>{signal.code}</span>
              <strong>{signal.value}</strong>
              <em>{signal.meaning}</em>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
