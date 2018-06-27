/*享元模式*/
// class Model {
//   constructor(sex, underwear) {
//     this.sex = sex;
//   }
//   takePhoto() {
//     console.log(`sex=${this.sex}underwear=${this.underwear}`);
//   }
// }
// const maleModel = new Model("male");
// const femaleModel = new Model("female");

// for (let i = 1; i <= 50; i++) {
//   maleModel.underwear = `underwear${i}`;
//   maleModel.takePhoto();
// }
// for (let i = 1; i <= 50; i++) {
//   femaleModel.underwear = `underwear${i}`;
//   femaleModel.takePhoto();
// }
