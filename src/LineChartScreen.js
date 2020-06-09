import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  LayoutAnimation
} from "react-native";
import update from "immutability-helper";

import { LineChart } from "react-native-charts-wrapper";

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

const LineChartScreen = _ => {

//   handleSelect(event) {
//     let entry = event.nativeEvent;
//     if (entry == null) {
//       this.setState({ ...this.state, selectedEntry: null });
//     } else {
//       this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
//     }

//     console.log(event.nativeEvent);
//   }

    return (
      <View style={{ flex: 1, width: '100%' }}>
        <View style={styles.container}>
          <LineChart
            style={styles.chart}
            data={data}
            chartDescription={{ text: "" }}
            legend={{
              enabled: false
            }}
            // marker={{
            //   enabled: true,
            //   markerColor: processColor("white"),
            //   textColor: processColor("black")
            // }}
            xAxis={{
              enabled: true,
              granularity: 0.6,
              drawLabels: true,
              position: "BOTTOM",
              drawAxisLine: true,
              drawGridLines: false,
              fontFamily: "HelveticaNeue-Medium",
              fontWeight: "bold",
              textSize: 12,
              textColor: processColor("gray"),
            //   valueFormatter: ['0', '0.6', '1.2', '1.8']
            }}
            yAxis={{
              left: {
                enabled: true
              },
              right: {
                enabled: false,
              },
              
            }}
            autoScaleMinMaxEnabled={true}
            drawGridBackground={false}
            drawBorders={false}
            touchEnabled={true}
            dragEnabled={false}
            scaleEnabled={false}
            scaleXEnabled={false}
            scaleYEnabled={false}
            pinchZoom={false}
            doubleTapToZoomEnabled={false}
            dragDecelerationFrictionCoef={0.99}
            keepPositionOnRotation={false}
            // onSelect={this.handleSelect.bind(this)}
            // onChange={event => console.log(event.nativeEvent)}
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  chart: {
    height: 250
  }
});

export default LineChartScreen;

const data = {
    dataSets: [
      {
        values: [
          {
            y: 0,
            x: 0.1,
          },
          {
            y: 2,
            x: 0.3,
          },
          {
            y: 3,
            x: 0.9,
          },
          {
            y: 4,
            x: 1.6,
          },
          {
            y: 2.5,
            x: 2.1,
          },
          {
            y: 0,
            x: 2.6,
          }
        ],
        label: "",
        config: {
          mode: "CUBIC_BEZIER",
          drawValues: false,
          lineWidth: 2,
          drawCircles: false,
          circleColor: processColor(petrel),
          drawCircleHole: false,
          circleRadius: 5,
          highlightColor: processColor("transparent"),
          color: processColor('blue'),
          drawFilled: false,
          fillGradient: {
            colors: [processColor(petrel), processColor(greenBlue)],
            positions: [0, 0.5],
            angle: 90,
            orientation: "TOP_BOTTOM"
          },
          fillAlpha: 1000,
          valueTextSize: 15
        }
      },
      {
          values: [
              {
                y: 0,
                x: 0.1,
              },
              {
                y: -2,
                x: 0.3,
              },
              {
                y: -3,
                x: 0.9,
              },
              {
                y: -4,
                x: 1.6,
              },
              {
                y: -2.5,
                x: 2.1,
              },
              {
                y: 0,
                x: 2.6,
              }
            ],
          label: "",
          config: {
            mode: "CUBIC_BEZIER",
            drawValues: false,
            lineWidth: 2,
            drawCircles: false,
            circleColor: processColor(petrel),
            drawCircleHole: false,
            circleRadius: 5,
            highlightColor: processColor("transparent"),
            color: processColor('blue'),
            drawFilled: false,
            fillGradient: {
              colors: [processColor(petrel), processColor(greenBlue)],
              positions: [0, 0.5],
              angle: 90,
              orientation: "TOP_BOTTOM"
            },
            fillAlpha: 1000,
            valueTextSize: 15
          }
        },
      {
        values: [
          {
            y: 1,
            x: 0.7,
          },
          {
            y: 1.8,
            x: 1.3,
          },
          {
            y: 3,
            x: 1.6,
          },
          {
            y: 3.2,
            x: 2.0,
          },
          {
            y: 2.1,
            x: 2.4,
          },
          {
            y: 0,
            x: 2.8,
          }
        ],
        label: "",
        config: {
          mode: "CUBIC_BEZIER",
          drawValues: false,
          lineWidth: 2,
          drawCircles: false,
          circleColor: processColor(petrel),
          drawCircleHole: false,
          circleRadius: 5,
          highlightColor: processColor("transparent"),
          color: processColor('red'),
          drawFilled: false,
          fillGradient: {
            colors: [processColor('red'), processColor('yellow')],
            positions: [0, 0.5],
            angle: 90,
            orientation: "TOP_BOTTOM"
          },
          fillAlpha: 1000,
          valueTextSize: 15
        }
      },
      {
          values: [
            {
              y: 0,
              x: 0.7,
            },
            {
              y: -1.8,
              x: 1.3,
            },
            {
              y: -3,
              x: 1.6,
            },
            {
              y: -3.2,
              x: 2.0,
            },
            {
              y: -2.1,
              x: 2.4,
            },
            {
              y: 0,
              x: 2.8,
            }
          ],
          label: "",
          config: {
            mode: "CUBIC_BEZIER",
            drawValues: false,
            lineWidth: 2,
            drawCircles: false,
            circleColor: processColor(petrel),
            drawCircleHole: false,
            circleRadius: 5,
            highlightColor: processColor("transparent"),
            color: processColor('red'),
            drawFilled: false,
            fillGradient: {
              colors: [processColor('red'), processColor('yellow')],
              positions: [0, 0.5],
              angle: 90,
              orientation: "TOP_BOTTOM"
            },
            fillAlpha: 1000,
            valueTextSize: 15
          }
        }
    ]
  }
