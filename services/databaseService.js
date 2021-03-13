
module.exports = {
  getOne: getOne,
  getData: getData,
  createData: createData,
  updateOne: updateOne,
  deleteOne: deleteOne
}

async function getOne(model, condition, projection, options) {
  return model.find(condition);
}
async function getData(model, condition, projection, options) {
  return model.find(condition);
}
async function createData(model, data, options) {
  const obj = new model(data);
  obj.save();
  return obj;
}
async function updateOne(model, condition, dataToSet, options) {
  const obj = model.findOneAndUpdate(condition, dataToSet);
  return obj;
}
async function deleteOne(model, condition, options) {
  const obj = await model.findOneAndRemove(condition);
  return obj;
}