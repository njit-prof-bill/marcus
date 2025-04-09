import { useState } from 'react'

const RegistrationForm = ({ onSignUp, onSwitchToLogIn, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    onSignUp({ email, password })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4 rounded border border-gray-700 bg-gray-800 p-6"
    >
      <h2 className="text-center text-2xl text-white">Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded border border-gray-700 bg-gray-900 p-2 text-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full rounded border border-gray-700 bg-gray-900 p-2 text-white"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full rounded border border-gray-700 bg-gray-900 p-2 text-white"
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        Sign Up
      </button>
      <p className="text-center text-gray-400">
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogIn}
          className="text-blue-500 hover:underline"
        >
          Log In
        </button>
      </p>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

export default RegistrationForm
