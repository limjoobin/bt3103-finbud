<template>
    <header class="header">
        <img class ="bcHeader" v-bind:src="imageURL">
        <h1>{{title}}</h1>
        <p class ="headerDesc">{{msg}}</p>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'Budget Calculator',
            imageURL: "https://drive.google.com/thumbnail?id=1o2xqgpQnavxYLkg-NzD2oeu7-ELyuta0",
            msg: 'Use this calculator to estimate how you should allocate your income',
        }
    }
}
</script>

<style scoped>
.header{
    background-color: #A9D6FF;
    content: "";
    display: table;
    width: 100%;
}

.bcHeader {
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
    font-size: 20px;
}

.headerDesc{
    font-size: 15px;
    text-align: center;
    font-family: Lato;
}
</style>
