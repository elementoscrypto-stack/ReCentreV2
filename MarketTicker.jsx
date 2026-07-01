export default function Background() {
  const particles = Array.from({ length: 64 }, (_, i) => ({
    left: (i * 37) % 100,
    top: (i * 61) % 100,
    delay: (i % 13) * -0.7,
    duration: 12 + (i % 11)
  }));

  return (
    <div className="environment" aria-hidden="true">
      <div className="aurora auroraCyan" />
      <div className="aurora auroraViolet" />
      <div className="aurora auroraEmerald" />
      <div className="perspectiveGrid" />
      <div className="scanline" />
      <div className="noiseLayer" />
      {particles.map((p, i) => (
        <i
          className={`ambientParticle p${i % 4}`}
          key={i}
          style={{ left: `${p.left}%`, top: `${p.top}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}
        />
      ))}
    </div>
  );
}
