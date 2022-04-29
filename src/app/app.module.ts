import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from "@layout/sidebar/sidebar.component";
import {SkeletonComponent} from "@layout/skeleton/skeleton.component";
import {TopbarComponent} from './layout/topbar/topbar.component';
import {LocationStrategy, PathLocationStrategy} from "@angular/common";
import {SharedModule} from "@shared/shared.module";
import {CoreModule} from "@core/core/core.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FooterComponent } from './layout/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SkeletonComponent,
    TopbarComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        FontAwesomeModule,
        NgbModule
    ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
