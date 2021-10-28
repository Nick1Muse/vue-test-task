<template>
  <p
      class="skill-tag"
      :class="{'big-tag': isBig}"
      :style="{'fontSize': fontSize + 'px'}"
  >
    {{ skillName }}
  </p>
</template>

<script>
export default {
  name: 'SkillTag',
  props: {
    skillName: {
      type: String,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 16,
    },
    isBig: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';
@import '../assets/styles/breakpoints';

.skill-tag {
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

@media (max-width: $tablet) {
  .skill-tag {
    height: 18px;
    font-size: 14px !important;
  }
}

@media (max-width: $mobile) {
  .skill-tag {
    box-sizing: border-box;
    height: 15px;
    font-size: 12px;
    line-height: 10px;
    padding: 2px 15px;
  }

  .big-tag {
    height: 21px;
    font-size: clamp(16px, 2.7vw, 18px) !important;
    padding: 5px 15px;
  }
}
</style>