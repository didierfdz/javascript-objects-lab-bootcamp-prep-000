var recipes = {};

function updateObjectWithKeyAndValue() {
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, recipes);
  newObj[key] = value;
  return newObj;
}