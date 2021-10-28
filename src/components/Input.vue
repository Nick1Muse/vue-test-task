<template>
  <input class="input" type="text" v-model="inputValue" :placeholder="placeholder" @keyup.enter="emitValueToParent">
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      inputValue: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['onSearchSubmit'],
  methods: {
    emitValueToParent() {
      this.$emit('onSearchSubmit', this.inputValue);
      this.inputValue = '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/colors';

.input {
  display: block;
  background-color: $inputBackground;
  max-width: 500px;
  width: 100%;
  padding: 10px 25px;
  border-radius: 40px;
  font-size: 18px;
  outline: 0;
  border: 0;
}
</style>