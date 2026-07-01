import Background from './components/Background.jsx';
import MarketTicker from './components/MarketTicker.jsx';
import CompanyCore from './components/CompanyCore.jsx';
import TelemetrySupervisor from './components/TelemetrySupervisor.jsx';
import ConfidenceRiver from './components/ConfidenceRiver.jsx';
import RecoveryHorizon from './components/RecoveryHorizon.jsx';
import OpportunityGalaxy from './components/OpportunityGalaxy.jsx';
import CompanyDNA from './components/CompanyDNA.jsx';
import ExecutiveIntelligence from './components/ExecutiveIntelligence.jsx';
import './styles.css';

export default function App() {
  return (
    <main className="appShell">
      <Background />
      <aside className="navRail">
        <div className="brandMark">R</div>
        <a className="active">Pulse</a>
        <a>Signals</a>
        <a>Core</a>
        <a>Horizon</a>
        <a>Board</a>
      </aside>

      <section className="contentSurface">
        <header className="topBar">
          <div>
            <span className="eyebrow">ReCentre OS</span>
            <h1>The Operating System for Company Recovery</h1>
          </div>
          <div className="topActions">
            <button>Peloton Focus</button>
            <button className="primaryButton small">Run Supervisor</button>
          </div>
        </header>

        <MarketTicker />

        <div className="heroGrid">
          <CompanyDNA />
          <CompanyCore />
          <ExecutiveIntelligence />
        </div>

        <div className="midGrid">
          <TelemetrySupervisor />
          <ConfidenceRiver />
        </div>

        <div className="lowerGrid">
          <RecoveryHorizon />
          <OpportunityGalaxy />
        </div>
      </section>
    </main>
  );
}
