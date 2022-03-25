import React, { useState } from 'react'
import Chart from "react-apexcharts";

const ApexChart = () => {

    const [state , setState] = useState({
        options: {
            colors: ['#865bce'],
            stroke: {
                width: 1,
                curve: 'straight',
            },
            grid: {
                borderColor: "#865bce",
                clipMarkers: false,
                yaxis: {
                  lines: {
                    show: false
                  }
                }
              },
            //   fill: {
            //     gradient: {
            //       enabled: true,
            //       opacityFrom: 0.55,
            //       opacityTo: 0
            //     }
            //   },
            markers: {
                size: 5,
                colors: ["#865bce"],
                strokeColor: "#865bce",
                strokeWidth: 10,
                strokeOpacity: 0.9,
                strokeDashArray: 0,
                fillOpacity: 1,
                discrete: [],
                shape: "circle",
                radius: 2,
                offsetX: 0,
                offsetY: 0,
                onClick: undefined,
                onDblClick: undefined,
                showNullDataPoints: true,
                hover: {
                  size: undefined,
                  sizeOffset: 3
                }
              },
              tooltip: {
                theme: "dark"
              },
            chart: {
              id: "basic-bar",
              background: '#1e1e20',
              height: 230,
              foreColor: "#5b5b72",
              toolbar: {
                autoSelected: "pan",
                show: false
              }
            },
            xaxis: {
              categories: [1,3,5,7,9,11,13,15,17,19,21,23,25,27,30]
            }
          },
          series: [
            {
              name: "series-1",
              data: [30, 40, 80, 50, 23, 77, 60, 25,23,54,86,63,35,45,96]
            },
            // {
            //     name: "series-2",
            //     data: [30, 40, 45, 50, 49, 60, 70, 91]
            //   }
          ]
        
    })
  return (
    <div>
        <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="100%"
              height='150px'
            />
    </div>
  )
}

export default ApexChart