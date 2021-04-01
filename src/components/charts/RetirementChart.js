import { Bar } from 'vue-chartjs'
import firebase from '../../../firebase'


export default {
    extends: Bar,
    // props:['barData','min','max'],
    props:['min','max'],
    data: function () {
        return {
            //["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            database: firebase.firestore(),
            barData:{},
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
            console.log(this.barData)
            this.database.collection('user/user1/financialPathway').get().then(snapshot =>{
                if(!snapshot.empty){
                    console.log("HI")
                    snapshot.docs.forEach(doc =>{
                            var data = doc.data()
                            this.barData['currentAge'] = data.currentAge
                            this.barData['projectedCashInBank'] = data.projectedCashInBank
                            this.barData['projectedInvestmentExpected'] = data.projectedInvestmentExpected
                            this.barData['projectedExpenses'] = data.projectedExpenses
                    })
                }
            }).then(()=>{
                console.log(this.barData)
                var rangeStart = parseInt(this.min) - this.barData.currentAge 
                var rangeEnd = parseInt(this.max) - this.barData.currentAge +1
                this.datacollection.labels = Array.from({length: rangeEnd- rangeStart}, (_, i) => i + this.barData.currentAge + rangeStart)
                this.datacollection.datasets[0].data = this.barData.projectedCashInBank.slice(rangeStart,rangeEnd)
                this.datacollection.datasets[1].data = this.barData.projectedInvestmentExpected.slice(rangeStart,rangeEnd)
                this.datacollection.datasets[2].data = this.barData.projectedExpenses.slice(rangeStart,rangeEnd)
                this.renderChart(this.datacollection,this.options)
            })
            


            // console.log(this.barData)

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
        this.renderChartBar()
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
          }
      },
      
    }
