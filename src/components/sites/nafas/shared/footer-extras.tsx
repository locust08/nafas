const socialAccounts = [
  { name: 'Instagram', glyph: '\uf16d', url: 'https://www.instagram.com/nafashq' },
  { name: 'Facebook', glyph: '\uf39e', url: 'https://www.facebook.com/nafashq' },
  { name: 'TikTok', glyph: '\ue07b', url: 'https://www.tiktok.com/@nafashq' },
];

export function FooterSocial() {
  return <div className="footer-social" aria-label="Social media">{socialAccounts.map(account => <a key={account.name} className="footer-social-icon" href={account.url} target="_blank" rel="noopener noreferrer" aria-label={account.name}><span aria-hidden="true">{account.glyph}</span></a>)}</div>;
}

export function FooterDisclaimer() {
  return <p className="footer-disclaimer">Disclaimer: Some images on this website are sourced from Noun Projects&amp; Pexel. We strive to adhere to mentioned resource’s terms of use and provide proper attribution.<br />If there are any concerns about the usage of these images, please contact us directly. We appreciate the contributions of mentioned resources.</p>;
}
