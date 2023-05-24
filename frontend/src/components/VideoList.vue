
████████╗███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░████████╗███████╗
╚══██╔══╝██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚══██╔══╝██╔════╝
░░░██║░░░█████╗░░██╔████╔██║██████╔╝██║░░░░░███████║░░░██║░░░█████╗░░
░░░██║░░░██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██╔══██║░░░██║░░░██╔══╝░░
░░░██║░░░███████╗██║░╚═╝░██║██║░░░░░███████╗██║░░██║░░░██║░░░███████╗
░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝
<template>
  <div class="cards-gallery">
    <div
      v-for="video in videoListStore.videoList"
      :key="video['_id']"
      :id="`${video.id}-card`"
      class="card"
      :style="{ background: (video.thumbnails) ? `url(${video.thumbnails.medium.url})` : 'gray' }" 
      @click="openPreview(video['_id'])"
    >
      <img
        :key="video['_id']"
        :id="`${video.id}-delete-btn`"
        class="delete-video justify-content-end" 
        alt="Delete video"
        src="../assets/images/delete-video.png"
        @click.stop="remove(video['_id'])"
      >
    </div>
  </div>
  <ModalComponent v-if="modalStore.showPreviewModal">
    <VideoPreview />
  </ModalComponent>
</template>


░██████╗░█████╗░██████╗░██╗██████╗░████████╗░██████╗
██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝
╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░╚█████╗░
░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░░╚═══██╗
██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░╚═════╝░
<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useLoadingStore } from '@/stores/loading'
  import { useModalStore } from '@/stores/modal'
  import { useVideoListStore } from '@/stores/videoList'
  import ModalComponent from './ModalComponent.vue'
  import VideoPreview from './VideoPreview.vue'
  import { getVideoList, removeVideo } from '../services/API/videoListAPI.js'

  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const modalStore = useModalStore()
  const videoListStore = useVideoListStore()
  const loadingStore = useLoadingStore()

  // ▒█▀▀▀ ▒█░▒█ ▒█▄░▒█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█ ▒█▀▀▀█ 
  // ▒█▀▀▀ ▒█░▒█ ▒█▒█▒█ ▒█░░░ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█ ░▀▀▀▄▄ 
  // ▒█░░░ ░▀▄▄▀ ▒█░░▀█ ▒█▄▄█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█ ▒█▄▄▄█
  const fillVideoList = async () => {
    loadingStore.setIsLoading(true)
    await getVideoList().then( (response: any) => {
      videoListStore.setVideoList(JSON.parse(response.data.body).reverse())
    }).finally(() => loadingStore.setIsLoading(false) )
  }

  const openPreview = (id: String) : void => {
    const [ selectedVideo ] = videoListStore.videoList.filter(obj => obj['_id'] == id)
    videoListStore.setSelectedVideo(selectedVideo)
    modalStore.openPreviewModal()
  }

  const remove = (id: string) => {
    loadingStore.setIsLoading(true)
    removeVideo(id).finally( () => {
      const newList = videoListStore.videoList.filter(obj => obj['_id'] !== id)
      videoListStore.setVideoList(newList)
      loadingStore.setIsLoading(false)
      modalStore.openNoticeModal('success', 'El video ha sido eliminado!')
    })
  }

  // ▒█░░░ ▀█▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▒█░▄▀ ▒█▀▀▀█ 
  // ▒█░░░ ▒█░ ▒█▀▀▀ ▒█▀▀▀ ▒█░░░ ▒█▄▄▄█ ▒█░░░ ▒█░░░ ▒█▀▀▀   ▒█▀▀█ ▒█░░▒█ ▒█░░▒█ ▒█▀▄░ ░▀▀▀▄▄ 
  // ▒█▄▄█ ▄█▄ ▒█░░░ ▒█▄▄▄ ▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▄   ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█
  onMounted(() => {
    fillVideoList()
  })
</script>

░██████╗████████╗██╗░░░██╗██╗░░░░░███████╗░██████╗
██╔════╝╚══██╔══╝╚██╗░██╔╝██║░░░░░██╔════╝██╔════╝
╚█████╗░░░░██║░░░░╚████╔╝░██║░░░░░█████╗░░╚█████╗░
░╚═══██╗░░░██║░░░░░╚██╔╝░░██║░░░░░██╔══╝░░░╚═══██╗
██████╔╝░░░██║░░░░░░██║░░░███████╗███████╗██████╔╝
╚═════╝░░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░
<style scoped>
  .cards-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 63px;
    margin-top: 50px;
  }
  .card {
    margin-top:32px;
    width: 263px;
    height: 150px;
    cursor: pointer;
  }

  .delete-video {
    width: 24px;
    height: 24px;
    padding: 8px;
    float: right;
  }
</style>