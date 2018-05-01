import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stateVar = "login";


  public onLoginSuccess(msg: string) {
    if (msg == 'user') {
      this.stateVar = 'survey1';
    }
    else if (msg == 'user1') {
      this.stateVar = 'survey2';
    }
  }
}
