import { Component } from "@angular/core";

@Component({
    selector: "appLogin",
    templateUrl: "./login.html",
    styleUrls: ["./login.css"]
})

export class LoginComponent {
    isLoggingIn: boolean = false;

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