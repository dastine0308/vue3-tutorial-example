<script setup>
  import { ref, reactive, watchEffect} from 'vue'

  const num = ref(0);
  const numData = reactive({ idx: 0 });

  watchEffect(()=>{
    console.log(num.value)
    console.log(numData.idx)
  })

  setTimeout(() => {
    num.value++;
    numData.idx++;
  }, 1000);
</script>

<template>
  <div>
    <h3> 02-2_WatchEffect</h3>
    <p>num: {{ num }}</p>
    <p>numData.idx: {{ numData.idx }}</p>
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