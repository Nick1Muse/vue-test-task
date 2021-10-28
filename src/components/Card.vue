<template>
  <div class="card">
    <img class="card-image" :src="cardData.largeImageURL" alt="card image" @click="goToCardInfoPage">
    <div class="tags" >
      <Tag v-for="(tag, i) in formattedTags" class="tag" :key="tag+i" :tagText="tag"/>
    </div>
    <Feedback :comments="cardData.comments" :likes="cardData.likes"/>
  </div>
</template>

<script>
import Tag from '../components/Tag';
import Feedback from '../components/Feedback';

export default {
  name: 'Card',
  components: {
    Tag,
    Feedback,
  },
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedTags() {
      return this.cardData.tags.split(', ');
    },
  },
  methods: {
    goToCardInfoPage() {
      this.$router.push(`/card-info/${this.cardData.id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #DAFFD8;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  transition: background-color .3s;

  &:hover {
    background-color: darken(#DAFFD8, 5);
    cursor: pointer;
  }

  img {
    max-width: 300px;
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    .tag {
      margin-top: 10px;

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>