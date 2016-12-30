<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Comment-add :add-comment="addComment"></Comment-add>
      <Comment-list :comments="comments" :delete-comment="deleteComment"></Comment-list>
    </div>
  </div>
</template>

<script>
  import CommentAdd from './CommentAdd.vue'
  import CommentList from './CommentList.vue'
  export default {

    data(){
      return {
        comments:[
          {username: 'li', content: 'aaaaaa', id: Date.now()},
          {username: 'chen', content: 'bbbbbb', id: Date.now()+1}
        ]
      }
    },
    methods:{
      addComment(comment){
        this.comments.unshift(comment);
      },
      deleteComment(comment){
        this.comments.$remove(comment);
      }
    },
    components:{CommentAdd, CommentList}
  }
</script>

<style>

</style>
