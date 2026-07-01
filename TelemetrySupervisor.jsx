export default function Background() {
  return (
    <div className="environment" aria-hidden="true">
      <div className="gridHorizon" />
      <div className="nebula nebulaA" />
      <div className="nebula nebulaB" />
      <div className="nebula nebulaC" />
      <div className="noise" />
      {Array.from({ length: 34 }).map((_, i) => (
        <span
          className="ambientParticle"
          key={i}
          style={{
            left: `${(i * 19) % 100}%`,
            top: `${(i * 31) % 100}%`,
            animationDelay: `${(i % 10) * 0.35}s`,
            animationDuration: `${9 + (i % 8)}s`
          }}
        />
      ))}
    </div>
  );
}
