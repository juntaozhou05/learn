/*组合模式*/
// class Folder {
//   constructor(name) {
//     this.name = name;
//     this.files = [];
//   }
//   add(file) {
//     this.files.push(file);
//   }
//   scan() {
//     console.log(`扫描文件夹：${this.name}`);
//     for (let i = 0, file, files = this.files; (file = files[i++]); ) {
//       file.scan();
//     }
//   }
// }
// class File {
//   constructor(name) {
//     this.name = name;
//   }
//   add() {
//     console.log("error");
//   }
//   scan() {
//     console.log(`扫描文件：${this.name}`);
//   }
// }

// const folder = new Folder("all");
// const folder1 = new Folder("css");
// const folder2 = new Folder("html");

// const file1 = new File("js book");
// const file2 = new File("css book");
// const file3 = new File("html book");

// folder1.add(file1);
// folder2.add(file2);

// folder.add(folder1);
// folder.add(folder2);
// folder.add(file3);

// const folder3 = new Folder("node");
// const file4 = new File("node book");
// folder3.add(file4);

// const file5 = new File("js2 book");

// folder.add(folder3);
// folder.add(file5);

// folder.scan();
