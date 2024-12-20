const searcheableBrands = [
  { label: "Apple", value: "apple" },
  { label: "Samsung", value: "samsung" },
  { label: "Mi", value: "mi" },
  { label: "OnePlus", value: "oneplus" },
  { label: "Vivo", value: "vivo" },
  { label: "Oppo", value: "oppo" },
  { label: "Realme", value: "realme" },
  { label: "Motorola", value: "motorola" },
  { label: "Lenovo", value: "lenovo" },
  { label: "Nokia", value: "nokia" },
  { label: "Nothing", value: "nothing" },
  { label: "Poco", value: "poco" },
  { label: "Google", value: "google" },
  { label: "Infinix", value: "infinix" },
  { label: "Techno", value: "techno" },
  { label: "Iqoo", value: "iqoo" },
  { label: "Honor", value: "honor" },
];

const BrandsData = [
  {
    name: "Apple",
    image: "/apple.svg",
    // series: [
    //   {
    //     name: "SE Series",
    //     models: [
    //       {
    //         name: "SE 2020",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone_se_2020.svg",
    //       },
    //       {
    //         name: "SE 2021",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone_se_2022.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "6 Series",
    //     models: [
    //       {
    //         name: "6",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone6.svg",
    //       },
    //       {
    //         name: "6 Plus",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone6.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "7 Series",
    //     models: [
    //       {
    //         name: "7",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone7.svg",
    //       },
    //       {
    //         name: "7 Plus",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone7.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "8 Series",
    //     models: [
    //       {
    //         name: "8",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone8.svg",
    //       },
    //       {
    //         name: "8 Plus",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone8.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "X Series",
    //     models: [
    //       {
    //         name: "X",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphonex.svg",
    //       },
    //       {
    //         name: "X Plus",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphonex.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "11 Series",
    //     models: [
    //       {
    //         name: "11",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone11.svg",
    //       },
    //       {
    //         name: "11 Pro",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone11.svg",
    //       },
    //       {
    //         name: "11 Pro Max",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone11.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "12 Series",
    //     models: [
    //       {
    //         name: "12",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone12.svg",
    //       },
    //       {
    //         name: "12 Pro",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone12.svg",
    //       },
    //       {
    //         name: "12 Pro Max",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone12.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "13 Series",
    //     models: [
    //       {
    //         name: "13",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone13.svg",
    //       },
    //       {
    //         name: "13 Pro",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone13.svg",
    //       },
    //       {
    //         name: "13 Pro Max",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone13.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "14 Series",
    //     models: [
    //       {
    //         name: "14",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone14.svg",
    //       },
    //       {
    //         name: "14 Pro",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone14.svg",
    //       },
    //       {
    //         name: "14 Pro Max",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone14.svg",
    //       },
    //     ],
    //   },
    //   {
    //     name: "15 Series",
    //     models: [
    //       {
    //         name: "15",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone15.svg",
    //       },
    //       {
    //         name: "15 Pro",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone15.svg",
    //       },
    //       {
    //         name: "15 Pro Max",
    //         variants: ["128 GB", "256 GB", "512 GB"],
    //         img: "/iphone15.svg",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    name: "Samsung",
    image: "/samsung2.svg",
    series: null,
  },
] as const;

export { searcheableBrands, BrandsData };
