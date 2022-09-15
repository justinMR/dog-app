import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'dog-app';
  randomDogUrl = 'https://dog.ceo/api/breeds/image/random';
  randomDogsUrl = 'https://dog.ceo/api/breeds/image/random/10'
  
  randomDogUrlImg:any;
  randomDogs:any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.getRandomDogImage().subscribe(response=>{
      this.randomDogUrlImg = response;
    });

    this.getRandomDogs().subscribe(response=>{
      this.randomDogs = response
    })

    console.log(this.randomDogs)
  }

  getRandomDogImage() {
    return this.httpClient.get(this.randomDogUrl);
  }

  getRandomDogs() {
    return this.httpClient.get(this.randomDogsUrl)
  }
}
