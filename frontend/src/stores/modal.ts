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
  const openPreviewModal = () : void => {
    showPreviewModal.value = true
  }
  const openNoticeModal = ( titleParam: string, messageParam: string ) : void => {
    title.value = titleParam
    message.value = messageParam
    showNoticeModal.value = true
  }

  const closeModal = (): void => {
    showPreviewModal.value = false
    showNoticeModal.value = false
    title.value = ''
    message.value = ''
  }

  return {
    showPreviewModal,
    showNoticeModal,
    title,
    message,
    openPreviewModal,
    openNoticeModal,
    closeModal
  }
})
