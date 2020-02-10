import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { QrComponent } from './qr/qr.component';
import { TessComponent } from './tess/tess.component';
import { QRCodeModule } from './angularx-qrcode/angularx-qrcode.module';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    QrComponent,
    TessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
