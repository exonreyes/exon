import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkeletonComponent} from "@layout/skeleton/skeleton.component";
import {root_url} from "@data/constants/modules/apps-description";

const routes: Routes = [
  {
    path: '',
    redirectTo: root_url,
    pathMatch: 'full'
  },{
    path: root_url,
    component: SkeletonComponent
  },
  {
    path: '**',
    redirectTo: root_url,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
