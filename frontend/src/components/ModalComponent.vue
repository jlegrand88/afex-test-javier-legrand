
████████╗███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░████████╗███████╗
╚══██╔══╝██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚══██╔══╝██╔════╝
░░░██║░░░█████╗░░██╔████╔██║██████╔╝██║░░░░░███████║░░░██║░░░█████╗░░
░░░██║░░░██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██╔══██║░░░██║░░░██╔══╝░░
░░░██║░░░███████╗██║░╚═╝░██║██║░░░░░███████╗██║░░██║░░░██║░░░███████╗
░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝
<template>
  <div class="modal">
    <div class="modal-content" ref="modalContent">
      <div class="row">
        <img v-if="!loadingStore.isLoading" class="close-modal" alt="Close modal" src="../assets/images/close-modal.png" @click="modalStore.closeModal">
      </div>
      <slot></slot>
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
import { ref, onMounted, onUnmounted } from 'vue'
  import { useModalStore } from '@/stores/modal'
  import { useLoadingStore } from '@/stores/loading'

  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const loadingStore = useLoadingStore()
  const modalStore = useModalStore()
  const modalContent = ref<HTMLElement|null>(null)

  // ▒█▀▀▀ ▒█░▒█ ▒█▄░▒█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█ ▒█▀▀▀█ 
  // ▒█▀▀▀ ▒█░▒█ ▒█▒█▒█ ▒█░░░ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█ ░▀▀▀▄▄ 
  // ▒█░░░ ░▀▄▄▀ ▒█░░▀█ ▒█▄▄█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█ ▒█▄▄▄█
  const handleClickOutside = (event: Event) => {
    const element: HTMLElement | null = event.target as HTMLElement;
    const isCardClick = Array.from(element.classList).includes('card')
    if ( !isCardClick && modalContent.value && modalContent.value.contains(element) === false ) {
      modalStore.closeModal()
    }
  }

  // ▒█░░░ ▀█▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▒█░▄▀ ▒█▀▀▀█ 
  // ▒█░░░ ▒█░ ▒█▀▀▀ ▒█▀▀▀ ▒█░░░ ▒█▄▄▄█ ▒█░░░ ▒█░░░ ▒█▀▀▀   ▒█▀▀█ ▒█░░▒█ ▒█░░▒█ ▒█▀▄░ ░▀▀▀▄▄ 
  // ▒█▄▄█ ▄█▄ ▒█░░░ ▒█▄▄▄ ▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▄   ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  })
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  })
</script>

░██████╗████████╗██╗░░░██╗██╗░░░░░███████╗░██████╗
██╔════╝╚══██╔══╝╚██╗░██╔╝██║░░░░░██╔════╝██╔════╝
╚█████╗░░░░██║░░░░╚████╔╝░██║░░░░░█████╗░░╚█████╗░
░╚═══██╗░░░██║░░░░░╚██╔╝░░██║░░░░░██╔══╝░░░╚═══██╗
██████╔╝░░░██║░░░░░░██║░░░███████╗███████╗██████╔╝
╚═════╝░░░░╚═╝░░░░░░╚═╝░░░╚══════╝╚══════╝╚═════╝░
<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    width: fit-content;
    padding: 20px;
    /* Blanco calido */
    background: #FBFBFB;
    /* card shadow */
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
    padding: 24px;
  }

  .close-modal {
    width: 24px;
    height: 24px;
    /* padding-top: 32px;  
    padding-right: 32px; */
    margin-left: auto;
    cursor: pointer;
  }
</style>