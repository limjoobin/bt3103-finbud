<template>
    <div>
        <br><br>
        <div class ="forumc">
            <br>
            <p style ="background-color: white; border-radius: 50px;">Latest Questions</p>
            <br>
            <ol class="myList" style ="width: 80%; margin-left: 10%; border-radius: 50px">
                <li class ="li4" v-for="item in items" v-bind:key="item.id" style="padding-bottom: 2%;">
                    <br>
                    Asked by {{item.question.user}}
                    <h4 style ="padding: 10px;">{{item.question.question}}</h4>
                    Comments: {{item.question.comments.length/2}}
                    <br>
                    <button style='background:white; padding:2%; border-radius:25px 25px 25px 25px;' @click='expand(item.id)'>Expand</button>
                </li>
                <br>
            </ol>
            <br>
            <button style="background-color: #000080; color:white; padding:2%; margin-bottom:1%; border-radius:25px 25px 25px 25px;"  @click="$router.push('/communitypost')"> See more Questions </button>
        </div>

        <div class ="askQn">
            <br>
            <p style ="font-size: 30px; background-color: white; border-radius: 50px">Ask a Question</p>
            <br>
            <textarea name="textarea" style = "background-color: #E6F3FF" v-model.trim.lazy="textAreaValue"></textarea>
            <br><br>
            <button class ="submitQn" v-on:click="askQn()">Submit</button>
            <br><br>
        </div>
        <br><br>
    </div>
</template>

<script>

import firebase from '../../../firebase.js'
var database = firebase.firestore();

export default {
    data() {
        return {
            img: "https://drive.google.com/thumbnail?id=1mMiIhrHB6jV3WyWr8eZl-ZmWg04UeTTw",
            textAreaValue: "",
            question: {
                ques: [],
            },
            items: [],
            user: '',
        }
    },
    methods: {
        investGrowth: function() {
            this.$router.push('/InvestmentGrowth'); 
        },
        askQn: function() {
            this.question.ques.push(this.textAreaValue,[]);
            database.collection('forum').add({
                question: {
                    "question": this.question.ques[0],
                    "comments": this.question.ques[1],
                    "user": this.user,
                    'timestamp': firebase.firestore.FieldValue.serverTimestamp()
                }
            }).then(()=>{location.reload()});
        },
        expand:function(docId){
            this.$router.push({name: 'Posts', query: {id: docId}});
        },
        fetchItems:function(){
            database.collection('forum').orderBy('question.timestamp','desc').limit(5).get().then((querySnapShot)=>{
            let item={}
            querySnapShot.forEach(doc=>{
                item=doc.data()
                item.show=false
                item.id=doc.id
                this.items.push(item) 
                })
             
            }).then(()=>console.log(this.items))
                
        },
        
    },
    components:{
    },
    created(){
        this.fetchItems();
        var user = firebase.auth().currentUser
        var useremail = user.email;
        database.collection('user').get().then((querySnapShot)=>{
            querySnapShot.forEach(doc=>{
                var item = doc.data();
                for (const i in item) {
                    if (item[i] == useremail) {
                        this.user = item['username'];
                    }
                }
            })      
        });
    },
}
</script>

<style scoped>

.topicscc {
    background-color: white;
    text-align: center;
    border-radius: 50px;
    width: 80%;
    margin-left: 10%;
}

.forumc {
    background-color: white;
    text-align: center;
    border-radius: 50px;
    width: 80%;
    margin-left: 10%;
    font-size: 30px;
}

.askQn {
    background-color: white;
    text-align: center;
    border-radius: 50px;
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
}

.exptopic {
    background-color: #A9D6FF;
    font-size: 30px;
    color: #0E4070;
    margin: 20px;
    border-radius: 20px;
    padding: 10px;
}

.submitQn {
    background-color: #1B4F80;
    color: white;
    font-size: 20px;
    margin-left: 55%;
    border-radius: 30px;
    padding: 10px;
}

textarea {
  left:10px; top:10px;
  width:  calc(50vw - 20px);
  height: calc(15vh - 20px);
  resize: none;
  font-size: 20px;
}

.myList {
  counter-reset: section;
}

.li4 { 
  list-style-type: none;
  font-size: 20px;
  background: #A9D6FF;
  color: #0E4070;
  width: 50%;
  margin-left: 25%;
  border-radius: 20px;
  border-bottom: solid 0.5px #43a1fa88;
}

</style>
