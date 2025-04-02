import { Router, Route, Private } from '@redwoodjs/router'

import HomePage from 'src/pages/HomePage/HomePage'
import LandingPage from 'src/pages/LandingPage/LandingPage'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/file-upload" page={FileUploadPage} name="fileUpload" />
      <Route path="/" page={LandingPage} name="landing" />
      <Private unauthenticated="landing">
        <Route path="/home" page={HomePage} name="home" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
