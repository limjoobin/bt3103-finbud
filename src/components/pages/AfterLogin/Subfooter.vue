<template>
    <div id = 'sub-footer'>
        <h1>Exclusive Financial Deals</h1>
        <button id='credit-card-promo'>Credit Card Promotion</button>
        <button id='insurance'>Comprehensive Insurance Coverage</button>
        <button id='investment'>High Yield Investment Returns</button>
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
        padding: 2% 0 0 0 ;
        margin:0;
    }
    #sub-footer button{
        background-color: white;
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center;
        border:none;
        text-align:center;
        display: table-cell;
        width: 20%;
        min-width: 20%;
        padding: 20% 0 0 0;

        font-family: Lato;
        font-size: 20px;
    }


    #credit-card-promo{
        background-image:url('../../../assets/credit-card.png');
    }
    #insurance{
        background-image:url('../../../assets//insurance.png');
    }
    #investment{
        background-image:url('../../../assets/investment.png');
    }
</style>