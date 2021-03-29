<template>
    <div style ="background-color: #B9DEFF;">
        <img class ="timer" v-bind:src="img">
        <p class ="b1">{{content}}</p>
        
        <div class ="budCon1">
            <table class ="yourBudget">
                <tr class ="tr1">
                    <p style = "margin-left: 30px;font-size: 30px; color: #0E4070">Your Inputs</p>
                    <td>
                        <p style = "margin: 1px; font-size: 30px; color: #0E4070">How much you have:</p>
                    </td>
                </tr>
                <tr>
                    <th class ="thIG1">
                        <label>Starting Balance</label>
                        <input type="number" v-model.trim.lazy="startingBalance" style = "width:50%; height: 30px; border-radius: 5px; background-color: #D7ECFF" required>
                        <br><br>
                        <label>Annual Return Rate (%)    </label>
                        <input type="number" v-model.trim.lazy="Arr" style = "width:50%; height: 30px; border-radius: 5px; background-color: #D7ECFF" required>
                        <br><br>
                        <label>Duration</label>
                        <input type="number" v-model.trim.lazy="Duration" style = "width:50%; height: 30px; border-radius: 5px; background-color: #D7ECFF" required>
                        <br><br>
                        <label>Periodic Addtion</label>
                        <input type="number" v-model.trim.lazy="Pa" style = "width:50%; height: 30px; border-radius: 5px; background-color: #D7ECFF" required>
                     </th>
                    <td class ="test">
                        <p style = "margin: 0px; font-size: 20px;">Investment Value:</p>
                        <p style = "font-size: 30px">${{value1}}
                        <p style = "margin: 0px; font-size: 20px">Contribution:</p>
                        <p style = "font-size: 30px">${{value2}}
                        <p style = "margin: 0px; font-size: 20px;">Profit:</p>
                        <p style = "font-size: 30px">${{value3}}</p>
                    </td>
                </tr>
                <tr>
                    <th class ="th2">
                        <p>Periodic Addition Frequency</p>
                        <input type="radio" id="radio1" @change= "onChangeYearly()" name="radios" value="all" checked> 
                        <label for="radio1">Yearly</label>
                        <input type="radio" id="radio2" @change= "onChangeQuarterly()" name="radios" value="false">
                        <label for="radio2">Quarterly</label>
                        <input type="radio" id="radio3" @change= "onChangeMonthly()" name="radios" value="true">
                        <label for="radio3">Monthly</label>
                        <input type="radio" id="radio4" @change= "onChangeWeekly()" name="radios" value="true">
                        <label for="radio4">Weekly</label>
                    </th>
                    <td>
                        <p style = "margin: 0px; font-size: 10px;">Login or Signup now to save your progress!</p>
                    </td>
                </tr>
            </table>
            <igchart :data="data" :options="chartOptions"/>
        </div>
        <div class ="budCon2">
            <p style ="text-align: center; padding-top: 10px;font-size: 50px; color: #0E4070">You might be interested in...</p>
            <button class ="navBut" @click="$router.push('/')">Find out your Ideal Budget for Investment</button>
            <button class ="navBut" @click ="$router.push('/CommunityContent')">Find out how long can your investment last you for</button>
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
import IGChart from './charts/IGChart'

export default {
    data() {
        return {
            content: 'Estimated time: 1 min',
            img: "https://drive.google.com/thumbnail?id=1mMiIhrHB6jV3WyWr8eZl-ZmWg04UeTTw",
            startingBalance: 0,
            Arr: 0.0,
            Duration: 0,
            Pa: 0,
            value1: 0,
            value2: 0,
            value3: 0,
            data: [100,200,300,400,500,600,700,800,900,1000],
        }
    },
    methods: {
        investGrowth: function() {
            this.$router.push('/InvestmentGrowth'); 
        },
        community: function() {
            this.$router.push('/CommunityContent');
        },
        onChangeYearly() {
            this.data = [];
            var total = Number(this.startingBalance);
            var tracker = Number(this.startingBalance);
            var storage = [];
            storage.push(tracker);
            for (let i = 0; i < this.Duration; i++) {
                tracker += Number(this.Pa);
                storage.push(tracker);
                if (i == 0) {
                    total += total*Number(this.Arr/100);
                }
                total += Number(this.Pa);
                total += (Number(total)*Number(this.Arr/100));
                this.data.push(total);
            }
            this.value1 = this.data.slice(-1)[0];
            this.value2 =  tracker;
            this.value3 = this.value1 - this.value2;
            //this.value1 = this.startingBalance * (1 + ((this.Arr/100) / 1))**(1*this.Duration);
            //this.value3 = this.value1 - this.startingBalance;
        },
        onChangeQuarterly() {
            this.data = [];
            var total = Number(this.startingBalance);
            var tracker = Number(this.startingBalance);
            var storage = [];
            storage.push(tracker);
            for (let i = 0; i < this.Duration*4; i++) {
                tracker += Number(this.Pa);
                storage.push(tracker);
                if (i == 0) {
                    total += total*Number(this.Arr/400);
                }
                total += Number(this.Pa);
                total += (Number(total)*Number(this.Arr/400));
                this.data.push(total);
            }
            this.value1 = this.data.slice(-1)[0];
            this.value2 =  tracker;
            this.value3 = this.value1 - this.value2;
            //this.value1 = this.startingBalance * (1 + ((this.Arr/100) / 4))**(4*this.Duration);
            //this.value3 = this.value1 - this.startingBalance;
        },
        onChangeMonthly() {
            this.data = [];
            var total = Number(this.startingBalance);
            var tracker = Number(this.startingBalance);
            var storage = [];
            storage.push(tracker);
            for (let i = 0; i < this.Duration*12; i++) {
                tracker += Number(this.Pa);
                storage.push(tracker);
                if (i == 0) {
                    total += total*Number(this.Arr/1200);
                }
                total += Number(this.Pa);
                total += (Number(total)*Number(this.Arr/1200));
                this.data.push(total);
            }
            this.value1 = this.data.slice(-1)[0];
            this.value2 =  tracker;
            this.value3 = this.value1 - this.value2;
            //this.value1 = this.startingBalance * (1 + ((this.Arr/100) / 12))**(12*this.Duration);
            //this.value3 = this.value1 - this.startingBalance;
        },
        onChangeWeekly() {
            this.data = [];
            var total = Number(this.startingBalance);
            var tracker = Number(this.startingBalance);
            var storage = [];
            storage.push(tracker);
            for (let i = 0; i < this.Duration*52; i++) {
                tracker += Number(this.Pa);
                storage.push(tracker);
                if (i == 0) {
                    total += total*Number(this.Arr/5200);
                }
                total += Number(this.Pa);
                total += (Number(total)*Number(this.Arr/5200));
                this.data.push(total);
            }
            this.value1 = this.data.slice(-1)[0];
            this.value2 =  tracker;
            this.value3 = this.value1 - this.value2;
            //this.value1 = this.startingBalance * (1 + ((this.Arr/100) / 52))**(52*this.Duration);
            //this.value3 = this.value1 - this.startingBalance;
        }
    },
    watch: {
        Pa: function() {
            this.data = [];
            var total = Number(this.startingBalance);
            var tracker = Number(this.startingBalance);
            var storage = [];
            storage.push(tracker);
            for (let i = 0; i < this.Duration; i++) {
                tracker += Number(this.Pa);
                storage.push(tracker);
                if (i == 0) {
                    total += total*Number(this.Arr/100);
                }
                total += Number(this.Pa);
                total += (Number(total)*Number(this.Arr/100));
                this.data.push(total);
            }
            this.value1 = this.data.slice(-1)[0];
            this.value2 =  tracker;
            this.value3 = this.value1 - this.value2;
        }
    },
    components: {
        'igchart': IGChart,
    },
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

.thIG1{
    text-align: center;
    padding: 30px;
    font-size: 15px;
    display:flex;
    align-items:center;
    flex-direction:column;
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

input[type=radio] {
    display:none; 
    margin:10px;
}

/*
  Change the look'n'feel of labels (which are adjacent to radiobuttons).
  Add some margin, padding to label
*/
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
</style>

