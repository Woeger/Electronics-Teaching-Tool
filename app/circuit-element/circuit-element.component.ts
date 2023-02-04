import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circuit-element',
  templateUrl: './circuit-element.component.html',
  styleUrls: ['./circuit-element.component.scss']
})

export class CircuitElementComponent implements OnInit {
  @Output() positionEmitter = new EventEmitter();
  @Input() currentComponent: number;
  @Input() componentNumber: number;
  @Input() componentType: string;
  @Input() current: number;
  @Input() leftConnectivity: number;
  @Input() rightConnectivity: number;
  @Input() upConnectivity: number;
  @Input() downConnectivity: number;
  @Input() currentCoordinates: number[];

  thisComponent: number | undefined;

  coordinates: Array<number | undefined> = [];

  constructor() { }

  ngOnInit(): void {
    this.thisComponent = this.currentComponent;
  }

  drop(event: { source: { getRootElement: () => any; }; }) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);
    this.coordinates[0] = (boundingClientRect.x - parentPosition.left);
    this.coordinates[1] = (boundingClientRect.y - parentPosition.top);
    this.coordinates[2] = this.thisComponent;
    this.positionEmitter.emit(this.coordinates);

  }

  getPosition(el: { offsetLeft: number; offsetTop: number; scrollLeft: number; scrollTop: number; offsetParent: any; }) {
  let x = 0;
  let y = 0;
  while(el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: y, left: x };
}

}
