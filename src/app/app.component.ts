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
    class: 'silly'
  }, {
    borderColor: '#19B5FE',
    text: '言',
    class: 'wordy'
  }, {
    borderColor: '#DADFE1',
    text: '黑',
    class: 'black'
  }, {
    borderColor: '#ffff00',
    text: '城',
    class: 'complex'
  }];
}
