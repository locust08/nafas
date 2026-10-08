import files from '../../../docs/research/nafas/image-index.json';
const base = '/sites/nafas/assets/';
export function asset(index: number): string {
  const item = files.find((file) => file.index === index);
  if (!item) throw new Error(`Unknown source asset: ${index}`);
  return base + item.file;
}
export const assets = {
  logo: asset(36), logoWhite: asset(129), farmer: asset(60), capacity: asset(46),
  map: base + 'depot-map.webp', values: asset(70), planet: asset(48), productHero: asset(96), productField: base + 'product-field-base.png',
  productBags: asset(109), services: asset(25), sustainability: asset(88),
  farming: asset(82), warehouse: asset(87), farmers: asset(30), agronomy: asset(103),
  productBenefit: asset(71), heroPoster: asset(77), corporatePoster: asset(21),
  import: asset(52), packaging: asset(17), storage: asset(29), ceo: asset(121),
};
