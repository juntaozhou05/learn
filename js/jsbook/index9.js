/*命令模式*/
// var bindClick = function(button, fun) {
//   button.onclick = fun;
// };
// var Menubar = {
//   refresh: function() {
//     console.log("刷新");
//   }
// };
// var SubMenu = {
//   add: function() {
//     console.log("添加");
//   },
//   del: function() {
//     console.log("删除");
//   }
// };
// bindClick(button1, Menubar.refresh);
/*宏命令*/
// var closesDoor = {
//   execute: function() {
//     console.log("关门");
//   }
// };
// var openPc = {
//   execute: function() {
//     console.log("开电脑");
//   }
// };
// var MacroCommand = function() {
//   return {
//     commandsList: [],
//     add: function(command) {
//       this.commandsList.push(command);
//     },
//     execute: function() {
//       for (var i = 0, command; (command = this.commandsList[i++]); ) {
//         command.execute();
//       }
//     }
//   };
// };
// var macroCommand = MacroCommand();
// macroCommand.add(closesDoor);
// macroCommand.add(openPc);
// macroCommand.execute();
