<template>
    <div id = 'dashboard'>
        <button id='community-button' v-on:click="$router.push('community')">Community News Feed</button>
        <button id='dashboard-button' v-on:click="$router.push('dashboard')">Dashboard</button>
        <button id='chat-button'>Chat with Expert</button>
        <button id='financial-calculator-button' v-on:click="$router.push('financial_pathway')">Financial Calculators</button>
    </div>
</template>

<script>
export default {
	data (){
		return{}
	},
}
</script>

<style>
    #dashboard{
        width: 100%;
        min-width: 100%;
        height: 300px;
        padding:1% 0 1% 0;
        margin: 0;
        text-align: center;
        display:table;
    }
    #dashboard button{
        background-repeat: no-repeat;
        background-size: 80%;
        background-color: white;
        background-position: center;
        border-radius: 8px;
        font-family: Lato;
        width: 20%;
        min-width: 20%;
        height: 100%;
        min-height: 100%;
        padding: 20% 0 0 0;
        margin: 1%;
        display: inline-block;
        align-items: bottom;
        line-height: 20px;
        font-size: 20px;
        transition-duration: 0.4s;
        
    }
    #dashboard button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }

    #community-button{
        background-image:url('../../../assets/community.png');
    }
    #dashboard-button{
        background-image:url('../../../assets/dashboard-button.png');
    }
    #chat-button{
        background-image:url('../../../assets/chat-button.png');
    }
    #financial-calculator-button{
        background-image:url('../../../assets/financial-calculator-button.png');
    }
</style>