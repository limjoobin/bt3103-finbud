import {Bar} from 'vue-chartjs'

export default{
    extends:Bar,
    data() {
        return {
            label: [1,2,3,4,5,6,7,8,9,10],
        }       
    },
    props: ['data','value'],
    mounted() {
        //alert(this.label)
        this.renderBarChart();
    },
    computed: {
        chartData: function() {
            return this.data;
        }
    },
    methods: {
        renderBarChart: function() {
            this.renderChart( {
                labels: this.label,
                datasets: [{
                    label: "Investment Principal",
                    backgroundColor: "blue",
                    data: this.chartData
                },
                {
                    label: "Investment Growth",
                    backgroundColor: "red",
                    data: this.value
                },
                ],
            },
            { responsive: true, maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                      stacked: true,
                    }],
                    yAxes: [{
                      stacked: true
                    }]
                },
            },
        );
        }
    },
    watch: {
        data: function() {
            //alert(this.chartData)
            //this._chart.destroy();
            this.label = [];
            for (let i = 1; i < this.data.length+1; i++) {
                this.label.push(i);
            }
            for (let i = 0; i < this.data.length; i++) {
                this.value[i] = this.data[i] - this.value[i];
                this.data[i] = this.data[i] - this.value[i]
            }
            this.renderBarChart();
        },
    },
    /*
    data:()=>({
        chartdata: {
            labels: [1,2,3,4,5,6,7,8,9,10],
            datasets: [
              {
                label: 'Principal',
                data: this.growth,//[10000,15000,20000,25000,30000,35000,40000,45000,50000,55000],
                backgroundColor:'#AA6',
                borderWidth:1.0,
              }
              ,
              {
                  label: 'Profit',
                  data: this.growth,
                  backgroundColor:'#7C1'
                }
            ]
            
          },
    
        options: {
            title: {
                display: true,
                text: 'Investment Growth Chart',
                fontColor: 'Black',
                fontSize: 30,
            },
            legend: {
                position: 'top',
                
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 300000,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Investment Value'
                    }
                }],
                xAxes: [{
                    stacked: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Number of Years'
                    }
                }],
            },
            maintainAspectRatio: false,
            responsive: true

        }
    }),
    watch: {
        growth: function() {
            alert(this.growth);
            this.renderChart(this.chartdata,this.options);
        }

    },
    mounted(){
        this.renderChart(this.chartdata,this.options)
    },
    */
};