/*状态模式*/
// class Light {
//   constructor() {
//     this.state = "off";
//     this.button = null;
//   }
//   init() {
//     const button = document.createElement("button");
//     button.innerHTML = "开关";
//     this.button = document.body.appendChild(button);
//     this.button.onclick = () => {
//       this.buttonWasPressed();
//     };
//   }
//   buttonWasPressed() {
//     if (this.state === "off") {
//       console.log("开灯");
//       this.state = "on";
//     } else if (this.state === "on") {
//       console.log("关灯");
//       this.state = "off";
//     }
//   }
// }

// const light = new Light();
// light.init();

class OffLightState {
  constructor(light) {
    this.light = light;
  }
  buttonWasPressed() {
    console.log("弱光");
    this.light.setState(this.light.weaLightState);
  }
}

class WeakLightState {
  constructor(light) {
    this.light = light;
  }
  buttonWasPressed() {
    console.log("强光");
    this.light.setState(this.light.strongLightState);
  }
}

class StrongLightState {
  constructor(light) {
    this.light = light;
  }
  buttonWasPressed() {
    console.log("关灯");
    this.light.setState(this.light.offLightState);
  }
}

class Light {
  constructor() {
    this.offLightState = new OffLightState(this);
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.button = null;
  }
  setState(newState) {
    this.currState = newState;
  }
}
