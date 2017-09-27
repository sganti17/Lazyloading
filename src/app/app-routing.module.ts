import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';



@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: AppComponent},
            {path: 'tasks', loadChildren: 'app/tasks/tasks.module#TasksModule'},
            {path: 'users', loadChildren: 'app/users/users.module#UsersModule'}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
