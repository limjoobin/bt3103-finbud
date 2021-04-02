import { Pie } from 'vue-chartjs'


export default {
    extends: Pie,
    props:["dataInfo","loading"],
    data:function(){
        return {
            datacollection:{
                datasets:[{
                data:[],
                backgroundColor: ['#5C4742', '#A5978B', '#8D5B4C', '#5A2A27', '#C4BBAF']
                
                }],
                labels:['Dividend from Investment','Withdrawal from Investment','CPF'],
            },
            options:{
                legend:{
                    display: true,
                    position:'bottom'
                }
            }
        }
    },mounted(){
        this.renderChart(this.datacollection)
    },methods:{
        updateChart:function(){
            console.log(this.dataInfo)
            this.datacollection.datasets[0].data = this.dataInfo
            this.renderChart(this.datacollection,this.options)
        }
    },    
    watch:{
        dataInfo:function(){
            this.updateChart()
        },loading:function(){
            console.log("HIHIH")
            this.updateChart()
        }
    }


}