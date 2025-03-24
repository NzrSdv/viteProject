import Wardrobe_1 from "@/assets/Wardrobe1_photo.png";
import Wardrobe_2 from "@/assets/Wardrobe2_photo.png";
import Wardrobe_3 from "@/assets/Wardrobe3_photo.png";
import Wardrobe_4 from "@/assets/Wardrobe4_photo.png";

const templates = [
  {
    name: "Комфорт 4 дуб сонома белый без ящика",
    classification: "Офисные кресла",
    img: Wardrobe_1,
    price: {
      oldPrice: {
        value: "25 000",
      },
      currentPrice: {
        value: "15 000",
      },
    },
    emphasis: {
      type: "discount",
      value: "-50%",
    },
  },
  {
    name: "Комфорт 3 дуб бунратти с зеркалом",
    classification: "Мебель для персонала",
    img: Wardrobe_2,
    price: {
      currentPrice: {
        value: "15 000",
      },
    },
    emphasis: {
      type: "new",
    },
  },
  {
    name: "Версаль бетон пайн",
    classification: "Мебель для персонала",
    img: Wardrobe_3,
    price: {
      currentPrice: {
        value: "15 000",
      },
    },
  },
  {
    name: "Комфорт 3 дуб сонома серый",
    classification: "Офисные кресла",
    img: Wardrobe_4,
    price: {
      oldPrice: {
        value: "25 000",
      },
      currentPrice: {
        value: "15 000",
      },
    },
    emphasis: {
      type: "discount",
      value: "-50%",
    },
  },
];

let madeProducts = [];
for (let i = 1; i < 25; i++) {
  let massive = [];
  for (let j = 0; j < 15; j++) {
    massive.push(templates[j % 4]);
  }
  madeProducts.push(massive);
}

export default madeProducts;
