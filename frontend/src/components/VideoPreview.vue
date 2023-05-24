<!-- eslint-disable @typescript-eslint/no-unused-vars -->

████████╗███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░████████╗███████╗
╚══██╔══╝██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚══██╔══╝██╔════╝
░░░██║░░░█████╗░░██╔████╔██║██████╔╝██║░░░░░███████║░░░██║░░░█████╗░░
░░░██║░░░██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██╔══██║░░░██║░░░██╔══╝░░
░░░██║░░░███████╗██║░╚═╝░██║██║░░░░░███████╗██║░░██║░░░██║░░░███████╗
░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝
<template>
    <div class="content-body">
      <div class="video-preview">
        <div ref="playerContainer"></div>
      </div>
      <div class="video-info">
        <div>
          <span id="preview-title" class="title">{{ videoListStore.selectedVideo.title }}</span>
          <p id="preview-description" class="description">{{ videoListStore.selectedVideo.description }}</p>
        </div>
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
  import { useVideoListStore } from '@/stores/videoList'
  import { ref, onMounted } from 'vue'
  
  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const videoListStore = useVideoListStore()
  const playerContainer = ref(null);

  const createYouTubePlayer = (videoId: string) => {
    // @ts-ignore: Ignorar la advertencia "Cannot find name 'YT'"
    new YT.Player(playerContainer.value, {
      videoId: videoId,
      width: 492,
      height: 308,
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        showinfo: 1,
        rel: 0,
        fs: 1
      }
    })
  }
  

  // ▒█░░░ ▀█▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▒█░▄▀ ▒█▀▀▀█ 
  // ▒█░░░ ▒█░ ▒█▀▀▀ ▒█▀▀▀ ▒█░░░ ▒█▄▄▄█ ▒█░░░ ▒█░░░ ▒█▀▀▀   ▒█▀▀█ ▒█░░▒█ ▒█░░▒█ ▒█▀▄░ ░▀▀▀▄▄ 
  // ▒█▄▄█ ▄█▄ ▒█░░░ ▒█▄▄▄ ▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▄   ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█
  onMounted(() => {
    createYouTubePlayer(videoListStore.selectedVideo.id)
  });
</script>

░██████╗████████╗██╗░░░██╗██╗░░░░░███████╗░██████╗
██╔════╝╚══██╔══╝╚██╗░██╔╝██║░░░░░██╔════╝██╔════╝
╚█████╗░░░░██║░░░░╚████╔╝░██║░░░░░█████╗░░╚█████╗░
░╚═══██╗░░░██║░░░░░╚██╔╝░░██║░░░░░██╔══╝░░░╚═══██╗
██████╔╝░░░██║░░░░░░██║░░░███████╗███████╗██████╔╝
╚═════╝░░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░
<style scope>
  .title {
    width: 100%;
    height: 38px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    color: #3C3E41;
  }
  .description {
    width: 480px;
    height: 150px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    color: #3C3E41;
    text-align: justify;
    overflow-x: scroll;
  }
  .video-preview {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .video-info {
    text-align: center;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .content-body {
    padding-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 1000px;
  }
</style>