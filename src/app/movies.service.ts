import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http:HttpClient ) { }


  getLatestMovies(){
    return this.http.get('https://yts.mx/api/v2/list_movies.json?limit=50');
  }

  getMovieById(id){
    return this.http.get('https://yts.mx/api/v2/movie_details.json?movie_id='+id)
  }

  getMovieByQuery(q){
    return this.http.get('https://yts.mx/api/v2/list_movies.json?query_term='+q)
  }

}
