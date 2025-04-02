import gql from 'graphql-tag' // Explicitly import gql from graphql-tag

import { uploadFile } from 'src/services/fileUpload/fileUpload'

// Define the FileUploadArgs interface for type safety
interface FileUploadArgs {
  file: Promise<{
    filename: string
    mimetype: string
    encoding: string
    createReadStream: () => NodeJS.ReadableStream
  }>
}

export const schema = gql`
  type FileUploadResponse {
    success: Boolean!
    message: String
    fileId: String
  }

  scalar Upload

  type Mutation {
    uploadFile(file: Upload!): FileUploadResponse! @requireAuth
  }
`

export const resolvers = {
  Mutation: {
    uploadFile: (_root: unknown, args: FileUploadArgs) => uploadFile(args),
  },
}
