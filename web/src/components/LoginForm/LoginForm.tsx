import { useState } from 'react'

const LoginForm = ({ onLogIn, onSwitchToSignUp, error }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onLogIn({ email, password })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4 rounded border border-gray-700 bg-gray-800 p-6"
    >
      <h2 className="text-center text-2xl text-white">Log In</h2>
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
      <button
        type="submit"
        className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        Log In
      </button>
      <p className="text-center text-gray-400">
        Need an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignUp}
          className="text-blue-500 hover:underline"
        >
          Sign Up
        </button>
      </p>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  )
}

export default LoginForm
