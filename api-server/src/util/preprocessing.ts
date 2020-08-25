export const preprocess = async (foods: any, target: string) => {
  let food = [];
  let count = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i].DESC_KOR === target) {
      let data = {
        name: foods[i].DESC_KOR,
        calorie: foods[i]["NUTR_CONT1"],
        sugar: foods[i]["NUTR_CONT5"],
        natrium: foods[i]["NUTR_CONT6"],
        carbohydrate: foods[i]["NUTR_CONT2"],
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
