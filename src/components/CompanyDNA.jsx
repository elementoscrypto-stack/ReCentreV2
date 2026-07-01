import { PanelHeader } from './TelemetrySupervisor.jsx';

const dna = [
  ['Brand', 82], ['Pricing', 58], ['Audience', 72], ['Product', 66], ['Support', 79], ['Culture', 74]
];

export default function CompanyDNA() {
  return (
    <section className="glassPanel dnaPanel">
      <PanelHeader eyebrow="Company DNA" title="Structural strands of recovery" />
      <div className="dnaHelix">
        {dna.map(([label, value], i) => (
          <div className="dnaRung" key={label} style={{ '--i': i }}>
            <span>{label}</span>
            <div><i style={{ width: `${value}%` }} /></div>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
