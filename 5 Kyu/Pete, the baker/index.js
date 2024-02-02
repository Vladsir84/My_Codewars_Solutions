// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe, available) {
    const recipeArr = Object.entries(recipe).sort();
    const availableArr = Object.entries(available)
      .sort()
      .filter((item) => Object.keys(recipe).includes(item[0]));
    if (recipeArr.length > availableArr.length) return 0;
    let quantity = [];
  
    for (let i = 0; i < recipeArr.length; i++) {
      if (recipeArr[i][1] > availableArr[i][1]) {
        return 0;
      }
      quantity.push(availableArr[i][1] / recipeArr[i][1]);
    }
    return Math.floor(Math.min(...quantity));
  }
  
  // console.log(
  //   cakes(
  //     { flour: 500, sugar: 200, eggs: 1 },
  //     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  //   )
  // );
  // console.log(
  //   cakes(
  //     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  //     { sugar: 500, flour: 2000, milk: 2000 }
  //   )
  // );