<template>
  <div style="background-color: #b9deff">
    <header1></header1>
    <img class="timer" v-bind:src="img" />
    <p class="b1">{{ content }}</p>
    <br /><br />
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
            <label>Duration</label>
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
          <td>
            <button
              style="font-size: 20px; border-radius: 8px"
              v-on:click="saveDashboard()"
            >
              Save to Dashboard
            </button>
          </td>
        </tr>
      </table>
      <br /><br /><br /><br />
      <igchart :data="data" :options="chartOptions" />
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
      <button class="navBut">
        Find out how long can your investment last you for
      </button>
      <button class="navBut">Map out your pathway to Financial Freedom</button>
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
import IGChart from "../../charts/IGChart";
import HeaderIG from "./HeaderIG.vue";
import firebase from "../../../firebase.js";
var database = firebase.firestore();

export default {
  name: "InvestmentGrowth",
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
      data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
      uid: "",
      all_invest_data: [],
      users: [],
      documents: [],
      myDoc: "",
    };
  },
  methods: {
    saveDashboard: function () {
      for (let i = 0; i < this.documents.length; i++) {
        this.users.push(this.all_invest_data[i].dashboard_info.user);
        if (this.all_invest_data[i].dashboard_info.user == this.uid) {
          this.myDoc = this.documents[i];
        }
      }
      if (this.users.includes(this.uid)) {
        database
          .collection("user")
          .doc("uxSscdEuyHHxuVMOHqRj")
          .collection("investmentgrowth")
          .doc(this.myDoc)
          .update({
            dashboard_info: {
              user: this.uid,
              input_data: [
                this.startingBalance,
                this.Arr,
                this.Duration,
                this.Pa,
              ],
              invest_growth_data: this.data,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            },
          })
          .then(() => {
            location.reload();
          });
      } else {
        alert("hi");
        database
          .collection("user")
          .doc("uxSscdEuyHHxuVMOHqRj")
          .collection("investmentgrowth")
          .add({
            dashboard_info: {
              user: this.uid,
              input_data: [
                this.startingBalance,
                this.Arr,
                this.Duration,
                this.Pa,
              ],
              invest_growth_data: this.data,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            },
          })
          .then(() => {
            location.reload();
          });
      }
    },
    budgetCalulator: function () {
      this.$router.push("/budget_planning");
    },
    community: function () {
      this.$router.push("/community");
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
          total += total * Number(this.Arr / 100);
        }
        total += Number(this.Pa);
        total += Number(total) * Number(this.Arr / 100);
        this.data.push(total);
      }
      this.value1 = this.data.slice(-1)[0];
      this.value2 = tracker;
      this.value3 = this.value1 - this.value2;
    },
    onChangeQuarterly() {
      this.data = [];
      var total = Number(this.startingBalance);
      var tracker = Number(this.startingBalance);
      var storage = [];
      storage.push(tracker);
      for (let i = 0; i < this.Duration; i++) {
        for (let j = 0; j < 4; j++) {
          tracker += Number(this.Pa);
          storage.push(tracker);
          if (i == 0) {
            total += total * Number(this.Arr / 400);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 400);
        }
        this.data.push(total);
      }
      this.value1 = this.data.slice(-1)[0];
      this.value2 = tracker;
      this.value3 = this.value1 - this.value2;
    },
    onChangeMonthly() {
      this.data = [];
      var total = Number(this.startingBalance);
      var tracker = Number(this.startingBalance);
      var storage = [];
      storage.push(tracker);
      for (let i = 0; i < this.Duration; i++) {
        for (let j = 0; j < 12; j++) {
          tracker += Number(this.Pa);
          storage.push(tracker);
          if (i == 0) {
            total += total * Number(this.Arr / 1200);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 1200);
        }
        this.data.push(total);
      }
      this.value1 = this.data.slice(-1)[0];
      this.value2 = tracker;
      this.value3 = this.value1 - this.value2;
    },
    onChangeWeekly() {
      this.data = [];
      var total = Number(this.startingBalance);
      var tracker = Number(this.startingBalance);
      var storage = [];
      storage.push(tracker);
      for (let i = 0; i < this.Duration; i++) {
        for (let j = 0; j < 52; j++) {
          tracker += Number(this.Pa);
          storage.push(tracker);
          if (i == 0) {
            total += total * Number(this.Arr / 5200);
          }
          total += Number(this.Pa);
          total += Number(total) * Number(this.Arr / 5200);
        }
        this.data.push(total);
      }
      this.value1 = this.data.slice(-1)[0];
      this.value2 = tracker;
      this.value3 = this.value1 - this.value2;
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
        storage.push(tracker);
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
        this.value1 = this.data.slice(-1)[0];
        this.value2 = tracker;
        this.value3 = this.value1 - this.value2;
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
        storage.push(tracker);
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
        this.value1 = this.data.slice(-1)[0];
        this.value2 = tracker;
        this.value3 = this.value1 - this.value2;
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
        storage.push(tracker);
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
        this.value1 = this.data.slice(-1)[0];
        this.value2 = tracker;
        this.value3 = this.value1 - this.value2;
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
        storage.push(tracker);
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
        this.value1 = this.data.slice(-1)[0];
        this.value2 = tracker;
        this.value3 = this.value1 - this.value2;
      }
    },
  },
  components: {
    igchart: IGChart,
    header1: HeaderIG,
  },
  created() {
    document.title="FinBud - Investment Growth"
    var user = firebase.auth().currentUser;
    if (user != null) {
      this.uid = user.uid;
    }
    database
      .collection("user")
      .doc("uxSscdEuyHHxuVMOHqRj")
      .collection("investmentgrowth")
      .get()
      .then((querySnapShot) => {
        let item = {};
        this.all_invest_data = [];
        querySnapShot.forEach((doc) => {
          item = doc.data();
          item.show = false;
          item.id = doc.id;
          this.all_invest_data.push(item);
          this.documents.push(item.id);
        });
      });
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
  padding-bottom: 2%;
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

/*
  Change the look'n'feel of labels (which are adjacent to radiobuttons).
  Add some margin, padding to label
*/
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

