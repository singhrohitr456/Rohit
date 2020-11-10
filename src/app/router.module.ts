
import { NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { RegistrationComponent } from "./app/registration/registration.component";



const routes : Routes = [
    {path: '', component : RegistrationComponent },
    {path: 'registration', component : RegistrationComponent },
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {

}