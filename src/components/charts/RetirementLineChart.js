import { Line } from 'vue-chartjs'


export default{
    extends: Line,
    props:['assetGrowthData','loading'],
    data:function(){
        return{
            datacollection:{
                labels:[],
                datasets:[
                      {
                        label: 'Net Asset',
                        backgroundColor: 'rgb(255, 174, 23)',
                        borderColor:'rgb(255, 174, 23)',
                        data: [],
                        fill:false,
                        pointStyle: 'circle',
                        pointRadius:5,
                        pointBackgroundColor:'rgb(255, 174, 23)',
                        pointBorderColor:'rgb(255, 174, 23)'
                      },
                ],
                
            },
            options:{
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                                min:0
                            }
                        }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    }, mounted(){
        if(!this.loading){
            this.renderChartLine()
        }
        this.renderChart(this.datacollection,this.options)
    }, methods:{
        renderChartLine:function(){
            if(!this.loading){
                this.datacollection.labels = Array.from({length: this.assetGrowthData.idealRetirementAge - this.assetGrowthData.currentAge+1}, (_, i) => i + this.assetGrowthData.currentAge )
                this.datacollection.datasets[0].data = this.assetGrowthData.projectedInvestmentExpected.slice(0,this.assetGrowthData.idealRetirementAge+1)
                for(let i = 0; i < this.assetGrowthData.milestones.length; i ++){
                    console.log("Pushing",this.assetGrowthData.milestonesLabel[i]," ",this.assetGrowthData.milestones[i])
                    this.datacollection.datasets.push(
                        {
                            label: this.assetGrowthData.milestonesLabel[i],
                            backgroundColor: '#f87979',
                            borderColor:'#f87979',
                            data: [this.assetGrowthData.milestones[i]],
                            fill:false,
                            pointStyle: 'triangle',
                            pointRadius:10,
                            pointBackgroundColor:'rgb(255, 108, 132)',
                            pointBorderColor:'rgb(255, 108, 132)'
                          }
                    )
                }
                
                // this.datacollection.datasets.push = this.assetGrowthData.milestones
                this.renderChart(this.datacollection,this.options)
            }
        }
    }, watch:{
        loading:function(){
            console.log("CURRENTLY LOADING",this.loading)
            console.log(this.assetGrowthData)
            this.renderChartLine()
        }, assetGrowthData:function(){
            this.renderChartLine()
        }
    }
}

