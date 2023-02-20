<script setup>
  import Modal from '../components/Modal.vue'
  import {ref} from 'vue'

  const modalRef = ref(null)
  const openModal = () => {
    modalRef.value.toggleModalStatus(true)
  }
</script>

<template>
  <h3> 08-4_Teleport </h3>
  <main>
    <button @click="openModal">Open Modal</button>
    <Modal ref="modalRef"/>
  </main>
</template>

