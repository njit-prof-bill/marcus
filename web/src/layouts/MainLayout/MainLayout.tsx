import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'

const MainLayout = ({ children }) => {
  const { logOut } = useAuth()

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      {/* Banner */}
      <header className="flex items-center justify-between bg-black p-4">
        <h1 className="text-xl">Marcus</h1>
        <Button
          onClick={logOut}
          className="border border-gray-700 bg-gray-800 text-white"
        >
          Log Out
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Side Panel */}
        <aside className="w-64 bg-gray-800 p-4">
          <nav>
            <ul>
              <li>
                <Link
                  to={routes.home()}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Home
                </Link>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
