import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() title;
  @Input() id;
  @Input() imgURL;
  @Input() gendre;
  constructor( private sanitization:DomSanitizer) { }

  ngOnInit(): void {
    
    
  }

  byPass(){
    const url:any =  this.sanitization.bypassSecurityTrustResourceUrl(this.imgURL);
    return url;
    
  }
}
