import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-toolbox',
  templateUrl: './component-toolbox.component.html',
  styleUrls: ['./component-toolbox.component.scss']
})
export class ComponentToolboxComponent implements OnInit {
  @Output() createBulbEmitter = new EventEmitter();
  @Output() createCellEmitter = new EventEmitter();
  @Output() createResistorEmitter = new EventEmitter();
  @Output() createWireHEmitter = new EventEmitter();
  @Output() createWireVEmitter = new EventEmitter();
  @Output() createWireLDEmitter = new EventEmitter();
  @Output() createWireLUEmitter = new EventEmitter();
  @Output() createWireRDEmitter = new EventEmitter();
  @Output() createWireRUEmitter = new EventEmitter();
  @Output() removeBulbEmitter = new EventEmitter();
  @Input() current: number;
  @Input() resistance: number;
  @Input() voltage: number;
  @Input() connected: boolean;

  createBulb() {
    this.createBulbEmitter.emit();
  }

  createCell() {
    this.createCellEmitter.emit();
  }

  createResistor() {
    this.createResistorEmitter.emit();
  }

  createWireH() {
    this.createWireHEmitter.emit();
  }

  createWireV() {
    this.createWireVEmitter.emit();
  }

  createWireLD() {
    this.createWireLDEmitter.emit();
  }

  createWireLU() {
    this.createWireLUEmitter.emit();
  }

  createWireRD() {
    this.createWireRDEmitter.emit();
  }

  createWireRU() {
    this.createWireRUEmitter.emit();
  }

  removeBulb() {
    this.removeBulbEmitter.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
