<template>
    <div>
        <h1 class = "communityHeader"> Finbud Forum</h1>
        <div class ="forum">
            <nav class="navbar navbar-default navbar-collapse">
                <form class="nav navbar-nav pull-right navbar-form">
                    <div class="form-group">
                        <input type="text" style = "padding: 5px; margin-left: 10px;" height = "48" size="50" placeholder="Search"/>
                        <button class="btn-search">Search</button>
                    </div>
                </form>
            </nav>
            <ul class = "ul">
                <li class ="li" v-for="post in posts" v-bind:key="post.id" v-on:click ="route(post.id)">
                    Asked by: {{post.question.user}}
                    <h4>Question:</h4>
                    <ul v-for = "p in post" v-bind:key ="p">
                        <p>{{p.question}}</p>
                    </ul>      
                    <p style = "font-size: 15px;">Number of comments: {{post.question.comments.length/2}}</p>
                </li>
            </ul>    
        </div>
    </div>
</template>

<script>
import firebase from '../../../../firebase.js'
var database = firebase.firestore();
    export default {
        data() {
            return {
                posts: [],
            }
        },
        methods: {
            fetchPosts: function() {
                database.collection('forum').get().then((querySnapShot)=>{
                let item={}
                querySnapShot.forEach(doc=>{
                    item=doc.data()
                    item.show=false
                    item.id=doc.id
                    this.posts.push(item) 
                    })      
                })    
            },
            route(p) {
                //let doc_id = event.target.getAttribute("key");
                //alert(p)
                //this.$router.push({name: 'Posts', params: {document_id: p}})
                this.$router.push({name: 'Posts', query: {id: p}});
            }
        },
        created() {
            this.fetchPosts();
        }
    }
</script>

<style scoped>

.communityHeader {
    text-align: center;
    font-size: 45px;
    color: #1B4F80
}

.btn-search {
    margin-left: 10px;
    font-size: 20px;
}

.ul {
  list-style-type: none;
  padding: 0;
}
.li {
  flex-grow: 1;
  flex-basis: 300px;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
  font-size: 20px;
}

</style>
