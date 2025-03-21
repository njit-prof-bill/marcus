import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'

const MainLayout = ({ children }) => {
  const { logOut } = useAuth()

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
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
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between bg-gray-800 p-4">
          <h1 className="text-xl">Marcus</h1>
          <Button
            onClick={logOut}
            className="border border-gray-700 bg-gray-800 text-white"
          >
            Log Out
          </Button>
        </header>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
