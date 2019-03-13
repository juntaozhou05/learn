interface LableValue {
  lable: string;
}

function printLable(labledObj: { lable: string }) {
  console.log(labledObj.lable);
}
var myObj = {
  size: 10,
  lable: "Size 10 Object"
};
printLable(myObj);
