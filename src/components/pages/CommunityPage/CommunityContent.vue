<template>
    <div>
        <br><br>
        <div class ="topics">
            <br>
            <p style ="font-size: 30px; color: #0E4070">Explore Topics</p>
            <button class ="exptopic">Banking</button>
            <button class ="exptopic">Cards</button>
            <button class ="exptopic">Investments</button>
            <button class ="exptopic">Insurance</button>
            <button class ="exptopic">...</button>
        </div>
        <br><br>
        <div class ="forum">
            <br>
            <p>Top Questions</p>
            
            <ol class="rolldown-list" id="myList">
                <li v-for="item in items" v-bind:key="item.question">
                    <h4 style ="padding: 10px">{{item.question.question}}</h4>
                    Comments: {{item.question.comments.length}}
                </li>
                <br>
            </ol>
            
        </div>
        <h1 style ="text-align: center;"> See more Questions </h1>
        <div class ="askQn">
            <br>
            <p style ="font-size: 30px;">Ask a Question</p>
            <textarea name="textarea" style = "background-color: #E6F3FF" v-model.trim.lazy="textAreaValue"></textarea>
            <br><br>
            <button class ="submitQn" v-on:click="askQn()">Submit</button>
            <br><br>
        </div>
        <br><br>
    </div>
</template>

<script>

import database from '../../../../firebase.js'

export default {
    data() {
        return {
            img: "https://drive.google.com/thumbnail?id=1mMiIhrHB6jV3WyWr8eZl-ZmWg04UeTTw",
            textAreaValue: "",
            question: {
                ques: [],
            },
            items: [],
        }
    },
    methods: {
        investGrowth: function() {
            this.$router.push('/InvestmentGrowth'); 
        },
        askQn: function() {
            this.question.ques.push(this.textAreaValue,[]);
            database.collection('question').add({
                question: {
                    "question": this.question.ques[0],
                    "comments": this.question.ques[1]
                }
            }).then(()=>{location.reload()});
        },
        fetchItems:function(){
            database.collection('question').get().then((querySnapShot)=>{
            let item={}
            querySnapShot.forEach(doc=>{
                item=doc.data()
                item.show=false
                item.id=doc.id
                this.items.push(item) 
                })      })    
        },
    },
    components:{
    },
    created(){
        this.fetchItems()    
    },
}
</script>

<style scoped>

.topics {
    background-color: white;
    text-align: center;
    border-radius: 50px;
    width: 80%;
    margin-left: 10%;
}

.forum {
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
}

.exptopic {
    background-color: #A9D6FF;
    font-size: 30px;
    color: #0E4070;
    margin: 20px;
    border-radius: 10px;   
}

.submitQn {
    background-color: #1B4F80;
    color: white;
    font-size: 20px;
    margin-left: 58%;
    border-radius: 30px;
}

textarea {
  left:10px; top:10px;
  width:  calc(50vw - 20px);
  height: calc(15vh - 20px);
  resize: none;
  font-size: 20px;
}

ol {
  counter-reset: section;
}

li { 
  list-style-type: none;
  position: relative;
  font-size: 20px;
  background: rgb(196, 196, 230);
  color: #0E4070;
  width: 50%;
  margin-left: 25%;
  border-radius: 20px;
}

</style>