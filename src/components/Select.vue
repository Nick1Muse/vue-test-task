<template>
  <div class="select" :class="{'main-select': isMainSelect}">
    <input
        @click="openSelect"
        type="text"
        readonly="readonly"
        :placeholder="placeholder"
        v-model="searchValue"
        :style="{'maxWidth': width + 'px', 'fontSize': fontSize +'px', 'minHeight': minHeight + 'px'}"
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
          @click="setSelectValue($t(currentItem.optionNameTranslationPath), i)"
          :key="i + currentItem"
      >
        {{ $t(currentItem.optionNameTranslationPath) }}
      </li>
    </ul>
  </div>
</template>

<script>
import closeDropdownByClickOutside from '../mixins/closeDropdownByClickOutside';

export default {
  name: 'Select',
  data() {
    return {
      isDropdownOpen: false,
      searchValue: '' || this.value,
    };
  },
  mixins: [closeDropdownByClickOutside],
  props: {
    value: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '',
    },
    optionsListName: {
      type: String,
      required: true,
    },
    fieldName: {
      type: String,
      required: true,
    },
    fontSize: {
      type: Number,
      default: 24,
    },
    width: {
      type: Number,
      default: 500,
    },
    minHeight: {
      type: Number,
      default: 40,
    },
    isMainSelect: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdownByClickOutside);
  },
  methods: {
    setSelectValue(value, index) {
      this.searchValue = value;
      this.isDropdownOpen = false;
      this.$emit('onSelect', value, this.fieldName, this.optionsListName, index);
    },
    openSelect() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    clearInput() {
      this.searchValue = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';
@import '../assets/styles/breakpoints';

* {
  box-sizing: border-box;
}

.select {
  position: relative;

  .input-label {
    font-size: 15px;
    padding: 0 5px;
    width: 100px;
  }

  ::placeholder {
    font-size: clamp(14px, 2vw, 18px);
  }

  input {
    width: 100%;
    min-width: 150px;
    height: 40px;
    background-color: $inputBackground;
    border: none;
    outline: none;
    font-size: 24px;
    font-weight: 400;
    padding: 15px 0 15px 25px;
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background-color: $disabled;
    }
  }
}

.main-select {
  ::placeholder {
    color: $black;
    font-size: 18px;
  };

  input {
    padding: 10px 0 10px 25px;
  }
}

.angle-arrow-down {
  width: 13px;
  height: 13px;
  position: absolute;
  right: 20px;
  bottom: 34%;
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
  border-bottom: 1px solid $grayBorder;
  border-top: 0;
  padding: 9px 0 10px 20px;
  cursor: pointer;

  &:hover {
    color: $blue;
    transition: color .3s;
  }
}

@media (max-width: 768px) {
  .select {
    input {
      height: 45px;
      padding: 15px 0 16px 15px;
    }
  }
}

@media (max-width: $mobile) {

  .select {
    max-width: 374px;

    ::placeholder {
      font-size: 16px;
    }

    input {
      height: 38px;
      font-size: 16px;
      padding: 15px 0 16px 15px;
      box-sizing: border-box;
    }

    .item {
      font-size: 16px;
    }
  }
}
</style>