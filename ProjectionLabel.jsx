const items = ['Pulse', 'Signals', 'Core', 'Horizon', 'Board'];

export default function NavigationRail() {
  return (
    <aside className="navRail">
      <div className="brandMark"><span>R</span></div>
      {items.map((item, index) => <a key={item} className={index === 0 ? 'active' : ''}>{item}</a>)}
      <div className="railGlow" />
    </aside>
  );
}
