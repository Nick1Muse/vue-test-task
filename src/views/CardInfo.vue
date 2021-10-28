<template>
  <div class="card-info" v-if="cardData">
    <div class="info_container">
      <h1 class="title">Username: {{ cardData.user }}</h1>
      <h2 class="subtitle">Downloads: {{ cardData.downloads }}</h2>
      <h2 class="subtitle">Collections: {{ cardData.collections }}</h2>
    </div>
    <img class="img" :src="cardData.largeImageURL" alt="card image">
    <div class="tags">
      <Tag v-for="(tag, i) in formattedTags" class="tag" :key="tag+i" :tagText="tag"/>
    </div>
    <Feedback :comments="cardData.comments" :likes="cardData.likes"/>
  </div>
</template>

<script>
import Tag from '../components/Tag';
import Feedback from '../components/Feedback';

export default {
  name: 'CardInfo',
  components: {
    Tag,
    Feedback,
  },
  computed: {
    formattedTags() {
      return this.cardData.tags.split(', ');
    },
    cardData() {
      return this.$store.getters.getCardData(this.$route.params.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';

  .card-info {
    padding: 50px;
    height: 100vh;
    width: 100%;

    .tags {
      display: flex;
      justify-content: center;

      .tag {
        margin: 10px 0;

        &:not(:last-child) {
          margin-right: 25px;
        }
      }
    }

    .title, .subtitle {
      border-bottom: 1px solid $gray;
      max-width: 650px;
      width: 100%;
      margin: 10px auto;
      padding: 10px 10px 10px 0;
    }

    .img {
      max-width: 650px;
      width: 100%;
      margin: 30px auto;
      border-radius: 20px;
      object-fit: cover;
      display: block;
      text-align: center;
    }
  }
</style>