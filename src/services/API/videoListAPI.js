import apiClient from '../awsClient'

const RESOURCE = 'video-list'

export const getVideoList = () => (
  apiClient.get(RESOURCE, { operacionId: 'video-list.list' })
)

export const saveVideoList = ( id, title, description, thumbnails ) => {
  return apiClient.post(RESOURCE,{
      id: id,
      title: title,
      description: description,
      thumbnails: thumbnails
    }, { operacionId: 'video-list.store' }
  )
}

export const removeVideo = (id) => (
  // apiClient.delete(RESOURCE,{ id })
  apiClient.delete(`${RESOURCE}?id=${id}`)
)