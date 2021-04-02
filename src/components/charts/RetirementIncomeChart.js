import { Pie } from 'vue-chartjs'


export default {
    extends: Pie,
    props:["dataInfo"],
    data:function(){
        return {
            datacollection:{
                datasets:[{
                data:[]
                }],
                labels:['Dividend','Investment Growth','CPF']
        
            }
        }
    },mounted(){
        this.renderChart(this.datacollection)
    },methods:{
        updateChart:function(){
            console.log(this.dataInfo)
            this.datacollection.datasets[0].data = this.dataInfo
            this.renderChart(this.datacollection)
        }
    },    
    watch:{
        dataInfo:function(){
            this.updateChart()
        }
    }


}