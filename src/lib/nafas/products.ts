// Transcribed from supplied Malay copy v2.0. Client specification units retained.
export type ProductSpec = { label: string; value: string };
export type FertilizerProduct = { slug: string; name: string; category: string; specs: ProductSpec[]; image?: number; backImage?: number; description?: string; note?: string; brochureUrl?: string; certificateImages?: number[] };
export type ProductCategory = { slug: string; name: string };
export const categories: ProductCategory[] = [
  {
    "slug": "baja-tunggal",
    "name": "Baja Tunggal"
  },
  {
    "slug": "baja-gred-tinggi",
    "name": "Baja Gred Tinggi"
  },
  {
    "slug": "baja-sebatian",
    "name": "Baja Sebatian"
  },
  {
    "slug": "baja-sebatian-kompak",
    "name": "Baja Sebatian Kompak"
  },
  {
    "slug": "baja-foliar",
    "name": "Baja Foliar"
  },
  {
    "slug": "baja-organik",
    "name": "Baja Organik"
  },
  {
    "slug": "baja-campuran",
    "name": "Baja Campuran"
  }
];
export const products: FertilizerProduct[] = [
  {
    "slug": "urea-prill-up",
    "name": "Urea Prill (UP)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "46% min (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "0.5% max"
      },
      {
        "label": "Saiz",
        "value": "0.85 - 2.80mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Prilled, free-flowing"
      },
      {
        "label": "Negara Asal",
        "value": "China / Indonesia"
      }
    ],
    "description": "Urea Prill (UP) ialah baja nitrogen berkepekatan tinggi yang digunakan secara meluas untuk menyokong pertumbuhan vegetatif tanaman. Ia sesuai untuk pelbagai jenis tanaman dan sistem pertanian di Malaysia."
  },
  {
    "slug": "urea-granular-ug",
    "name": "Urea Granular (UG)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "46% min (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "0.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular, free-flowing"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "muriate-of-potash-mop",
    "name": "Muriate of Potash (MOP)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "60% min (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "0.5% max"
      },
      {
        "label": "Saiz",
        "value": ">1% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Red/Pink Crystal or Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Russia / Canada"
      }
    ]
  },
  {
    "slug": "phosphate-rock",
    "name": "Phosphate Rock (CIRP / ERP)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "28 - 30% max (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "0.5 – 1.5% max"
      },
      {
        "label": "Saiz",
        "value": "Fine, Powder (MESH 100-500)"
      },
      {
        "label": "Bentuk",
        "value": "Brown"
      },
      {
        "label": "Negara Asal",
        "value": "Egypt / Australia"
      }
    ]
  },
  {
    "slug": "ammonium-sulphate-as",
    "name": "Ammonium Sulphate (AS)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "N : 21% / S : 24% (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.0% max"
      },
      {
        "label": "Saiz",
        "value": ">1% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Crystalline, white"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ]
  },
  {
    "slug": "ammonium-chloride-ac",
    "name": "Ammonium Chloride (AC)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "25 – 26% max (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.0% max"
      },
      {
        "label": "Saiz",
        "value": "<1% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Crystalline / powder"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ]
  },
  {
    "slug": "borate",
    "name": "Borate (B)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "10 – 15% max (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.0% max"
      },
      {
        "label": "Saiz",
        "value": "<1% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Powder / crystalline"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ]
  },
  {
    "slug": "zeolite",
    "name": "Zeolite (Zeo)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "Cation Exchange Mineral"
      },
      {
        "label": "Kelembapan",
        "value": "5.0% max"
      },
      {
        "label": "Saiz",
        "value": "<1.1% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Powder / granular"
      },
      {
        "label": "Negara Asal",
        "value": "China / Indonesia"
      }
    ]
  },
  {
    "slug": "ground-magnesium-limestone-gml",
    "name": "Ground Magnesium Limestone (GML)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "CaCO₃ : >80%, MgCO₃ : 8 – 12% (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.0% max"
      },
      {
        "label": "Saiz",
        "value": "<1.3% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Fine powder"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "dolomite",
    "name": "Calcium Magnesium Carbonate (Dolomite)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "CaCO₃ : 56%, MgCO₃ : 44% (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "0.3% max"
      },
      {
        "label": "Saiz",
        "value": "<1.3% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Fine powder"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "kieserite",
    "name": "Kieserite (Kies)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "MgO : 25–27%, S : 20% (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "3.0% max"
      },
      {
        "label": "Saiz",
        "value": "<1.3% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Granular / crystalline"
      },
      {
        "label": "Negara Asal",
        "value": "German / China / Indonesia"
      }
    ]
  },
  {
    "slug": "magnesium-oxide-mgo",
    "name": "Magnesium Oxide (MgO)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "80 – 90% max (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.0% max"
      },
      {
        "label": "Saiz",
        "value": "<1.4% g/cm3"
      },
      {
        "label": "Bentuk",
        "value": "Fine powder"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ]
  },
  {
    "slug": "di-ammonium-phosphate-dap",
    "name": "Di Ammonium Phosphate (DAP)",
    "category": "baja-gred-tinggi",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "N: 18% min / P205 : 46% min (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Light brown to grey granular"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ],
    "image": 0,
    "backImage": 28
  },
  {
    "slug": "mono-ammonium-phosphate-map",
    "name": "Mono Ammonium Phosphate (MAP)",
    "category": "baja-gred-tinggi",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "N: 10% min/ P205 : 50% min (+/ - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "2.5% max"
      },
      {
        "label": "Saiz",
        "value": "Min 90% passing 100 mesh (fine crystalline powder)"
      },
      {
        "label": "Bentuk",
        "value": "White to slightly yellowish powder"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ]
  },
  {
    "slug": "triple-super-phosphate-tsp",
    "name": "Triple Super Phosphate (TSP)",
    "category": "baja-gred-tinggi",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "46% min (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "3% max"
      },
      {
        "label": "Saiz",
        "value": "1 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Grey to dark grey granular"
      },
      {
        "label": "Negara Asal",
        "value": "China"
      }
    ]
  },
  {
    "slug": "sebatian-55-c55",
    "name": "Sebatian 55 (C55)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "15/15/6/4MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-65-c65",
    "name": "Sebatian 65 (C65)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "15/15/15 (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-45-c45",
    "name": "Sebatian 45 (C45)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "12/12/17/2MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-44-c44",
    "name": "Sebatian 44 (C44)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "12/6/22/3MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-25-c25",
    "name": "Sebatian 25 (C25)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "14/13/9/2.5MgO+TE (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-48-c48",
    "name": "Sebatian 48 (C48)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "10/5/25/3MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "mpob-f3",
    "name": "MPOB F3",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "10/7/19/1.5MgO+0.5B+17%Zeolite (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "mcb-f1-hyfer",
    "name": "MCB F1 HYFER",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "15/7/20/2MgO+7%Zeolite+TE (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "ultra-k",
    "name": "Ultra K",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "7/4/34+TE (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "hikay",
    "name": "HiKay",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "13/6/27/4MgO+0.65B (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "mf3",
    "name": "MF3",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "8/6/21/2.5MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Granular"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-16-s16",
    "name": "Super 16 (S16)",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "16/16/16+TE (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-65-s65",
    "name": "Super 65 (S65)",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "15/15/15 (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-45-s45",
    "name": "Super 45 (S45)",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "12/12/17/2MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-45d-s45d",
    "name": "Super 45D (S45D)",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "12/12/17/2MgO+8S+TE (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-44-s44",
    "name": "Super 44 (S44)",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "12/6/22/3MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-34-s34",
    "name": "Super 34 (S34)",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "10/4/18/2MgO (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "super-ultra-k",
    "name": "Super Ultra K",
    "category": "baja-sebatian-kompak",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "7/4/34+TE (+ / - 0.5%)"
      },
      {
        "label": "Kelembapan",
        "value": "1.5% max"
      },
      {
        "label": "Saiz",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Bentuk",
        "value": "Compacted"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "peladang-25-p25",
    "name": "Peladang 25 (P25)",
    "category": "baja-foliar",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "25/0/0+0.5B+0.5SiO+0.5Cu+NUE"
      },
      {
        "label": "Kelembapan",
        "value": "100% max"
      },
      {
        "label": "Saiz",
        "value": "Liquid"
      },
      {
        "label": "Bentuk",
        "value": "Liquid Green"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "nexbooster",
    "name": "Nexbooster",
    "category": "baja-foliar",
    "specs": [
      {
        "label": "Kandungan Nutrien",
        "value": "Bio Organik + NPK <5% + EM"
      },
      {
        "label": "Kelembapan",
        "value": "100% max"
      },
      {
        "label": "Saiz",
        "value": "Liquid"
      },
      {
        "label": "Bentuk",
        "value": "Black"
      },
      {
        "label": "Negara Asal",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "baja-organik",
    "name": "Baja Organik",
    "category": "baja-organik",
    "specs": [
      {
        "label": "Nutrien Utama",
        "value": "±5% NPK"
      },
      {
        "label": "Kandungan Organik",
        "value": "50%"
      },
      {
        "label": "Bentuk Fizikal",
        "value": "Serbuk Halus"
      },
      {
        "label": "Kelembapan",
        "value": "<30%"
      },
      {
        "label": "Paras pH",
        "value": "7–8%"
      },
      {
        "label": "CEC",
        "value": "±25–35 cmol(+)/kg"
      },
      {
        "label": "Pembungkusan",
        "value": "25kg/bag"
      }
    ],
    "note": "Sila sahkan kandungan NPK dan spesifikasi terkini dengan pasukan kami sebelum membuat pesanan."
  },
  {
    "slug": "urea-mop",
    "name": "Urea + MOP",
    "category": "baja-campuran",
    "specs": []
  },
  {
    "slug": "urea-phosphate-rock-mop",
    "name": "Urea + Phosphate Rock + MOP",
    "category": "baja-campuran",
    "specs": []
  }
];
export function getCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function categoryProducts(slug: string) { return products.filter((product) => product.category === slug); }
export function productHref(product: FertilizerProduct) { return `/produk/${product.category}/${product.slug}`; }
