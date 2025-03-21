import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
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
        <header className="bg-gray-800 p-4">
          <h1 className="text-xl">Marcus</h1>
        </header>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
