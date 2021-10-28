<template>
  <div class="feedback_section">
    <div class="feedback-info">
      <img class="feedback-icon" src="../assets/images/icons/comment.png" alt="comments icon">
      <span class="feedback-detail">{{ comments }}</span>
    </div>
    <div class="feedback-info">
      <img class="feedback-icon" src="../assets/images/icons/like.png" alt="likes icon">
      <span class="feedback-detail">{{ likes }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  props: {
    comments: {
      type: Number,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors';

.feedback_section {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .feedback-info {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-right: 10px;
    }

    .feedback-icon {
      width: 40px;
      height: 40px;
      margin-right: 4px;
      object-fit: cover;
    }
  }

  .feedback-detail {
    color: $black;
  }
}
</style>