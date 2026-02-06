import { Component } from "@angular/core";
import { Auth } from "../../../core/services/auth";

@Component({
    selector: "appLogin",
    templateUrl: "./login.html",
    styleUrls: ["./login.css"]
})

export class LoginComponent {
    isLoggingIn: boolean = false;
    loginData = {
        username: '',
        password: '',
    };

    constructor(private auth: Auth) {}

    onSubmit(){
        console.log('Logging in...', this.loginData);

        this.auth.login(this.loginData).subscribe({
            next: (response) => {
                console.log('Login successful!', response);// TODO: store token
            },
             error: (err) => {
                console.log('Login Failed', err); // TODO: show error message
             }
        })
    }

    // wrap the existing login logic
    async handleLogin(){
        this.isLoggingIn = true;

        try {
            // login login
        } catch (error){
            console.error(error);
            this.isLoggingIn = false; // stop spinning
            
        }
    }
}