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
            <div class = "questions">
                <div class ="question" v-for="post in posts" v-bind:key="post.id" v-on:click ="route(post.id)">
                    Asked by: {{post.question.user}}
                    <h4 style="margin-top:2%;">Question:</h4>
                    <div v-for = "p in post" v-bind:key ="p">
                        <p>{{p.question}}</p>
                    </div>      
                    <p style = "font-size: 15px; margin-top:4%;">Number of comments: {{post.question.comments.length/2}}</p>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
import firebase from '../../../firebase.js'
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

.questions{
    display: flex;
    flex-wrap: wrap;
}

.question{
    background:white;
    padding:2%;
    margin:2%;
    width: 25%;
    border-radius: 25px 25px 25px 25px ;
    box-shadow: 5px 10px 8px 10px #85c1fa;
}

.question:hover{
    box-shadow: 5px 10px 8px 10px #ffffff;
}

.question > *{
    background:white;
}

.question p{
    background:white;
}

</style>
