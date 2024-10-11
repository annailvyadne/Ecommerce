import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutsComponent } from './checkouts/checkouts.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './products/products.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutsComponent,
    HomeComponent,
    ContactsComponent,
    ProductDetailsComponent,
    ProductComponent,
    UserProfilesComponent,
    AboutComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
