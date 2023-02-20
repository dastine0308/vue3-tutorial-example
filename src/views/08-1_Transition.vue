<script setup>
  import { ref } from 'vue'

  const isAdmin = ref(false)

  const handAdminClick = ()=>{
    isAdmin.value = !isAdmin.value
  }
</script>

<template>
  <h3> 08-1_Transition</h3>  
  <div>
    <button @click="handAdminClick"> click </button>
    <Transition name="fade">
      <div v-if="isAdmin" id="box">I am a box</div>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>