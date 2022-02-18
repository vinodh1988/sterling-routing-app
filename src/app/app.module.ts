import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactboxComponent } from './pages/contact/contactbox/contactbox.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './pages/home/services/services.component';
import { DetailsComponent } from './pages/home/services/details/details.component';
import { FormComponent } from './pages/home/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackComponent } from './pages/about/feedback/feedback.component';
import { FeedbackBoxComponent } from './pages/about/feedback-box/feedback-box.component';
import { FeedfilterPipe } from './pipes/feedfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactboxComponent,
    ServicesComponent,
    DetailsComponent,
    FormComponent,
    FeedbackComponent,
    FeedbackBoxComponent,
    FeedfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
