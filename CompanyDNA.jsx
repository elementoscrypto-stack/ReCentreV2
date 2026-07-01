export function ProjectionLabel({ kicker, title, children }) {
  return (
    <div className="panelHeader">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
