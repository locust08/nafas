// Source: "NBKSB - Pengedar - 2026.xlsx" (Senarai Pengedar), grouped by state.
// `map` is the Google Maps link supplied in the sheet's "Lokasi" column.
export type Distributor = {
  name: string;
  address: string;
  postcode: string;
  phones: string[];
  email?: string;
  registrar?: string;
  regNo?: string;
  map?: string;
};

export type DistributorState = { slug: string; name: string; distributors: Distributor[] };

export const distributorStates: DistributorState[] = [
  {
    slug: 'kedah', name: 'Kedah', distributors: [
      { name: 'ONE AGRO TRADING', address: 'NO. 9, JALAN JERAI EMAS 2, TAMAN JERAI EMAS, GURUN', postcode: '08300', phones: ['017-7148186', '017-5642761'], email: 'oneagrotrading@gmail.com', map: 'https://share.google/xhLQjb5ku37z45JWD' },
      { name: 'SSS NORTTHERN SDN BHD', address: 'SHOP LOT NO. 16, TAMAN TANJUNG INDAH, JALAN JUNJUNG, KULIM', postcode: '09000', phones: ['013-5918333', '013-5865333'], email: 'sssnorthern@yahoo.com', registrar: 'SSM', regNo: '1488480-W' },
      { name: 'HARVESTPOINT (M) SDN BHD', address: 'NO. 544, JALAN WAJA 5, TAMAN INDUSTRI WAJA, KULIM', postcode: '09000', phones: ['012-5752617'], email: 'biebie_yen@yahoo.com', registrar: 'SSM', regNo: '199201014661', map: 'https://share.google/wuVeez099klzsUOuZ' },
      { name: 'BAN GUAN', address: 'NO. 287-A4, JALAN AMAN, KULIM', postcode: '09000', phones: ['04-4907660'], email: 'banguan287@gmail.com', registrar: 'SSM', regNo: '000149823-W', map: 'https://share.google/RF36QenmSBARVXVJH' },
      { name: 'KLPK NIAGA SDN BHD', address: 'LOT 159, KOMPLEKS ALOR SETAR, LEBUHRAYA DARUL AMAN, ALOR SETAR', postcode: '05100', phones: ['04-7311933'], email: 'rohaizalhalim@yahoo.com', registrar: 'SSM', regNo: '411149-D', map: 'https://share.google/s797gsMhO2G0E0XnO' },
      { name: 'EDAMAYUTI ENTERPRISE', address: 'NO. 41, TINGKAT BAWAH, KOMPLEKS PERNIAGAAN UTAMA, JALAN SULTANAH SAMBUNGAN, ALOR SETAR', postcode: '05150', phones: ['019-5456114'], email: 'edamayuti44@yahoo.com.my', registrar: 'SSM', regNo: 'AS0255414P', map: 'https://share.google/AFZx8GuFgFh7HXNzj' },
    ],
  },
  {
    slug: 'perak', name: 'Perak', distributors: [
      { name: 'MANA LAGI AGRO', address: 'NO. 19, LORONG PERMAI 1, TAMAN KURAU PERMAI, BATU KURAU', postcode: '34500', phones: ['017-438 6522'], email: 'laysar@yahoo.com', map: 'https://share.google/6AYgoTEMxJ7MyZIDY' },
      { name: 'S&B AGRICULTURAL', address: 'NO. 72, LORONG 1, TAMAN SUNGAI SUMUN, SUNGAI SUMUN', postcode: '36300', phones: ['01136049319'], email: 'badzrul87@gmail.com', registrar: 'SSM', regNo: '201903209709', map: 'https://share.google/xsCrPt8pxrKjYHnBL' },
    ],
  },
  {
    slug: 'selangor', name: 'Selangor', distributors: [
      { name: 'AONIC SDN BHD', address: 'NO 9, JALAN TP6 TAMAN PERINDUSTRIAN UEP, SUBANG JAYA', postcode: '47600', phones: ['0123759239'], email: 'sales.my@aonic.com', registrar: 'SSM', regNo: '201601018803', map: 'https://share.google/H3Sq6wk8gX9hJsIUm' },
      { name: 'SAIHAR RESOURCES', address: 'NO. 41, JALAN JENJARUM 1C, TAMAN BUKIT BERUNTUNG, RAWANG', postcode: '48300', phones: ['017-3537788'], email: 'azharsalipon@gmail.com', registrar: 'SSM', regNo: '201903106656', map: 'https://share.google/yAoILNpSHQWXZUme3' },
    ],
  },
  {
    slug: 'melaka', name: 'Melaka', distributors: [
      { name: 'ARM AGRO TECHNOLOGY SDN BHD', address: 'NO. 8653, JALAN PEJABAT, FELDA HUTAN PERCHA, ALOR GAJAH', postcode: '47110', phones: ['03-80511894'], email: 'armagrotechnologysdn20@gmail.com', registrar: 'SSM', regNo: '202001015299', map: 'https://www.google.com/maps/search/?api=1&query=2.443306,102.299972' },
    ],
  },
  {
    slug: 'pahang', name: 'Pahang', distributors: [
      { name: 'SALSABILA GLOBAL', address: 'D 10 G, LORONG TARBP 5, BANDAR TUN RAZAK BUSINESS PARK, BANDAR PUSAT JENGKA', postcode: '26400', phones: ['0199321405'], email: 'salsabilaglobal2023@gmail.com', registrar: 'OTH', regNo: '202303009843', map: 'https://share.google/3AH76lskLFbHHaPOK' },
    ],
  },
  {
    slug: 'labuan', name: 'Labuan', distributors: [
      { name: 'PERTUBUHAN PELADANG NEGERI (PPN) WILAYAH PERSEKUTUAN LABUAN', address: 'KM. 5, JALAN POHON BATU, KAMPUNG PANTAI, PETI SURAT 81095, LABUAN', postcode: '87020', phones: ['087-428457'], email: 'ppnwilayah@yahoo.com.my', registrar: 'GOV', regNo: 'PPN12', map: 'https://share.google/FDyDJ3Aegbyovi61U' },
    ],
  },
  {
    slug: 'sarawak', name: 'Sarawak', distributors: [
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) BINTULU', address: 'JALAN PISANG EMAS, OFF JALAN TUN RAZAK, BINTULU', postcode: '97000', phones: ['086-331113'], email: 'ppkbintulu@yahoo.com', registrar: 'GOV', regNo: 'AFO 0006', map: 'https://share.google/QLQ0hlgJnH8o0t9j6' },
      { name: 'KOPERASI PENANAM SAWIT MAMPAN DAERAH TATAU BERHAD (KPSM)', address: 'BLOCK 35, JALAN PESISIR JEPAK-KUALA TATAU, SG. SELAT, BINTULU', postcode: '97000', phones: ['016-8412603'], email: 'kpsmdtatau@gmail.com', registrar: 'SKM', regNo: '201967401088', map: 'https://maps.app.goo.gl/WCwrcBCHWm8BPU9b9?g_st=aw' },
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) BAU', address: 'GROUND & 1ST. FLOOR, KOMPLEKS PPK BAU, JALAN LLOYD THOMAS, BAU', postcode: '94000', phones: ['082-764500'], email: 'marzuka1@sarawak.gov.my', registrar: 'GOV', regNo: 'AFO 0012', map: 'https://maps.app.goo.gl/4tt8ZBbEt1j9kt8k9?g_st=aw' },
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) SUBIS', address: 'LOT 2426, BLOK 5, MCLD BOULEVAERD COMMERCIAL CENTRE, JALAN MIRI-PUJUT, MIRI', postcode: '98000', phones: ['013-8375376', '019-8441933'], email: 'ppksubis910@yahoo.com', registrar: 'GOV', regNo: 'AFO 0003', map: 'https://share.google/A4i6ojGBH5bp5O47M' },
    ],
  },
  {
    slug: 'sabah', name: 'Sabah', distributors: [
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) PITAS', address: 'LOT 9 & 10, BLOK B, BANGUNAN SEDCO, PEKAN BARU PITAS, CAWANGAN POS MINI, PETI POS 203, PITAS, KOTA MARUDU', postcode: '89100', phones: ['088-613200', '088-680100'], email: 'ppkpitas@gmail.com', registrar: 'OTH', regNo: 'PPK 0239', map: 'https://share.google/Jq1o1IFg2VCLI24ZV' },
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) NABAWAN', address: 'KAMPUNG INDAH, JALAN MASJID, PETI SURAT 77, NABAWAN', postcode: '89957', phones: ['019-4993886'], email: 'penyadau_azr@yahoo.com', registrar: 'GOV', regNo: 'PPK0246', map: 'https://share.google/J2J8zw7sdntzMhATT' },
      { name: 'NORSECHEM (SABAH) SDN BHD', address: 'MILE 3 1/2, JALAN BATU SAPI, KARAMUNTING, W.D.T. 408, SANDAKAN', postcode: '90009', phones: ['089-612285'], email: 'ae.norsechem@gmail.com', registrar: 'SSM', regNo: '198001002343', map: 'https://share.google/8O6q3lG7iVIklhz18' },
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) SANDAKAN', address: 'BLOK B3, LOT 1 & 2, BANDAR LABUK JAYA, BATU 7, W.D.T. NO. 46, SANDAKAN', postcode: '90009', phones: ['089-227896'], email: 'ppkskan@gmail.com', registrar: 'GOV', regNo: 'PPK0243', map: 'https://share.google/Jwzdfw1xcaZvDE8vl' },
      // Sheet email reads "ppkkunak_96yahoo.com" (no "@"), so it is left out until confirmed.
      { name: 'PERTUBUHAN PELADANG KAWASAN (PPK) KUNAK', address: 'LOT 3 & 4, MDLD, BANGUNAN KEDAI SAPANG, W.D.T. 2601, KUNAK', postcode: '91209', phones: ['089-851812'], map: 'https://share.google/r3sYEUMiabI5k4teZ' },
    ],
  },
];

export const distributorCount = distributorStates.reduce((total, state) => total + state.distributors.length, 0);
