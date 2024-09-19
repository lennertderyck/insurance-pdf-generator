import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import RootNavigation from './components/navigation/RootNavigation';

interface Props {};

const App: FC<Props> = () => {  
  return (<RouterProvider router={RootNavigation} />)
}

export default App;