<script setup lang="ts">
  import YoutubeVideosForm from './components/YoutubeVideosForm.vue'
  import VideoList from './components/VideoList.vue'
  import ModalComponent from './components/ModalComponent.vue'
  import Notification from './components/Notification.vue'
  import { useModalStore } from '@/stores/modal'

  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const modalStore = useModalStore()
</script>

<template>
  <header>
    <YoutubeVideosForm />
  </header>
  <main class="justify-content-center">
    <VideoList />
  </main>
  <ModalComponent v-if="modalStore.showNoticeModal">
    <Notification />
  </ModalComponent>
</template>
