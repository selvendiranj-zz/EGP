import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectComponent } from './project.component';

@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: ProjectComponent }]),
    ],
    exports: [
        ProjectComponent
    ],
    providers: [

    ]
})

export class ProjectModule
{

}
