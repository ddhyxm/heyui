<template>
  <div v-width="300">
    <p>{{value}}</p>
    <NumberInput v-model="value" :step="5" :useOperate="true"></NumberInput>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  }
};
</script>
