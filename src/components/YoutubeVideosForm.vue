
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
  import { ref, onMounted, watch } from 'vue'
  import axios from 'axios';
  import { saveVideoList } from '../services/API/videoListAPI.js';
  import { useVideoListStore } from '@/stores/videoList'
  import { useModalStore } from '@/stores/modal'


  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const videoURL = ref('')
  const videoInfoDoc = ref('')
  const videoListStore = useVideoListStore()
  const modalStore = useModalStore()

  // ▒█▀▀▀ ▒█░▒█ ▒█▄░▒█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█ ▒█▀▀▀█ 
  // ▒█▀▀▀ ▒█░▒█ ▒█▒█▒█ ▒█░░░ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█ ░▀▀▀▄▄ 
  // ▒█░░░ ░▀▄▄▀ ▒█░░▀█ ▒█▄▄█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█ ▒█▄▄▄█
  const getVideoId = () => {
    const urlObj = new URL(videoURL.value)
    const urlParams = new URLSearchParams(urlObj.search);
    const id = urlParams.get('v');
    return id || urlObj.pathname.substring(1);
  }

  const submitVideo = () => {
    const videoId = getVideoId()
    const youtubeEndpoint = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyBPdE_oUlVk4NTwyygKjnfn8UIF95pORgg&part=snippet`
    axios.get( youtubeEndpoint ).then( response => {
      [ videoInfoDoc.value ] = response.data.items
      saveVideoList(
        videoId,
        videoInfoDoc.value.snippet.title,
        videoInfoDoc.value.snippet.description,
        videoInfoDoc.value.snippet.thumbnails
      ).then(response => {
        const newRecord = {
          _id: response.data.body.insertedId,
          id: videoId,
          title: videoInfoDoc.value.snippet.title,
          description: videoInfoDoc.value.snippet.description,
          thumbnails: videoInfoDoc.value.snippet.thumbnails
        }
        const newList = [...videoListStore.videoList]
        newList.unshift(newRecord)
        videoListStore.setVideoList(newList)
        videoURL.value = ''
      }).finally( () => {
        modalStore.setTitle('Success')
        modalStore.setMessage('El video ha sido guardado')
        modalStore.toggleNoticeModal()
      })
    })
  }
</script>

░██████╗████████╗██╗░░░██╗██╗░░░░░███████╗░██████╗
██╔════╝╚══██╔══╝╚██╗░██╔╝██║░░░░░██╔════╝██╔════╝
╚█████╗░░░░██║░░░░╚████╔╝░██║░░░░░█████╗░░╚█████╗░
░╚═══██╗░░░██║░░░░░╚██╔╝░░██║░░░░░██╔══╝░░░╚═══██╗
██████╔╝░░░██║░░░░░░██║░░░███████╗███████╗██████╔╝
╚═════╝░░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░
<style src="../assets/css/youtube-form.css" scoped />
