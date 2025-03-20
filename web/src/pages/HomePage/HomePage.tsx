import { useState } from 'react'

import { useAuth } from 'src/auth'
import { Button } from 'src/components/Button/Button'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from 'src/components/Card/Card'

const HomePage = () => {
  const { isAuthenticated, signUp, logIn, logOut } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = async () => {
    try {
      await signUp({ email, password })
    } catch (error) {
      setError(error.message)
    }
  }

  const handleLogIn = async () => {
    try {
      await logIn({ email, password })
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <Card className="w-full max-w-md p-6">
        <CardHeader>
          <CardTitle>Marcus</CardTitle>
          <CardDescription>Resume writer</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-400">
            The Marcus project is a prototype application to generate a custom
            resume for a specific job description.
          </p>
          <p className="mb-4 text-gray-400">
            {JSON.stringify({ isAuthenticated })}
          </p>
          {isAuthenticated ? (
            <Button onClick={logOut} className="w-full">
              Sign Out
            </Button>
          ) : (
            <>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-gray-700 bg-gray-800 p-2 text-white"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded border border-gray-700 bg-gray-800 p-2 text-white"
                />
                {isSignUp ? (
                  <>
                    <Button
                      onClick={handleSignUp}
                      className="w-full border border-gray-700 bg-gray-800 text-white"
                    >
                      Sign Up
                    </Button>
                    <p className="text-center text-gray-400">
                      Already have an account?{' '}
                      <button
                        onClick={() => setIsSignUp(false)}
                        className="text-blue-500 hover:underline"
                      >
                        Log In
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex justify-end">
                      <Button
                        onClick={handleLogIn}
                        className="border border-gray-700 bg-gray-800 text-white"
                      >
                        Log In
                      </Button>
                    </div>
                    <p className="text-center text-gray-400">
                      Need an account?{' '}
                      <button
                        onClick={() => setIsSignUp(true)}
                        className="text-blue-500 hover:underline"
                      >
                        Sign Up
                      </button>
                    </p>
                  </>
                )}
                {error && <p className="text-red-500">{error}</p>}
              </div>
            </>
          )}
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  )
}

export default HomePage
