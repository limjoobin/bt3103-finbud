import { Bar } from 'vue-chartjs'


export default {
    extends: Bar,
    props:['barData','min','max'],
    data: function () {
        return {
            //["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
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
            var rangeStart = parseInt(this.min) - this.barData.currentAge 
            var rangeEnd = parseInt(this.max) - this.barData.currentAge +1
            this.datacollection.labels = Array.from({length: rangeEnd- rangeStart}, (_, i) => i + this.barData.currentAge + rangeStart)
            this.datacollection.datasets[0].data = this.barData.projectedCashInBank.slice(rangeStart,rangeEnd)
            this.datacollection.datasets[1].data = this.barData.projectedInvestmentExpected.slice(rangeStart,rangeEnd)
            this.datacollection.datasets[2].data = this.barData.projectedExpenses.slice(rangeStart,rangeEnd)
            // console.log(this.barData)

        },renderChartBar: function(){
            this.prepChart()
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
              this.renderChartBar()
          },
          max:function(){
              this.renderChartBar()
          },barData: {
            handler: function () {
                this.renderChartBar()
            },
            deep: true
        }
      },
      
    }
