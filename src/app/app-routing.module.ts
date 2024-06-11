import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: "", component: TodoPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}


