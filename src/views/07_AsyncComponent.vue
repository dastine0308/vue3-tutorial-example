<script setup>
  import { ref, defineAsyncComponent } from 'vue'
  import LoadingComponent from '../components/Loading.vue'
  import ErrorComponent from '../components/Error.vue'

  // import BaseModal from '../components/BaseModal.vue'
  const isModalActive = ref(null)

  // const BaseModal = defineAsyncComponent(()=> 
  //   import('../components/BaseModal.vue')
  // )

  const BaseModal = defineAsyncComponent({
    loader: () => import('../components/BaseModal.vue'),
    loadingComponent: LoadingComponent,
    delay: 200,
    errorComponent: ErrorComponent,
    timeout: 3000,
    onError: () => {},
    suspensible: false,
  })
</script>

<template>
  <h3> 07_Async Component </h3>
  <main>
    <BaseModal v-if="isModalActive" @closeModal="isModalActive = false"/>
    <button @click="isModalActive = true">Open Modal</button>
  </main>
</template>

<style scoped>
  button {
    position: static;
  }
</style>