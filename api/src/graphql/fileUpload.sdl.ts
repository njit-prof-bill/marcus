import { gql } from '@redwoodjs/graphql-server'

import { uploadFile } from 'src/services/fileUpload/fileUpload'

export const schema = gql`
  type FileUploadResponse {
    success: Boolean!
    message: String
    fileId: String
  }

  scalar Upload

  type Mutation {
    uploadFile(file: Upload!): FileUploadResponse!
  }
`

export const resolvers = {
  Mutation: {
    uploadFile: (_root: unknown, args: { file: Promise<File> }) =>
      uploadFile(args),
  },
}
