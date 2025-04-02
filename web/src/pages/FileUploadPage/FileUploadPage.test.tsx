import { render } from '@redwoodjs/testing/web'

import FileUploadPage from './FileUploadPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FileUploadPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FileUploadPage />)
    }).not.toThrow()
  })
})
