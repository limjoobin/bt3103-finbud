<template>
  <div style="background-color: #b9deff">
    <header1></header1>
    <br /><br /><br />
    <div class="budCon1">
      <table class="yourBudget">
        <tr class="tr1">
          <p style="margin-left: 30px; font-size: 30px; color: #0e4070">
            Your Inputs
          </p>
          <td>
            <p style="margin: 1px; font-size: 30px; color: #0e4070">
              How much you have:
            </p>
          </td>
        </tr>
        <tr>
          <th class="thIG1">
            <label>Starting Balance</label>
            <input
              type="number"
              v-model.trim.lazy="startingBalance"
              style="
                width: 50%;
                height: 30px;
                border-radius: 5px;
                background-color: #d7ecff;
              "
              required
            />
            <br /><br />
            <label>Annual Return Rate (%) </label>
            <input
              type="number"
              v-model.trim.lazy="Arr"
              style="
                width: 50%;
                height: 30px;
                border-radius: 5px;
                background-color: #d7ecff;
              "
              required
            />
            <br /><br />
            <label>Number of periods</label>
            <input
              type="number"
              v-model.trim.lazy="Duration"
              style="
                width: 50%;
                height: 30px;
                border-radius: 5px;
                background-color: #d7ecff;
              "
              required
            />
            <br /><br />
            <label>Periodic Addtion</label>
            <input
              type="number"
              v-model.trim.lazy="Pa"
              style="
                width: 50%;
                height: 30px;
                border-radius: 5px;
                background-color: #d7ecff;
              "
              required
            />
          </th>
          <td class="test">
            <p style="margin: 0px; font-size: 20px">Investment Value:</p>
            <br />
            <p style="font-size: 30px">${{ value1 }}</p>
            <br />
            <p style="margin: 0px; font-size: 20px">Contribution:</p>
            <br />
            <p style="font-size: 30px">${{ value2 }}</p>
            <br />
            <p style="margin: 0px; font-size: 20px">Profit:</p>
            <br />
            <p style="font-size: 30px">${{ value3 }}</p>
          </td>
        </tr>
        <tr>
          <th class="th2">
            <p>Periodic Addition Frequency</p>
            <br />
            <input
              type="radio"
              id="radio1"
              @change="onChangeYearly()"
              name="radios"
              value="all"
              checked
            />
            <label for="radio1">Yearly</label>
            <input
              type="radio"
              id="radio2"
              @change="onChangeQuarterly()"
              name="radios"
              value="false"
            />
            <label for="radio2">Quarterly</label>
            <input
              type="radio"
              id="radio3"
              @change="onChangeMonthly()"
              name="radios"
              value="true"
            />
            <label for="radio3">Monthly</label>
            <input
              type="radio"
              id="radio4"
              @change="onChangeWeekly()"
              name="radios"
              value="true"
            />
            <label for="radio4">Weekly</label>
          </th>
        </tr>
      </table>
      <br /><br /><br /><br />
      <igchart :data="data" :value="principal" />
    </div>
    <br /><br /><br /><br />
    <p
      style="
        text-align: center;
        padding-top: 10px;
        font-size: 50px;
        color: #0e4070;
      "
    >
      You might be interested in...
    </p>
    <div class="budCon2">
      <br /><br />
      <br /><br />
      <button class="navBut" @click="$router.push('/budget_planning')">
        Find out your Ideal Budget for Investment
      </button>
      <button class="navBut" @click="$router.push('/savings_withdrawal')">
        Find out how long can your investment last you for
      </button>
      <button class="navBut" @click="$router.push('/financial_pathway')">
        Map out your pathway to Financial Freedom
      </button>
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
import IGChart from "../../charts/IGChart";
import HeaderIG from "./HeaderIG.vue";

export default {
  name: "InvestmentGrowth",
  created(){
    document.title="FinBud - Investment Growth"
  },
  data() {
    return {
      content: "Estimated time: 1 min",
      img:
        "https://drive.google.com/thumbnail?id=1mMiIhrHB6jV3WyWr8eZl-ZmWg04UeTTw",
      startingBalance: 0,
      Arr: 0.0,
      Duration: 0,
      Pa: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      data: [],
      principal: [],
    };
  },
  methods: {
    community: function () {
      this.$router.push("/community");
    },
    onChangeYearly() {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          tracker += Number(this.Pa);
          storage.push(tracker);
          if (i == 0) {
            total += total * Number(this.Arr / 100);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 100);
          this.data.push(total);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
    onChangeQuarterly() {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          for (let j = 0; j < 4; j++) {
            tracker += Number(this.Pa);
            if (i == 0) {
              total += total * Number(this.Arr / 400);
            }
            total += Number(this.Pa);
            total += Number(total) * Number(this.Arr / 400);
          }
          storage.push(tracker);
          this.data.push(total);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
    onChangeMonthly() {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          for (let j = 0; j < 12; j++) {
            tracker += Number(this.Pa);
            if (i == 0) {
              total += total * Number(this.Arr / 1200);
            }
            total += Number(this.Pa);
            total += Number(total) * Number(this.Arr / 1200);
          }
          storage.push(tracker);
          this.data.push(total);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
    onChangeWeekly() {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          for (let j = 0; j < 52; j++) {
            tracker += Number(this.Pa);
            if (i == 0) {
              total += total * Number(this.Arr / 5200);
            }
            total += Number(this.Pa);
            total += Number(total) * Number(this.Arr / 5200);
          }
          this.data.push(total);
          storage.push(tracker);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
  },
  watch: {
    Pa: function () {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          tracker += Number(this.Pa);
          if (i == 0) {
            total += total * Number(this.Arr / 100);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 100);
          this.data.push(total);
          storage.push(tracker);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
    startingBalance: function () {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          tracker += Number(this.Pa);
          if (i == 0) {
            total += total * Number(this.Arr / 100);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 100);
          this.data.push(total);
          storage.push(tracker);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
    Arr: function () {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          tracker += Number(this.Pa);
          if (i == 0) {
            total += total * Number(this.Arr / 100);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 100);
          this.data.push(total);
          storage.push(tracker);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
    Duration: function () {
      if (
        this.Pa != 0 &&
        this.startingBalance != 0 &&
        this.Arr != 0 &&
        this.Duration != 0
      ) {
        this.data = [];
        var total = Number(this.startingBalance);
        var tracker = Number(this.startingBalance);
        var storage = [];
        for (let i = 0; i < this.Duration; i++) {
          tracker += Number(this.Pa);
          if (i == 0) {
            total += total * Number(this.Arr / 100);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 100);
          this.data.push(total);
          storage.push(tracker);
        }
        this.value1 = this.data.slice(-1)[0].toFixed(2);
        this.value2 = tracker.toFixed(2);
        this.value3 = (this.value1 - this.value2).toFixed(2);
        this.principal = storage;
      }
    },
  },
  components: {
    igchart: IGChart,
    header1: HeaderIG,
  },
};
</script>

<style scoped>
.budCon1 {
  background-color: #b9deff;
}

.b1 {
  font-size: 15px;
  font-family: Lato;
  margin-left: 340px;
  background-color: #b9deff;
}

.yourBudget {
  background-color: #a9d6ff;
  margin-left: 22.5%;
}

.thIG1 {
  text-align: center;
  padding: 30px;
  font-size: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.th2 {
  padding: 15px;
}

.tr1 {
  margin-left: 50px;
}

table {
  border-collapse: collapse;
  margin-left: 65px;
  margin: 0;
  width: 60%;
}

td,
th {
  border: 0px solid #dddddd;
  text-align: center;
  font-size: 10px;
}

.test {
  padding: 0;
  color: #0e4070;
  text-align: center;
}

.budCon2 {
  display: flex;
  justify-content: center;
  min-height: 200px;
  background-color: #a9d6ff;
  padding-bottom: 3%;
  padding: 30px;
}

.navBut {
  background-color: #fff;
  text-align: center;
  padding: 2%;
  width: 20%;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 12px;
  color: #0e4070;
}

input[type="radio"] {
  display: none;
  margin: 10px;
}

input[type="radio"] + label {
  display: inline-block;
  margin: -2px;
  padding: 4px 12px;
  background-color: #e7e7e7;
  border-color: #ddd;
  color: #0e4070;
}

input[type="radio"]:checked + label {
  background-image: none;
  background-color: #84c3fe;
}
</style>

