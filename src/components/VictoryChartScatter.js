import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import VicChart from "./VicChart";

const createTickValues = (min, max, space) => {
    let result = [];
    for(let i = min; i <= max; i+=space) {
        result.push(Math.round(i*100)/100);
    }
    return result;
}

const VictoryChartScatter = ({data1, data2}) => {
  // console.log('client',data[numberRan], numberRan)
  return (
    <View style={styles.container}>
      <VictoryChart
      // style={styles.chart}
          domain={{ x: [0, 7.8], y: [-16, 16] }}
          theme={VictoryTheme.material}
          containerComponent={<VictoryZoomContainer zoomDimension="x" zoomDomain={{x: [0, 7.8]}}/>}
      >
          <VictoryAxis 
              dependentAxis
              tickValues={createTickValues(-16, 16, 4)}
              label="Lít/giây"
              standalone={false}
              orientation="left"
              style={{
                axisLabel: {padding: 30},
              }}
          />
          <VictoryAxis 
              offsetY={50}
              tickValues={createTickValues(0, 7.8, 0.6)}
              label="Lít"
              standalone={false}
              domainPadding={{y: 50}}
              orientation="bottom"
              style={{
                axisLabel: {padding: 30},
                grid: {stroke: 'transparent'}
              }}
          />
          {
            data2.map(item => {
              return (
                <VictoryScatter key={item}
                  style={{ data: { fill: item.color } }}
                  size={2}
                  data={item.data}
              />
              )
            }) 
          }
          
      </VictoryChart>
      <VictoryChart
          domain={{ x: [0, 14], y: [-3.2, 3.2] }}
          theme={VictoryTheme.material}
          containerComponent={<VictoryZoomContainer zoomDimension="x" zoomDomain={{x: [0, 14]}}/>}
          style={styles.chart}
      >
          <VictoryAxis 
              dependentAxis
              tickValues={createTickValues(-3.2, 3.2, 0.8)}
              label="Lít"
              standalone={false}
              orientation="left"
              style={{
                axisLabel: {padding: 30},
              }}
          />
          <VictoryAxis 
              offsetY={50}
              tickValues={createTickValues(0, 14, 2)}
              label="Giây"
              standalone={false}
              domainPadding={{y: 50}}
              orientation="bottom"
              style={{
                axisLabel: {padding: 30},
                grid: {stroke: 'transparent'}
              }}
          />
          {
            data1.map(item => {
              return (
                <VictoryScatter key={item}
                  style={{ data: { fill: item.color } }}
                  size={2}
                  data={item.data}
              />
              )
            }) 
          }
          
      </VictoryChart>
    </View>
  );
}
// const datas = [
//   { x: 0, y: 0 },
//   { x: 0.2, y: 4 },
//   { x: 0.4, y: 7.8 },
//   { x: 0.6, y: 8 },
//   { x: 0.8, y: 8 },

// ]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    marginTop: -30
  },
  chart: {
    marginTop: -30,
    paddingTop: -30
    
  }
});

export default VictoryChartScatter;