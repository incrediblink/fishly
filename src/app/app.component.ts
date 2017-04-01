import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parts = [{
    borderColor: '#CF000F',
    text: '痴',
    class: 'silly',
    background: '/assets/silly.jpg',
    opacity: 0
  }, {
    borderColor: '#19B5FE',
    text: '言',
    class: 'wordy',
    background: '/assets/wordy.jpg',
    opacity: 0
  }, {
    borderColor: '#DADFE1',
    text: '黑',
    class: 'black',
    background: '/assets/black.jpg',
    opacity: 0
  }, {
    borderColor: '#ffff00',
    text: '城',
    class: 'complex',
    background: '/assets/complex.jpg',
    opacity: 0
  }];

  showBackground(part) {
    part.opacity = .5;
  }

  hideBackground(part) {
    part.opacity = 0;
  }
}
