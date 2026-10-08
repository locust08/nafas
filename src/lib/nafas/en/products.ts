// Generated from the BM design source by scripts/generate-english.mjs.
// Transcribed from supplied Malay copy v2.0. Client specification units retained.
export type ProductSpec = { label: string; value: string };
export type FertilizerProduct = { slug: string; name: string; category: string; specs: ProductSpec[]; image?: number; backImage?: number; description?: string; note?: string; brochureUrl?: string; certificateImages?: number[] };
export type ProductCategory = { slug: string; name: string };
export const categories: ProductCategory[] = [
  {
    "slug": "baja-tunggal",
    "name": "Straight Fertilizers"
  },
  {
    "slug": "baja-gred-tinggi",
    "name": "High Grade Fertilizers"
  },
  {
    "slug": "baja-sebatian",
    "name": "Compound Fertilizers"
  },
  {
    "slug": "baja-sebatian-kompak",
    "name": "Compacted Compound Fertilizers"
  },
  {
    "slug": "baja-foliar",
    "name": "Foliar Fertilizers"
  },
  {
    "slug": "baja-organik",
    "name": "Organic Fertilizers"
  },
  {
    "slug": "baja-campuran",
    "name": "Blended Fertilizers"
  }
];
export const products: FertilizerProduct[] = [
  {
    "slug": "urea-prill-up",
    "name": "Urea Prill (UP)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "46% min (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "0.5% max"
      },
      {
        "label": "Size",
        "value": "0.85 - 2.80mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Prilled, free-flowing"
      },
      {
        "label": "Country of Origin",
        "value": "China / Indonesia"
      }
    ],
    "description": "Urea Prill (UP) is a concentrated nitrogen fertilizer widely used to support vegetative crop growth. It is suitable for various crops and agricultural systems in Malaysia."
  },
  {
    "slug": "urea-granular-ug",
    "name": "Urea Granular (UG)",
    "category": "baja-tunggal",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "46% min (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "0.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular, free-flowing"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "60% min (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "0.5% max"
      },
      {
        "label": "Size",
        "value": ">1% g/cm3"
      },
      {
        "label": "Form",
        "value": "Red/Pink Crystal or Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "28 - 30% max (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "0.5 – 1.5% max"
      },
      {
        "label": "Size",
        "value": "Fine, Powder (MESH 100-500)"
      },
      {
        "label": "Form",
        "value": "Brown"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "N : 21% / S : 24% (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.0% max"
      },
      {
        "label": "Size",
        "value": ">1% g/cm3"
      },
      {
        "label": "Form",
        "value": "Crystalline, white"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "25 – 26% max (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.0% max"
      },
      {
        "label": "Size",
        "value": "<1% g/cm3"
      },
      {
        "label": "Form",
        "value": "Crystalline / powder"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "10 – 15% max (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.0% max"
      },
      {
        "label": "Size",
        "value": "<1% g/cm3"
      },
      {
        "label": "Form",
        "value": "Powder / crystalline"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "Cation Exchange Mineral"
      },
      {
        "label": "Moisture",
        "value": "5.0% max"
      },
      {
        "label": "Size",
        "value": "<1.1% g/cm3"
      },
      {
        "label": "Form",
        "value": "Powder / granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "CaCO₃ : >80%, MgCO₃ : 8 – 12% (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.0% max"
      },
      {
        "label": "Size",
        "value": "<1.3% g/cm3"
      },
      {
        "label": "Form",
        "value": "Fine powder"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "CaCO₃ : 56%, MgCO₃ : 44% (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "0.3% max"
      },
      {
        "label": "Size",
        "value": "<1.3% g/cm3"
      },
      {
        "label": "Form",
        "value": "Fine powder"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "MgO : 25–27%, S : 20% (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "3.0% max"
      },
      {
        "label": "Size",
        "value": "<1.3% g/cm3"
      },
      {
        "label": "Form",
        "value": "Granular / crystalline"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "80 – 90% max (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.0% max"
      },
      {
        "label": "Size",
        "value": "<1.4% g/cm3"
      },
      {
        "label": "Form",
        "value": "Fine powder"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "N: 18% min / P205 : 46% min (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Light brown to grey granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "N: 10% min/ P205 : 50% min (+/ - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "2.5% max"
      },
      {
        "label": "Size",
        "value": "Min 90% passing 100 mesh (fine crystalline powder)"
      },
      {
        "label": "Form",
        "value": "White to slightly yellowish powder"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "46% min (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "3% max"
      },
      {
        "label": "Size",
        "value": "1 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Grey to dark grey granular"
      },
      {
        "label": "Country of Origin",
        "value": "China"
      }
    ]
  },
  {
    "slug": "sebatian-55-c55",
    "name": "Compound 55 (C55)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "15/15/6/4MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-65-c65",
    "name": "Compound 65 (C65)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "15/15/15 (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-45-c45",
    "name": "Compound 45 (C45)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "12/12/17/2MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-44-c44",
    "name": "Compound 44 (C44)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "12/6/22/3MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-25-c25",
    "name": "Compound 25 (C25)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "14/13/9/2.5MgO+TE (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "sebatian-48-c48",
    "name": "Compound 48 (C48)",
    "category": "baja-sebatian",
    "specs": [
      {
        "label": "Nutrient Content",
        "value": "10/5/25/3MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "10/7/19/1.5MgO+0.5B+17%Zeolite (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "15/7/20/2MgO+7%Zeolite+TE (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "7/4/34+TE (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "13/6/27/4MgO+0.65B (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "8/6/21/2.5MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "2 - 4 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Granular"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "16/16/16+TE (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "15/15/15 (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "12/12/17/2MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "12/12/17/2MgO+8S+TE (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "12/6/22/3MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "10/4/18/2MgO (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "7/4/34+TE (+ / - 0.5%)"
      },
      {
        "label": "Moisture",
        "value": "1.5% max"
      },
      {
        "label": "Size",
        "value": "3 - 5 mm (90% min)"
      },
      {
        "label": "Form",
        "value": "Compacted"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "25/0/0+0.5B+0.5SiO+0.5Cu+NUE"
      },
      {
        "label": "Moisture",
        "value": "100% max"
      },
      {
        "label": "Size",
        "value": "Liquid"
      },
      {
        "label": "Form",
        "value": "Liquid Green"
      },
      {
        "label": "Country of Origin",
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
        "label": "Nutrient Content",
        "value": "Bio Organic + NPK <5% + EM"
      },
      {
        "label": "Moisture",
        "value": "100% max"
      },
      {
        "label": "Size",
        "value": "Liquid"
      },
      {
        "label": "Form",
        "value": "Black"
      },
      {
        "label": "Country of Origin",
        "value": "Malaysia"
      }
    ]
  },
  {
    "slug": "baja-organik",
    "name": "Organic Fertilizers",
    "category": "baja-organik",
    "specs": [
      {
        "label": "Main Nutrients",
        "value": "±5% NPK"
      },
      {
        "label": "Organic Content",
        "value": "50%"
      },
      {
        "label": "Physical Form",
        "value": "Fine Powder"
      },
      {
        "label": "Moisture",
        "value": "<30%"
      },
      {
        "label": "pH Level",
        "value": "7–8%"
      },
      {
        "label": "CEC",
        "value": "±25–35 cmol(+)/kg"
      },
      {
        "label": "Packaging",
        "value": "25kg/bag"
      }
    ],
    "note": "Please confirm the current NPK content and specifications with our team before ordering."
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
export function productHref(product: FertilizerProduct) { return `/en/produk/${product.category}/${product.slug}`; }
