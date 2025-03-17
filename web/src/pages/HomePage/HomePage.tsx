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
      <Card>
        <CardHeader>
          <CardTitle>Marcus</CardTitle>
          <CardDescription>Resume writer</CardDescription>
        </CardHeader>
        <CardContent>
          The Marcus project is a prototype application to generate a custom
          resume for a specific job description.
          <p>{JSON.stringify({ isAuthenticated })}</p>
          {isAuthenticated ? (
            <Button onClick={logOut}>Sign Out</Button>
          ) : (
            <>
              {isSignUp ? (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={handleSignUp}>Sign Up</Button>
                  <p>
                    Already have an account?{' '}
                    <Button onClick={() => setIsSignUp(false)}>Log In</Button>
                  </p>
                </>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button onClick={handleLogIn}>Log In</Button>
                  <p>
                    Need an account?{' '}
                    <Button onClick={() => setIsSignUp(true)}>Sign Up</Button>
                  </p>
                </>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </>
          )}
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  )
}

export default HomePage
