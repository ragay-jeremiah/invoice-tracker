import { createBrowserRouter } from 'react-router';
import { DashboardNew } from './pages/DashboardNew';
import { SheetView } from './pages/SheetView';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DashboardNew,
  },
  {
    path: '/sheet',
    Component: SheetView,
  },
]);