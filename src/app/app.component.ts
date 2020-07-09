import { Component } from '@angular/core';

interface Movie {
  name: string;
  description: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies: Movie[];
  favoriteMovies: Movie[];

  constructor() {
    this.movies = [
      {
        name: 'Airplane!',
        description: 'There\'s no reason to become alarmed, and we hope you\'ll enjoy the rest of your flight. By the way, is there anyone on board who knows how to fly a plane?'
      },
      {
        name: 'Pan\'s Labyrinth',
        description: 'Her father, the King, always knew that the Princess\' soul would return, perhaps in another body, in another place, at another time. And he would wait for her, until he drew his last breath, until the world stopped turning...'
      },
      {
        name: 'Up',
        description: 'Adventure is out there!'
      },
    ];
    this.favoriteMovies = [
      {
        name: 'The Seven Samurai',
        description: 'What\'s the use of worrying about your beard when your head\'s about to be taken?'
      },
      {
        name: 'Memento',
        description: 'Memory can change the shape of a room; it can change the color of a car. And memories can be distorted. They\'re just an interpretation, they\'re not a record, and they\'re irrelevant if you have the facts.'
      },
      {
        name: 'Inception',
        description: 'You\'re waiting for a train. A train that\'ll take you far away. You know where you hope this train will take you. But you can\'t know for sure.'
      }
    ];
  }

  onClick(movie: Movie): void {
    console.log(movie);
  }
}
