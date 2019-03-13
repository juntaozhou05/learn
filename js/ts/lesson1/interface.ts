function printLable(labledObj: { lable: string }) {
  console.log(labledObj.lable);
}

let myObj = {
  size: 10,
  lable: "Size 10 Object"
};

printLable(myObj);
