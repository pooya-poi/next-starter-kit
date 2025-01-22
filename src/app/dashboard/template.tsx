import Sidebar from '@/components/sidebar';
import ToggleScreen from '@/components/toggle-screen';
import ToggleTheme from '@/components/toggle-theme';
import type { ReadonlyChildrenFC } from '@/types/components';

const DashboardTemplate: ReadonlyChildrenFC = ({ children }) => (
  <>

    <div className="grid min-h-screen grid-cols-[1fr,auto] grid-rows-[auto,1fr,auto] gap-4 p-5">
      <header className="bg-gray-800 p-4 text-white">
        <h1 className="text-xl">Dashboard Header</h1>
        <ToggleTheme/>
      </header>

      <aside className="row-span-3 w-72 bg-gray-100 p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="bg-white p-4 shadow">
        <h2 className="text-lg font-semibold">Main Content Area</h2>
        <p>This is where the main content goes.</p>
      </main>

      <footer className="col-span-2 bg-gray-800 p-4 text-white">
        <p className="text-center">Dashboard Footer &copy; 2025</p>
      </footer>
    </div>
  </>
);

export default DashboardTemplate;
