// class Jspang {
//   public name: string;
//   public age: number;
//   public skill: string;
//   constructor(name: string, age: number, skill: string) {
//     this.name = name;
//     this.age = age;
//     this.skill = skill;
//   }
//   public interest() {
//     console.log("gg");
//   }
// }

// let jspang1: Jspang = new Jspang("技术胖", 18, "web");

// class JsShuai extends Jspang {
//   public xingxing: string = "帅气";
//   public interest() {
//     super.interest();
//     console.log(666);
//   }
//   public zhuangQian() {
//     console.log(111);
//   }
// }
// let js = new JsShuai("1", 1, "2");
// js.interest();

// interface Husband {
//   sex: string;
//   interest: string;
// }
// let myHusband: Husband = { sex: "男", interest: "1" };
// console.log(myHusband);

// interface Husband {
//   sex: string;
//   interest: string;
//   maiBao?: Boolean;
// }

interface SearchMan {
  (source: string, subString: string): boolean;
}
let mySearch: SearchMan;
