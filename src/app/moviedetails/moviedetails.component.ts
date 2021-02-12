import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  id;
  movie:any = {};
  isLoading : boolean = true;
  
  constructor(private route:ActivatedRoute, private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getMovie();
  }

  getMovie(){
    this.moviesService.getMovieById(this.id).subscribe((movie:any)=>{
      console.log(movie);

      this.movie = movie.data.movie;
      this.isLoading = false;
      
    })
  }

  addToWatchList(){
    if (localStorage.getItem('list') != null) {
      var list = localStorage.getItem('list').split(',') ;
      var listString = localStorage.getItem('list') ;
      

      console.log(list.indexOf(this.id));
      
      if (list.indexOf(this.id) ==-1 ) {
        listString+=','+this.id
        localStorage.setItem('list',listString);
      }else{
        alert("sorry film is already in your watch list")
      }

      




    } else {
      
      // 12,16,79,48,56

      var listToAdd:any  = this.id;

      localStorage.setItem('list',listToAdd);

    }

  }

}
