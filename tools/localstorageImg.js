localImg = function(elem) {
  //在本地存储中保存图片
  var storageFiles = JSON.parse(localStorage.getItem(elem)) || {},
    elephant = document.getElementById(elem),
    storageFilesDate = storageFiles.date,
    date = new Date(),
    todaysDate = (date.getMonth() + 1).toString() + date.getDate().toString();
  // 检查数据，如果不存在或者数据过期，则创建一个本地存储
  if (
    typeof storageFilesDate === "undefined" ||
    storageFilesDate < todaysDate
  ) {
    // 图片加载完成后执行
    elephant.addEventListener(
      "load",
      function() {
        var imgCanvas = document.createElement("canvas"),
          imgContext = imgCanvas.getContext("2d");
        // 确保canvas尺寸和图片一致
        imgCanvas.width = elephant.width;
        imgCanvas.height = elephant.height;
        // 在canvas中绘制图片
        imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);
        // 将图片保存为Data URI
        storageFiles.elephant = imgCanvas.toDataURL("image/png");
        storageFiles.date = todaysDate;
        // 将JSON保存到本地存储中
        try {
          localStorage.setItem(elem, JSON.stringify(storageFiles));
        } catch (e) {
          console.log("Storage failed: " + e);
        }
      },
      false
    );
    // 设置图片
    elephant.setAttribute("src", "../static/imgs/test.jpg");
  } else {
    // Use image from localStorage
    elephant.setAttribute("src", storageFiles.elephant);
  }
};
