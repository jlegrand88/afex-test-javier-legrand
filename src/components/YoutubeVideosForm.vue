<template>
  <div>
    <label class="input-label" for="inputAdd">Añadir nuevo video</label>
    <div class="input-group">
      <input id="inputAdd" type="text" class="text-input" placeholder="Añadir"/>
      <input type="button" class="button" value="Añadir">
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'

  // ▒█▀▀▀█ ▀▀█▀▀ ░█▀▀█ ▀▀█▀▀ ▒█▀▀▀ ▒█▀▀▀█ 
  // ░▀▀▀▄▄ ░▒█░░ ▒█▄▄█ ░▒█░░ ▒█▀▀▀ ░▀▀▀▄▄ 
  // ▒█▄▄▄█ ░▒█░░ ▒█░▒█ ░▒█░░ ▒█▄▄▄ ▒█▄▄▄█
  const count = ref(0)

  // ▒█▀▀▀ ▒█░▒█ ▒█▄░▒█ ▒█▀▀█ ▀▀█▀▀ ▀█▀ ▒█▀▀▀█ ▒█▄░▒█ ▒█▀▀▀█ 
  // ▒█▀▀▀ ▒█░▒█ ▒█▒█▒█ ▒█░░░ ░▒█░░ ▒█░ ▒█░░▒█ ▒█▒█▒█ ░▀▀▀▄▄ 
  // ▒█░░░ ░▀▄▄▀ ▒█░░▀█ ▒█▄▄█ ░▒█░░ ▄█▄ ▒█▄▄▄█ ▒█░░▀█ ▒█▄▄▄█
  // function increment() {
  //   count.value++
  // }

// ▒█░░░ ▀█▀ ▒█▀▀▀ ▒█▀▀▀ ▒█▀▀█ ▒█░░▒█ ▒█▀▀█ ▒█░░░ ▒█▀▀▀   ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▒█░▄▀ ▒█▀▀▀█ 
// ▒█░░░ ▒█░ ▒█▀▀▀ ▒█▀▀▀ ▒█░░░ ▒█▄▄▄█ ▒█░░░ ▒█░░░ ▒█▀▀▀   ▒█▀▀█ ▒█░░▒█ ▒█░░▒█ ▒█▀▄░ ░▀▀▀▄▄ 
// ▒█▄▄█ ▄█▄ ▒█░░░ ▒█▄▄▄ ▒█▄▄█ ░░▒█░░ ▒█▄▄█ ▒█▄▄█ ▒█▄▄▄   ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/css/youtube-form.css" scoped />
