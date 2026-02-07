import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Auth } from "../../../core/services/auth";

@Component({
    selector: "appLogin",
    templateUrl: "./login.html",
    styleUrls: ["./login.css"],
    imports: [FormsModule]
})

export class LoginComponent {
    isLoggingIn: boolean = false;
    loginData = {
        username: '',
        password: '',
    };

    constructor(private auth: Auth) { }

    onSubmit() {
        console.log('Logging in...', this.loginData);

        this.auth.login(this.loginData).subscribe({
            next: (response) => {
                console.log('Login successful!', response);
                // Show spinner on successful login
                this.isLoggingIn = true;
                // TODO: store token and navigate
            },
            error: (err) => {
                console.log('Login Failed', err);
                this.isLoggingIn = false;
                // TODO: show error message
            }
        });
    }
}