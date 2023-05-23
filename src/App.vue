<script setup lang="ts">
  import YoutubeVideosForm from './components/YoutubeVideosForm.vue'
  import VideoList from './components/VideoList.vue'
  import ModalComponent from './components/ModalComponent.vue'
  import Notification from './components/Notification.vue'
  import { useModalStore } from '@/stores/modal'
  import { useLoadingStore } from '@/stores/loading'

  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const modalStore = useModalStore()
  const loadingStore = useLoadingStore()
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
  <ModalComponent v-if="loadingStore.isLoading">
    <div> <img src="./assets/images/loading.gif" height="70"/></div>
  </ModalComponent>
</template>
