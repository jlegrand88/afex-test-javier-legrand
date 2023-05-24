import apiClient from '../awsClient'

const RESOURCE = 'video-list'

export const getVideoList = () => (
  apiClient.get(RESOURCE)
)

export const saveVideoList = ( id: string ) => {
  return apiClient.post(RESOURCE,{
      id: id
    }
  )
}

export const removeVideo = (id: string) => (
  apiClient.delete(`${RESOURCE}?id=${id}`)
)