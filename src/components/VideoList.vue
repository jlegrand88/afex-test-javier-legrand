<template>
  <div 
    class="card"
    :style="{ background: 'url(\'https://i.ytimg.com/vi/zcuKyuDrcoQ/mqdefault.jpg\')' }" 
    @click="store.toggleModal"
  >
    <img 
      class="delete-video justify-content-end" 
      alt="Delete video"
      src="../assets/images/delete-video.png"
      @click.stop="removeVideo"
    >
  </div>
  <ModalComponent>
    <VideoPreview />
  </ModalComponent>
</template>

<script setup>
  import { useModalStore } from '@/stores/modal'
  import ModalComponent from './ModalComponent.vue';
  import VideoPreview from './VideoPreview.vue'

  const store = useModalStore()

  const removeVideo = () => {
    console.log('Video removed :D')
    return true
  }
</script>

<style scoped>
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