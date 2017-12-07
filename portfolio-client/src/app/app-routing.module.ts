import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CrazyIdeaComponent} from './pages/crazy-idea/crazy-idea.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: "home", component: HomeComponent, data:{state: 'home'}},
  {path: "work", component: WorkComponent, data:{state: 'work'}},
  {path: "contact", component: ContactComponent, data:{state: 'contact'}},
  {path: "crazy-idea", component: CrazyIdeaComponent, data:{state: 'crazyIdeas'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

