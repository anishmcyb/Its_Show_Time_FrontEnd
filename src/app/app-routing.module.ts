import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import path from 'path';
import { MainComponent } from './homepage/main/main.component';


const routes: Routes = [
  {
    path:'',
    component:MainComponent
  }
];
>>>>>>> b500877e5d333b70d9bd91096a476e13b58f81df

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
