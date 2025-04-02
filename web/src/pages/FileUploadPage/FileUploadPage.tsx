import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const UPLOAD_FILE_MUTATION = gql`
  mutation UploadFile($file: Upload!) {
    uploadFile(file: $file) {
      success
      message
      fileId
    }
  }
`

const FileUploadPage = () => {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [uploadFile, { loading }] = useMutation(UPLOAD_FILE_MUTATION)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!file) {
      setMessage('Please select a file to upload.')
      return
    }

    try {
      const response = await uploadFile({
        variables: { file },
      })

      if (response.data.uploadFile.success) {
        setMessage('File uploaded successfully!')
      } else {
        setMessage(response.data.uploadFile.message || 'File upload failed.')
      }
    } catch (error) {
      console.error('Error uploading file:', error)
      setMessage('An error occurred while uploading the file.')
    }
  }

  return (
    <MainLayout>
      <div className="flex h-full items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 rounded border border-gray-700 bg-gray-800 p-6"
        >
          <h2 className="text-center text-2xl text-white">File Upload</h2>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full rounded border border-gray-700 bg-gray-900 p-2 text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Upload File'}
          </button>
          {message && <p className="text-center text-white">{message}</p>}
        </form>
      </div>
    </MainLayout>
  )
}

export default FileUploadPage
