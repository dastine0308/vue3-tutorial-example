<script setup>
import { onMounted } from 'vue'
  const emit = defineEmits(['closeModal'])
  onMounted(()=>{
    console.log('BaseModal')
  })
  
  const closeModal = () => {
    emit('closeModal')
  }
</script>

<template>
  <div class="modal">
   <div class="modal-content">
     <h1>Modal Header</h1>
     <p>Hi</p>
     <button @click="closeModal">Close</button>
   </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #000000ab;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
}
.modal-content {
  background: white;
  width: 60%;
  padding: 30px;
}
</style>
