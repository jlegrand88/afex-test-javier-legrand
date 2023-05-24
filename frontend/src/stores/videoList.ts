import { ref } from 'vue'
import { defineStore } from 'pinia'

type ThumbnailsListType = {
  default: {
    url: string
    width: number
    height: number
  }
  medium: {
    url: string
    width: number
    height: number
  }
  high: {
    url: string
    width: number
    height: number
  }
  standard: {
    url: string
    width: number
    height: number
  }
  maxres: {
    url: string
    width: number
    height: number
  }
}

type VideoObjType = {
  _id: string
  id: string
  title: string
  description: string
  thumbnails: ThumbnailsListType
};

export const useVideoListStore = defineStore( 'videoList', () => {
  const videoList = ref<VideoObjType[]>([])

  const selectedVideo = ref()

  const setVideoList = ( list: VideoObjType[] ) => {
    videoList.value = list
  }

  const setSelectedVideo = ( video: VideoObjType ) => {
    selectedVideo.value = video
  }

  return { videoList, selectedVideo, setVideoList, setSelectedVideo }
})
