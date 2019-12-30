import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { BComponent } from '../bcomp/bcomp.component';
@Component({
  selector: 'a-comp',
  template: `
    <span>I am A component</span>
    <div #vc></div>
  `
})
export class AComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: false })
  vc: ViewContainerRef;

  constructor(private r: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.r.resolveComponentFactory(BComponent);
    const componentRef = this.vc.createComponent(factory);
    console.log(componentRef);
  }
}
