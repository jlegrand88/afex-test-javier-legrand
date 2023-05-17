<template>
  <div class="modal" v-if="store.showModal">
    <div class="modal-content">
      <div class="row">
        <img class="close-modal" alt="Close modal" src="../assets/images/close-modal.png" @click="store.toggleModal">
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
  import { useModalStore } from '@/stores/modal'
  
  const store = useModalStore()

  // ▒█░░░ ▀█▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▒█░▄▀ ▒█▀▀▀█ 
  // ▒█░░░ ▒█░ ▒█▀▀▀ ▒█▀▀▀ ▒█░░░ ▒█▄▄▄█ ▒█░░░ ▒█░░░ ▒█▀▀▀   ▒█▀▀█ ▒█░░▒█ ▒█░░▒█ ▒█▀▄░ ░▀▀▀▄▄ 
  // ▒█▄▄█ ▄█▄ ▒█░░░ ▒█▄▄▄ ▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▄   ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█
  onMounted(() => {
      console.debug(store.showModal)
  })
</script>

<style scoped>
  .modal {
    position: fixed;
    
  }

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