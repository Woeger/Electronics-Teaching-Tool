import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-circuit-builder',
  templateUrl: './circuit-builder.component.html',
  styleUrls: ['./circuit-builder.component.scss']
})

export class CircuitBuilderComponent implements OnInit {

  @Output() elementOutput = new EventEmitter();
  @Output() connectedOutput = new EventEmitter();
  @Output() resistanceOutput = new EventEmitter();

  elements: Array<string> = [];
  xCoordinates: Array<number> = [];
  yCoordinates: Array<number> = [];
  leftConnectivity: Array<number> = [];
  rightConnectivity: Array<number> = [];
  upConnectivity: Array<number> = [];
  downConnectivity: Array<number> = [];
  voltageArray: Array<number> = [];
  resistanceArray: Array<number> = [];
  current = 0;
  resistance = 0;
  voltage = 0;
  connected = false;
  rightSlot = ["bulb", "bulbLit", "cell", "resistor", "wireH", "wireRD", "wireRU"];
  leftSlot = ["bulb", "bulbLit", "cell", "resistor", "wireH", "wireLD", "wireLU"];
  upSlot = ["wireV", "wireLU", "wireRU"];
  downSlot = ["wireV", "wireLD", "wireRD"];


  createBulb() {
    this.elements.push('bulb');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  createCell() {
    this.elements.push('cell');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(3)
    this.resistanceArray.push(0)
  }

  createResistor() {
    this.elements.push('resistor');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(10)
  }

  createWireH() {
    this.elements.push('wireH');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  createWireV() {
    this.elements.push('wireV');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  createWireLD() {
    this.elements.push('wireLD');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  createWireLU() {
    this.elements.push('wireLU');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  createWireRD() {
    this.elements.push('wireRD');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  createWireRU() {
    this.elements.push('wireRU');
    this.elementOutput.emit(this.elements);
    this.xCoordinates.push(0)
    this.yCoordinates.push(0)
    this.leftConnectivity.push(999)
    this.rightConnectivity.push(999)
    this.upConnectivity.push(999)
    this.downConnectivity.push(999)
    this.voltageArray.push(0)
    this.resistanceArray.push(0)
  }

  removeBulb() {
    this.elements.pop();
    this.elementOutput.emit(this.elements);
    this.xCoordinates.pop();
    this.yCoordinates.pop();
    this.leftConnectivity.pop();
    this.rightConnectivity.pop();
    this.upConnectivity.pop();
    this.downConnectivity.pop();
    this.voltageArray.pop();
    this.resistanceArray.push(0)
  }

  updatePositions(position: any){
    this.xCoordinates[position[2] - 1] = position[0]
    this.yCoordinates[position[2] - 1] = position[1] + (180 * (position[2] - 1))
    console.log("X: " + this.xCoordinates + " Y: " + this.yCoordinates);
    this.updateConnectivity();
    console.log("left connectivity " + this.leftConnectivity);
    console.log("right connectivity " + this.rightConnectivity);
    console.log("up connectivity " + this.upConnectivity);
    console.log("down connectivity " + this.downConnectivity);
  }

  updateConnectivity() {

    this.current = 0;
    this.voltage = 0;
    this.resistance = 0;
    this.connected = true;

    for (let i = 0; i < this.elements.length; i++) {

      this.leftConnectivity[i] = 999;
      this.rightConnectivity[i] = 999;
      this.upConnectivity[i] = 999;
      this.downConnectivity[i] = 999;

      for (let z = 0; z < this.elements.length; z++) {

        if (i != z) {

          if (this.leftSlot.includes(this.elements[i]) && this.rightSlot.includes(this.elements[z]) && this.xCoordinates[i] >= this.xCoordinates[z]
           && this.xCoordinates[z] >= this.xCoordinates[i] - 250 && Math.abs(this.yCoordinates[i] - this.yCoordinates[z]) <= 50) {
            this.leftConnectivity[i] = z;
            console.log(i + ": left connected!")
          }

          if (this.rightSlot.includes(this.elements[i]) && this.leftSlot.includes(this.elements[z]) && this.xCoordinates[i] <= this.xCoordinates[z]
           && this.xCoordinates[z] <= this.xCoordinates[i] + 250 && Math.abs(this.yCoordinates[i] - this.yCoordinates[z]) <= 50) {
            this.rightConnectivity[i] = z;
            console.log(i + ": right connected!")
          }

          if (this.upSlot.includes(this.elements[i]) &&  this.downSlot.includes(this.elements[z]) && this.yCoordinates[i] >= this.yCoordinates[z]
          && this.yCoordinates[z] >= this.yCoordinates[i] - 250 && Math.abs(this.xCoordinates[i] - this.xCoordinates[z]) <= 50) {
            this.upConnectivity[i] = z;
            console.log(i + ": up connected!")
          }

          if (this.downSlot.includes(this.elements[i]) && this.upSlot.includes(this.elements[z]) && this.yCoordinates[i] <= this.yCoordinates[z]
          && this.yCoordinates[z] <= this.yCoordinates[i] + 250 && Math.abs(this.xCoordinates[i] - this.xCoordinates[z]) <= 50) {
            this.downConnectivity[i] = z;
            console.log(i + ": down connected!")
          }

        }

      }

      if ((this.leftSlot.includes(this.elements[i]) && this.leftConnectivity[i] == 999) || (this.rightSlot.includes(this.elements[i]) && this.rightConnectivity[i] == 999) ||
          (this.upSlot.includes(this.elements[i]) && this.upConnectivity[i] == 999) || (this.downSlot.includes(this.elements[i]) && this.downConnectivity[i] == 999)) {
            this.connected = false;
          }

    }

    if (this.connected == true) {
      for (let x = 0; x < this.voltageArray.length; x++) {
        this.resistance = this.resistance + this.resistanceArray[x];
        this.voltage = this.voltage + this.voltageArray[x];
      }
      this.current = this.voltage / this.resistance;
    }

    this.resistanceOutput.emit(this.resistance);
    this.connectedOutput.emit(this.connected);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
