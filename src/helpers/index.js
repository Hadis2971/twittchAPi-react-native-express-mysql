class Heleprs {
  updateObject (oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
  }
}

export default new Heleprs();
