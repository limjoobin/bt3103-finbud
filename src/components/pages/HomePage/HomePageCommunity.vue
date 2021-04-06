<template>
<div>
    <div class="container">
    <div id="pic">
        <img src="../../../assets/community.png" height="100%" width="100%">
    </div>
    <div style="background-color:white">
        <h1 style="font-family:Lustria; background-color:white">Join our exclusive community</h1>
        <ul style="background-color:white">
            <li>Discuss Personal Finance topic</li>
            <li>Discover good investment opportunity</li>
            <li>Ask Financial experts questions</li>
            <li>Learn to invest as a community</li>
        </ul>

        <button id="button1" style="align:center">Join the community</button>
    </div>
    </div>

</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container {
    background-color: white;
    height:25%;
    padding-top: 5%;
    padding-bottom: 5%;
    display: flex;
    justify-content: space-evenly;
}
#pic {
    border-radius: 25px;
    padding: 10px;
    width: 40%;
    height: 40%;
    background-color:  #A9D6FF;
}
li {
    margin: 5%;
    font-family: Lato;
    font-size: 20px;
    background-color:white
}

#button1{
    width:50%;
    height:15%;
    border-radius: 5px;
    border: 2% solid #a9b6ff;
    background-color: #a9b6ff;
    color:white;
    font-size:20px;
    text-align:center;  
}

#button1:hover{
background-color: lightskyblue;
  color: white;
  border-color: rgb(1, 34, 54); 
}
</style>