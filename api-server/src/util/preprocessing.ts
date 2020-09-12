export const preprocess = async (foods: any, target: string) => {
  let food = [];
  let count = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i].DESC_KOR === target) {
      let calorie = foods[i]["NUTR_CONT1"];
      let sugar = foods[i]["NUTR_CONT5"];
      let natrium = foods[i]["NUTR_CONT6"];
      let carbohydrate = foods[i]["NUTR_CONT2"];

      if (foods[i]["NUTR_CONT1"] == "") {
        calorie = "0";
      }
      if (foods[i]["NUTR_CONT5"] == "") {
        sugar = "0";
      }
      if (foods[i]["NUTR_CONT6"] == "") {
        natrium = "0";
      }
      if (foods[i]["NUTR_CONT2"] == "") {
        carbohydrate = "0";
      }

      let data = {
        name: foods[i].DESC_KOR,
        calorie: calorie,
        sugar: sugar,
        natrium: natrium,
        carbohydrate: carbohydrate,
      };

      food = [];
      food.push(data);
      break;
    } else {
      if (count < 10) {
        food.push(foods[i].DESC_KOR);
        count++;
      }
    }
  }

  if (food.length == 1) {
    return food[0];
  } else {
    return food;
  }
};
