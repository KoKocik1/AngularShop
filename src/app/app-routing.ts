import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { BasketListComponent } from "./basket-list/basket-list.component";
import { LogowanieComponent } from "./logowanie/logowanie.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { UsersAddComponent } from "./users-add/users-add.component";
import { UsersFormComponent } from "./users-form/users-form.component";
import { UsersListComponent } from "./users-list/users-list.component";

export const APP_ROUTES: Routes = [
  { path: 'products/:id', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  { path: 'productsAdd', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'basket', component: BasketListComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UsersFormComponent, canActivate: [AuthGuard] },
  { path: 'usersAdd', component: UsersAddComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LogowanieComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];
