<template>
    <header class="headerIG">
        <img class ="bcHeaderIG" v-bind:src="imageURL" @click="$router.push('/')">
        <h1>{{title}}</h1>
        <p class ="headerIGDesc">{{msg}}</p>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'Investment Growth Calculator',
            imageURL: "https://drive.google.com/thumbnail?id=1o2xqgpQnavxYLkg-NzD2oeu7-ELyuta0",
            msg: 'Use this calculator to figure out how much your investment can amount to',
        }
    }
}
</script>

<style scoped>
.headerIG{
    background-color: #A9D6FF;
    content: "";
    display: table;
    width: 100%;
}

.bcHeaderIG {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 30px;
    width: 10%;
    height: 10%;
}

h1{
    color: #0E4070;
    font-family: Lustria;
    text-align: center;
    font-weight: normal;
    font-size: 40px;
}

.headerIGDesc{
    font-size: 15px;
    text-align: center;
    font-family: Lato;
    padding-bottom: 5%;
}
</style>
