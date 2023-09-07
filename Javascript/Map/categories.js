// Write a function that takes an array of objects with a category property and returns an object where the keys are the categories, and the values are arrays of objects with that category.
function Category(objects) {
  const groupedObjects = new Map();

  for (const object of objects) {
    const category = object.category;

    if (!groupedObjects.has(category)) {
      groupedObjects.set(category, []);
    }

    groupedObjects.get(category).push(object);
  }

  return groupedObjects;
}
const objects = [{ category: "reading book" }, { category: "music" }, { category: "music" }, { category: "sports" }];

const groupedObjects = Category(objects);

console.log(groupedObjects);