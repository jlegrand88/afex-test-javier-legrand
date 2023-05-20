import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const showPreviewModal = ref(false)
  const showNoticeModal = ref(false)
  const title = ref('')
  const message = ref('')

  // ▒█▀▀▀ ▒█░▒█ ▒█▄░▒█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█ ▒█▀▀▀█ 
  // ▒█▀▀▀ ▒█░▒█ ▒█▒█▒█ ▒█░░░ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█ ░▀▀▀▄▄ 
  // ▒█░░░ ░▀▄▄▀ ▒█░░▀█ ▒█▄▄█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█ ▒█▄▄▄█
  const togglePreviewModal = () : void => {
    showPreviewModal.value = !showPreviewModal.value
  }
  const toggleNoticeModal = () : void => {
    showNoticeModal.value = !showNoticeModal.value
  }
  const setTitle = ( val : string ) : void => {
    title.value = val
  }
  const setMessage = ( val : string ) : void => {
    message.value = val
  }
  return {
    showPreviewModal,
    showNoticeModal,
    title,
    message,
    togglePreviewModal,
    toggleNoticeModal,
    setTitle,
    setMessage
  }
})
