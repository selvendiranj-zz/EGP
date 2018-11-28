import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { EGPCommonModule } from './common/common.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MDBBootstrapModule.forRoot(),
        BrowserModule,
        FormsModule,
        EGPCommonModule,
        AppRoutingModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
