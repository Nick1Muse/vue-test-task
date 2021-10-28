<template>
  <div class="main">
    <h1 class="title">Cards</h1>
    <Input class="search-input" placeholder="Press enter to search..." @onSearchSubmit="filterByTags"/>
    <div class="sort_container">
      <Select
          class="select"
          :items="likeOptions"
          placeholder="Sort by likes"
          fieldName="sortByLikesValue"
          @onSelect="sortBySelectValue"
      />
      <Select
          class="select"
          :items="commentsOptions"
          placeholder="Sort by comments"
          fieldName="sortByCommentsValue"
          @onSelect="sortBySelectValue"
      />
      <Button buttonName="Clear filters" @click.native="resetFilters"/>
    </div>
    <template>
      <div class="cards_container" v-if="!isLoading">
        <Card
            v-for="(card, i) in filteredCardsList"
            class="card"
            :key="card + i"
            :cardData="card"
        />
      </div>
    </template>
  </div>
</template>

<script>
import Card from '../components/Card';
import Select from '../components/Select';
import Button from '../components/Button';
import Input from '../components/Input';

export default {
  name: 'Main',
  components: {
    Card,
    Select,
    Button,
    Input,
  },
  data() {
    return {
      likeOptions: ['more likes', 'less likes'],
      commentsOptions: ['more comments', 'less comments'],
      isLoading: true,
      sortByLikesValue: null,
      sortByCommentsValue: null,
      searchInputValue: null,
      filteredCardsList: null,
      tagsTimeout: null,
      sortsTimeout: null,
    }
  },
  mounted() {
    this.getCardsList();
  },
  beforeDestroy() {
    clearTimeout(this.tagsTimeout);
    clearTimeout(this.sortsTimeout);
  },
  methods: {
    getCardsList() {
      if (!this.$store.state.cardsList.length) {
        this.$store.dispatch('GET_CARDS_LIST').then(() => {
          this.filteredCardsList = [...this.$store.state.cardsList];
        }).then(() => {
          this.isLoading = false;
        });
        return;
      }
      this.filteredCardsList = [...this.$store.state.cardsList];
      this.isLoading = false;
    },
    filterByTags(value) {
      this.tagsTimeout =  setTimeout(() => {
        this.filteredCardsList = [...this.$store.state.cardsList];
        this.filteredCardsList = this.filteredCardsList.filter((card) => card.tags.includes(value));
      }, 300);
    },
    resetFilters() {
      this.filteredCardsList = [...this.$store.state.cardsList];
    },
    sortCards(propName, isFromMoreToLess = true) {
      this.sortsTimeout = setTimeout(() => {
        if (isFromMoreToLess) {
          this.filteredCardsList = this.filteredCardsList.sort((a, b) => b[propName] - a[propName]);
          return;
        }
        this.filteredCardsList = this.filteredCardsList.sort((a, b) => a[propName] - b[propName]);
      }, 300);
    },
    sortBySelectValue(value, fieldName) {
      this[fieldName] = value;
      switch(value) {
        case 'more comments':
          this.sortCards('comments');
          break;
        case 'less comments':
          this.sortCards('comments', false);
          break;
        case 'more likes':
          this.sortCards('likes');
          break;
        case 'less likes':
          this.sortCards('likes', false);
          break;
          default:
        this.filteredCardsList = [...this.$store.state.cardsList];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
    padding: 25px;

    .title {
      text-align: center;
      font-size: 38px;
    }

    .search-input {
      margin: 25px auto;
    }

    .sort_container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .select {
        margin: 20px;
        width: 100%;

        &:not(last-child) {
          margin-right: 25px;
        }
      }
    }

    .cards_container {
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 150px;

      .card {
        margin: 10px;
      }
    }
  }
</style>