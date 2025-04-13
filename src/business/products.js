import Wardrobe_1 from "@/assets/photos/Wardrobe1_photo.png";
import Wardrobe_2 from "@/assets/photos/Wardrobe2_photo.png";
import Wardrobe_3 from "@/assets/photos/Wardrobe3_photo.png";
import Wardrobe_4 from "@/assets/photos/Wardrobe4_photo.png";
const URL = "https://67e54df518194932a58579f1.mockapi.io/Products";

const templates = [
  {
    name: "Комфорт 4 дуб сонома белый без ящика",
    classification: "Офисные кресла",
    img: Wardrobe_1,
    code: "Fn-0026",
    oldPrice: 25000,
    currentPrice: 15000,
    discountProduct: 50,
    newProduct: false,
    characteristics: {
      volume: "no",
      material: "no",
      type: "no",
      doors: "no",
      doorsQuantity: "no",
      shelvesQuantity: "no",
      mass: "no",
      addition: "no",
      country: "no",
    },
  },
  {
    name: "Комфорт 3 дуб бунратти с зеркалом",
    classification: "Мебель для персонала",
    img: Wardrobe_2,
    code: "Fn-0026",
    currentPrice: 15000,
    oldPrice: 0,
    discountProduct: 0,
    newProduct: true,
    characteristics: {
      volume: "no",
      material: "no",
      type: "no",
      doors: "no",
      doorsQuantity: "no",
      shelvesQuantity: "no",
      mass: "no",
      addition: "no",
      country: "no",
    },
  },
  {
    name: "Версаль бетон пайн",
    classification: "Мебель для персонала",
    img: Wardrobe_3,
    code: "Fn-0026",
    currentPrice: 15000,
    oldPrice: 0,
    discountProduct: 50,
    newProduct: false,
    characteristics: {
      volume: "no",
      material: "no",
      type: "no",
      doors: "no",
      doorsQuantity: "no",
      shelvesQuantity: "no",
      mass: "no",
      addition: "no",
      country: "no",
    },
  },
  {
    name: "Комфорт 3 дуб сонома серый",
    classification: "Офисные кресла",
    img: Wardrobe_4,
    code: "Fn-0026",
    currentPrice: 15000,
    oldPrice: 25000,
    discountProduct: 50,
    newProduct: false,
    characteristics: {
      volume: "no",
      material: "no",
      type: "no",
      doors: "no",
      doorsQuantity: "no",
      shelvesQuantity: "no",
      mass: "no",
      addition: "no",
      country: "no",
    },
  },
];

let madeProducts = [];
let offset = 0;
let id = 1;
for (let i = 0; i < 25; i++) {
  let massive = [];
  for (let j = 0; j < 15; j++) {
    massive.push({ id: id, ...templates[(j + offset) % 4] });
    id++;
  }
  offset++;
  // massive.forEach((element) => {
  //   fetch(URL, {
  //     method: "POST",
  //     body: JSON.stringify(element),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((ans) => console.log("ok"))
  //     .catch((err) => console.error(err));
  // });
  madeProducts.push(massive);
}

export default madeProducts;
