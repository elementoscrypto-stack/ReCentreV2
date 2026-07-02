import React from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, Brain, Building2, ChevronRight, CircleDot, CloudSun, Command, Cpu, Database, Gauge, Gem, GitBranch, LayoutDashboard, LineChart, RadioTower, Settings, Shield, Target, Timer, Users, Waves, Zap } from 'lucide-react';
import './styles.css';

const nav = [
  ['COMMAND', Command], ['CORE', Cpu], ['SUPERVISOR', Brain], ['TIME MACHINE', Timer], ['HORIZON', GitBranch], ['INTELLIGENCE', RadioTower], ['DNA', Activity], ['OPPORTUNITIES', Target], ['WEATHER', CloudSun], ['REPORTS', Database], ['SETTINGS', Settings]
];
const signals = [
  ['BUY', '+12', 'cyan'], ['GAIN', '+8', 'cyan'], ['FLOW', '+15', 'cyan'], ['CENTRE', '+7', 'cyan'], ['LOCK', '+9', 'green'], ['DRIFT', '-6', 'amber'], ['SELL', '-8', 'pink'], ['LOSS', '-4', 'pink'], ['BLOCK', '-2', 'amber']
];
const dims = [
  ['TRUST', 82, 'STRONG', Shield], ['CUSTOMERS', 76, 'GOOD', Users], ['PRODUCT', 88, 'EXCELLENT', Gem], ['MARKET POSITION', 67, 'FAIR', Target], ['GROWTH', 69, 'IMPROVING', LineChart], ['LEADERSHIP', 84, 'STRONG', Building2], ['FINANCIAL HEALTH', 77, 'GOOD', Gauge]
];

function App(){
  return <div className="app">
    <Atmosphere />
    <Sidebar />
    <main className="shell">
      <Topbar />
      <section className="layout">
        <LeftRail />
        <HeroCore />
        <RightRail />
      </section>
      <section className="lowerGrid">
        <ConfidenceRiver />
        <OpportunityGalaxy />
        <RecoveryHorizon />
      </section>
      <CoreDimensions />
    </main>
  </div>
}
function Atmosphere(){return <><div className="aurora a1"/><div className="aurora a2"/><div className="grid"/><div className="stars">{Array.from({length:80}).map((_,i)=><i key={i} style={{left:`${(i*37)%100}%`,top:`${(i*61)%100}%`,animationDelay:`${(i%9)*.3}s`}}/> )}</div></>}
function Sidebar(){return <aside className="sidebar"><div className="brand"><div className="logo"><Gem size={25}/></div><div><b>ReCentre OS</b><span>EXECUTIVE COMMAND</span></div></div><nav>{nav.map(([n,Icon],i)=><button className={i===0?'active':''} key={n}><Icon size={20}/><span>{n}</span>{i>0&&<ChevronRight size={14}/>}</button>)}</nav><div className="statusOrb"><div className="miniCore"><span/></div><p>SYSTEM STATUS</p><b>OPTIMAL</b></div></aside>}
function Topbar(){return <header className="topbar"><div className="pill dark"><CircleDot size={17}/> PELOTON INTERACTIVE</div><div className="pill level">LEVEL 7</div><div className="muted">RECOVERY IN PROGRESS</div><div className="progress"><span>RECOVERY PROGRESS</span><div><i/></div><b>72%</b></div><button className="round">◔</button><div className="user"><span>PR</span><div><b>Paul</b><small>Executive</small></div></div></header>}
function LeftRail(){return <div className="leftRail"><Panel className="state"><h3>COMPANY STATE</h3><p>ReCentre Index</p><strong>72</strong><em>/100</em><label>RECOVERY MOMENTUM</label><b className="green">STRONG ↑</b><Spark /></Panel><Panel><h3>TELEMETRY SIGNALS</h3><div className="signals">{signals.map(s=><Signal key={s[0]} {...{s}} />)}</div></Panel></div>}
function Signal({s}){return <div className="signal"><span className={s[2]}></span><b>{s[0]}</b><Wave color={s[2]}/><em className={s[2]}>{s[1]}</em></div>}
function HeroCore(){return <section className="coreStage"><h1>COMPANY CORE</h1><p>LIVING SYSTEM</p><div className="coreWrap"><div className="stream leftStream">{['BUY','GAIN','FLOW','CENTRE','LOCK'].map((x,i)=><span key={x} style={{top: 26+i*13+'%'}}>{x}</span>)}</div><div className="stream rightStream">{['SELL','DRIFT','BLOCK','LOSS'].map((x,i)=><span key={x} style={{top: 30+i*16+'%'}}>{x}</span>)}</div><div className="ring r1"><b>TRUST</b></div><div className="ring r2"><b>CUSTOMERS</b><b>PRODUCT</b><b>FINANCIAL</b><b>CULTURE</b></div><div className="ring r3"></div><div className="ring r4"></div><div className="crystal"><div className="facet f1"/><div className="facet f2"/><div className="facet f3"/><div className="flare"/></div><div className="shock"/><div className="shock s2"/></div><div className="coreMeta"><span>CORE STABILITY <b>94%</b></span><i></i><span>ENERGY FREQUENCY <b>7.82 Hz</b></span></div></section>}
function RightRail(){return <div className="rightRail"><Panel className="levelPanel"><h3>RECOVERY LEVEL</h3><p>TARGET</p><strong>LEVEL 5</strong><label>EST. TIME TO LEVEL 5</label><b className="green">47 DAYS</b><MiniChart /></Panel><Panel className="supervisor"><h3>SUPERVISOR INSIGHT</h3><b>DETECTED DRIFT</b><p>Pricing friction and content saturation are impacting subscriber growth.</p><label>ACTION PRIORITY</label><strong>HIGH</strong><button>VIEW INSIGHT <ChevronRight size={16}/></button></Panel><Panel className="time"><h3>TIME MACHINE</h3><p>FUTURE PATHS</p><div className="timePortal"><span>Current<br/><b>Level 7</b></span><i/><em>Target<br/><b>Level 5</b></em></div><b className="green">87% PROBABILITY</b><button>EXPLORE FUTURES</button></Panel></div>}
function ConfidenceRiver(){return <Panel className="river"><h3>CONFIDENCE RIVER</h3><strong>78%</strong><p>CONFIDENCE FLOWING</p><div className="riverFlow"><i/><i/><i/></div></Panel>}
function OpportunityGalaxy(){return <Panel className="galaxy"><h3>OPPORTUNITY GALAXY</h3><div className="galaxyArt"><i/><span/><b/><em/></div><strong>12</strong><p>HIGH IMPACT OPPORTUNITIES</p><button>EXPLORE GALAXY</button></Panel>}
function RecoveryHorizon(){return <Panel className="horizon"><h3>RECOVERY HORIZON</h3><div className="mountains"><span>L7<br/>CURRENT</span><span>L6<br/>STABILIZE</span><span>L5<br/>RECOVER</span><span>L4<br/>OPTIMIZE</span><span>L3<br/>DOMINATE</span></div></Panel>}
function CoreDimensions(){return <section className="dimensions"><h3>CORE DIMENSIONS</h3><div className="dimGrid">{dims.map(([n,v,l,Icon])=><Panel className="dim" key={n}><Icon size={32}/><div><p>{n}</p><strong>{v}</strong><b>{l}</b></div><span>↑</span><Spark /></Panel>)}</div></section>}
function Panel({children,className=''}){return <div className={`panel ${className}`}>{children}</div>}
function Wave(){return <svg viewBox="0 0 80 18" className="wave"><path d="M0 9 Q8 1 16 9 T32 9 T48 9 T64 9 T80 9" fill="none" stroke="currentColor" strokeWidth="2"/></svg>}
function Spark(){return <svg viewBox="0 0 160 40" className="spark"><path d="M0 30 C20 34 26 12 44 24 S77 35 94 20 S126 3 160 8" fill="none" stroke="currentColor" strokeWidth="2"/></svg>}
function MiniChart(){return <svg viewBox="0 0 220 80" className="miniChart"><path d="M5 65 C30 64 40 55 60 60 C75 64 82 42 98 46 C120 50 126 28 144 30 C165 33 174 10 205 8" fill="none" stroke="currentColor" strokeWidth="3"/><circle cx="205" cy="8" r="5"/></svg>}
export default App;

createRoot(document.getElementById('root')).render(<App/>);
