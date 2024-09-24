import { createBrowserRouter } from 'react-router-dom';
import EditPersonPage from '../pages/EditPersonPage/EditPersonPage';
import FormPage from '../pages/FormPage/FormPage';
import GenerateResultPage from '../pages/GenerateResultPage/GenerateResultPage';
import RegisterEventPage from '../pages/RegisterEventPage/RegisterEventPage';
import RegisterPersonPage from '../pages/RegisterPersonPage/RegisterPersonPage';
import RootPage from '../pages/RootPage/RootPage';

const RootNavigation = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <FormPage /> },
      {
        path: 'persons',
        children: [
          { path: 'register', element: <RegisterPersonPage /> },
          { path: ':id/edit', element: <EditPersonPage /> },
        ]
      },
      {
        path: 'events',
        children: [
          { path: 'register', element: <RegisterEventPage /> },
        ]
      },
      {
        path: 'generate',
        element: <GenerateResultPage />
      }
    ]
  },
]);

export default RootNavigation;