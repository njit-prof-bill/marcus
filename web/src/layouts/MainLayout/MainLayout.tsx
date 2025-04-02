import { useState } from 'react'

import { Bars3Icon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'

const MainLayout = ({ children }) => {
  const { logOut } = useAuth()
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(true)

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      {/* Banner */}
      <header className="flex items-center justify-between bg-black p-4">
        <div className="flex items-center">
          <button
            onClick={toggleSidePanel}
            className="mr-4 flex h-8 w-8 items-center justify-center rounded bg-gray-800 hover:bg-gray-700"
            aria-label="Toggle Side Panel"
          >
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
          <h1 className="text-xl">Marcus</h1>
        </div>
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
        <aside
          className={`transform transition-transform duration-300 ${
            isSidePanelOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64 bg-gray-800 p-4`}
        >
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
              <li>
                <Link
                  to={routes.fileUpload()}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Resume Upload
                </Link>
              </li>
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
