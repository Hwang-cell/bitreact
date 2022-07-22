/**
 *  ES6 클래스(class)
 * 
 */

class Rectangle{
  //생성자
  constructor(height, width){
    this.height = height;
    this.width = width;
  }

  //getter
  get area(){
    return this.calcArea();
  }

  //method
  calcArea(){
    return this.height = this.width;
  }
}

const p = new Rectangle(3, 7);
const square = new Rectangle(10, 10);
square.area();