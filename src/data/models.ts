export type Choice = { id: string; label: string };
export type OptionGroup = { id: string; label: string; choices: Choice[] };
export type Dimension = { label: string; value: string };
export type ModelImage = { src: string; alt: string };

export type Model = {
  slug: string;
  number: number;
  name: string;
  title: string;
  age: string;
  short: string;
  description: string;
  features: string[];
  dimensions: Dimension[];
  images: ModelImage[];
  /** Starting price in AZN. Leave undefined to show "Qiymət üçün yazın". */
  priceFrom?: number;
  options: OptionGroup[];
};

const deskHeight: OptionGroup = {
  id: "desk",
  label: "Masa hündürlüyü",
  choices: [
    { id: "adjustable", label: "Tənzimlənən" },
    { id: "fixed", label: "Sabit" },
  ],
};

const chair: OptionGroup = {
  id: "chair",
  label: "Stul",
  choices: [
    { id: "adjustable", label: "Tənzimlənən" },
    { id: "fixed", label: "Sabit" },
  ],
};

const color: OptionGroup = {
  id: "color",
  label: "Rəng",
  choices: [
    { id: "white-oak", label: "Ağ + açıq palıd" },
    { id: "other", label: "Digər rəng (sorğu ilə)" },
  ],
};

export const models: Model[] = [
  {
    slug: "bulud",
    number: 1,
    name: "Bulud",
    title: "Bulud dəsti",
    age: "6–10 yaş",
    short: "Bulud panel, kitab rəfləri, kitab vitrini və qapılı şkaf.",
    description:
      "İbtidai sinif uşaqları üçün dərs masası və stul. Masa və stul 4 mövqedə tənzimlənir, uşaq böyüdükcə hündürlüyü dəyişirsiniz. Kitablar, dəftərlər və oyuncaqlar üçün kifayət qədər yer var.",
    features: [
      "Bulud panel, günəş detalı və şəkil rəfi",
      "Solda 2 kitab rəfi",
      "Pilləli kitab vitrini və açıq rəf",
      "Qapılı şkaf, bulud düymə",
      "Hündürlüyü tənzimlənən masa və stul",
      "Yumru künclər, divara bərkitmə",
    ],
    dimensions: [
      { label: "Ümumi en", value: "1560 mm" },
      { label: "Masa üstü", value: "1000 × 500 mm" },
      { label: "Masa hündürlüyü", value: "530–710 mm" },
      { label: "Stul oturacağı", value: "310–430 mm" },
      { label: "Ümumi hündürlük", value: "~1000 mm" },
      { label: "Rəng", value: "Ağ + açıq palıd" },
    ],
    images: [
      { src: "/images/bulud-set.jpg", alt: "Bulud masası və tənzimlənən stul uşaq otağında" },
      { src: "/images/bulud-desk.jpg", alt: "Bulud masası: bulud panel, kitab rəfləri və şkaf" },
      { src: "/images/teqvim.jpg", alt: "Hədiyyə: bulud formalı təhsil təqvimi" },
    ],
    priceFrom: undefined,
    options: [deskHeight, chair, color],
  },
  {
    slug: "bulud-modul",
    number: 2,
    name: "Bulud Modul",
    title: "Bulud Modul dəsti",
    age: "6–10 yaş",
    short: "Masa, kitab şkafı və rəf qülləsini otağa görə seçin.",
    description:
      "Modul dəst: masanı tək götürün, yaxud kitab şkafı və rəf qülləsi əlavə edin. Otağın ölçüsünə və büdcəyə görə seçirsiniz, sonradan da əlavə etmək olar.",
    features: [
      "Bulud panel, günəş detalı və şəkil rəfi",
      "Sağda kitab şkafı və qapılı şkaf",
      "Solda rəf qülləsi və səbət",
      "Bulud düymə və arı qravürası",
      "Hündürlüyü tənzimlənən masa və stul",
      "Hündür şkaf divara bərkidilir",
    ],
    dimensions: [
      { label: "Masa üstü", value: "1000 × 500 mm" },
      { label: "Masa hündürlüyü", value: "530–710 mm" },
      { label: "Kitab şkafı", value: "~400 × 380 × 1450 mm" },
      { label: "Rəf qülləsi", value: "~350 × 380 × 900 mm" },
      { label: "Tam dəstin eni", value: "~1750 mm" },
      { label: "Rəng", value: "Ağ + açıq palıd" },
    ],
    images: [{ src: "/images/bulud-modul.jpg", alt: "Bulud Modul: masa, rəf qülləsi və kitab şkafı" }],
    priceFrom: undefined,
    options: [
      {
        id: "set",
        label: "Dəst",
        choices: [
          { id: "desk", label: "Yalnız masa" },
          { id: "desk-bookcase", label: "Masa + kitab şkafı" },
          { id: "full", label: "Tam dəst" },
        ],
      },
      deskHeight,
      color,
    ],
  },
  {
    slug: "kosmos",
    number: 3,
    name: "Kosmos",
    title: "Kosmos dəsti",
    age: "7–12 yaş",
    short: "Pilləli rəflər, dəyişdirilən mövzu paneli, çanta halqası.",
    description:
      "Böyük uşaqlar üçün dərs masası: pilləli açıq rəflər, siyirmə və şkaf, çanta üçün basketbol halqası. Mövzu paneli dəyişdirilə bilər: kosmos, dəniz və ya dünya xəritəsi.",
    features: [
      "Pilləli açıq rəflər",
      "Dəyişdirilən mövzu paneli",
      "Siyirmə və qapılı şkaf",
      "Basketbol halqası formalı çanta tutucu",
      "Hündürlüyü tənzimlənən masa və stul",
      "Hündür rəflər divara bərkidilir",
    ],
    dimensions: [
      { label: "Masa üstü", value: "1100 × 550 mm" },
      { label: "Masa hündürlüyü", value: "530–710 mm" },
      { label: "Ümumi hündürlük", value: "~1750 mm" },
      { label: "Siyirmə + şkaf", value: "~400 mm en" },
      { label: "Mövzu paneli", value: "Dəyişdirilə bilər" },
      { label: "Rəng", value: "Ağ + açıq palıd" },
    ],
    images: [{ src: "/images/kosmos.jpg", alt: "Kosmos masası: pilləli rəflər, kosmos paneli və çanta halqası" }],
    priceFrom: undefined,
    options: [
      deskHeight,
      chair,
      {
        id: "theme",
        label: "Mövzu paneli",
        choices: [
          { id: "space", label: "Kosmos" },
          { id: "sea", label: "Dəniz" },
          { id: "map", label: "Dünya xəritəsi" },
        ],
      },
      color,
    ],
  },
];

export function getModel(slug: string): Model | undefined {
  return models.find((m) => m.slug === slug);
}
