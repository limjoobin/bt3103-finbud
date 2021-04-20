<template>
  <div id="financialPathway">
      <div class="header">
        <img class="logo" alt="Finbud logo" src="../../../assets/logo.png" @click="$router.push('/')">
        <h1 class='header-font'>Planning your Financial Pathway</h1>
        <p>Use this to plan your journey towards your financial freedom</p>
      </div>

      <div class="second">
        <div class="form">
          <div class="qns">
            <div v-if='slide === 0'>
              <h3 class='header-font'>Ultimate Goal</h3>
              <div class="sub-section">
                <div class='user-input'>
                  <label>Ideal Retirement Age* <div class="tooltip">(?)<span class='tooltiptext'>Age that you wish to stop working</span></div> </label>
                  <input type="number" placeholder="Retirement age" v-model='retirementAge'>    
                </div>
                <div class='user-input'>
                  <label>Ideal Retirement Monthly Income* <div class="tooltip">(?)<span class='tooltiptext'>How much you wish to receive monthly during your retirment years. Without considering inflation</span></div></label>
                  <input type="number" placeholder="Monthly Income before inflation" v-model="retirementIncome">               
                  <p class='info'>(before inflation)</p>
                </div>
                <div class='user-input'>
                  <label>Current Age*</label>
                  <input type="number" placeholder="Enter your age now" v-model="currentAge">               
                </div>

                <div class='user-input'>
                  <label>Expected Inflation Rate* <div class="tooltip">(?)<span class='tooltiptext'>How much do you think the average inflation would be for your currency</span></div></label>
                  <input type="number" placeholder="Inflation" v-model="expectedInflation">
                  <p class="info">(in percent)</p>              
                </div>
              </div>
                <div class='btn' style="float:right;">
                  <button v-show='slide !== 8' v-on:click='next(retirementAge == 0 | retirementIncome == 0 | currentAge == 0 | expectedInflation == 0)' >Next</button>
                </div>
            </div>

            <div v-if='slide === 1'>
              <h3 class="header-font">General</h3>
              <div class="sub-section">
                <div style="display:block; width:100%; margin-top:2%;">
                  <p style=" width:30%; display:inline-block">Mininum Emergency Fund: 
                    <span class="tooltip">(?)
                      <span class='tooltiptext'> Emergency fund is a stash of money kept aside for raining days. 
                        This will serve as the minimum balance you'll need to have in your cash in bank at all times </span>
                    </span>
                  </p>
                  <input type="text" style="display:inline-block; width:20%" v-model='minEmergencyFundMultiple'> 
                  <p style=" display:inline-block; width:20%"> times of</p>
                  <select style="width:20%; display:inline-block;" v-model='minEmergencyFundType'>
                    <option value="income">Income</option>
                    <option value="expense">Expenses</option>
                  </select>
                </div>
                  <div style="display:block; width:100%; margin-top:2%;">
                    <h4>Allocation of excess funds 
                      <div class="tooltip">(?)<span class='tooltiptext'>
                        What do you wish to do with balance that exceeds your desired emergency fund. 
                        For example, if your emergency fund exceed by $1,000, choosing an 80% investment allocation means, 
                        you will invest $800 and leave $200 in your bank</span></div>
                    </h4>
                    <div style="display:block; width:100%">
                      <p style="width:15%; display:inline-block; ">Saving {{100 - excessUse}}%</p>
                      <input style="width:60%; display:inline-block;" v-model="excessUse" type="range" min="0" max=100>
                      <p style="display:inline-block; width:15%">Investment {{excessUse}}%</p>
                    </div>
                  </div>
              </div>
              <div class='btn'>
                <button  v-on:click='back'>Back</button>
                <button  v-on:click="next(minEmergencyFundMultiple == 0, 'Minimum Emergency fund has to be more than 0')">Next</button>
              </div>
            </div>

            <div v-if="slide === 2">
              <h3 class="header-font">Income Growth</h3>
              <div class="sub-section">
                <div class="container" v-for="(inc,i) in incomes" v-bind:key="i">
                  <div class="list">
                    <div class="user-input">
                      <label for="income">Income per month</label>
                      <input type="number" id="income" v-model="incomes[i].income">
                    </div>
                    <div class="user-input">
                      <label for="incomeGrowthRate">Annual Income Growth rate <div class="tooltip">(?)<span class='tooltiptext'>
                        How much do you think your income will increase every year. Some companies give their employees annual increment to combat inflation
                        but that's not always the case. 
                        </span></div> </label>
                      <input type="number" id='incomeGrowthRate' v-model="incomes[i].incomeGrowthRate">
                      <p class="info">(in percentage)</p>
                    </div>
                    <div class="user-input">
                      <label for="jobSwitchFreq">How frequently would you change your job or expect a promotion
                        <div class="tooltip">(?)<span class='tooltiptext'>
                          This question is to account for any big increment in your salary everytime you change job or get a promotion
                       </span></div>

                      </label>
                      <input type="number" id='jobSwitchFreq' v-model="incomes[i].jobSwitchFreq">
                      <p class="info">(in years)</p>
                    </div>
                    <div class="user-input">
                      <label for="incomeGrowthRateJobSwitch">Income growth per job switch (in percent)
                        <div class="tooltip">(?)<span class='tooltiptext'>
                          How much do you think your income will increase per promotion or job switch. If you are unsure, we recommend 10%
                       </span></div>

                      </label>
                      <input type="number" id="incomeGrowthRateJobSwitch" v-model="incomes[i].incomeGrowthRateJobSwitch">
                      <p class="info">(in percentage)</p>
                    </div>
                    <div class="user-input">
                      <label for="jobSwitchStop">Stop job switch at age
                        <div class="tooltip">(?)<span class='tooltiptext'>
                          As you grow older, closer to your retirement age, you might feel like you want to settle down with a company or you feel that you would have reach your peaked by thn.
                           This is to account for such situation.
                       </span></div>
                      </label>
                      <input type="number" id="jobSwitchStop" v-model="incomes[i].jobSwitchStop">
                    </div>
                    <div class="user-input">
                      <label for="incomeGrowthStop">Stop income growth at age</label>
                      <input type="number" id='incomeGrowthStop' v-model="incomes[i].incomeGrowthStop">
                    </div>

                    <!-- <div class="top-bottom">
                      <button v-on:click="addIncome" v-show="i == incomes.length-1">Add new</button>
                      <button v-show="incomes.length > 1" v-on:click="removeIncome(i)"> Remove</button>
                    </div> -->
                  </div>
                </div>
              </div>
               <div class='btn'>
                <button  v-on:click='back'>Back</button>
                <button  v-on:click="next(incomes[0].income == 0 | incomes[0].jobSwitchStop < currentAge | incomes[0].incomeGrowthStop < currentAge ,'Income cant be 0. And please make sure that income growth age is equal or older than your current age')">Next</button>
              </div>
            </div>

            <div v-if="slide === 3">
              <h3 class="header-font">Expenses Growth</h3>
              <div class="sub-section">
                <div class="user-input">
                  <label for="expenses">Expenses per Month (necessity only)
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          How much are you spending per month. For better accuracy, please include only your necessity, i.e. food, bills etc. 
                          You may include your wants expenses later in the milestone section.
                       </span></div>
                  </label>
                  <input type="number" id='expenses' v-model='expenses'>
                </div>
                <div class="user-input">
                  <label for="expensesGrowth">Annual Expenses growth rate (in percent)
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          How much do you think your expenses will increase per year. Inflation would already be accounted for. 
                          Therefore, if you choose 2%, your annual expenses rate will be 2% plus the expected inflation you keyed in earlier.
                       </span></div>
                  </label>
                  <input type="number" id='expensesGrowth' v-model='expensesGrowth'>
                  <p class="info">(excluding inflation)</p>
                </div>
                <div class="user-input">
                  <label for="expensesRise">% increase in expenses per income rise (in percent)
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          This question is to account for any lifestyle inflation everytime you have a pay rise that's bigger than your expected inflation. 
                          For example, with a value of 10% and a current expenses of 1000. If your income rise above the expected inflation, 
                          your new expenses next year would be $1,100.  
                       </span></div>
                  </label>
                  <input type="number" id='expensesRise' v-model="expensesRise">
                </div>
              </div>
              <div class='btn'>
                <button  v-on:click='back'>Back</button>
                <button  v-on:click="next(expensesGrowth < 0 | expensesRise < 0 | expenses <= 0 | expensesGrowth <=0,
                'Expenses cant be 0 and expenses growth rate cannot be negative ')">Next</button>
              </div>
            </div>

            <div v-if="slide === 4">
              <h3 class="header-font">Dependent Expenses</h3>
              <div class="sub-section">
                <div class="user-input">
                  <label for="excludeChildren">Do you want to exclude children planning?
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          By selecting yes, we will exclude all expenses related to having a children from Pregnancy to university fees.
                       </span></div>
                  </label>
                  <select name="excludeChildren" id="excludeChildren" v-model="excludeChildren">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div v-if='excludeChildren == "no"' class="user-input">
                  <label for="children">Do you have children?
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          We will estimate the future expenses that is related to having a child, in particular school expenses. 
                    </span></div>
                  </label>
                  <select v-model='haveChildren'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <!-- If no is selected -->
                <div class="user-input" v-show='excludeChildren =="no" '>
                  <label for="childrenPlan">Do you plan to have children or more children?
                  </label>
                  <select name="childrenPlan" id="childrenPlan" v-model='childrenPlan'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div class="user-input" v-if='(haveChildren == "yes" ) &&  excludeChildren == "no"'>
                  <label for="numOfChildren">Number of children: {{children.length}} </label>
                  <button style='background-color:white; border-radius:25px 25px 25px 25px; padding:1%; margin:1; min-width:80px;' v-on:click="addChildren('currentChild')">add</button>
                  <button  style='background-color:white; border-radius:25px 25px 25px 25px; padding:1%; margin:1; min-width:80px;' v-on:click="removeChildren('currentChild')">minus</button>
                </div>
                <div class="user-input" v-if='childrenPlan =="yes" && excludeChildren == "no"'>
                  <label for="expectedChild">Expected child in the future 
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          Based on your estimated age to have the child, we will be including related expenses such as tuition fee, allowance, etc. to the cost calculation. 
                          We will assume that your expected child(ren) are all female for easier projection as male have to undergo National Service.
                       </span></div>: {{expectedChildren.length}}</label>
                  <button  style='background-color:white; border-radius:25px 25px 25px 25px; padding:1%; margin:1; min-width:80px;' v-on:click="addChildren('expectedChild')">add</button>
                  <button style='background-color:white; border-radius:25px 25px 25px 25px; padding:1%; margin:1; min-width:80px;'  v-on:click="removeChildren('expectedChild')">minus</button>
                </div>

                <div v-show='children.length>0 && haveChildren == "yes" ' style="display:flex-box;  width:100%;">
                <h3>Current Child</h3>
                <div v-for='(child,index) in children' v-bind:key="index" style="display:inline-block;">
                    <p>Child {{index+1}}</p>
                    <div class="user-input">
                      <label for="childAge">Age</label>
                      <input type="number" id='childAge' v-model='children[index].age'>
                    </div>
                    <div class="user-input">
                      <label for="childGender">Gender</label>
                      <select type="number" id='childAge' v-model='children[index].gender'>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                 </div>
                </div>
                <div v-show="expectedChildren.length>0 && childrenPlan == 'yes'" style="display:flex-box;  width:100%;">
                <h3>Future Child</h3>
                <div v-for='(child,index) in expectedChildren' v-bind:key="index" style="display:inline-block; margin:3%;">
                    <p>Child {{index+1}}</p>
                    <div class="user-input">
                      <label for="childAge">Estimated age of having child</label>
                      <input type="number" id='childAge' v-model='expectedChildren[index].estimatedAge'>
                    </div>
                 </div>
                </div>
              </div>
                <div class='btn'>
                  <button  v-on:click='back'>Back</button>
                  <button  v-on:click="next(true)">
                    
                    Next</button>
                </div>
            </div>

            <div v-if='slide === 5'>
              <h3 class="header-font">Current Asset</h3>
              <div class="sub-section">
                <div class="user-input">
                  <label for="cash">Cash in Bank</label>
                  <input type="number" id='cash' v-model='cashInBank'>
                </div>
                <div class="user-input">
                  <label for="totalInvestment">Total Investment</label>
                  <input type="number" min="0"  id='totalInvestment' v-model='totalInvestment'>
                </div>
                <div class="user-input">
                  <label for="investmentReturn">Average return on Investment
                    <div class="tooltip">(?)<span class='tooltiptext'>
                         How much do you think your investment will grow on yearly? If you are unsure, we recommend 6%. 
                       </span></div>
                  </label>
                  <input type="number" min="0"  id="investmentReturn" v-model='investmentReturn'>
                  <p class="info">(in percent)</p>
                </div>
                <div class="user-input">
                  <label for="cpfOA">CPF-Ordinary Account</label>
                  <input type="number" min="0"  id='cpfOA' v-model='cpfOA'>
                </div>
                <div class="user-input">
                  <label for="cpfSA">CPF-Special Account</label>
                  <input type="number" min="0"  id='cpfSA' v-model='cpfSA'>
                </div>
                <div class="user-input">
                  <label for="cpfMA">CPF-Medisave Account</label>
                  <input type="number" id='cpfMA' min="0" v-model='cpfMA'>
                </div>
              </div>
              <div class='btn'>
                <button  v-on:click='back'>Back</button>
                <button  v-on:click="next(investmentReturn <= 0, 'Investment return can\'t be negative and must be more than 0')">Next</button>
              </div>
            </div>

            <div v-if="slide === 6 ">
              <h3 class="header-font">Mortage</h3>
              <div class="sub-section">
                <div class="user-input">
                  <label for="haveFlat">Do you own a flat?</label>
                  <select name="haveFlat" id="haveFlat" v-model='haveFlat'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div class="user-input" v-show='haveFlat === "yes" '>
                  <label for="mortagePayable">Total Amount Payable
                    <div class="tooltip">(?)<span class='tooltiptext'>
                         What was the total loan amount you got when u first purchase the flat
                       </span></div>
                  </label>
                  <input type="number" id='mortagePayable' v-model='mortagePayable'>
                </div>
                <div class="user-input" v-show='haveFlat === "yes"'>
                  <label for="mortagePaymentMethod">Payable By</label>
                  <select id="mortagePaymentMethod" v-model="mortagePaymentMethod">
                    <option value="cpf">CPF</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div class="user-input" v-show='haveFlat === "yes" ' >
                  <label for="totalMortagePayment">Remaining mortage amount payable</label>
                  <input type="number" id="totalMortagePayment" v-model="totalMortagePaymentAmount">
                </div>
                <div class="user-input" v-show='haveFlat === "yes"'>
                  <label for="monthlyMortagePayment">Monthly mortage payment by you</label>
                  <input type="number" id="monthlyMortagePayment" v-model='monthlyMortagePayment'>
                </div>
                <div class="user-input" v-show='haveFlat === "yes"'>
                  <label for="spouseMonthlyMortagePayment">Monthly mortage payment by your partner</label>
                  <input type="number" id="spouseMonthlyMortagePayment" v-model="spouseMonthlyMortagePayment">
                </div>
                <div class="user-input" v-show='haveFlat === "yes"'>
                  <label for="mortageInterestRate">Interest Rate</label>
                  <input type="number" id="mortagePaymentAmount" v-model='mortageInterestRate'>
                </div>

                <div class="user-input" v-show='haveFlat === "no"'>
                  <label for="planFlat">Do you plan to get a flat?</label>
                  <select name="planFlat" id="planFlat" v-model='planFlat'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div class="user-input" v-show='haveFlat === "no" && planFlat === "yes"'>
                  <label for="ageGettingFlat">Estimated age to get Flat
                    <div class="tooltip">(?)<span class='tooltiptext'>
                          If you are planning to get BTO flat, please enter the age you foresee yourself apply for the BTO application
                       </span></div>
                  </label>
                  <input type="number" id='ageGettingFlat' v-model="ageGettingFlat">
                </div>
                <div class="user-input" v-show='haveFlat === "no" && planFlat === "yes"' >
                  <label for="typeOfFlat">Which type of flat do you plan to get?</label>
                  <select name="typeOfFlat" id="typeOfFlat" v-model='typeOfFlat'>
                    <option v-for="(flat) in flats" v-bind:key="flat.type" :value="flat">{{flat.type}}</option>
                  </select>
                </div>
                <div class="user-input" v-show='haveFlat === "no" && planFlat === "yes"'>
                  <label for="estimatedPrice">Est. price of flat</label>
                  <input type="number" v-model="typeOfFlat.price">
                </div>
              </div>
              <div class='btn'>
                <button  v-on:click='back'>Back</button>
                <button  v-on:click='next(true)'>Next</button>
              </div>
            </div>

            <div v-if="slide === 7">
              <h3 class="header-font">Liabilities</h3>
              <div class="sub-section">
                <div class='container' v-for="(liability,i) in liabilities" v-bind:key="i">
                  <h5>Liability {{i+1}}</h5>
                  <div class="list">
                    <div class="top-bottom">
                      <label for="liabilitiesName">Name</label>
                      <input type="text" id="liabilitiesName" v-model="liabilities[i].name">
                    </div>
                    <div class="top-bottom">
                      <label for="liabilitiesAmount">Total amount Payable</label>
                      <input type="number" id='liabilitiesAmount' min="0" v-model="liabilities[i].totalAmount">
                    </div>
                    <div class="top-bottom">
                      <label for="liabilitiesInterestRate">Interest Rate</label>
                      <input type="number" id='liabilitiesInterestRate' min="0" v-model="liabilities[i].interestRate">
                    </div>
                    <div class="top-bottom">
                      <label for="liabilitiesPaymentFreq">Payment Frequency</label>
                      <select name="liabilitiesPaymentFreq" id="liabilitiesPaymentFreq" v-model="liabilities[i].paymentFreq"> 
                        <option value="yearly">Yearly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <div class="top-bottom">
                      <label for="periodicPaymentAmount">Periodic Payment Amount</label>
                      <input type="number" id='periodicPaymentAmount' min="0" v-model='liabilities[i].periodicPaymentAmount'>
                    </div>
                  <div class="top-bottom">
                      <button v-on:click="addLiability" v-show="i == liabilities.length-1">Add new</button>
                      <button v-show="liabilities.length > 1" v-on:click="removeLiability(i)"> Remove</button>
                  </div>
                  </div>
                </div>
              </div>
              <div class='btn'>
                <button  v-on:click='back'>Back</button>
                <button  v-on:click='next(false)'>Next</button>
              </div>
            </div>

            <div v-if="slide === 8">
              <h3 class="header-font">Milestone Goal 
                <div class="tooltip">(?)<span class='tooltiptext'>
                          This section is a chance for you to account for all the wants you want in life, or big milestone that you have. 
                          For example, annual travel starting 5 years from now, cost of wedding or flat renovation cost etc. 
                       </span></div></h3>
              <div class="sub-section">
                <div class='container' v-for="(milestone,i) in milestones" v-bind:key="i">
                  <h5>Milestone {{i+1}}</h5>
                  <div class="list">
                    <div class="top-bottom">
                      <label for="milestone-name">Name</label>
                      <input id='milestone-name' name='milestone-name' v-model="milestones[i].name" type='text'>
                    </div>
                    <div class="top-bottom">
                      <label for='milestone-date'>Date needed</label>
                      <input id='milestone-date' type="date" v-model="milestones[i].date">
                    </div>
                    <div class="top-bottom">
                      <label for='milestone-inflation'>Inflation</label>
                      <input id='milestone-inflation'  type='number' v-model="milestones[i].inflation">
                    </div>
                    <div class="top-bottom">
                      <label for='milestone-amount-needed'>Amount needed</label>
                      <input id='milestone-amount-needed' type="number" v-model="milestones[i].amount">
                    </div>
                    <div class="top-bottom">
                      <label for='milestone-freq'>Frequency</label>
                      <select id='milestone-freq' name='milestone-freq' v-model="milestones[i].freq">
                        <option value="once">Once</option>
                        <option value="yearly">Yearly</option>
                        <option value="quarterly">Quarterly</option>
                        <option value="monthly">Monthly</option>
                      </select>
                    </div>
                    <div class="top-bottom"  v-if="milestones[i].freq != 'once' ">
                      <label for="milestone-end-date">End Date</label>
                      <input id='milestone-end-date' type="date"  v-model="milestones[i].endDate">
                    </div>
                    <div class="top-bottom">
                      <button v-on:click="addMilestone" v-show="i == milestones.length-1">Add new</button>
                      <button v-show="milestones.length > 1" v-on:click="removeMilestone(i)"> Remove</button>
                    </div>

                </div>

                </div>
                <div class='btn' style="width:100%">
                  <button  v-on:click='back'>Back</button>
                  <button  v-on:click='plan'>Plan</button>
                </div>
              </div>
            </div>


            
          </div>
        </div>
        <!-- <div class='btn'>
          <button v-show='slide !== 0' v-on:click='back'>Back</button>
          <button v-show='slide !== 8' v-on:click='next'>Next</button>
          <button v-show='slide === 8' v-on:click='plan'>Plan</button>
        </div> -->
      </div>


      <p style ="text-align: center; padding-top: 10px;font-size: 50px; color: #0E4070; margin-bottom:2%;">You might be interested in...</p>
      <div class ="budCon2">
            <br>
            <button class ="navBut" @click="$router.push('/budget_planning')">Find out your Ideal Budget for Investment</button>
            <button class ="navBut">Find out how long can your investment last you for</button>
            <button class ="navBut">Calculate your investment Growth</button>
      </div>

  </div>
</template>

<script>
import firebase from "../../../firebase";

export default {
  name: 'FinancialPathway',
  data: function(){
    return{
      slide:0,
      onEdit:false,
      db:firebase.firestore(),
      //slide 0
      retirementAge:0,
      currentAge:23,
      retirementIncome:0,
      expectedInflation:0,
      //slide 1
      minEmergencyFundMultiple:0,
      minEmergencyFundType:'expense',
      // maxEmergencyFundMultiple:9,
      // maxEmergencyFundType:'income',
      excessUse:100,
      //slide 2
      incomes:[
        {income:0,
         incomeGrowthRate:0,
         jobSwitchFreq:0,
         incomeGrowthRateJobSwitch:0,
         jobSwitchStop:0,
         incomeGrowthStop:0,
        }
      ],
      //slide 3
      expenses:0,
      expensesGrowth:0,
      expensesRise:0,
      //slide 4
      excludeChildren:'no',
      haveChildren:'no',
      childrenPlan:"yes",
      children:[],
      expectedChildren:[],
      //slide 5
      cashInBank:0,
      totalInvestment:0,
      investmentReturn:0,
      cpfOA:0,
      cpfSA:0,
      cpfMA:0,

      //Slide 6
      haveFlat:'no',
      mortagePayable:0,
      mortagePaymentMethod:"cpf",
      totalMortagePaymentAmount:0,
      monthlyMortagePayment:0,
      spouseMonthlyMortagePayment:0,
      mortageInterestRate:2.6,
      planFlat:"no",
      ageGettingFlat:0,
      // https://www.singsaver.com.sg/blog/costs-of-bto-flat-resale-flat-ec-and-condo-in-singapore
      flats:[{type:"BTO 2-room Flexi (NM)",price:162000},{type:'BTO 2-room Flexi (M)',price:277000},
      {type:'BTO 3-room (NM)',price:248000},{type:'BTO 3-room (M)',price:421000},
      {type:'BTO 4-room (NM)',price:381000},{type:'BTO 4-room (M)',price:617000},
      {type:"BTO 5-room (NM)",price:516000},{type:'BTO 5-room (M)',price:725000},
      {type:"3-room Resale",price:380000},{type:'4-room Resale',price:550000},
      {type:"5-room Resale",price:700000},{type:"BTO  Studio EC",price:560000},
      {type:"BTO 2-room EC",price:720000},{type:"BTO 3-room EC",price:960000},{type:"BTO 4-room EC",price:1400000},
      {type:"BTO 5-room EC",price:1760000},{type:"BTO Penthouse EC",price:1900000},{type:"1-room Condominiums",price:700000},
      {type:"2-room Condominiums",price:900000},{type:"3-room Condominiums",price:1200000},{type:"4-room Condominiums",price:1800000},
      {type:"5-room Condominiums",price:2200000},{type:"Penthouse Condominiums",price:3000000}
      ],
      typeOfFlat:{type:'BTO 4-room (NM)',price:381000},
      milestones:[
        {name:"",
         date:'',
         endDate:'',
         inflation:0,
         amount:0,
         freq:'yearly'
        }
      ],
      liabilities:[
        {name:'',
        interestRate: 0,
        paymentFreq:"monthly",
        totalAmount:0,
        periodicPaymentAmount:0}
      ],
      // calculators:["Find out you're ideal Budget", "Find out how long can your investment last you for","Calculate your investment Growth"],
      
      //information taken from online resources
      estimatedChildExpenses:{"pre-birth":13006,0:10514,1:10514,2:10514,3:6823,4:6823,5:6823,6:6823,
                              7:11423,8:11423,9:11423,10:11423,11:11423,12:11423,13:12566,14:12566,
                              15:12566,16:12566,17:8292,18:8292,19:8292,20:17472,21:17472,22:17472,23:17472},
      taxRateSingapore:{"30000":2,"400000":3.5,"80000":7,"120000":11.5,"160000":15,"200000":18,
                        "240000":19,"280000":19.5,"320000":20,"320000>":22},
      
      //Calculated values based on users input
      idealRetirementIncome:0,
      maxEmergencyAmt:[], //the value will fluctuate as income/expenses,
      minEmergencyAmt:[],
      projectedIncome:[],
      projectedIncomeAfterCPF:[],
      projectedExpenses:[],
      projectedTax: [],
      liabilitiesPayable: [],
      projetedcashInBankBeforeRetirement: [],
      projectedInvestment: [],
      investmentContribution:[],
      projectedCpfOA: [],
      projectedCpfSA: [],
      projectedCpfMA: [],
      cpfRetirement: {},
      dataset:{'projectedCashInBank': [],
        'projectedInvestmentExpected': [],
        'projectedExpenses':[],
        'currentAge':23}
    }
  },
  methods:{
    back:function(){
      this.slide--;
    },
    next:function(missing, msg = ''){
      if(missing){
        var m = msg ? msg : "Please fill up all the required fields before proceeding"
        if(this.slide == 4){
          this.childSlideValidity()
        }else if(this.slide == 6){
          this.flatSlideValidity()
        }else{
          alert(m)
        }
      }else{
        this.slide++;
      }
    },
    childSlideValidity(){
      var m = ''
      if((this.haveChildren == 'no' && this.childrenPlan == 'no') | this.excludeChildren == 'yes'){
        this.slide++;
      } else{
        var invaild = false
        if(this.childrenPlan == 'yes') {
          for(let i = 0; i < this.expectedChildren.length; i++){
            if(this.expectedChildren[i].estimatedAge < this.currentAge || this.expectedChildren[i].estimatedAge <= 0 ){
              m += this.expectedChildren[i].estimatedAge < this.currentAge ? "Your current age already exceed the estimated age you will have kid!" : ''
              m += !this.expectedChildren[i].estimatedAge <= 0 ? "Please enter a vaild age for your child" : ""
              invaild = true
            } 
          }
          if(this.expectedChildren.length == 0){
            invaild = true
            m = " Please tell us your estimated Age to have a child "
          }
        }
        if(this.haveChildren == 'yes'){
          for(let i = 0; i< this.children.length; i++){
            if(this.children[i].age < 0 || !(this.children[i].age)){
              m += "  Invalid age for child " + i+1
              invaild = true
            }
          }
          if(this.children.length == 0){
            invaild = true
            m += " Please let us know your child age and gender"
          }
        }
        if(!invaild){
          this.slide++
        }else{
          alert(m)
        }
      }
    },
    flatSlideValidity(){
      var m = ''
      var invalid = false
      if(this.haveFlat === 'yes'){
        if(this.mortagePayable < this.totalMortagePaymentAmount ){
          m += "Total mortage payment cant be greater than mortage payable"

        }
        if(this.spouseMonthlyMortagePayment < 0 ||  this.monthlyMortagePayment < 0){
          m +=  "Monthly mortage payment can't be negative"
          invalid = true
        }
        if(this.interestRate <= 0){
          m += " Interest rate can't be less than or equal to 0 "
          invalid = true
        } 
      }else if(this.haveFlat === 'no' && this. planFlat == 'yes'){
        if(this.ageGettingFlat < this.currentAge){
          m += "Your estimated age of getting a flat cant be younger than your own age"
          invalid = true
        }
        if(this.typeOfFlat.price < 0){
          m += "Your flat price can't be negative "
          invalid = true
        }
      }

      if(invalid){
        alert(m)
      }else{
        this.slide++;
      }

    },
    addChildren:function(type){
      if(type == 'currentChild') {
        this.children.push({
          age:0,
          gender:'female'
        })
      } else{
        this.expectedChildren.push({
          estimatedAge:0
        })
      }
    },
    removeChildren:function(type){
      if(type ==="currentChild"){
        this.children.splice(-1,1)
      }else{
        this.expectedChildren.splice(-1,1)
      }
    },
    addMilestone:function(){
      this.milestones.push(
         {
         name:"",
         date:'',
         inflation:0,
         amount:0,
         freq:''
        }
      )
    },
    removeMilestone:function(i){
      this.milestones.splice(i,1)
    },
    addLiability:function(){
      this.liabilities.push({
        name:'',
        totalAmount:0,
        interestRate:0,
        paymentFreq:"monthly",
        periodicPaymentAmount:0
      })
    },
    removeLiability:function(i){
      this.liabilities.splice(i,1)
    },
    addIncome:function(){
      this.incomes.push({
        income:0,
        incomeGrowthRate:0,
        jobSwitchFreq:0,
        incomeGrowthRateJobSwitch:0
      })
    },
    removeIncome:function(i){
      this.incomes.splice(i,1)
    },
    plan: function(){
        this.idealRetirementIncome = this.calcInflation(this.retirementIncome,this.expectedInflation/100,this.retirementAge-this.currentAge)

        
        var income = this.projectIncome(this.retirementAge) 
        this.projectedIncome = income[0]
        this.projectedIncomeAfterCPF = income[1]

        console.log("Projected Income",this.projectedIncome)
        this.projectedExpenses = this.projectExpense()

        console.log("Annual Gross Expenses",this.projectedExpenses)

        if(this.excludeChildren === 'no'){
          var childCost = this.addChildExpenses(this.projectedExpenses)
        }

        console.log("Child Expenses",childCost)
        
        this.projectedTax = this.projectTax(this.projectedIncome)

        console.log("Tax",this.projectedTax)


        var liabilitiesDetails = this.projectLiabilities(this.liabilities)
        this.projectedLiabilities = liabilitiesDetails.length > 0 ? liabilitiesDetails[0] : []
        var totalLiabilitiesPayable = liabilitiesDetails.length > 0 ? liabilitiesDetails[1] : []
        
        console.log("Liabilities",liabilitiesDetails[0])
        
        //Accounting flat prices into consideration
        var flatDetails = this.deductCPFforFlat(this.typeOfFlat.price)
        var flatPayment = flatDetails[0]
  
        console.log("Flat Payment details",flatPayment)
        
        var finalExpenses = []
        if(this.mortagePaymentMethod === 'cpf'){
          finalExpenses = this.sumExpenses(this.projectedExpenses,childCost,this.projectedTax,totalLiabilitiesPayable)
        }else{
          finalExpenses = this.sumExpenses(this.projectedExpenses,childCost,this.projectedTax,totalLiabilitiesPayable,flatPayment)
        }
 
        this.projectedExpenses = finalExpenses
        console.log("Final Expenses", this.projectedExpenses)
        

          //Adding the milestone into consideration
        var milestoneDetails = this.calculateMilestoneCost(this.milestones)
        var milestoneCost = milestoneDetails[0]
        console.log("Milestone cost",milestoneDetails[1])
   
        
        
        if(this.minEmergencyFundType ==='income'){
          this.minEmergencyAmt = this.projectEmergencyAmt(this.projectedIncomeAfterCPF,this.minEmergencyFundMultiple)
        }else{
          this.minEmergencyAmt = this.projectEmergencyAmt(finalExpenses,this.minEmergencyFundMultiple)
        } 

        console.log("Minimum Emergency Fund", this.minEmergencyAmt)
 


        if(this.mortagePaymentMethod === 'cpf'){
          var cpf = this.projectCPF(this.projectedIncome,flatPayment)
          this.projectedCashInBankBeforeRetirement = this.projectCashInBankBeforeRetirement(this.projectedIncomeAfterCPF,
                                                                                          finalExpenses, 
                                                                                          liabilitiesDetails[1])
        } else{
          cpf = this.projectCPF(this.projectedIncome)
          this.projectedCashInBankBeforeRetirement = this.projectCashInBankBeforeRetirement(this.projectedIncomeAfterCPF,
                                                                                          finalExpenses, 
                                                                                          liabilitiesDetails[1], flatPayment)
        }
        // console.log("Cash in bank", this.projectedCashInBankBeforeRetirement)
        // console.log("Investment Contribution",this.investmentContribution)
        // console.log("Expenses: ", this.projectedExpenses)
        // console.log("liabilites", liabilitiesDetails[1])

        this.projectedCpfOA = cpf[0]
        this.projectedCpfSA = cpf[1]
        this.projectedCpfMA = cpf[2]
        console.log("OA: ", this.projectedCpfOA)
        console.log("SA: ", this.projectedCpfSA)
       
        
        this.projectedInvestment = this.projectInvestment(this.investmentContribution,milestoneCost)
        // console.log("Milestone Expenses: ",milestoneCost)
        // console.log("InvestmentConservative", this.projectedInvestment[0])
        // console.log("InvestmentExpected", this.projectedInvestment[1])
        // console.log("InvestmentOptimistic", this.projectedInvestment[2])
        //Calculate CPF Retirement sum
        this.cpfRetirement = this.projectRetirementSum()
        // console.log(this.cpfRetirement)
        var cpfLifePayout =  this.calculateCpfPayout()

// currCashInBank, investmentWithAfterRetirement
        var retirementProject = this.projectedCashInBankAfterRetirement(finalExpenses,this.minEmergencyAmt,cpfLifePayout,this.projectedInvestment[1],this.projectedCashInBankBeforeRetirement,milestoneCost )
        this.projectedCashInBank = retirementProject[0]
        this.projectedInvestment[1] = retirementProject[1]
        console.log("CashInBank", this.projectedCashInBank)
        console.log("Investment Contribution",this.investmentContribution)
        console.log("InvestmentExpected", this.projectedInvestment[1])
          
        console.log("CPF PAYOUT",cpfLifePayout)
        this.dataset['projectedCashInBank'] = this.projectedCashInBank
        this.dataset['projectedInvestmentExpected'] = this.projectedInvestment[1]
        this.dataset['projectedExpenses'] = this.projectedExpenses
        this.dataset['currentAge'] = this.currentAge

        // firebase.database.collection('user/user1/financialPathway').set({
        //   'ProjectedCashInBank':this.projectedCashInBank
        // },{merge:true})


        console.log(this.milestones)
        
        this.db.collection(`user/${firebase.auth().currentUser.uid}/financialPathway`).get().then(snapshot =>{
          if(!snapshot.empty){
            snapshot.docs.forEach(doc =>{
              console.log(this.typeOfFlat,doc)
              this.db.doc(`user/${firebase.auth().currentUser.uid}/financialPathway/${doc.id}`).update({
                //User input value
                "date": new Date().toDateString(),
                "idealRetirementAge": this.retirementAge,
                "currentAge": this.currentAge,
                "idealRetirementIncome": this.retirementIncome,
                "expectedInflation": this.expectedInflation,
                "minEmergencyFundMultiple": this.minEmergencyFundMultiple,
                "excessUseOfEmergencyFund": this.excessUse,
                "currentIncome" :this.incomes,
                "currentExpenses":this.expenses,
                "expensesGrowth":this.expensesGrowth,
                "expensesRise": this.expensesRise,
                "excludeChildren": this.excludeChildren,
                "haveChildren":this.haveChildren,
                "childrenPlan": this.childrenPlan,
                "children": this.children,
                "expectedChildren": this.expectedChildren,
                "cashInBank": this.cashInBank,
                "totalInvestment": this.totalInvestment,
                "investmentReturn": this.investmentReturn,
                "cpfOA": this.cpfOA,
                "cpfSA": this.cpfSA,
                "cpfMA": this.cpfMA,
                "haveFlat":this.haveFlat,
                "mortagePayable":this.mortagePayable,
                "mortagePaymentMethod": this.mortagePaymentMethod,
                "totalMortagePaymentAmount": this.totalMortagePaymentAmount,
                "monthlyMortagePayment":this.monthlyMortagePayment,
                "spouseMonthlyMortagePayment": this.spouseMonthlyMortagePayment,
                "mortageInterestRate": this.mortageInterestRate,

                "planFlat":this.planFlat,
                "ageGettingFlat":this.ageGettingFlat,
                "typeOfFlat": this.typeOfFlat,
                "milestonesGoals":this.milestones,
                "liabilities":this.liabilities,

                //Calculated values
                "idealRetirementIncomeAfterInflation":this.idealRetirementIncome,
                "projectedIncome": this.projectedIncome,
                "projectedExpenses": this.projectedExpenses,
                "projectedliabilities": liabilitiesDetails[1] ? liabilitiesDetails[1] : [] ,
                'flatPayment': flatDetails[0],
                "milestonesCost": milestoneDetails[1],
                "minEmergencyFund": this.minEmergencyAmt,
                "projectedCpfOA": cpf[0],
                "projectedCpfSA": cpf[1],
                "projectedCpfMA": cpf[2],
                "investmentContribution":this.investmentContribution,
                "projectedInvestmentExpected": this.projectedInvestment[1],
                "cpfPayout": cpfLifePayout,
                "projectedCashInBank":this.projectedCashInBank,
                "cpfRetirementSum": this.cpfRetirement,
                "idealRetirementIncomeAt65": this.calcInflation(this.retirementIncome,this.expectedInflation/100,65-this.currentAge)
              })
            })
          } else{
            this.db.collection(`user/${firebase.auth().currentUser.uid}/financialPathway`).add({
              //User input value
              "date": new Date().toDateString(),
              "idealRetirementAge": this.retirementAge,
              "currentAge": this.currentAge,
              "idealRetirementIncome": this.retirementIncome,
              "expectedInflation": this.expectedInflation,
              "minEmergencyFundMultiple": this.minEmergencyFundMultiple,
              "excessUseOfEmergencyFund": this.excessUse,
              "currentIncome" :this.incomes,
              "currentExpenses":this.expenses,
              "expensesGrowth":this.expensesGrowth,
              "expensesRise": this.expensesRise,
              "excludeChildren": this.excludeChildren,
              "haveChildren":this.haveChildren,
              "childrenPlan": this.childrenPlan,
              "children": this.children ? this.children : [],
              "expectedChildren": this.expectedChildren ? this.children : [],
              "cashInBank": this.cashInBank,
              "totalInvestment": this.totalInvestment,
              "investmentReturn": this.investmentReturn,
              "cpfOA": this.cpfOA,
              "cpfSA": this.cpfSA,
              "cpfMA": this.cpfMA,
              "haveFlat":this.haveFlat,
              "mortagePayable":this.mortagePayable,
              "mortagePaymentMethod": this.mortagePaymentMethod,
              "totalMortagePaymentAmount": this.totalMortagePaymentAmount,
              "monthlyMortagePayment":this.monthlyMortagePayment,
              "spouseMonthlyMortagePayment": this.spouseMonthlyMortagePayment,
              "mortageInterestRate": this.mortageInterestRate,

              "planFlat":this.planFlat,
              "ageGettingFlat":this.ageGettingFlat,

              "typeOfFlat": this.typeOfFlat,
              "milestonesGoals":this.milestones,
              "liabilities":this.liabilities,
  
              // Calculated values

              "idealRetirementIncomeAfterInflation":this.idealRetirementIncome,
              "projectedIncome": this.projectedIncome,
              "projectedExpenses": this.projectedExpenses,
              "projectedliabilities": liabilitiesDetails[1] ? liabilitiesDetails[1] : [] ,
              'flatPayment': flatDetails[0],
              "milestonesCost": milestoneDetails[1],
              "minEmergencyFund": this.minEmergencyAmt,
              "projectedCpfOA": cpf[0],
              "projectedCpfSA": cpf[1],
              "projectedCpfMA": cpf[2],
              "investmentContribution":this.investmentContribution,
              "projectedInvestmentExpected": this.projectedInvestment[1],
              "cpfPayout": cpfLifePayout,
              "projectedCashInBank":this.projectedCashInBank,
              "cpfRetirementSum": this.cpfRetirement,
              "idealRetirementIncomeAt65": this.calcInflation(this.retirementIncome,this.expectedInflation/100,65-this.currentAge)
              
              })
          }
        }).then(()=>{
          console.log("LIABILITIESSSS",liabilitiesDetails)
          this.$router.push({path: `/report`})

        })




    },
    calcInflation:function(val,expectedInflationperc,years){
      return val*Math.pow(1+expectedInflationperc,years)
    },
    emergencyCeilling:function(val){
      return val*this.emergencyFundMultiple
    },
    projectIncome:function(age){
      var currIncome = parseInt(this.incomes[0].income)
      var totalIncome = [currIncome*12]
      var afterCPF = [currIncome*12*0.8]
      for(let i = this.currentAge; i <age; i++){
        if(i < this.retirementAge){ //If the client is at retirement age, income shouldn't grow
          var yr = i-this.currentAge+1
          if( (yr !== 0) && ((yr % this.incomes[0].jobSwitchFreq) === 0) ){ //check if its the year of expected job switch
            if(i <= this.incomes[0].jobSwitchStop){ //if it is year of job switch and age is below jobswitchstop age thn add increment
              currIncome = currIncome*(1 + parseInt(this.incomes[0].incomeGrowthRateJobSwitch)/100)
            }else{ //if age beyond jobSwitchstop thn just add the annual income growth
              if (i <= this.incomes[0].incomeGrowthStop){ 
                currIncome = currIncome*(1 + parseFloat(this.incomes[0].incomeGrowthRate)/100)
              }
            }
          }else{ //if it is not jobswitch year and just normal year and below income growth, just add normal increment
              if (i <= this.incomes[0].incomeGrowthStop){ 
                currIncome = currIncome*(1 + parseFloat(this.incomes[0].incomeGrowthRate)/100)
              }
            }
        }
        if(i <=55){
          afterCPF.push(Math.round((currIncome*12)*0.8))
        }else if (i <= 60){
          afterCPF.push(Math.round((currIncome*12)*0.87))
        } else if (i <=65){
          afterCPF.push(Math.round((currIncome*12)*0.925))
        }else{
          afterCPF.push(Math.round((currIncome*12)*0.95))
        }
        totalIncome.push(Math.round(currIncome*12))
      } 
      return [totalIncome, afterCPF ]         
    },
    projectExpense:function(){
      var currExpenses = parseInt(this.expenses)
      var totalExpenses =[currExpenses*12]
      var expInflation = parseInt(this.expectedInflation)
      var expGrowth = parseInt(this.expensesGrowth)
      console.log("EXP INFLAT",expInflation)
      console.log("EXP Growth",expGrowth)
      for(let i = this.currentAge; i < this.retirementAge; i++) {
        var yr = i-this.currentAge+1
        var growth = currExpenses * ((expInflation + expGrowth)/100)
        if( (yr !== 0) && ((yr % this.incomes[0].jobSwitchFreq) === 0) ){ 
          if(i <= this.incomes[0].jobSwitchStop && (this.incomes[0].incomeGrowthRateJobSwitch > expInflation)){
            currExpenses = currExpenses*(1 + parseInt(this.expensesRise)/100)
          }
        }
        currExpenses += growth
      totalExpenses.push(Math.round(currExpenses*12))
      }

      var exp = totalExpenses[totalExpenses.length-1]
      for(let i = this.retirementAge; i < 100; i++){
        exp *=(1+(expInflation/100))
        totalExpenses.push(exp)
      }


      return totalExpenses
    },
    //https://blog.seedly.sg/cost-raise-child-singapore/#Pregnancy-child-birth
    addChildExpenses:function(){
        //for current child
      var costs = Array(100).fill(0)
      var estCost =0
      if(this.haveChildren === 'yes'){
        console.log("HI")
        for(let child of this.children){
          if(child.gender === 'female'){
            if(child.age <= 23){
              for(let a = child.age;  a<=23;a++) {
                estCost = this.estimatedChildExpenses[a]/2 //will not divide by 2 if its sole breadwinner
                costs[a-child.age] = costs[a-child.age] + estCost
              }
            }
          } else{
            //before NS
            if(child.age <= 20){
              for(let a = child.age; a < 20 ;a++) {
                estCost = this.estimatedChildExpenses[a]/2
                costs[a-child.age] = costs[a-child.age] + estCost
              }
              for(let a = 20; a<24; a++){
                estCost = this.estimatedChildExpenses[a]/2
                costs[a-child.age+2] = costs[a-child.age+2] + this.estimatedChildExpenses[a] //Adding of university fee
              }
          }
        }
        }
      }
      if(this.expectedChildren.length >0){
        for(let age of this.expectedChildren){
          var pos = age.estimatedAge - this.currentAge //to get the year in which the user plans to have child.
          for(let a = pos;  a<= pos+23;a++) { //plus 23 because child education is expected to last 23 years
                estCost = this.estimatedChildExpenses[a-pos]/2 //will not divide by 2 if its sole breadwinner
                // console.log("Child age",a-pos,' cost ==>',estCost," My age",a+this.currentAge) For checking of calculation
                costs[a] = costs[a] + estCost
          }
        }
      }
      return costs 
    },
    projectTax: function(incomes){
      var taxes = []
      for(let i = 0; i < incomes.length; i++){
        taxes.push(this.getTaxPayable(incomes[i]))
      }
      return taxes
    },

    getTaxPayable:function(income){
      var taxPayable = 0
      if (income > 20000 && income <= 30000){
        return income * (this.taxRateSingapore["30000"])/100
      }
      if(income > 30000 && income <= 40000){
        return 200 + (income - 30000) *  (this.taxRateSingapore["400000"])/100
      }
      if(income > 40000 && income <= 80000){
        return 550 + (income - 40000) * (this.taxRateSingapore["80000"])/100
      }      
      if(income > 80000 && income<=120000){
        return 3350 + (income -80000) *  (this.taxRateSingapore['120000'])/100
      }
      if(income > 120000 && income <= 160000){
        return 7950 + (income - 120000) *  (this.taxRateSingapore["160000"])/100
      }
      if(income > 160000 && income <= 200000){
        return 13950 + (income - 160000) *  (this.taxRateSingapore["200000"])/100
      }
      if(income > 200000 &&income <= 240000){
        return 21150 + (income - 200000) *  (this.taxRateSingapore["240000"])/100
      }
      if(income > 240000 && income <= 280000){
        return 28750 + (income - 240000) *  (this.taxRateSingapore["280000"])/100
      }
      if(income >280000 && income <= 320000){
        return 36550 + (income - 280000) *  (this.taxRateSingapore["320000"])/100
      }
      if(income > 320000){
        return 44550 + (income - 320000) *  (this.taxRateSingapore["320000>"])/100
      }
      return taxPayable
    },
    sumExpenses:function(grossExp,childCost,taxes,liabilites,flatPayment =[]){
      var l = 100- this.currentAge
      var finalCost = Array(l).fill(0)
      var gross = 0
      var child = 0
      var tax = 0
      var liabilitiesCost =0
      var flatPaymentCost =0
      for(let i = 0; i< l; i++){
        // var exp = grossExp[grossExp.length -1]
        gross = i< grossExp.length ? grossExp[i]:0
        //child = i< childCost.length ? childCost[i]:0
        if(this.excludeChildren === 'no'){
          child =  i < childCost.length ? childCost[i]:0
        }
        tax = i< taxes.length ? taxes[i]:0
        liabilitiesCost = i < liabilites.length ? liabilites[i]:0
        flatPaymentCost = i< flatPayment.length ? flatPayment[i]:0
        finalCost[i] = gross+child+tax+liabilitiesCost+flatPaymentCost
        // if(i < this.retirementAge-this.currentAge){
        // } else{ //Once reaches retirement age, expenses only grows with inflation
        //   exp *= (1+ (this.expectedInflation/100))
        //   finalCost[i] = exp+child+tax+liabilitiesCost+flatPaymentCost

        // }
      }
      return finalCost
    },
    projectEmergencyAmt:function(values ,multiple){
      multiple = parseInt(multiple)
      console.log("Value is ",values)
      console.log("Multiple is ",multiple)
      var maxVal = []
      for(let i = 0; i<values.length;i++){
        maxVal.push((values[i]/12) * multiple)
      }
      return maxVal
    },
    projectCashInBankBeforeRetirement:function(incomes,expenses){
      console.log("CALCULATING CASH BEFORE RETIREMENNTTTTTT \n\n")
      var cash = [parseFloat(this.cashInBank)]
      var curr = parseFloat(this.cashInBank)
      for(let i = 0; i < incomes.length; i++){
        var newBal = 0
        var investmentAmt = 0
        newBal = curr + (incomes[i] - expenses[i])
        console.log("Current Age: "+ i+this.currentAge,"Before Bal: "+curr,"After Bal: "+newBal  ," Income: " + incomes[i]," Expenses: " +expenses[i], "Diff: "+ (incomes[i] - expenses[i]) )

        // var liability = i <= liabilities.length ? liabilities[i] : 0
        // if(flatDetails.length > 0){
        //   var flatPayment = 0
        //   if(this.haveFlat === 'yes'){
        //     flatPayment = i <= flatDetails.length ? flatDetails[i] : 0
        //   }else if(this.haveFlat === 'no' && this.planFlat==='yes'){
        //     var yr = i - (this.ageGettingFlat - this.currentAge) 
        //       if(yr >= 0){
        //         flatPayment = yr <= flatDetails.length ? flatDetails[yr] : 0
        //       }
        //   }
        //   newBal = curr + (incomes[i] - (expenses[i] + liability + flatPayment))
        // }else{
        //   newBal = curr + (incomes[i] - (expenses[i] + liability))
        // }

        if(newBal <= this.minEmergencyAmt[i+1]){
          console.log("WARNING LOW EMERGENCY FUND",i)
          var withdrawlFromInvestment = newBal - this.minEmergencyAmt[i+1]  
          newBal = this.minEmergencyAmt[i+1]
          this.investmentContribution.push(withdrawlFromInvestment)
        } else{
          var extra = newBal- this.minEmergencyAmt[i+1]
          investmentAmt = extra *this.excessUse/100 //excessUse will be 100 if user choose to put all funds in investment.
          newBal = newBal - investmentAmt
          this.investmentContribution.push(investmentAmt)
        }  
        cash.push(newBal)
        curr = newBal
        }
        return cash
    },

    projectLiabilities:function(liabilities){
      var projectedLiabilities = []
      var totalLiabilitiesPayable = Array(100).fill(0)
      var l =[...liabilities]
      if(l.length > 1 || l[0].totalAmount > 0 ){
        
        for(let i = 0; i < l.length; i++){
            var amtpayable= []
            // var liability = l[i]
            var amtPaid = []
            var amtLeft = l[i].totalAmount
            var year = 0
            while(amtLeft > 0){
              // l[i].totalAmount = l[i].totalAmount - (l[i].periodicPaymentAmount*12)
              var payment =  (l[i].periodicPaymentAmount*12)
              if(payment > amtLeft ){
                amtPaid.push(amtLeft)
                totalLiabilitiesPayable[year] += amtLeft
                amtLeft = 0
              } else{
                amtPaid.push(l[i].periodicPaymentAmount*12)
                totalLiabilitiesPayable[year] += l[i].periodicPaymentAmount*12
                amtLeft -=  (l[i].periodicPaymentAmount*12)
              }
              year +=1
              if(amtLeft > 0){
                amtLeft +=  (amtLeft* (l[i].interestRate/100))
              }
              amtpayable.push(amtLeft)
            }
            projectedLiabilities.push([ l[i].name , amtpayable, amtPaid])
          }
          return [projectedLiabilities, totalLiabilitiesPayable]
        } else{
          return []
        }
      

    },
    calculateMilestoneCost:function(milestone){
    var totalCosts = Array(100-this.currentAge).fill(0)
    var cost = {}
    for(let i = 0; i< milestone.length; i++){
      var yearsBeforeStart = parseInt(milestone[i].date.split("-")[0]) - new Date().getFullYear() 
      var amt = 0

      if(milestone[i].freq === 'once'){
        amt = this.calcInflation(milestone[i].amount ,milestone[i].inflation/100 ,yearsBeforeStart) //To calculate actual amount needed with inflation
        if(yearsBeforeStart in cost){
          cost[yearsBeforeStart].amount += amt
          cost[yearsBeforeStart].milestones.push([milestone[i].name, amt])
          totalCosts[yearsBeforeStart]+=amt
        } else{
          totalCosts[yearsBeforeStart]+=amt
          cost[yearsBeforeStart] = {amount:0, milestones:[] }
          cost[yearsBeforeStart].amount = amt
          cost[yearsBeforeStart].milestones.push([milestone[i].name, amt])
        }
      }
      else{
        var durationOfMilestone = parseInt(milestone[i].endDate.split("-")[0]) - parseInt(milestone[i].date.split("-")[0])
        var year = yearsBeforeStart
        amt = milestone[i].amount
        if(milestone[i].freq === "monthly"){
          amt *=12
        }else if(milestone[i].freq === "quarterly"){
          amt *=3
        }
        // console.log(yearsBeforeStart)
        for(let yr =0; yr < durationOfMilestone; yr++){
          year =  yearsBeforeStart + yr
          var amtWithInflation = this.calcInflation(amt,milestone[i].inflation/100,year)
          if(year in cost){
            totalCosts[year]+=amtWithInflation
            cost[year].amount += amtWithInflation
            cost[year].milestones.push([milestone[i].name, amtWithInflation])
          } else{
            totalCosts[year]+=amtWithInflation
            cost[year] = {amount:0, milestones:[] }
            cost[year].amount = amtWithInflation
            cost[year].milestones.push([milestone[i].name, amtWithInflation])
          }
        }
      }
    }
    return [cost, totalCosts]
    },
    projectInvestment:function(investmentContribution, milestoneCost){
      var conservative = parseInt(this.investmentReturn) - 2
      var optimistic = parseInt(this.investmentReturn) + 2
      var inv = parseInt(this.totalInvestment)
      var investmentPortfolioExpected = [inv]
      var investmentPortfolioConservative= [inv]
      var investmentPortfolioOptimistic= [inv]
      for(let i = 0; i < this.retirementAge - this.currentAge; i++){
        var topUp = (i < investmentContribution.length) ? investmentContribution[i] : 0 //If index out of range, just add 0
        

        var portfolioSizeExpected = topUp + investmentPortfolioExpected[i] + ( investmentPortfolioExpected[i] * (this.investmentReturn/100)) 
        var portfolioSizeConservative = topUp + investmentPortfolioConservative[i] + ( investmentPortfolioConservative[i] * (conservative/100)) 
        var portfolioSizeOptimistic= topUp + investmentPortfolioOptimistic[i] + ( investmentPortfolioOptimistic[i] * (optimistic/100)) 
        
        //Remove milestone cost
        if(i in milestoneCost){
          // console.log(portfolioSize,milestoneCost[i])
          portfolioSizeExpected -= milestoneCost[i].amount
          portfolioSizeConservative -= milestoneCost[i].amount
          portfolioSizeOptimistic -= milestoneCost[i].amount
        }
        investmentPortfolioExpected.push(Math.round(portfolioSizeExpected))
        investmentPortfolioConservative.push(Math.round(portfolioSizeConservative))
        investmentPortfolioOptimistic.push(Math.round(portfolioSizeOptimistic))
      }
      return [investmentPortfolioConservative, investmentPortfolioExpected, investmentPortfolioOptimistic]
    },
    deductCPFforFlat:function(){
      var totalPaid = []
      var flatValue = []
       if(this.haveFlat === 'no' && this.planFlat === 'yes'){
          var downpayment = this.typeOfFlat.price *0.1
          var flatType = this.typeOfFlat.type.split(' ')[0]
          var yrToage = this.ageGettingFlat - this.currentAge
          var monthlyMortagePayment = (this.projectedIncome[yrToage]*0.23)*0.9
          var flatAmtPaybable = this.typeOfFlat.price - downpayment
          var yrsToFlat = Array(this.ageGettingFlat - this.currentAge).fill(0)
          totalPaid.push(...yrsToFlat)
          if(flatType === 'BTO'){
            totalPaid.push(downpayment/2)
            totalPaid.push(0,0,0,0,0)
            flatValue.push(flatAmtPaybable,flatAmtPaybable,flatAmtPaybable,flatAmtPaybable,flatAmtPaybable,flatAmtPaybable)
          }
          while(flatAmtPaybable > 0){
            if(flatAmtPaybable > monthlyMortagePayment*2){
              flatAmtPaybable -= (monthlyMortagePayment*2) //for both partners
              flatAmtPaybable *= 1.026
              totalPaid.push(monthlyMortagePayment)
              flatValue.push(flatAmtPaybable)
            } else{
              totalPaid.push(flatAmtPaybable/2) //Assuming cost is split equally between partner
              flatAmtPaybable = 0
              flatValue.push(0)
            }
          }
          if(flatType !== 'BTO'){
            totalPaid[yrsToFlat] += downpayment/2 //Downpayment split between spouse
          }
       } else if(this.haveFlat === 'yes'){
           var amtpayable = this.mortagePayable
           var totalPeriodicPayment = this.spouseMonthlyMortagePayment + this.monthlyMortagePayment

           while(amtpayable> 0){
             if(amtpayable > totalPeriodicPayment*12 ){
               amtpayable -= (totalPeriodicPayment*12) 
               amtpayable *= (1+(this.mortageInterestRate/100))
               totalPaid.push(this.monthlyMortagePayment*12)
               flatValue.push(amtpayable)
             } else{
               totalPaid.push(amtpayable/2) //Assuming cost is split equally between partner
               amtpayable = 0 
               flatValue.push(0)
             }
           }
       }
       return [totalPaid, flatValue]
    },
    projectCPF:function(incomes,flatDetails = []){
      var oalist = [parseInt(this.cpfOA)]
      var salist = [parseInt(this.cpfSA)]
      var malist = [parseInt(this.cpfMA)]
      var currAge = this.currentAge
      for(let i = 0; i< 55 -this.currentAge; i++){
        var oa = oalist[i] * 1.025
        var sa = salist[i] * 1.04
        var ma = malist[i] * 1.04
        if(flatDetails.length >0){
          if(this.haveFlat === 'yes' || this.planFlat === 'yes'){
            oa -= i <= flatDetails.length ? flatDetails[i] : 0
          } 
        }
        var inc = i < incomes.length ? incomes[i] : 0
        if(currAge <=35){
          oa = oa + (inc * 0.23)
          sa = sa + (inc * 0.06)
          ma = ma + (inc * 0.08)
        } else if(currAge >35 && currAge<= 45) {
          oa = oa + (inc * 0.21)
          sa = sa + (inc * 0.07)
          ma = ma + (inc * 0.09)
        } else if(currAge >45 && currAge<= 50) {
          oa = oa + (inc * 0.19)
          sa = sa + (inc * 0.08)
          ma = ma + (inc * 0.1)
        } else if(currAge >50 && currAge<= 55) {
          oa = oa + (inc * 0.15)
          sa = sa + (inc * 0.115)
          ma = ma + (inc * 0.105)
        } else if(currAge >55 && currAge<= 60) {
          oa = oa + (inc * 0.12)
          sa = sa + (inc * 0.035)
          ma = ma + (inc * 0.105)
        } else if(currAge >60 && currAge<= 65) {
          oa = oa + (inc * 0.035)
          sa = sa + (inc * 0.025)
          ma = ma + (inc * 0.105)
        }else {
          oa = oa + (inc * 0.01)
          sa = sa + (inc * 0.01)
          ma = ma + (inc * 0.105)
        }
        oalist.push(Math.round(oa))
        salist.push(Math.round(sa))
        malist.push(Math.round(ma))
      }
      return [oalist ,salist ,malist]
    },
    projectRetirementSum(){
      let l = 55 - this.currentAge
      var cpfLifePayout = {b:770,f:1430,e:2080}  //cpflife payout as per 2020.
      var cpfRetirementSum = {brs:93000,frs:186000,ers:279000}
      let currentyear = new Date().getFullYear()

      //Estimate the value of the current Year, since 2020
      for(let i = 0; i < 2021-currentyear; i ++){
        cpfLifePayout.b = cpfLifePayout.b*1.03
        cpfLifePayout.f = cpfLifePayout.f*1.03
        cpfLifePayout.e = cpfLifePayout.e*1.03
        cpfRetirementSum.brs = cpfRetirementSum.brs*1.03
        cpfRetirementSum.frs = cpfRetirementSum.frs*1.03
        cpfRetirementSum.ers = cpfRetirementSum.ers*1.03
      }
      var brsCpfPayout = cpfLifePayout.b;
      var frsCpfPayout = cpfLifePayout.f;
      var ersCpfPayout = cpfLifePayout.e;

      var brs = cpfRetirementSum.brs*1.03
      var frs = cpfRetirementSum.frs*1.03
      var ers = cpfRetirementSum.ers*1.03

      for(let i = 0; i < l; i ++){
        brs = brs*1.03
        frs = frs*1.03
        ers = ers*1.03
        brsCpfPayout = brsCpfPayout*1.03
        frsCpfPayout = frsCpfPayout*1.03
        ersCpfPayout = ersCpfPayout*1.03
      }

      return [{brsCpfPayout:brsCpfPayout, frsCpfPayout:frsCpfPayout, ersCpfPayout:ersCpfPayout},
              {brs:brs,frs:frs,ers:ers}]
  
    },
    calculateCpfPayout:function(){
            var yearsTo55 = 55 - this.currentAge
            var cpfAmtAt55 = this.projectedCpfOA[yearsTo55-1] + this.projectedCpfSA[yearsTo55-1]
            console.log("CPF AT 55", cpfAmtAt55)
            console.log("Retirement sum", this.cpfRetirement[1])
            if(cpfAmtAt55 > this.cpfRetirement[1].ers){
                console.log("GETTING ERS")
                return this.cpfRetirement[0].ersCpfPayout
            }else if(cpfAmtAt55 > this.cpfRetirement[1].frs){
                console.log("GETTING FRS")
                return this.cpfRetirement[0].frsCpfPayout
            }else if(cpfAmtAt55 > this.cpfRetirement[1].brs){
                console.log("GETTING BRS")
                return this.cpfRetirement[0].brsCpfPayout
            }else{
                return 0
            }
    },
    projectedCashInBankAfterRetirement:function(expenses,minEmergencyAmt,cpfLifePayout,investment,cashInBank,milestoneCost){
      console.log("PROJECTING CASH IN BANK AFTER RETIREMENT")
      console.log(expenses,minEmergencyAmt,cpfLifePayout,investment,cashInBank,milestoneCost)
      var currCashInBank = cashInBank
      var retirementAge = this.retirementAge
      var inv = investment[investment.length-1]
      var currCash = parseInt(currCashInBank[currCashInBank.length-1])
      var investmentWithAfterRetirement = investment
      for(let i = retirementAge; i < 100; i++){
        // var currCash = currCashInBank[currCashInBank.length-1]
        // console.log(i,expenses[i-retirementAge],currCash)
        if(i < 65){ //CPF Payout not started 
          inv -= expenses[i-this.currentAge] 
        }else{
          inv +=  ((cpfLifePayout*12) - expenses[i-this.currentAge])
        }
        // if(currCash < minEmergencyAmt[i]){
        //   console.log("SHORTAGEEEE  ")
        //   var shortage =  minEmergencyAmt[i] - currCash
        //   inv -= shortage
        // }
        // console.log(expenses[i],minEmergencyAmt[i])

        if(i in milestoneCost){
          // console.log(portfolioSize,milestoneCost[i])
          inv-= milestoneCost[i].amount
        }
        
        currCashInBank.push(currCash)
        inv *=1.05
        investmentWithAfterRetirement.push(inv)
      }
      return [currCashInBank, investmentWithAfterRetirement] 
    },
    fetchData:function(){
      
      if(this.onEdit){
        console.log("logged In user")
        this.db.collection(`user/${firebase.auth().currentUser.uid}/financialPathway`).get().then(snapshot =>{
          if(!snapshot.empty){
            snapshot.docs.forEach(doc =>{
              var data = doc.data()
                this.retirementAge = data['idealRetirementAge']
                this.currentAge = data["currentAge"]
                this.retirementIncome = data["idealRetirementIncome"]
                this.expectedInflation = data["expectedInflation"]
                this.minEmergencyFundMultiple = data["minEmergencyFundMultiple"]
                this.excessUse = data['excessUseOfEmergencyFund']
                
                this.incomes = data["currentIncome"] 
                this.expenses = data["currentExpenses"]
                this.expensesGrowth = data["expensesGrowth"]
                this.expensesRise = data["expensesRise"] 
                this.excludeChildren = data["excludeChildren"] 
                this.haveChildren = data["haveChildren"]
                this.childrenPlan = data["childrenPlan"] 
                this.children = data["children"] 
                this.expectedChildren = data["expectedChildren"] 
                this.cashInBank = data["cashInBank"] 
                this.totalInvestment = data["totalInvestment"] 
                this.investmentReturn = data["investmentReturn"] 
                this.cpfOA = data["cpfOA"] 
                this.cpfSA = data["cpfSA"] 
                this.cpfMA = data["cpfMA"] 
                this.haveFlat = data["haveFlat"]
                this.mortagePayable = data["mortagePayable"]
                this.mortagePaymentMethod = data["mortagePaymentMethod"] 
                this.totalMortagePaymentAmount = data["totalMortagePaymentAmount"] 
                this.monthlyMortagePayment = data["monthlyMortagePayment"]
                this.spouseMonthlyMortagePayment = data["spouseMonthlyMortagePayment"] 
                this.mortageInterestRate = data["mortageInterestRate"] 
                this.planFlat = data["planFlat"]
                this.ageGettingFlat = data["ageGettingFlat"]
                this.typeOfFlat = data["typeOfFlat"] 
                this.milestones = data["milestonesGoals"]
                this.liabilities = data["liabilities"]
              })
          }
          }
        
        ).then(()=>{console.log(this.liabilities)})

      }
    }
  },
  created(){
    document.title="FinBud - Financial Pathway Planner"
    if(this.$route.query.edit){
      this.onEdit = this.$route.query.edit
      this.fetchData()
    }else{
      this.db.collection(`user/${firebase.auth().currentUser.uid}/financialPathway`).get().then(snapshot =>{
        if(!snapshot.empty){
          console.log('hihi')
          this.onEdit = true
          this.fetchData()
        }
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#financialPathway{
  text-align: center;
  color: #0E4070;
  background: #A9D6FF;
  /* height: 100vh; */
}
.header{
  padding-top:2%;
}
.header-font{
  font-family: Lustria;
}

.logo{
  position: relative;
  transform: translate(-50,-50);
  max-width: 15%;
  max-height:20%;
}

.second{
  background: #B9DEFF;
  padding:5%;
}
.form{
  background: #A9D6FF;
  padding:2%;
}

input, select{
  border: hidden;
  background-color: #D7ECFF;
  border-radius:25px 25px 25px 25px;
  min-width: 200px;
  max-width: 250px;
}

.sub-section{
  /* padding-left:2%; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  /* padding-top:2%; */
}


.user-input{
  min-width: 27%;
  display:inline-block;
  margin:3%;
  text-align: left; 
}

 .user-input input, label,select{
  display:block;
}

.info{
  font-size: smaller;
  opacity: 0.8;
}

.list{
  width: 80%;
  margin-left:10%;
  margin-right:10%;
  border-bottom:.5px solid #0E4070;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  align-self: baseline;
}


.top-bottom label,input{
  display: block;
}
.top-bottom label{
  text-align: left;
}
.top-bottom{
  margin:1%
}
.list button{
  border: hidden;
  height: 20px;
  width:100px;
  border-radius: 25px 25px 25px 25px;
  background-color: #0E4070 ;
  color:#fff;
  margin-left:2%;
  margin-top:2%;
}
.container{
  width: 100%;
  margin-top:2%;
}
.milestone h5{
  text-decoration: underline 1px solid #0E4070;
}

.btn{
  display:flex;
  justify-content: space-between;
}
.btn button{
  border: hidden;
  height: 50px;
  width:150px;
  border-radius: 25px 25px 25px 25px;
  background-color: #0E4070 ;
  color:#fff;
  margin-left:2%;
  margin-top:2%;
}

.others{
  text-align: center;
  color: #0E4070;
  background: #A9D6FF;
}

.others h1{
  padding: 5%;
  margin:0%;
}

.calculators{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom:10%;
}
.calculator{
  display:flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  text-align: center;
  min-width: 20%;
  max-width: 20%;
  min-height:150px;
  border-radius:50px 50px 50px 50px;  
}

.calculator p{
  padding:5%;
}


.budCon2{
    display: flex;
    justify-content: center;
    min-height: 100px;
    margin-bottom: 2%;
}

.navBut{
    background-color: #fff;
    text-align: center;
    padding:2%;
    width:20%;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 12px;
    color: #0E4070;
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
