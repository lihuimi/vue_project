<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="comments.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <comment-item v-for="comment in comments" :comment="comment" :delete-comment="deleteComment"></comment-item>
    </ul>
  </div>
</template>

<script>
  import CommentItem from './CommentItem.vue'
  export default {
    props:{
      comments: {
        type: Array,
        required: true
      },
      deleteComment:{
        type: Function,
        required: true
      }
    },

    components:{CommentItem}
  }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>
