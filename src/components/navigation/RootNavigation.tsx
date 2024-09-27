import { createBrowserRouter } from 'react-router-dom';
import ExportPage from '../pages/ExportPage/ExportPage';
import FormPage from '../pages/FormPage/FormPage';
import GenerateResultPage from '../pages/GenerateResultPage/GenerateResultPage';
import ImportPage from '../pages/ImportPage/ImportPage';
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
      },
    ]
  },
  { path: 'general', element: <>General</> }, // nav template
  { path: 'onboarding', element: <>Onboarding</> }, // template around modal
  { path: 'intro', element: <>Intro</> }, // template around modal
  { path: 'export', element: <ExportPage />},
  { path: 'import', element: <ImportPage />},
]);

export default RootNavigation;