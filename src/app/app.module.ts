import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreatepostitComponent } from './createpostit/createpostit.component';
import { KeyvalueService } from './keyvalue.service';
import { LoadkeyComponent } from './loadkey/loadkey.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, CreatepostitComponent, LoadkeyComponent],
  bootstrap:    [ AppComponent ],
  providers: [KeyvalueService]
})
export class AppModule { }
