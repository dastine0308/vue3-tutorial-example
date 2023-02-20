<script setup>
  import {ref} from 'vue'
  const isModalOpen = ref(null)

  const toggleModalStatus = (val) => {
    isModalOpen.value = val
  }

  defineExpose({
    toggleModalStatus
  })
</script>

<template>
  <Teleport to="body">
    <div class="modal-wrap" v-if="isModalOpen">
      <div class="modal">
        <slot>
          <h1>Vue Teleport</h1>
          <p>This modal is now outside of our vue application!</p>
        </slot>
        <button @click="toggleModalStatus(false)">Close</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* .modal-wrap {
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.4);
  color: #000;
}
.modal {
  padding: 20px;
  background-color: #fff;
} */

.modal-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 360px;
  height: 300px;
}

</style>
