import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { MotherboardAddComponent } from "./motherboard-add/motherboard-add.component";
import { InfoComponent } from './info/info.component';
import { MainProcessorComponent } from './main-processor/main-processor.component';
import { ProcessorAddComponent } from './processor-add/processor-add.component';
import { MainCardComponent } from './main-card/main-card.component';
import { CardAddComponent } from './card-add/card-add.component';


const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'motherboard', component: MainComponent},
  {path: 'addmotherboard', component: MotherboardAddComponent},
  {path: 'edit/:id', component: MotherboardAddComponent},
  {path: 'processor', component: MainProcessorComponent},
  {path: 'addprocessor', component: ProcessorAddComponent},
  {path: 'editprocessor/:id', component: ProcessorAddComponent},
  {path: 'card', component: MainCardComponent},
  {path: 'addcard', component: CardAddComponent},
  {path: 'editcard/:id', component: CardAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
