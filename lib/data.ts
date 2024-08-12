export const categories: GameCategory[] = [
  { id: 1, name: "Marketing" },
  { id: 2, name: "Perawat" },
  { id: 3, name: "Laboratorium" },
  { id: 4, name: "Keuangan" },
  { id: 5, name: "Radiologi" },
  { id: 6, name: "Pramita" },
  { id: 7, name: "SDM" },
  { id: 8, name: "Front Office" },
  { id: 9, name: "Mutu" },
];

export const questions: Question[] = [
  {
    id: 1,
    category: "Level 1",
    question: "Hal apa yang membuat wanita rela begadang?",
    show: false,
    surveys: [
      { id: 1, value: "menonton", points: 23 },
      { id: 2, value: "anak sakit", points: 17 },
      { id: 3, value: "menunggu suami pulang", points: 15 },
      { id: 4, value: "curhat", points: 14 },
      { id: 5, value: "pekerjaan", points: 13 },
      { id: 6, value: "main handphone", points: 10 },
      { id: 7, value: "menyusui", points: 9 },
    ],
  },
  {
    id: 2,
    category: "Level 2",
    question:
      "Selain bermain gitar, keahlian apa yang cowok tunjukan untuk menarik perhatian cewek?",
    show: false,
    surveys: [
      { id: 1, value: "olahraga", points: 29 },
      { id: 2, value: "bernyanyi", points: 20 },
      { id: 3, value: "menggombal", points: 15 },
      { id: 4, value: "memasak", points: 13 },
      { id: 5, value: "bermain game", points: 11 },
    ],
  },
  {
    id: 3,
    category: "Level 3",
    question: "Kenapa mie instan buatan warkop lebih enak dari buatan sendiri?",
    show: false,
    surveys: [
      { id: 1, value: "dimasakin", points: 29 },
      { id: 2, value: "suasana", points: 24 },
      { id: 3, value: "bersama teman-teman", points: 18 },
      { id: 4, value: "ada bumbu tambahan", points: 16 },
    ],
  },
];
