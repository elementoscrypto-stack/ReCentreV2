export const rooms = [
  { id: 'pulse', icon: '◉', label: 'Company Pulse', title: 'Company Pulse', subtitle: 'The living digital twin of Peloton.', accent: 'cyan' },
  { id: 'executive', icon: '◆', label: 'Executive Intelligence', title: 'Executive Intelligence', subtitle: 'Board-level recommendations from the recovery engine.', accent: 'emerald' },
  { id: 'supervisor', icon: '◇', label: 'Telemetry Supervisor', title: 'Telemetry Supervisor', subtitle: 'The nervous system watching every signal.', accent: 'cyan' },
  { id: 'evidence', icon: '✦', label: 'Evidence Observatory', title: 'Evidence Observatory', subtitle: 'Trace every recommendation back to evidence.', accent: 'violet' },
  { id: 'horizon', icon: '∞', label: 'Recovery Horizon', title: 'Recovery Horizon', subtitle: 'The Time Machine for decision futures.', accent: 'violet' },
  { id: 'dna', icon: '⌬', label: 'Company DNA', title: 'Company DNA', subtitle: 'Brand, product, pricing, audience and leadership strands.', accent: 'emerald' },
  { id: 'river', icon: '≈', label: 'Confidence River', title: 'Confidence River', subtitle: 'Value entering and leaving the organisation.', accent: 'cyan' },
  { id: 'galaxy', icon: '✺', label: 'Opportunity Observatory', title: 'Opportunity Observatory', subtitle: 'Strategic opportunities orbiting the company.', accent: 'violet' },
  { id: 'demark', icon: '⌁', label: 'De-Markation Lab', title: 'De-Markation Lab', subtitle: 'Identify what should no longer define the company.', accent: 'warning' },
  { id: 'category', icon: '⬡', label: 'Category Studio', title: 'Category Studio', subtitle: 'Create the next market category and trust promise.', accent: 'emerald' },
  { id: 'simulator', icon: '▣', label: 'Recovery Laboratory', title: 'Recovery Laboratory', subtitle: 'Test recovery moves before leadership commits.', accent: 'cyan' },
  { id: 'reports', icon: '▤', label: 'Executive Briefing', title: 'Executive Briefing', subtitle: 'Board-ready reports, decision ledger, and Level 5 certification.', accent: 'platinum' }
];

export const signals = [
  { name: 'BUY', value: '+12', desc: 'Confidence entering', type: 'in' },
  { name: 'SELL', value: '-4', desc: 'Confidence leaving', type: 'out' },
  { name: 'GAIN', value: '+8', desc: 'Trust increasing', type: 'in' },
  { name: 'LOSS', value: '-2', desc: 'Trust decreasing', type: 'out' },
  { name: 'BUILD', value: '+6', desc: 'Structure strengthening', type: 'in' },
  { name: 'LEAK', value: '-7', desc: 'Retention escaping', type: 'out' },
  { name: 'FLOW', value: '81%', desc: 'Healthy value movement', type: 'in' },
  { name: 'DRIFT', value: '18', desc: 'Market misalignment', type: 'warn' },
  { name: 'CENTRE', value: '82', desc: 'Recovery alignment', type: 'in' },
  { name: 'LOCK', value: '92%', desc: 'Customer retention', type: 'in' }
];

export const company = {
  name: 'Peloton',
  level: 7,
  target: 5,
  recovery: 74,
  confidence: 84,
  weather: 'Recovery Momentum',
  thesis: 'Peloton should de-mark from premium hardware dependency and recategorize around premium connected coaching, retention, and subscription confidence.'
};
