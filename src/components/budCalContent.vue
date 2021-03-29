<template>
    <div style ="background-color: #B9DEFF;">
        <img class ="timer" v-bind:src="img">
        <p class ="b1">{{content}}</p>
        
        <div class ="budCon1">
            <table class ="yourBudget">
                <tr class ="tr1">
                    <p style = "margin-left: 30px;font-size: 30px; color: #0E4070">Your Budget</p>
                    <td>
                        <p style = "margin: 1px; font-size: 30px; color: #0E4070">How much you have for:</p>
                    </td>
                </tr>
                <tr>
                    <th class ="th1">Your take home pay:
                        <p></p>
                        <input type="number" v-model.trim.lazy="amount" style = "width:100%; height: 30px; border-radius: 5px; background-color: #D7ECFF" required>
                     </th>
                    <td class ="test">
                        <p style = "margin: 0px; font-size: 20px;">Necessities:</p>
                        <p style = "font-size: 30px">${{value1}}
                        <p style = "margin: 0px; font-size: 20px">Wants:</p>
                        <p style = "font-size: 30px">${{value2}}
                        <p style = "margin: 0px; font-size: 20px;">Savings and investing:</p>
                        <p style = "font-size: 30px">${{value3}}</p>
                    </td>
                </tr>
                <tr>
                    <th class ="th2">
                        <p>The 50/30/20 budget rule:</p>
                        <label style ="font-size: 8px;">Senator Elizabeth Warren popularized the so-called </label>
                        <label style ="font-size: 8px;">50/30/20 budget rule" in her book, All Your Worth: </label>
                        <br>
                        <label style ="font-size: 8px;">The Ultimate Lifetime Money Plan. The basic rule is </label>
                        <label style ="font-size: 8px;">to divide up after-tax income and allocate it to spend: </label>
                        <br>
                        <label style ="font-size: 8px;">50% on needs, 30% on wants, and socking away 20% to savings.</label>
                    </th>
                    <td>
                        <p style = "margin: 0px; font-size: 10px;">Login or Signup now to save your progress!</p>
                    </td>
                </tr>
            </table>
        </div>
        <div class ="budCon2">
            <p style ="text-align: center; padding-top: 10px;font-size: 50px; color: #0E4070">You might be interested in...</p>
            <button class ="navBut" @click="$router.push('InvestmentGrowth')">Calculate Your Investment Growth</button>
            <button class ="navBut" @click="$router.push('CommunityContent')">Find out how long can your investment last you for</button>
            <button class ="navBut">Map out your pathway to Financial Freedom</button>
        </div>
        <!--
        <table class ="yourBudget">
          <tr>
            <p style = "text-align:center; font-size: 20px; color: #0E4070">Your Budget</p>
            <td>
              <p style = "margin: 1px; font-size: 20px; margin-left: 20px; color: #0E4070">How much you have for:</p>
            </td>
          </tr>
          <tr>
            <th style = "position: relative; bottom: 140px; left: 15%; margin-bottom: 30px; color: #0E4070; font-size: 20px">Your take home pay:
                <p></p>
                <input type="number" id="amount" style = "width:45%; height: 30px; border-radius: 5px; background-color: #D7ECFF" required>
            </th>
            <td class ="test">
              <p style = "margin: 0px; font-size: 20px;">Necessities:</p>
              <p style = "font-size: 30px">${{value1}}
              <p style = "margin: 0px; font-size: 20px">Wants:</p>
              <p style = "font-size: 30px">${{value2}}
              <p style = "margin: 0px; font-size: 20px;">Savings and investing:</p>
              <p style = "font-size: 30px">${{value3}}</p>
            </td>
          </tr>
          <tr>
            <th style = "text-align:center">
                <b>The 50/30/20 budget rule:</b>
                <br>
                <label style ="font-size: 10px;">Senator Elizabeth Warren popularized the so-called </label>
                <br>
                <label style ="font-size: 10px;">50/30/20 budget rule" in her book, All Your Worth: </label>
                <label style ="font-size: 10px;">The Ultimate Lifetime Money Plan. The basic rule is </label>
                <br>
                <label style ="font-size: 10px;">to divide up after-tax income and allocate it to spend: </label>
                <br>
                <label style ="font-size: 10px;">50% on needs, 30% on wants, and socking away 20% to savings.</label>
            </th>
            <td>
              <p style = "margin: 0px; font-size: 10px;">Login or Signup now to save your progress!</p>
            </td>
          </tr>
        </table>
        -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            content: 'Estimated time: 1 min',
            img: "https://drive.google.com/thumbnail?id=1mMiIhrHB6jV3WyWr8eZl-ZmWg04UeTTw",
            amount: 0,
            value1: 0,
            value2: 0,
            value3: 0,
        }
    },
    methods: {
        investGrowth: function() {
            this.$router.push('/InvestmentGrowth'); 
        },
        CommunityContent: function() {
            this.$router.push('/CommunityContent'); 
        }
    },
    watch: {
        amount: function() {
            this.value1 = this.amount*0.50;
            this.value2 = this.amount*0.30;
            this.value3 = this.amount*0.20;
        }
    },
    components: {
        
    } 
}
</script>

<style scoped>

.budCon1{
    background-color: #B9DEFF;
    
}

.budCon2{
    background-color: #A9D6FF;
    text-align: center;
    padding-bottom: 50px;
}

.timer{
    height: 40px;
    width: 40px;
    position: relative;
    top: 45px;
    left: 290px;
}

.b1{
    font-size: 15px;
    font-family: Lato;
    margin-left: 340px;
}

.yourBudget{
    background-color: #A9D6FF;
    margin-left: 290px;
}

.th1{
    text-align: center;
    padding: 30px;
    font-size: 20px;
}

.th2{
    padding:15px;
}

.tr1{
    margin-left: 50px;
}

table {
    border-collapse: collapse;
    margin-left: 65px;
    margin: 0;
    width: 60%;
}
    
td, th {
      border: 0px solid #dddddd;
      text-align: center;
      font-size: 10px;
}

.test {
    padding: 0;
    color: #0E4070;
    text-align: center;
}

.navBut{
    text-align: center;
    font-size: 30px;
    padding: 5px;
    margin-left: 85px;
    height: 230px;
    width: 200px;
    border-radius: 12px;
    color: #0E4070;
}
</style>

