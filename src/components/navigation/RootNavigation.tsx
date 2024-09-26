import { createBrowserRouter } from 'react-router-dom';
import EditPersonPage from '../pages/EditPersonPage/EditPersonPage';
import FormPage from '../pages/FormPage/FormPage';
import GenerateResultPage from '../pages/GenerateResultPage/GenerateResultPage';
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
      { path: 'general', element: <>General</> }, // nav template
      { path: 'onboarding', element: <>Onboarding</> }, // template around modal
      { path: 'intro', element: <>Intro</> }, // template around modal
    ]
  },
]);

export default RootNavigation;