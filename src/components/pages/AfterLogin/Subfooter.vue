<template>
    <div id = 'sub-footer'>
        <h1>Exclusive Financial Deals</h1>
        <button class='financial-deals'>Credit Card Promotion</button>
        <button class='financial-deals'>Comprehensive Insurance Coverage</button>
        <button class='financial-deals'>High Yield Investment Returns</button>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
}
</script>

<style>
    #sub-footer{
        background-color: white;
        width: 100%;
        margin-top: 20px;
        padding-bottom:20px;
        text-align: center;
    }
    #sub-footer h1{
        background-color: white;
        padding: 20px;
    }
    .financial-deals{
        background-color: white;
        background-image:url('https://cdn.pling.com/img/d/c/0/2/e4fff450a6306e045f5c26801ce31c3efaeb.jpg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        border:none;
        text-align:center;
        display: table-cell;
        width: 20%;
        min-width: 20%;
        padding: 10% 0 20 0;

        font-family: Lato;
        font-size: 20px;
    }
</style>