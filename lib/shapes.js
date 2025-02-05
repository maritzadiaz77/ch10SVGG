// class shape is a constructor
class Shape {
  constructor() {
    this.color = "";
  }
  // Shape class takes in setColor function
  setColor(colorVar) {
    this.color = colorVar;
  }
}
// Triangle class inherits properties from class shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    // Return polygon with color input^
  }
}

// Circle class inherits properties from class shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

//Class square inherits properties from Class shape
class Square extends Shape {
  render() {
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}
// exports classes(triangle circle square)
module.exports = { Triangle, Circle, Square };
