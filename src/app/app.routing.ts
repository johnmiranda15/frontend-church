import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NowUsComponent } from './components/nowus/nowus.component';
import { CreedComponent } from './components/creed/creed.component';
import { StartComponent } from './components/start/start.component';
import { ErrorComponent } from "./components/error/error.component";
import { VisitUsComponent } from "./components/visitus/visitus.component";
import { SermonsComponent } from "./components/sermons/sermons.component";

const appRoutes: Routes = [
  {path: '', component: StartComponent},
  {path: 'start', component: StartComponent},
  {path: 'nowus',component: NowUsComponent},
  {path: 'creed',component: CreedComponent},
  {path: 'sermons',component: SermonsComponent},
  {path: 'visitus',component: VisitUsComponent},
  {path: '**',component: ErrorComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);