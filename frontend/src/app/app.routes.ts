import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { Register } from './features/auth/register/register';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: Register
    }
];
