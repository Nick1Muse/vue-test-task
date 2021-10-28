<template>
  <p
      class="tag"
  >
    {{ tagText }}
  </p>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tagText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';

.tag {
  border: 1px solid $blue;
  white-space: nowrap;
  max-width: 186px;
  color: $blue;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  padding: 0 17px;
  cursor: pointer;
  min-height: 15px;
  user-select: none;

  &:hover {
    color: $white;
    background-color: $blue;
    transition: all .27s;
  }
}
</style>