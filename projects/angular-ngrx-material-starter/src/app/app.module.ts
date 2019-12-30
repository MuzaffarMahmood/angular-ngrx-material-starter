import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { RecordModule } from './record/record.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { ListComponent } from './list/list.component';
// import { RecordComponent } from './record/record.component';

@NgModule({
  imports: [
    // angular
    BrowserAnimationsModule,
    BrowserModule,

    // core & shared
    CoreModule,
    SharedModule,

    // app
    RecordModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
