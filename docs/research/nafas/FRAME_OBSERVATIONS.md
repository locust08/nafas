# Public Figma prototype frame observations

Inspected 5 October 2026 using an independent Playwright browser at 1440×1000. Public prototype is accessible; structured Figma design/Dev Mode was unavailable to the main inspection workflow. All dimensions below are screenshot observations, not exact Dev Mode measurements. Screenshots are in `docs/design-references/nafas/detail/`. Scroll captures allow 0.7–1.0 seconds for transitions. Initial node URLs can render the original home starting point before interacting; verify actual frame contents and URL after navigation.

## Shared source structure

Header spans approximately x75–1365, y22–107. Logo at left, navigation Tentang Kami / Produk Kami / Kelestarian / Berita & Media / Pengedar / Kerjaya, BM | EN, Hubungi Kami arrow CTA. White rounded translucent header is present on inner-page hero; it remains at the top during prototype scroll. Some clicks toggle to transparent white-logo state rather than navigate, so the public prototype is not a complete functional specification. WhatsApp icon is fixed at the right near x1315–1364. Major body content often spans x255–1185 (930px). Wider four-column sections span approximately x75–1365. Green eyebrow text, dark heavy headings with green highlighted words, white backgrounds, rounded/slanted image cards, shadows, pill CTAs repeat.

Footer has dark forest gradient, rounded upper corners, large white logo/social icons, Pautan Pantas, Produk, Contact Us columns. Source footer contact reads Lot 1, Jalan Teknologi 3/5, Taman Sains Selangor 1, Kota Damansara, 47810 Petaling Jaya, Selangor Darul Ehsan; 03 6144 1200; info@nafas.com.my. Source footer copyright contains 20112345778445 and static visitor numbers 128 / 10,644. These are observed design text; verify business/legal identifiers and do not imply static numbers are live analytics.

## About — 17668:1497

Evidence: `about-01.png`, `about-02.png`, `about-03.png`, `about-vision.png`, `about-04.png`, `about-05.png`.

- Hero shares the opening video content and rounded bottom corners used by home. First white section is Gambaran Syarikat, followed by 50+ Tahun Pengalaman and a wide slanted strip of three benefits: Pembekal Utama Negara; Produk Berprestasi Tinggi; Jenama Peladang Dipercayai.
- Nilai Teras heading: “Komitmen kami dalam memastikan bekalan baja yang berkualiti”. Four equal slanted cards combine top photo fading to white, overlapping green icon in a circular white badge, text and soft shadow: Kualiti; Kecemerlangan Perkhidmatan; Kebolehpercayaan Logistik; Daya Saing.
- Visi, Misi & Tujuan: left heading “Arah Tuju dan Prinsip yang Membimbing Operasi Kami”, explanatory paragraph right. Below a 2:1:1 grid: wide dark farm photo card “Mengapa Kami Wujud” and narrower Visi/Misi photo cards whose lower edges are diagonally clipped. Large pale farmland backdrop fades to white.
- Purpose bullet text: supporting farmers/agriculture with dependable fertilizer; food security/long-term agriculture growth; support from Pertubuhan Peladang Kebangsaan (NAFAS); professional operational excellence.
- Visi source text: “Pertubuhan peladang peneraju pasaran baja.” Misi: “Menawarkan Produk dan Perkhidmatan yang Terbaik kepada Pelanggan dan Rakan Niaga.”
- Organisation: centered Carta Organisasi eyebrow / “Kepimpin yang menggerakkan Operasi Kami” heading. Large rounded CEO portrait panel with text left and portrait right: Ketua Pegawai Eksekutif, Zailifudin bin Md Arshad. Department cards continue below; not fully transcribed in these captures.
- Timeline uses full-width warehouse/fertilizer-workers background with a bright overlay, previous/next buttons at left, statement “Aktif dalam penjualan Baja Urea dan Campuran Baja NPK.”, horizontal line and 1974 / 1989 / 2003 milestones with icons.
- Fakta Korporat / Profil Korporat NAFAS Bajakimia section uses background landscape, left vertical timeline line and square green icons. Visible corporate history: subsidiary of NAFAS; established 8 October 1974 as Malaysian Urea Fertilizer Corporation Sdn. Bhd. (MUFC); renamed on 13 March 1992. Visible registration sections include Kod Bidang Kementerian Kewangan and Pendaftaran Vendor Petronas. A location/map section begins below.

## Product category — 17668:1677

Evidence: `category-01.png`, `category-02.png`, `category-03.png`.

- Approximately 741px-high hero. Heading “Baja Tunggal” at x255/y165, descriptive paragraphs left; stacked branded bags dominate right and extend outside the viewport edge. Backdrop is farmland and pale sky; lower field is saturated green.
- Source paragraph lists Urea Prill (UP), Urea Granular (UG), Muriate of Potash (MOP), Phosphate Rock (CIRP / ERP), Ammonium Sulphate (AS), Ammonium Chloride (AC), Borate (B), Zeolite (Zeo), Ground Magnesium Limestone (GML), Calcium Magnesium Carbonate (Dolomite), Kieserite (Kies), Magnesium Oxide (MgO).
- Sasaran Kami / “Untuk setiap keperluan dalam sektor pertanian”: four slanted photo cards, similar to values. Card titles: Perladangan kelapa sawit dan pertanian besar; Pembekal dan pengedar baja untuk ladang; Petani serta kumpulan pertanian berorganisasi; Inisiatif pertanian kerajaan dan institusi.
- Manfaat & Hasil / “Nilai yang Diperoleh Pelanggan”: large left collage of farmland/laboratory granulometry with diagonal layered clipping; right four green icon/text bullets concerning stable supply, quality inspection, integrated storage/distribution, and long-term institutional support.
- Produk / Rangkaian Baja Tunggal listing contains seven displayed cards in 4+3 arrangement. All observed cards reuse the same DAP bag artwork. First row UP, UG, Phosphate Rock, MOP; second repeats UG, Phosphate Rock, MOP. Preserve visual geometry but flag repeated/mismatched source content for correction rather than asserting actual product imagery.
- Repeated collaboration CTA: Mari Bekerjasama / “Mencari rakan pembekal baja yang boleh dipercayai?” / supporting paragraph / Hubungi Kami pill, followed by footer.

## Product detail — 17668:1813

Evidence: `product-01.png`, `product-02.png`, `product-03.png`.

- White hero area with two-thumbnail rail at x75, large bag x240–565, zoom icon at x666, product details x741–1185. Front thumbnail has a green selection outline; reverse thumbnail has gray outline. The featured asset visibly says DAP18/46 despite title Urea Prill (UP): source inconsistency.
- Title between horizontal rules. Exact source fields: Kategori Produk: Baja Tunggal; Kandungan Nutrien: 46% min (+ / - 0.5%); Kelembapan: 0.5% max; Saiz: 0.85 - 2.80mm (90% min); Bentuk: Prilled, free-flowing; Negara Asal: China / Indonesia.
- Description identifies high concentration nitrogen fertilizer for vegetative growth and varied Malaysian crop/agriculture systems. CTAs Hantar Pertanyaan (solid green) and Muat Turun Brosur (pale green, arrow).
- Horizontal SGS ISO9001:2015 certificate strip appears below, with fourth certificate partly outside right edge.
- Testimoni carousel: left outline previous button, large rounded fertilizer application photo, right text “Kualiti Baik”, name Encik Ahmad, Pengurus Ladang, Petaling Jaya. Selangor; green next button and five dots. Names/testimonials are Figma-supplied text, not independently verified testimonials.
- Related product cards repeat category's seven-card 4+3 layout and mismatched/repeated DAP artwork; final collaboration CTA/footer.

## Sustainability — 17668:2044

Evidence: `sustainability-01.png`, `sustainability-02.png`, `sustainability-03.png`.

- 741px hero: field/factory/sunrise background, rounded lower corners, left “Komitmen Kami terhadap Pertanian Lestari”, paragraph, Muat Turun Laporan Kelestarian 2026 pill.
- Centered quote with varied bold phrases concerning governance, resource efficiency, continuous commitment and industry standards; NAFAS Bajakimia Sdn Bhd attribution.
- Approach two-column section: left three green icon/text items Operasi yang Terkawal; Rantaian bekalan mampan; Pematuhan Piawaian. Right large farmer portrait with slanted layered borders/ghosted copies and rounded corners.
- Pendidikan& Komuniti / Poster Bulanan: centered heading/description, horizontal year tabs 2026,2025,2024,…2017 and clipped subsequent year. Active 2026 has black underline. Three poster cards with arrows at sides; captions Poster Sep 2026 / Poster Ogos 2026 / Poster Julai 2026. Poster artwork itself contains 2024 labels, another source discrepancy.
- Pendidikan& Komuniti / Laporan Kelestarian: repeated year tabs; wide rounded shadow report panel with left cover “LAPORAN KELESTARIAN 2026”, right “Laporan Disember Kelestarian 2026”, description and Lihat Laporan CTA.
- December 2026 is future relative to inspection date. A downloadable file or release claim requires supplied real material. Do not invent a report or fake a successful download.
- Collaboration CTA/footer continues below. Pale leaf decorations/background texture appear around resource sections.

## Services — 17668:1893

Evidence: `services-01.png`, `services-02.png`, `services-03.png`, `services-04.png`.

- 741px rounded hero with plant/warehouse/trucks/fertilizer stacks photo. Left heading “Perkhidmatan Operasi dan Rantaian Bekalan Baja”, paragraph summarizing trading, importing, packaging, warehousing, sales and distribution.
- Main body alternates 425px rounded photos and text inside 930px container; approximately 60px vertical row spacing. Operasi Pembungkusan uses left packaging image/right text and states Petronas Chemical Fertilizer Kedah Sdn. Bhd., Gurun, Kedah; annual handling/packaging capacity up to 220,000 metric tons.
- Pergudangan Baja: left text/right sack image. Bullets cover efficient storage/handling, continuity of supply, timely nationwide distribution, imported and locally processed fertilizer.
- Jualan & Pemasaran: left farmers image/right text; open tender and open-market distribution.
- Pengimportan Baja: left text/right port image. Visible source quantities: Canada MOP70,000–75,000MT; Indonesia Urea Prill40,000–50,000MT; China Urea Prill40,000–50,000MT, DAP20,000–25,000MT, MAP10,000MT; Australia (Pulau Krismas) Batu Fosfat45,000–50,000MT.
- Agronomi: left branded staff photo/right award/certification text; references Malaysian NPK Fertilizer Sdn. Bhd., NAFAS Bajakimia Sdn. Bhd., Gold award at Contractor Forum2023 for 2022 achievement and earlier bronze2016/silver2018.
- Dark forest gradient recognition section: Persijilan & Anugerah / “Pengiktirafan dan Pematuhan Industri”, outline carousel arrows; large certificates interspersed with award text. Followed by collaboration CTA/footer.

## Navigation behavior and limitations

ArrowRight from about1497 reaches category1677, then product1813; frame cycle is not a complete sitemap. Kelestarian header from product1813 reaches sustainability2044. Berita & Media from sustainability2044, when clicked at the top/after header-state transition, reaches services1893 (confirmed URL) rather than a news page. Do not reproduce this misrouting in production. Career and Hubungi Kami were each clicked twice at their top-header positions on services1893; the source URL remained1893 and the screen remained services (nav-tested.png). These tests changed header styling but did not reach another page. Prototype canvas does not expose section text in DOM and cannot provide exact structured styles.

Additional About captures: about-overview.png shows “Bekalan baja negara sejak1974”, profile download action, photo fading into white; about-departments.png shows five organisation cards: Bahagian Pemasaran dan Jualan; Bahagian Operasi dan Logistik; Bahagian Kewangan dan Akaun; Bahagian Agronomi & Teknikal; Bahagian Pengurusan dan Pentadbiran. about-corporate.png shows MOF registration codes100102 Industri Kimia,100103 Rawatan Air Kimia,120102 Racun Pertanian,120101 Baja. about-map.png and about-locations.png document the locations section and end of page.
