import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_ROUTES } from './app-routing';
import { ProductFormComponent } from './product-form/product-form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    KoszykComponent,
    ProductListComponent,
    UsersListComponent,
    BasketListComponent,
    ProductFormComponent,
    UsersComponent,
    UsersFormComponent,
    UsersAddComponent,
    ProductAddComponent,
    LogowanieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }  ],
  bootstrap: [AppComponent]
})


export class AppModule { }

export function tokenGetter(): string {
  return localStorage.getItem("jwt");
}
