import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigationItem from '../../elements/MainNavigationItem/MainNavigationItem';

interface Props {};

const RootPage: FC<Props> = () => {
  return (
    <div className="bg-gray-100 p-4 flex flex-col lg:flex-row min-h-full gap-4">
      <div className="min-w-[200px]">
        <nav>
          <MainNavigationItem icon="file-pdf-2-fill" to="/">Formulieren</MainNavigationItem>
          <MainNavigationItem icon="shining-fill" to="/persons/register">Personen</MainNavigationItem>
          <MainNavigationItem icon="home-smile-2-fill" to="/events/register">Activiteiten</MainNavigationItem>
        </nav>
      </div>
      <div className="flex-1 bg-white p-6 md:p-12 rounded-3xl shadow-lg overflow-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default RootPage;