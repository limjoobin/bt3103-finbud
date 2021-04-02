import { Bar } from 'vue-chartjs'
import firebase from '../../../firebase'


export default {
    extends: Bar,
    props:['barData','min','max','loading'],
    data: function () {
        return {
            database: firebase.firestore(),
            data:{},
            datacollection: {
                labels: [],
                datasets: [
                    {backgroundColor: '#f87979',
                     borderColor: '#f87979',
                        data: [],
                        fill:false,
                        label:"Cash In Bank"},

                    {backgroundColor: "#8e5ea2",
                    borderColor: '#8e5ea2',
                        data: [],
                        fill:false,
                        label:"Investment"},
                    {backgroundColor: "#3cba9f",
                    borderColor:"#3cba9f",
                        data: [],
                        fill:false,
                        label:"Expenses"},
                ]
            },
            options: {
                legend: { display: true,                     
                    },
                title: {
                  display: true,
                  position: 'top',
                  text:"Net worth Projection"                  
                },
                scales:{
                    xAxes:[{
                        stacked:true
                    }],
                    yAxes: [{
                        stacked: true
                      }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
      },
      methods:{
        prepChart:function(){
            console.log(this.loading)
            var rangeStart = parseInt(this.min) - this.barData.currentAge 
            var rangeEnd = parseInt(this.max) - this.barData.currentAge +1
            this.datacollection.labels = Array.from({length: rangeEnd- rangeStart}, (_, i) => i + this.barData.currentAge + rangeStart)
            this.datacollection.datasets[0].data = this.barData.projectedCashInBank.slice(rangeStart,rangeEnd)
            this.datacollection.datasets[1].data = this.barData.projectedInvestmentExpected.slice(rangeStart,rangeEnd)
            this.datacollection.datasets[2].data = this.barData.projectedExpenses.slice(rangeStart,rangeEnd)
            this.renderChart(this.datacollection,this.options)

        },renderChartBar: function(){
            this.prepChart()
        },updateChartBar:function(){
            var rangeStart = parseInt(this.min) - this.barData.currentAge 
            var rangeEnd = parseInt(this.max) - this.barData.currentAge +1
            this.datacollection.labels = Array.from({length: rangeEnd- rangeStart}, (_, i) => i + this.barData.currentAge + rangeStart)
            this.datacollection.datasets[0].data = this.barData.projectedCashInBank.slice(rangeStart,rangeEnd)
            this.datacollection.datasets[1].data = this.barData.projectedInvestmentExpected.slice(rangeStart,rangeEnd)
            this.datacollection.datasets[2].data = this.barData.projectedExpenses.slice(rangeStart,rangeEnd)
            this.renderChart(this.datacollection,this.options)
        }

      }, mounted(){
            if(!this.loading){
                this.renderChartBar()
            }
       
      }, computed:{
          chartData:function(){
              return this.barData
          }
      }, watch:{
          min:function(){
              this.updateChartBar()
          },
          max:function(){
              this.updateChartBar()
          },
          barData:function(){
              this.prepChart();
          },
          loading:function(){
              console.log("LOADINNNGGG")
              this.prepChart();
          }
      },
      
    }
