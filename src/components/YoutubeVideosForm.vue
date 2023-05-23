
████████╗███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░████████╗███████╗
╚══██╔══╝██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚══██╔══╝██╔════╝
░░░██║░░░█████╗░░██╔████╔██║██████╔╝██║░░░░░███████║░░░██║░░░█████╗░░
░░░██║░░░██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██╔══██║░░░██║░░░██╔══╝░░
░░░██║░░░███████╗██║░╚═╝░██║██║░░░░░███████╗██║░░██║░░░██║░░░███████╗
░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝
<template>
  <div>
    <label class="input-label" for="inputAdd">Añadir nuevo video</label>
    <div class="input-group">
      <input id="inputAdd" v-model="videoURL" type="text" class="text-input" placeholder="Añadir"/>
      <input type="button" class="button" value="Añadir" @click="submitVideo">
    </div>
  </div>
</template>

░██████╗░█████╗░██████╗░██╗██████╗░████████╗░██████╗
██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝██╔════╝
╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░╚█████╗░
░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░░╚═══██╗
██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░╚═════╝░
<script setup lang="ts">
  import { ref } from 'vue'
  import { saveVideoList } from '../services/API/videoListAPI.js'
  import { useVideoListStore } from '@/stores/videoList'
  import { useModalStore } from '@/stores/modal'
  import { useLoadingStore } from '@/stores/loading'

  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const videoURL = ref('')
  const videoInfoDoc = ref({})
  const videoListStore = useVideoListStore()
  const modalStore = useModalStore()
  const loadingStore = useLoadingStore()

  // ▒█▀▀▀ ▒█░▒█ ▒█▄░▒█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█ ▒█▀▀▀█ 
  // ▒█▀▀▀ ▒█░▒█ ▒█▒█▒█ ▒█░░░ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█ ░▀▀▀▄▄ 
  // ▒█░░░ ░▀▄▄▀ ▒█░░▀█ ▒█▄▄█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█ ▒█▄▄▄█
  const getVideoId = () => {
    const urlObj = new URL(videoURL.value)
    const urlParams = new URLSearchParams(urlObj.search);
    const id = urlParams.get('v');
    return id || urlObj.pathname.substring(1);
  }
  const checkDomain = (url: string): boolean => {
    try {
      const urlObj = new URL(url)
      console.log(urlObj.hostname)
      const allowedDomains = [/^youtu\.be$/, /^youtube\.com$/, /^www.youtu\.be$/, /^www.youtube\.com$/]
      for (const domain of allowedDomains) {
        if ( domain.test(urlObj.hostname) ) {
          return true;
        }
      }
      return false;
    } catch (error) {
      return false
    }
  }

  const submitVideo = () => {
    loadingStore.setIsLoading(true)
    if(checkDomain(videoURL.value)) {
      const videoId = getVideoId()
      if (videoId) {
        saveVideoList(videoId).then(response => {
          const newRecord = JSON.parse(response.data.body)
          const newList = [...videoListStore.videoList]
          newList.unshift(newRecord)
          videoListStore.setVideoList(newList)
          videoURL.value = ''
        }).finally( () => {
          loadingStore.setIsLoading(false)
          modalStore.openNoticeModal('success', 'El video ha sido guardado!')
        })
      } else {
        loadingStore.setIsLoading(false)
        modalStore.openNoticeModal('error', 'La URL no contiene el ID del video o esta malformada!')
      }
    } else {
      loadingStore.setIsLoading(false)
      modalStore.openNoticeModal('error', 'La URL no es valida, solo se admiten los dominios youtube.com u youtu.be!')
    }
  }
</script>

░██████╗████████╗██╗░░░██╗██╗░░░░░███████╗░██████╗
██╔════╝╚══██╔══╝╚██╗░██╔╝██║░░░░░██╔════╝██╔════╝
╚█████╗░░░░██║░░░░╚████╔╝░██║░░░░░█████╗░░╚█████╗░
░╚═══██╗░░░██║░░░░░╚██╔╝░░██║░░░░░██╔══╝░░░╚═══██╗
██████╔╝░░░██║░░░░░░██║░░░███████╗███████╗██████╔╝
╚═════╝░░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░
<style src="../assets/css/youtube-form.css" scoped />
