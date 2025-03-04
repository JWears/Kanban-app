import { NgModule } from "@angular/core";
import { UserSignUpComponent } from "./user-sign-up/user-sign-up.component";
import { UserLoginComponent } from "./user-login/user-login.component";

@NgModule({
  declarations: [UserLoginComponent, UserSignUpComponent],
  exports: [UserLoginComponent, UserSignUpComponent],
  imports: [],
  providers: [],
})
export class UserSignInModule {}
