<template>
    <div id="calculator">
        <p id = 'estimated-time'><img src="../../../assets/clock.png">Estimated Time: 1 min</p>
        <br>
        <div id="info">
            <div id='inputs'>
                <p style="padding: 5%; font-family: Lustria;">Your Inputs</p>
                <p class = 'input-box' style='padding-top: 2%'> 
                    <label for='startingBalance'>Starting Balance ($) </label>
                    <input id = "startingBalance" type='number' v-model.trim.lazy.number="startingBalance" v-on:change="sendData">
                </p>
                <p class = 'input-box'> 
                    <label for='returnRate'>Annual Return Rate (%) </label>
                    <input id = "returnRate" type='number' v-model.trim.lazy.number="returnRate" v-on:change="sendData">
                </p>
                <p class = 'input-box'> 
                    <label for='duration'>Duration (in years) </label>
                    <input id = "duration" type='number' v-model.trim.lazy.number="duration" v-on:change="sendData">
                </p>
                <p class = 'input-box'> 
                    <label for='periodicWithdrawal'>Periodic Withdrawal ($) </label>
                    <input id = "periodicWithdrawal" type='number' v-model.trim.lazy.number="periodicWithdrawal" v-on:change="sendData">
                </p>

                <div class = 'freq'>
                   <p style="padding: 1%"> Periodic Withdrawal Frequency</p>
                        <input type="radio" id="radio1" value=1 v-model.number='frequency' v-on:change="sendData" checked> 
                        <label for="radio1">Yearly</label>
                        <input type="radio" id="radio2" value=4 v-model.number='frequency' v-on:change="sendData">
                        <label for="radio2">Quarterly</label>
                        <input type="radio" id="radio3" value=12 v-model.number='frequency' v-on:change="sendData">
                        <label for="radio3">Monthly</label>
                        <input type="radio" id="radio4" value=52 v-model.number='frequency' v-on:change="sendData">
                        <label for="radio4">Weekly</label> 
                </div>
            </div>
            <hr>
            <div id= 'owned'>
                <p style='padding: 5%; font-family: Lustria;'>How much you will have:</p>
                <div class = 'owned-text'> 
                    <p>Total Balance:</p>
                    <p class = 'owned-value'> ${{balance}}</p>
                </div>
                <div class = 'owned-text'> 
                    <p>Total Withdrawal:</p>
                    <p class = 'owned-value'> ${{withdrawal}}</p>
                </div>
                <div class = 'owned-text'> 
                    <p>Time to $0.00:</p>
                    <p class = 'owned-value'> {{timeLeft}} years</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SavingsWithdrawalCalculator',
    components:{

    },
    data (){
        return{
            startingBalance : 10000,
            returnRate : 0,
            duration : 0,
            periodicWithdrawal : 0,
            frequency:0,
        }
    },
    watch:{
        frequency: function(val){
            this.frequency = val;
        }
    },
    computed:{
        timesteps: function(){
            let total_timesteps = this.duration * this.frequency;
            return total_timesteps
        },
        balance: function(){
            let amount = this.startingBalance * Math.pow((1+ this.returnRate), this.duration);
            return amount.toFixed(2)
        },
        withdrawal: function(){
            let total_withdrawal = this.duration * this.frequency * this.periodicWithdrawal;
            return total_withdrawal.toFixed(2)
        },
        timeLeft: function(){
            let yearlyWithdrawal = this.frequency * this.periodicWithdrawal;
            let time = this.balance / yearlyWithdrawal;
            return time.toFixed(2);
        }

    },
    methods:{
        sendData: function(){
            var remAmt = this.balance;
            var savingsAmount = []
            let numWithdrawal = 0;
            for (let i = 0; i < this.timesteps; i++){
                if(remAmt <=0){
                    remAmt = 0;
                    
                    continue
                }else{
                    remAmt = remAmt - this.periodicWithdrawal;
                }
                savingsAmount.push(remAmt)
                numWithdrawal++;
                
            }
            this.$emit('chart-data', numWithdrawal, savingsAmount)
        }
    }

}


</script>

<style >

*{
    font-family: Lato;
}

#calculator{
    padding: 1% 10% 10% 10%;
    background-color:#B9DEFF;
    display: lex;
}

#estimated-time{
    padding: 0 0 0 2%;
    font-family: Lato;
    width:100%;
    background-color:#B9DEFF;
}

#calculator img{
    background-color:#B9DEFF;
    width:3%;
    height:auto;
    margin: 0 1% 0 0;
    
}

#info{
    display: flex;
    flex-wrap: wrap;
}

#inputs, #owned{
    flex-basis: 49%;
}

#inputs > p, #owned > p{
    font-size: 30px;
}
.input-box{
    padding: 0 10% 5% 10%;
}

.input-box label{
    font-size:20px;
}

.input-box input{
    width: 40%; 
    height: 30px; 
    border-radius: 5px;
    background-color: #D7ECFF;
    text-align: center;
    float: right;
    font-size: 20px;
}
.freq{
    text-align: center;
    padding: 10% 0 15% 0;
}
input[type=radio] {
    display:none; 
    margin:10px;
}

input[type=radio] + label {
    display:inline-block;
    margin:-2px;
    padding: 4px 12px;
    background-color: #e7e7e7;
    border-color: #ddd;
    color: #0E4070;
    
}

input[type=radio]:checked + label { 
   background-image: none;
   background-color:#84C3FE;
}
.owned-text{
    padding: 2% 0 2% 5%;
    font-size: 20px;
}
.owned-value{
    padding: 0 0 0 5%;
    font-size: 40px;
}



</style>