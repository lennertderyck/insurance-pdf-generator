import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import MainNavigationItem from '../../elements/MainNavigationItem/MainNavigationItem';

interface Props {};

const RootPage: FC<Props> = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 flex flex-col lg:flex-row min-h-full gap-4">
        <div className="lg:min-w-[300px] relative">
          <nav className="sticky top-4">
            <MainNavigationItem icon="file-pdf-2-fill" to="/">Formulieren</MainNavigationItem>
            <MainNavigationItem icon="shining-fill" to="/persons/register">Nieuwe persoon</MainNavigationItem>
            <MainNavigationItem icon="home-smile-2-fill" to="/events/register">Nieuwe activiteit</MainNavigationItem>
          </nav>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1 bg-white p-6 md:p-12 rounded-3xl shadow-lg overflow-scroll">
            <Outlet />
          </div>
          <div className="mt-4 flex flex-row gap-4 justify-end px-4 *:text-gray-400">
            <Link to="#">Privacy</Link>
            <div>|</div>
            <Link to="nerds">Developers</Link>
            <div>|</div>
            <a href="https://github.com/lennertderyck/insurance-pdf-generator" rel="noopener norefferer" target="_blank">
              GitHub
            </a>
            <div>|</div>
            <a href="https://www.jung.gent" rel="noopener norefferer" target="_blank">
              Ontwikkeld door JUNG ･ Gent
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default RootPage;