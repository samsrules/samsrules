import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './delete/delete.component';
import { ListingComponent } from './listing/listing.component';
import { CreateComponent } from './create/create.component';
import { RouterComponent } from './router/router.component';
import { Route } from '@angular/compiler/src/core';
import { UpdateComponent } from './update/update.component';
import { UserpanelComponent } from './userpanel/userpanel.component';


const rout:Routes=[
  {path:'',component:RouterComponent},
  {path:'create',component:CreateComponent},
  {path:'listing',component:ListingComponent},
  {path:'delete',component:DeleteComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'userpanel',component:UserpanelComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DeleteComponent,
    ListingComponent,
    CreateComponent,
    RouterComponent,
    UpdateComponent,
    UserpanelComponent,
   

  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(rout)
  ],
  providers: [],
  bootstrap: [RouterComponent]
})
export class AppModule { }
