<script>
import { ref, onBeforeMount, onMounted, onUpdated } from 'vue';
export default {
  setup() {
    console.log('當Vue掛載到app上面執行')
    const idx = ref(0);
    setTimeout(() => {
      idx.value = 1;
      console.log(idx.value);
    }, 3000);
    onBeforeMount(() => {
      // DOM 渲染前
      console.log("DOM 渲染前");
    });
    onMounted(() => {
      // DOM 渲染完成後
      console.log("DOM 渲染完成後");
    });
    onUpdated(() => {
      // 在資料更改導致virtual DOM重新渲染後調用
      console.log("資料更改後");
    });

    return {
      idx,
    };
  }
}
</script>

<template>
  <h3> 01_LifecycleHook</h3>
  <div>idx: {{idx}}</div>
</template>
