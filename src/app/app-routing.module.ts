import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { WatchlistComponent } from './watchlist/watchlist.component';


const routes: Routes = [
  { path:'', component:HomepageComponent },
  { path:'home', component:HomepageComponent },
  { path:'movie/:id' , component:MoviedetailsComponent },
  { path:'watchlist' , component:WatchlistComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
