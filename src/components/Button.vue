<template>
 <button class="button">{{ buttonName }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';

  .button {
    height: 40px;
    max-width: 300px;
    width: 100%;
    background-color: $buttonBackground;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    color: $white;
    border-radius: 40px;
    transition: background-color .4s;

    &:hover {
      background-color: darken($buttonBackground, 20);
    }
  }
</style>