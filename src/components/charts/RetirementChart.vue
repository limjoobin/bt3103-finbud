<template>
    <div>
        <h1>Retirement Chart</h1>
        <!-- <chart @min="clicked()" @max='clicked()' :min="min" :max="max" ></chart> -->
        <chart :barData='barData' :min='min' :max='max' :dataset='dataset'></chart>
        <label>Start Age</label>
        <input type='number' v-model="min">
        <label>End Age</label>
        <input type='number' v-model="max">
        <button v-on:click="clicked()">Update</button>
    </div>
</template>

<script>
import Chart from "./RetirementChart.js";

export default {
    components:{Chart},
    props:['dataset'],
    data:function(){
        return{
            min:40,
            max:70,
            barData:{
                currentAge:0,
                projectedCashInBank: [],
                projectedInvestmentExpected: [],
                projectedExpenses:[]
            },
        }
    },watch:{
        barData:function(){
            return this.barData
        },dataset: {
            handler: function (val, oldVal) {
                console.log('watch 1', 'newval: ', val, '   oldVal:', oldVal)
                this.barData.projectedCashInBank = val.projectedCashInBank
                this.barData.projectedInvestmentExpected = val.projectedInvestmentExpected
                this.barData.projectedExpenses = val.projectedExpenses
                this.barData.currentAge = val.currentAge
                console.log(this.barData)
            },
            deep: true
        }
    }, methods:{
       
    }, created(){

    }
    // data:function(){
    //     return{
    //         // cpfRetirementPayout: {brs: 1982, frs: 5356, ers: 5356},
    //         // cpfRetirementSum:{ brs:246667,frs:493334,ers:740001},
    //         // cpfPayout:0,
    //         // currentAge:23,
    //         // idealRetirementAge:65,
    //         // idealRetirementIncome:7609,
    //         // inflationRate:2,
    //         // retirementIncomeBeforeInflation:3000,
    //         // projectedCpfOA: [1500, 11573, 21998, 32785, 43944, 55486, 68360, 81671, 95431, 109652, 124347, 140605, 157401, 174749, 192665, 211164, 231494, 252483, 274149, 296510, 319585, 343394, 367956, 393292, 419423, 446370, 474155, 502801, 532331, 562769, 594139, 626466, 659776, 694095, 729272, 765329, 802287, 840169, 878998, 918798, 959593, 1001408, 1044268],
    //         // projectedCpfSA:[800, 3450, 6232, 9152, 12215, 15428, 19042, 22830, 26800, 30959, 35316, 40159, 45230, 50538, 56094, 61907, 68310, 75008, 82014, 89340, 96999, 105006, 113374, 122119, 131255, 140799, 150768, 161179, 172051, 183402, 195251, 207619, 220528, 233999, 248009, 262579, 277732, 293491, 309881, 326926, 344653, 363089, 382263],
    //         // projectedCashInBank: [30000, 8688.5, 7826.25, 7887.75, 7949.25, 8011.75, 9861.75, -1328.5740000000005, 10002.75, 10074.25, 10146.25, 10955.75, 11322, 11404, 11486.5, 11570, 11437, 11531, 11625.5, 9648, 9744.5, 18578, 18676.5, 18775.5, 18876, 10241.5, 10344, 10447.5, 10552, 10657.5, 10764, 10871.5, 10980.5, 11090, 11201, 11313, 11426, 11540.5, 11656, 11772.5, 11890, 12009, 12129],
    //         // projectedInvestmentExpected: [2000, 28329, 30362, 31720, 33288, 35078, 7410, 5645, 15186, 25452, 41069, 58221, 76862, 96798, 118106, 145806, 175144, 206447, 246052, 286165, 312367, 349230, 388662, 430818, 502075, 569238, 640801, 717032, 798214, 884649, 976656, 1074571, 1178756, 1288968, 1405568, 1528937, 1659478, 1797619, 1943815, 2098546, 2262322, 2435683, 2581824, 2633460, 2686129, 2739852, 2794649, 2850542, 2907553, 2965704, 3025018, 3085518, 3147228, 3210173, 3274376, 3339864, 3406661, 3474794, 3544290, 3615176, 3687480, 3761230, 3836455, 3913184, 3991448, 4071277, 4152703, 4235757, 4320472, 4406881, 4495019, 4584919, 4676617, 4770149, 4865552, 4962863, 5062120, 5163362, 5266629, 5371962, 5479401, 5588989, 5700769, 5814784, 5931080, 6049702, 6170696, 6294110, 6419992, 6548392, 6679360, 6812947, 6949206, 7088190, 7229954, 7374553, 7522044, 7672485, 7825935, 7982454],
    //         // liabilites:[3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 3600, 548.4957884673986],
    //         // expenses:[17377, 15652.5, 15775.5, 15898.5, 16023.5, 19723.5, 19863.5, 20005.5, 20148.5, 20292.5, 21911.5, 22644, 22808, 22973, 23140, 22874, 23062, 23251, 19296, 19489, 37156, 37353, 37551, 37752, 20483, 20688, 20895, 21104, 21315, 21528, 21743, 21961, 22180, 22402, 22626, 22852, 23081, 23312, 23545, 23780, 24018, 24258, 24501, 24746, 24993, 25243, 25496, 25750, 26008, 26268, 26531, 26796, 27064, 27335, 27608, 27884, 28163, 28445, 28729, 29016, 29306, 29600, 29896, 30194, 30496, 30801, 31109, 31420, 31735, 32052, 32373, 32696, 33023, 33353, 33687, 34024, 34364]
    //     }
    // },
    // created:function(){
    //     // this.cpfPayout = this.calculateCpfPayout()
    //     // console.log("CPF payout",this.cpfPayout)

    // },
    // methods:{
    //     calculateCpfPayout:function(){
    //         var yearsTo55 = 55 - this.currentAge
    //         var cpfAmtAt55 = this.projectedCpfOA[yearsTo55-1] + this.projectedCpfSA[yearsTo55-1]
    //         if(cpfAmtAt55 > this.cpfRetirementSum.ers){
    //             return this.cpfRetirementPayout.ers
    //         }else if(cpfAmtAt55 > this.cpfRetirementSum.frs){
    //             return this.cpfRetirementPayout.frs
    //         }else if(cpfAmtAt55 > this.cpfRetirementSum.brs){
    //             return this.cpfRetirementSum.brs
    //         }else{
    //             return 0
    //         }
    //     }

    // }
}
</script>