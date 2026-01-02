import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/edi-viewer/edi-viewer')
      .then(m => m.EdiViewer),
    title: 'Home'
  },
  {
    path: 'page-not-found',
    loadComponent: () => import('./core/error-handlers/page-not-found/page-not-found')
      .then(m => m.PageNotFound),
    title: 'Page Not Found'
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  }
];
