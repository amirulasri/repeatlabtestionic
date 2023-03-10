import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'influcauses',
    loadChildren: () => import('./influcauses/influcauses.module').then( m => m.InflucausesPageModule)
  },
  {
    path: 'diagnosis',
    loadChildren: () => import('./diagnosis/diagnosis.module').then( m => m.DiagnosisPageModule)
  },
  {
    path: 'treatment',
    loadChildren: () => import('./treatment/treatment.module').then( m => m.TreatmentPageModule)
  },  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
