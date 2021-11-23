import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { ReactComponent } from './react/react.component';
import { UserDataService } from './services/user-data.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ReactComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
