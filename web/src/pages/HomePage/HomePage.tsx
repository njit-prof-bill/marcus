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
  const { isAuthenticated, signUp } = useAuth()
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
          <button
            onClick={() =>
              signUp({
                // email: 'your.email@email.com',
                // password: 'super secret password',
              })
            }
          >
            sign up
          </button>
        </CardContent>
        <CardFooter />
      </Card>
    </div>
  )
}

export default HomePage
