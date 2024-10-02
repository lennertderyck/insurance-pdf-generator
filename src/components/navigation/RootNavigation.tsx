import { createBrowserRouter } from 'react-router-dom';
import EditPersonPage from '../pages/EditPersonPage/EditPersonPage';
import ExportPage from '../pages/ExportPage/ExportPage';
import FormPage from '../pages/FormPage/FormPage';
import GenerateResultPage from '../pages/GenerateResultPage/GenerateResultPage';
import ImportPage from '../pages/ImportPage/ImportPage';
import NerdsOverviewPage from '../pages/NerdsOverviewPage/NerdsOverviewPage';
import RegisterEventPage from '../pages/RegisterEventPage/RegisterEventPage';
import RegisterPeristentFormPage from '../pages/RegisterPeristentFormPage/RegisterPeristentFormPage';
import RegisterPersonPage from '../pages/RegisterPersonPage/RegisterPersonPage';
import RootPage from '../pages/RootPage/RootPage';

const RootNavigation = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      { index: true, element: <FormPage /> },
      { path: ':groupId', element: <FormPage /> },
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
        path: 'forms',
        children: [
          { path: 'generated/create', element: <RegisterPeristentFormPage /> },
        ]
      },
      {
        path: 'generate',
        element: <GenerateResultPage />
      },
      {
        path: 'nerds', element: <NerdsOverviewPage />
      }
    ]
  },
  { path: 'general', element: <>General</> }, // nav template
  { path: 'onboarding', element: <>Onboarding</> }, // template around modal
  { path: 'intro', element: <>Intro</> }, // template around modal
  { path: 'export', element: <ExportPage />},
  { path: 'import', element: <ImportPage />},
]);

export default RootNavigation;