import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/clean',
    pathMatch: 'full'
  },
  {
    path: 'messy',
    loadComponent: () => import('./feature/messy-edi-viewer/messy-edi-viewer')
      .then(m => m.MessyEdiViewer),
    title: 'Messy EDI Viewer'
  },
  {
    path: 'clean',
    loadComponent: () => import('./feature/clean-edi-viewer/clean-edi-viewer')
      .then(m => m.CleanEdiViewer),
    title: 'Clean EDI Viewer'
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
