import { createBrowserRouter } from 'react-router-dom';
import FormPage from '../pages/FormPage/FormPage';
import RegisterPersonPage from '../pages/RegisterPersonPage/RegisterPersonPage';

const RootNavigation = createBrowserRouter([
  {
    index: true,
    element: <FormPage />,
  },
  {
    path: 'persons',
    children: [
      { path: 'register', element: <RegisterPersonPage /> },
    ]
  }
]);

export default RootNavigation;