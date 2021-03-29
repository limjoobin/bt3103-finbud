<template>
    <header class="headerCom">
        <img class ="bcHeaderCom" v-bind:src="imageURL">
        <h1>{{title}}</h1>
        <p class ="headerIGDesc">{{msg}}</p>
    </header>
</template>

<script>
export default {
    name: 'Budget Calculator',
    data() {
        return {
            title: 'Community',
            imageURL: "https://drive.google.com/thumbnail?id=1NLZpjQmKKX2Wp228p3FDBW3dQpULWnQ0",
            msg: 'Interact and Exchange Financial Tips',
        }
    }
}
</script>

<style scoped>
.headerCom{
    background-color: #A9D6FF;
    content: "";
    display: table;
    width: 100%;
}

.bcHeaderCom {
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

.headerIGDesc{
    font-size: 15px;
    text-align: center;
    font-family: Lato;
}
</style>
