import { useState, useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import LoginForm from 'src/components/LoginForm'
import RegistrationForm from 'src/components/RegistrationForm'

const errorMessages = {
  'auth/invalid-credential': 'Email and Password do not match our records.',
  'auth/user-not-found': 'No user found with this email.',
  'auth/wrong-password': 'Email and Password do not match our records.',
  'auth/email-already-in-use': 'This email is already in use.',
  'auth/weak-password': 'Password should be at least 6 characters.',
  'An error occurred. Please try again.':
    'Check your email and password and try again.',
}

const LandingPage = () => {
  const { isAuthenticated, signUp, logIn, logOut } = useAuth()
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const handleSignUp = async ({ email, password }) => {
    try {
      await signUp({ email, password })
      setError('') // Clear error message after successful sign-up
    } catch (error) {
      setError(
        errorMessages[error.code] || 'An error occurred. Please try again.'
      )
    }
  }

  const handleLogIn = async ({ email, password }) => {
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
      {isSignUp ? (
        <RegistrationForm
          onSignUp={handleSignUp}
          onSwitchToLogIn={handleSwitchForm}
          error={error}
        />
      ) : (
        <LoginForm
          onLogIn={handleLogIn}
          onSwitchToSignUp={handleSwitchForm}
          error={error}
        />
      )}
    </div>
  )
}

export default LandingPage
