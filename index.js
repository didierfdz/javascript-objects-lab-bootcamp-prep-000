var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue(object, 'prop2', 2) {
  var newObj = Object.assign({}, recipes);
  newObj[key] = value;
  return newObj;
}