<template>
    <div>
        <h1>
            Good Morning {{ username }}!<br>
            What would you like to do today?
        </h1>
        <div id = 'dashboard'>
            <button class= 'dashboard-button'>Community News Feed</button>
            <button class= 'dashboard-button'>Dashboard</button>
            <button class= 'dashboard-button'>Chat with Expert</button>
            <button class= 'dashboard-button'>Financial Calculators</button>
        </div>
        <div id = 'sub-footer'>
            <h1>Exclusive Financial Deals</h1>
            <button class='financial-deals'>Credit Card Promotion</button>
            <button class='financial-deals'>Comprehensive Insurance Coverage</button>
            <button class='financial-deals'>High Yield Investment Returns</button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'AfterLogin',
    data (){
        return{
            username : 'USER1234',
        }
    }

}
</script>


<style>
    h1{
        font-family: Lustria;
        text-align: center;
        margin: 20px;
        line-height: 1.5;
    }
    #dashboard{
        width: 100%;
        min-width: 100%;
        margin: auto;
        text-align: center;
        display:table;
    }
    .dashboard-button{
        background-image:url('../assets/community.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-color: white;
        background-position: center;
        border-radius: 8px;
        font-family: Lato;
        width: 20%;
        min-width: 20%;
        height: 100%;
        min-height: 20%;
        padding: 20 0 10% 0;
        margin: 1%;
        display: table-cell;
        text-align:center;
        font-size: 20px;
    }
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