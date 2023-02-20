<script setup>
  import { ref, defineAsyncComponent } from 'vue'

  const isModalActive = ref(null)
  const BaseModal = defineAsyncComponent(() => 
    import('../components/BaseModal.vue')
  )
</script>

<template>
  <h3> 08-5_Suspense </h3>
  <main>
    <Suspense v-if="isModalActive" >
      <BaseModal @closeModal="isModalActive = false"/>
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
    <button @click="isModalActive = true">Open Modal</button>
  </main>
</template>

<style scoped>
  button {
    position: static;
  }
</style>