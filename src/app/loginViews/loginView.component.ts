import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login-view',
  templateUrl: './loginView.component.html',
  styleUrls: ['./loginView.component.css']
})
export class LoginComponent {
  @Output() public success: EventEmitter<any> = new EventEmitter();
  public loginObj = {
    "admin": "newportadmin!",
    "user": "newport",
    "user1": "newport"
  };
  public errMsg: string = ""
  public urnm: string = "";
  public pswrd: string = "";

  public onSubmit() {
    if (this.urnm == "user" && this.loginObj[this.urnm] == this.pswrd) {
      this.success.emit('user');
    }
    else if (this.urnm == "user1" && this.loginObj[this.urnm] == this.pswrd) {
      this.success.emit('user1');
    }
    else {
      this.errMsg = "您输入的用户名或密码有误";
    }
  }
}
