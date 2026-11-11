import type { IconName } from "@/components/Icon";

export const benefits: { title: string; text: string; icon: IconName }[] = [
  { title: "Uşaqla böyüyür", text: "Masa 530–710 mm, stul 310–430 mm, 4 mövqe.", icon: "height" },
  { title: "Təhlükəsiz", text: "Yumru künclər, divara bərkitmə, yumşaq bağlanan qapılar.", icon: "shield" },
  { title: "Azərbaycanda istehsal", text: "Masallıdakı ailə fabrikimizdə hazırlanır.", icon: "pin" },
  { title: "Mövzu və ad", text: "Bulud və kosmos mövzuları, uşağın adının qravürası.", icon: "star" },
  { title: "Hər sifarişə hədiyyə", text: "Uşağın adı ilə bulud təqvimi.", icon: "gift" },
  { title: "Hissə-hissə ödəniş", text: "Birmarket vasitəsilə.", icon: "card" },
];

export const steps = [
  { title: "Model seçin", text: "Model, rəng və tənzimləmə seçimini edin." },
  { title: "WhatsApp-da yazın", text: "Uşağın yaşını yazın, qiyməti və müddəti dəqiqləşdirək." },
  { title: "Hazırlayırıq", text: "Masallıda [X] iş günü ərzində hazırlanır." },
  { title: "Çatdırırıq", text: "Bakı və rayonlara çatdırılma. Quraşdırma: [şərt]." },
];

export const sizeGuide = [
  { position: 1, age: "~6 yaş", height: "108–121 sm", desk: 530, chair: 310 },
  { position: 2, age: "7–9 yaş", height: "119–142 sm", desk: 590, chair: 350 },
  { position: 3, age: "9–11 yaş", height: "133–159 sm", desk: 640, chair: 380 },
  { position: 4, age: "11–12+ yaş", height: "146–176 sm", desk: 710, chair: 430 },
];

export const faq = [
  {
    q: "Masa hansı yaş üçündür?",
    a: "6–12 yaş. Masa və stul 4 mövqedə tənzimlənir, uşaq böyüdükcə hündürlüyü dəyişirsiniz.",
  },
  { q: "Rəng seçmək olar?", a: "Standart rəng ağ + açıq palıddır. Digər rənglər sorğu ilə." },
  { q: "Hissə-hissə ödəmək olar?", a: "Bəli, Birmarket vasitəsilə." },
  { q: "Nə qədər vaxta hazır olur?", a: "[X] iş günü." },
  { q: "Çatdırılma və quraşdırma var?", a: "Bakı daxili: [şərt]. Rayonlara: [şərt]." },
];
