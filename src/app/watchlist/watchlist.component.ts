import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  moviesIds = [];

  movies = [];

  constructor( private moviesService:MoviesService ) { }

  ngOnInit(): void {
    this.moviesIds = localStorage.getItem('list').split(",");


    this.moviesIds.map((id)=>{
      this.moviesService.getMovieById(id).subscribe((movie:any)=>{
        this.movies.push(movie.data.movie);
      })
    })





  }

}
