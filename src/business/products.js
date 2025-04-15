// import Wardrobe_1 from "@/assets/photos/Wardrobe1_photo.png";
// import Wardrobe_2 from "@/assets/photos/Wardrobe2_photo.png";
// import Wardrobe_3 from "@/assets/photos/Wardrobe3_photo.png";
// import Wardrobe_4 from "@/assets/photos/Wardrobe4_photo.png";
// const URL = "https://67e54df518194932a58579f1.mockapi.io/Products";

// const templates = [
//   {
//     name: "Комфорт 4 дуб сонома белый без ящика",
//     classification: "Офисные кресла",
//     img: Wardrobe_1,
//     code: "Fn-0026",
//     oldPrice: 25000,
//     currentPrice: 15000,
//     discountProduct: 50,
//     newProduct: false,
//     characteristics: [
//       {
//         type: "ШхВхГ",
//         value: "нет",
//       },
//       { type: "Материал", value: "нет" },
//       { type: "Тип", value: "нет" },
//       { type: "Двери", value: "нет" },
//       { type: "Число дверей", value: "нет" },
//       { type: "Количество полок", value: "нет" },
//       { type: "Вес", value: "нет" },
//       { type: "Дополнительно", value: "нет" },
//       { type: "Страна изготовитель", value: "нет" },
//     ],
//   },
//   {
//     name: "Комфорт 3 дуб бунратти с зеркалом",
//     classification: "Мебель для персонала",
//     img: Wardrobe_2,
//     code: "Fn-0026",
//     currentPrice: 15000,
//     oldPrice: 0,
//     discountProduct: 0,
//     newProduct: true,
//     characteristics: [
//       {
//         type: "ШхВхГ",
//         value: "нет",
//       },
//       { type: "Материал", value: "нет" },
//       { type: "Тип", value: "нет" },
//       { type: "Двери", value: "нет" },
//       { type: "Число дверей", value: "нет" },
//       { type: "Количество полок", value: "нет" },
//       { type: "Вес", value: "нет" },
//       { type: "Дополнительно", value: "нет" },
//       { type: "Страна изготовитель", value: "нет" },
//     ],
//   },
//   {
//     name: "Версаль бетон пайн",
//     classification: "Мебель для персонала",
//     img: Wardrobe_3,
//     code: "Fn-0026",
//     currentPrice: 15000,
//     oldPrice: 0,
//     discountProduct: 50,
//     newProduct: false,
//     characteristics: [
//       {
//         type: "ШхВхГ",
//         value: "нет",
//       },
//       { type: "Материал", value: "нет" },
//       { type: "Тип", value: "нет" },
//       { type: "Двери", value: "нет" },
//       { type: "Число дверей", value: "нет" },
//       { type: "Количество полок", value: "нет" },
//       { type: "Вес", value: "нет" },
//       { type: "Дополнительно", value: "нет" },
//       { type: "Страна изготовитель", value: "нет" },
//     ],
//   },
//   {
//     name: "Комфорт 3 дуб сонома серый",
//     classification: "Офисные кресла",
//     img: Wardrobe_4,
//     code: "Fn-0026",
//     currentPrice: 15000,
//     oldPrice: 25000,
//     discountProduct: 50,
//     newProduct: false,
//     characteristics: [
//       {
//         type: "ШхВхГ",
//         value: "нет",
//       },
//       { type: "Материал", value: "нет" },
//       { type: "Тип", value: "нет" },
//       { type: "Двери", value: "нет" },
//       { type: "Число дверей", value: "нет" },
//       { type: "Количество полок", value: "нет" },
//       { type: "Вес", value: "нет" },
//       { type: "Дополнительно", value: "нет" },
//       { type: "Страна изготовитель", value: "нет" },
//     ],
//   },
// ];

// let madeProducts = [];
// let offset = 0;
// let id = 1;
// const categories = [
//   { name: "Шкафы (МДФ)" },
//   { name: "Шкафы (распашные)" },
//   { name: "Шкафы (купе)" },
//   { name: "Спальные гарнитуры" },
//   { name: "Кровати" },
//   { name: "Диваны" },
//   { name: "Пуфики" },
//   { name: "Кухонные гарнитуры" },
//   { name: "Столы" },
//   { name: "Прихожие" },
//   { name: "Комоды" },
//   { name: "Стеллажи" },
//   { name: "Б/У" },
// ];

// for (let i = 0; i < 5; i++) {
//   let massive = [];
//   for (let j = 0; j < 13; j++) {
//     madeProducts.push({
//       id: id,
//       category: categories[j].name,
//       ...templates[(j + offset) % 4],
//     });
//     id++;
//   }
//   offset++;
//   // massive.forEach((element) => {
//   //   fetch(URL, {
//   //     method: "POST",
//   //     body: JSON.stringify(element),
//   // headers: {
//   //   "Content-Type": "application/json",
//   // },
//   //   })
//   //     .then((res) => res.json())
//   //     .then((ans) => console.log("ok"))
//   //     .catch((err) => console.error(err));
//   // });
//   madeProducts.push(massive);
// }

// // let FetchPush = [];

// // const array = [];
// // madeProducts.forEach((Products) => {
// //   fetch(URL, {
// //     method: "POST",
// //     body: JSON.stringify(Products),
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   })
// //     .then((res) => res.json())
// //     .then((ans) => console.log("ok"))
// //     .catch((err) => console.error(err));
// // });

// export default madeProducts;
