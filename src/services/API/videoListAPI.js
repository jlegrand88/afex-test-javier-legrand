import apiClient from '../awsClient'

const RESOURCE = 'video-list'

export const getVideoList = () => (
  apiClient.get(RESOURCE, { operacionId: 'video-list.list' })
)

export const saveVideoList = ( id ) => {
  return apiClient.post(RESOURCE,{
      id: id
    }, { operacionId: 'video-list.store' }
  )
}

export const removeVideo = (id) => (
  apiClient.delete(`${RESOURCE}?id=${id}`)
)