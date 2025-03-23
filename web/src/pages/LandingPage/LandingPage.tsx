import { useState, useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

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

const errorMessages = {
  'auth/invalid-credential': 'Email and Password do not match our records.',
  'auth/user-not-found': 'No user found with this email.',
  'auth/wrong-password': 'Email and Password do not match our records.',
  'auth/email-already-in-use': 'This email is already in use.',
  'auth/weak-password': 'Password should be at least 6 characters.',
  'An error occurred. Please try again.':
    'Check your email and password and try again.',
  yarn,
  // Add more error codes and messages as needed
}

const LandingPage = () => {
  const { isAuthenticated, signUp, logIn, logOut } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const handleSignUp = async () => {
    try {
      await signUp({ email, password })
      setError('') // Clear error message after successful sign-up
    } catch (error) {
      setError(
        errorMessages[error.code] || 'An error occurred. Please try again.'
      )
    }
  }

  const handleLogIn = async () => {
    try {
      await logIn({ email, password })
      setError('') // Clear error message after successful log-in
    } catch (error) {
      setError(
        errorMessages[error.code] || 'An error occurred. Please try again.'
      )
    }
  }

  const handleSwitchForm = () => {
    setIsSignUp(!isSignUp)
    setError('') // Clear error message when switching forms
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
          {isAuthenticated ? (
            <div className="flex justify-end">
              <Button
                onClick={logOut}
                className="w-32 border border-gray-700 bg-gray-800 text-white"
              >
                Sign Out
              </Button>
            </div>
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
                    <div className="flex justify-end">
                      <Button
                        onClick={handleSignUp}
                        className="w-32 border border-gray-700 bg-gray-800 text-white"
                      >
                        Sign Up
                      </Button>
                    </div>
                    <p className="text-center text-gray-400">
                      Already have an account?{' '}
                      <button
                        onClick={handleSwitchForm}
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
                        className="w-32 border border-gray-700 bg-gray-800 text-white"
                      >
                        Log In
                      </Button>
                    </div>
                    <p className="text-center text-gray-400">
                      Need an account?{' '}
                      <button
                        onClick={handleSwitchForm}
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

export default LandingPage
