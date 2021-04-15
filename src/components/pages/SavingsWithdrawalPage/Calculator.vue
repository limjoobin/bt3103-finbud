<template>
    <div id="calculator">
        <p id = 'estimated-time'><img src="../../../assets/clock.png">Estimated Time: 1 min</p>
        <br>
        <div id="info">
            <div id='inputs'>
                <p style="padding: 5%; font-family: Lustria;">Your Inputs</p>
                <p class = 'input-box' style='padding-top: 2%'> 
                    <label for='startingBalance'>Starting Balance ($) </label>
                    <!-- <input id = "startingBalance" type='number' v-model.trim.lazy.number="startingBalance" v-on:change="sendData"> -->
                    <input id = "startingBalance" type='number' v-model.trim.lazy.number="startingBalance">
                </p>
                <p class = 'input-box'> 
                    <label for='returnRate'>Annual Return Rate (%) </label>
                    <!-- <input id = "returnRate" type='number' v-model.trim.lazy.number="returnRate" v-on:change="sendData"> -->
                    <input id = "returnRate" type='number' v-model.trim.lazy.number="returnRate">
                </p>
                <p class = 'input-box'> 
                    <label for='duration'>Duration (in years) 
                        <div class="tooltip">(?)
                            <span class='tooltiptext'>
                                How many years would you be withdrawing this fund?
                            </span>
                        </div>

                    </label>

                    <!-- <input id = "duration" type='number' v-model.trim.lazy.number="duration" v-on:change="sendData"> -->
                    <input id = "duration" type='number' v-model.trim.lazy.number="duration">
                </p>
                <p class = 'input-box'> 
                    <label for='periodicWithdrawal'>Periodic Withdrawal ($) 
                        <div class="tooltip">(?)
                            <span class='tooltiptext'>
                                How much would you wish to withdraw everytime?
                            </span>
                        </div>

                    </label>
                    <!-- <input id = "periodicWithdrawal" type='number' v-model.trim.lazy.number="periodicWithdrawal" v-on:change="sendData"> -->
                    <input id = "periodicWithdrawal" type='number' v-model.trim.lazy.number="periodicWithdrawal">
                </p>

                <div class = 'freq'>
                    <div style="margin-bottom:1%;">
                        <p style="padding: 1%"> Periodic Withdrawal Frequency </p>
                       <div class="tooltip">(?)
                            <span class='tooltiptext'>
                                How many frequent would you be withdrawing from this fund?
                            </span>
                        </div>                
                    </div>
                        <input type="radio" id="radio1" value=1 v-model.number='frequency' checked> 
                        <label for="radio1">Yearly</label>
                        <input type="radio" id="radio2" value=4 v-model.number='frequency'>
                        <label for="radio2">Quarterly</label>
                        <input type="radio" id="radio3" value=12 v-model.number='frequency'>
                        <label for="radio3">Monthly</label>
                        <input type="radio" id="radio4" value=52 v-model.number='frequency'>
                        <label for="radio4">Weekly</label> 
                        <!-- <input type="radio" id="radio1" value=1 v-model.number='frequency' v-on:change="sendData" checked> 
                        <label for="radio1">Yearly</label>
                        <input type="radio" id="radio2" value=4 v-model.number='frequency' v-on:change="sendData">
                        <label for="radio2">Quarterly</label>
                        <input type="radio" id="radio3" value=12 v-model.number='frequency' v-on:change="sendData">
                        <label for="radio3">Monthly</label>
                        <input type="radio" id="radio4" value=52 v-model.number='frequency' v-on:change="sendData">
                        <label for="radio4">Weekly</label>  -->
                </div>
            </div>
            <hr>
            <div id= 'owned'>
                <p style='padding: 5%; font-family: Lustria;'>How much you will have after {{this.duration}} years:</p>
                <div class = 'owned-text'> 
                    <p>Remaining Balance:</p>
                    <p class = 'owned-value'> 
                        {{Math.round(investmentAmount[investmentAmount.length-1]) >=0 ? 
                        "$"+Math.round(investmentAmount[investmentAmount.length-1]): 
                        "Not enough"}}
                        
                        </p>
                </div>
                <div class = 'owned-text'> 
                    <p>Total Withdrawal:</p>
                    <p class = 'owned-value'> ${{totalWithdrawn}}</p>
                </div>
                <div class = 'owned-text'> 
                    <p>Time to $0.00:</p>
                    <p class = 'owned-value'> {{this.numWithdrawal}} years</p>
                </div>
            <div style="display:block; width:100%; margin-top:10%;">
                <button style="background:white; padding:1%; float:right; border-radius:25px 25px 25px 25px; font-size:large;" @click="sendData()">Calculate</button>
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
            startingBalance : 0,
            returnRate : 0,
            duration : 0,
            periodicWithdrawal : 0,
            frequency:1,
            investmentAmount: [0],
            numWithdrawal:0,
            totalWithdrawn:0
        }
    },
    methods:{
        sendData: function(){
            var remAmt = this.startingBalance;
            this.investmentAmount = [this.startingBalance]
            // let years = 0;
            this.numWithdrawal = 0;
            this.totalWithdrawn = 0;
            let yearlyAmountWithdrawn = this.periodicWithdrawal * this.frequency

            while(remAmt > 0 && this.numWithdrawal < this.duration){
                this.numWithdrawal +=1
                remAmt -= yearlyAmountWithdrawn
                this.totalWithdrawn += yearlyAmountWithdrawn
                remAmt *= (1+(this.returnRate/100))
                this.investmentAmount.push(remAmt)
            }
            console.log(this.investmentAmount[this.investmentAmount.length-1])
            this.$emit('chart-data',this.numWithdrawal,this.investmentAmount)
        }, withdrawalAmount(){
            return this.duration * this.frequency * this.periodicWithdrawal
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

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
  font-size: x-small;
  line-height: 120%;
  width:50%;
  min-width:250px;
  background-color: rgb(255, 255, 255);
  color: rgba(8, 35, 61, 0.685);
  text-align: center;
  border-radius: 6px;
 
  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>