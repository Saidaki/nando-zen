import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustumerbookComponent } from './custumerbook/custumerbook.component';
import { ProfessionalbookComponent } from './professionalbook/professionalbook.component';

const routes: Routes = [
  {
    path: 'custumerbook',
    component: CustumerbookComponent,
  },
  { path: 'professionalbook', component: ProfessionalbookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
