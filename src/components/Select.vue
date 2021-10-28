<template>
  <div class="select" @click="openSelect">
    <input
        type="text"
        readonly="readonly"
        :placeholder="placeholder"
        v-model="searchValue"
    />
    <img
        class="angle-arrow-down"
        :class="{'angle-rotate': isDropdownOpen}"
        src="../assets/images/icons/angle-icon.svg"
        alt="angle_down"
    >
    <ul
        v-if="isDropdownOpen"
        class="items-list"
    >
      <li
          v-for="(currentItem, i) in items"
          class="item"
          @click="setSelectValue(currentItem, i)"
          :key="i + currentItem"
      >
        {{ currentItem }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data() {
    return {
      isDropdownOpen: false,
      searchValue: '',
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    fieldName: {
      type: String,
      required: true,
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdownByClickOutside);
  },
  methods: {
    closeDropdownByClickOutside(e) {
      if (!this.$el.contains(e.target)) {
        this.isDropdownOpen = false;
      }
    },
    setSelectValue(value) {
      this.searchValue = value;
      this.isDropdownOpen = false;
      this.$emit('onSelect', value, this.fieldName);
    },
    openSelect() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';

* {
  box-sizing: border-box;
}

.select {
  position: relative;
  max-width: 400px;

  ::placeholder {
    font-size: clamp(14px, 2vw, 16px);
  }

  input {
    width: 100%;
    min-width: 150px;
    height: 40px;
    background-color: $inputBackground;
    border: none;
    outline: none;
    font-size: 18px;
    font-weight: 400;
    padding: 15px 0 15px 25px;
    border-radius: 5px;
    cursor: pointer;
  }
}

.angle-arrow-down {
  width: 13px;
  height: 13px;
  position: absolute;
  right: 20px;
  bottom: 34%;
  cursor: pointer;
  transition: transform 0.2s;

  &.angle-rotate {
    transform: rotate(180deg);
  }
}

.items-list {
  padding: 0;
  margin: 0;
  background-color: $inputBackground;
  max-height: 250px;
  overflow: auto;
  border-radius: 5px;
  width: 100%;
  position: absolute;
  top: 50.6px;
  z-index: 100;
  left: 0;
}

.item {
  list-style: none;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  height: 40px;
  border-bottom: 1px solid $gray;
  border-top: 0;
  padding: 9px 0 10px 20px;
  cursor: pointer;

  &:hover {
    color: darken($inputBackground, 60);
    transition: color .3s;
  }
}
</style>