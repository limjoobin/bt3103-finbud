<template>
    <div>
        <h1 style = "text-align: center">Posts</h1>
        <button  style ="margin-left: 40px; font-size: 20px; background-color: white; padding: 5px; border-radius: 5px" @click="$router.push('/communitypost')">Back</button>
        <div style ="padding: 10px;">
            <h2>Question:</h2>
            <h4 style ="margin-left: 30px">{{post[0].question}}</h4>
            <ul class = "ul">
                <li class ="li" v-for="comments in post" v-bind:key="comments.id">
                    <ul class ="ul" v-for ="(c,v) in comments.comments" v-bind:key = v>
                        <li class = "li" v-if = "v % 2 == 0">User: {{c}}</li>
                        <li class ="li2" v-else-if="v % 2 != 0">Comment: <p>{{c}}</p></li>
                    </ul>
                </li>
            </ul>
            <br><br><br>
        </div>
        <div style ="padding: 40px;">
            <p>Write your comment here</p>
            <br>
            <textarea v-model="comment" rows="7" cols="80px" required style='background-color: #E6F3FF'></textarea>
            <br><br>		
            <button class ="postComment" v-on:click="postComment()">Post</button>
        </div>
        <br>
    </div>
</template>

<script>
import firebase from '../../../firebase.js'
var database = firebase.firestore();

export default {
    data() {
        return {
            id: this.$route.query.id,
            post: [],
            comment: '',
            name : '',
            email: '',
        }
    },
    methods: {
        fetchPost:function(){
            database.collection('forum').doc(this.id).get().then(snapshot => {
            this.item = snapshot.data();
            this.post.push(this.item['question']);
        })},
        postComment: function() {
            var user = firebase.auth().currentUser;
            if (user != null) {
                this.name = user.displayName;
                this.email = user.email.split("@")[0];
                this.post[0].comments.push(this.email,this.comment)
                this.comment = '';
            }
            database.collection('forum').doc(this.id).update({
                'question.comments': this.post[0].comments
            })
        },
    },
    created() {
        document.title="FinBud - Community"
        this.fetchPost();
    },
}
</script>

<style scoped>
.postComment {
  width: 100px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  font-size: 20px;
  margin-left: 34.5%;
}

.ul {
  list-style-type: none;
  padding: 0;
  margin-left: 5px;
}
.li2 {
  flex-grow: 1;
  flex-basis: 300px;
  padding: 5px;
  border: 2px solid #222;
  margin: 10px;
  font-size: 20px;
  background-color: white;
}

.li2 *{
    background-color: white;
}

.li {
  flex-basis: 300px;
  margin: 10px;
  font-size: 20px;
}

</style>