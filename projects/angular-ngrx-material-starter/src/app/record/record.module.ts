import { NgModule } from '@angular/core';

//import { ThemeModule } from '../../@theme/theme.module';
import { RecordComponent } from './record.component';
import { AComponent } from './acomp/acomp.component';
import { BComponent } from './bcomp/bcomp.component';

@NgModule({
  imports: [
    //ThemeModule,
  ],
  entryComponents: [AComponent, BComponent],
  declarations: [RecordComponent, AComponent, BComponent]
})
export class RecordModule {}
