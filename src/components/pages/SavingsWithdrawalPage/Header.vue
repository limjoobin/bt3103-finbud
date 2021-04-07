<template>
    <header>
        <img src= '../../../assets/logo.png'>
        <h1>{{title}}</h1>
        <p>{{msg}}</p>
    </header>
</template>

<script>
export default {
    name: 'Budget Calculator',
    data() {
        return {
            title: 'Savings Withdrawal Calculator',
            msg: 'Use this calculator to figure out how much your investment can amount to',
        }
    }
}
</script>

<style>
header{
    background-color: #A9D6FF;
    content: "";
    display: table;
    width: 100%;
}

header img {
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

header p{
    font-size: 15px;
    text-align: center;
    font-family: Lato;
}
</style>
