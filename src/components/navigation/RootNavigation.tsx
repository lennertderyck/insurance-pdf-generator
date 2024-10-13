import { createBrowserRouter } from 'react-router-dom';
import EditPersonPage from '../pages/EditPersonPage/EditPersonPage';
import EventsOverviewPage from '../pages/EventsOverviewPage/EventsOverviewPage';
import ExportPage from '../pages/ExportPage/ExportPage';
import FormPage from '../pages/FormPage/FormPage';
import GenerateResultPage from '../pages/GenerateResultPage/GenerateResultPage';
import ImportPage from '../pages/ImportPage/ImportPage';
import NerdsOverviewPage from '../pages/NerdsOverviewPage/NerdsOverviewPage';
import OnboardingAddPersonPage from '../pages/OnboardingAddPersonPage/OnboardingAddPersonPage';
import OnboardingInfoPage from '../pages/OnboardingInfoPage/OnboardingInfoPage';
import OnboardingIntroPage from '../pages/OnboardingIntroPage/OnboardingIntroPage';
import OnboardingReadyPage from '../pages/OnboardingReadyPage/OnboardingReadyPage';
import OnboardingRegisterEventPage from '../pages/OnboardingRegisterEventPage/OnboardingRegisterEventPage';
import OnboardingSelectBrokerPage from '../pages/OnboardingSelectBrokerPage/OnboardingSelectBrokerPage';
import OnboardingWrapperPage from '../pages/OnboardingWrapperPage/OnboardingWrapperPage';
import PersonsOverviewPage from '../pages/PersonsOverviewPage/PersonsOverviewPage';
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
          { index: true, element: <PersonsOverviewPage /> },
          { path: 'register', element: <RegisterPersonPage /> },
          { path: ':id/edit', element: <EditPersonPage /> },
        ]
      },
      {
        path: 'events',
        children: [
          { index: true, element: <EventsOverviewPage /> },
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
  { 
    path: 'onboarding', element: <OnboardingWrapperPage /> ,
    children: [
      { index: true, element: <OnboardingIntroPage /> },
      { path: 'step/info', element: <OnboardingInfoPage /> },
      { path: 'step/broker', element: <OnboardingSelectBrokerPage /> },
      { path: 'step/persons', element: <OnboardingAddPersonPage /> },
      { path: 'step/events', element: <OnboardingRegisterEventPage /> },
      { path: 'step/ready', element: <OnboardingReadyPage /> },
    ]
  }, // template around modal
  { path: 'intro', element: <>Intro</> }, // template around modal
  { path: 'export', element: <ExportPage />},
  { path: 'import', element: <ImportPage />},
]);

export default RootNavigation;