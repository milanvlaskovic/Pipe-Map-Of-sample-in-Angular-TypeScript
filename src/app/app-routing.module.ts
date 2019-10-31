import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPipeComponent } from './components/demo-pipe/demo-pipe.component';
import { ConcatMapDemoComponent } from './components/concat-map-demo/concat-map-demo.component';
import { OffDemoComponent } from './components/off-demo/off-demo.component';

const routes: Routes = [
  { path: 'pipe', component: DemoPipeComponent },
  { path: 'concat-map', component: ConcatMapDemoComponent },
  { path: 'of-demo', component: OffDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
