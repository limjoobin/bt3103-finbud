<template>
<div>
    <div class="container">
    <div id="pic">
        <img src="../assets/community.png" height="320px" width="400px">
    </div>
    <div>
        <h1 style="font-family:Lustria">Join our exclusive community</h1>
        <ul>
            <li>Discuss Personal Finance topic</li>
            <li>Discover good investment opportunity</li>
            <li>Ask Financial experts questions</li>
            <li>Learn to invest as a community</li>
        </ul>
        <button id="button1">Join the community</button>
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
    height:400px;
    padding-top: 40px;
    display: flex;
    justify-content: space-evenly;
}
#pic {
    border-radius: 25px;
    padding: 10px;
    width: 405px;
    height: 325px;
    background-color:  #A9D6FF;
}
li {
    margin: 20px;
    font-family: Lato;
    font-size: 20px;
}

#button1{
    width:180px;
    height:60px;
    border-radius: 10px;
    border: 10px solid #a9b6ff;
    background-color: #a9b6ff;
    color:white;
    font-size:15px;
    text-align:center;  
}
</style>