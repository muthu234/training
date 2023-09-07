// Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are the total cost of all the objects with that category.
function calculateTotalCostByCategory(objects) {
    return objects.reduce((result, currentObject) => {
      const { category, cost } = currentObject;
      if (result[category]) {
           result[category] += cost;
      } else {
            result[category] = cost;
      }
      
      return result;
    }, {});
  }
   const objectsArray = [
    { category: "Food", cost: 50 },
    { category: "Clothing", cost: 500 },
    { category: "Food", cost: 100 },
    { category: "Electronics", cost: 500 }
  ];
  
  const result = calculateTotalCostByCategory(objectsArray);
  console.log(result);
  