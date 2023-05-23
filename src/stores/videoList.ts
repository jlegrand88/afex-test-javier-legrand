import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useVideoListStore = defineStore( 'videoList', () => {
  const videoList = ref( [] )

  const selectedVideo = ref()

  const setVideoList = ( list ) => {
    videoList.value = list
  }

  const setSelectedVideo = ( video ) => {
    selectedVideo.value = video
  }

  return { videoList, selectedVideo, setVideoList, setSelectedVideo }
})
