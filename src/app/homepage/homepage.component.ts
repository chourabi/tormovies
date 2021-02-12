import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  movies = [];

  isLoading = false;


  search = new FormGroup({
    q: new FormControl('')
  })

  constructor(  private moviesService:MoviesService ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.moviesService.getLatestMovies().subscribe((data:any)=>{
      console.log(data);
      this.movies = data.data.movies;
      
    })
  }


  searchNow(){
    this.isLoading = true;
    this.moviesService.getMovieByQuery(this.search.value.q).subscribe((data:any)=>{
      console.log(data);
      this.movies = data.data.movies;
      this.isLoading = false;
      
    })
  }




}
