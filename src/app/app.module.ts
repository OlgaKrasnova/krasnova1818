import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MotherboardAddComponent } from './motherboard-add/motherboard-add.component';
import { MotherboardViewComponent } from './motherboard-view/motherboard-view.component';
import { HttpClientModule } from "@angular/common/http";

import { FilterVendorCodePipe } from './shared/pipes/vendor-code-filter.pipe';
import { InfoComponent } from './info/info.component';
import { NameFilterPipe } from './shared/pipes/name-filter.pipe';
import { SortedIdPipe } from './shared/pipes/sorted-id.pipe';
import { MainProcessorComponent } from './main-processor/main-processor.component';
import { SortedPricePipe } from './shared/pipes/sorted-price.pipe';
import { ProcessorViewComponent } from './processor-view/processor-view.component';
import { ProcessorAddComponent } from './processor-add/processor-add.component';
import { MainCardComponent } from './main-card/main-card.component';
import { CardAddComponent } from './card-add/card-add.component';
import { CardViewComponent } from './card-view/card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MotherboardAddComponent,
    MotherboardViewComponent,
    FilterVendorCodePipe,
    InfoComponent,
    NameFilterPipe,
    SortedIdPipe,
    MainProcessorComponent,
    SortedPricePipe,
    ProcessorViewComponent,
    ProcessorAddComponent,
    MainCardComponent,
    CardAddComponent,
    CardViewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
