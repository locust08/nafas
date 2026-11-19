// BugHerd #39: scale every partner logo to roughly the same visual area so wide and square logos look equally sized.
const ratios: Record<string, number> = {
  'al-rajhi-bank.png': 2.818, 'boustead-plantations.png': 1.141, 'cimb.png': 6.5, 'felcra-berhad.png': 1.153, 'felda.png': 0.789,
  'genting-plantations.png': 3.333, 'ioi.jpg': 1.341, 'lembaga-getah-malaysia.png': 0.977, 'lembaga-koko-malaysia.png': 1,
  'mardi.png': 1, 'maybank.png': 4.237, 'mpob.png': 1.333, 'phosphate-resources-malaysia.png': 2.135, 'sd-guthrie.png': 3.309,
  'sinergi-perdana.png': 3.531, 'th-plantations.png': 3.329,
};

export function partnerLogoBox(image: string) {
  const ratio = ratios[image.split('/').pop() ?? ''] ?? 1.5;
  let height = Math.sqrt(11000 / ratio);
  let width = height * ratio;
  if (width > 210) { width = 210; height = width / ratio; }
  if (height > 84) { height = 84; width = height * ratio; }
  return { width: Math.round(width), height: Math.round(height) };
}
