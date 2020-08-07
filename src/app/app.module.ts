import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { AutoComponent } from './components/auto/auto.component';
import { AutosComponent } from './components/autos/autos.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    AutoComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
