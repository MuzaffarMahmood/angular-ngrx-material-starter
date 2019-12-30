import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { AComponent } from './acomp/acomp.component';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-record',
  templateUrl: './record.component.html'
})
export class RecordComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: false })
  vc: ViewContainerRef;

  constructor(private r: ComponentFactoryResolver) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {
    const factory = this.r.resolveComponentFactory(AComponent);
    const componentRef = this.vc.createComponent(factory);
    console.log(componentRef);
  }
}
