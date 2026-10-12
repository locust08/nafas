const glyphs = {
  location: '\uf3c5', mail: '\uf0e0', phone: '\uf095', fax: '\uf1ac',
  handshake: '\uf2b5', package: '\uf466', truck: '\uf0d1',
  health: '\uf21e', learning: '\uf19d', holiday: '\uf5ca',
  team: '\uf0c0', shield: '\uf3ed', coffee: '\uf0f4',
  globe: '\uf0ac', flask: '\uf0c3',
} as const;

export type SolidIconName = keyof typeof glyphs;

export function SolidIcon({ name, className = '' }: { name: SolidIconName; className?: string }) {
  return <span className={`v3-font-icon solid-icon ${className}`} aria-hidden="true">{glyphs[name]}</span>;
}
