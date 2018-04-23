import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public stateVar = "login";


  public onLoginSuccess() {
    this.stateVar = "survey";
  }
}
