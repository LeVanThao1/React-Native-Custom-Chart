import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";


const createTickValues = (min, max, space) => {
    let result = [];
    for(let i = min; i <= max; i+=space) {
        result.push(Math.round(i*100)/100);
    }
    return result;
}

const VicChartComponent = ({data, x, y, title}) => {

  return (
    <View style={styles.container}>
      <VictoryChart
          domain={{ x: [x.min, x.max], y: [y.min, y.max] }}
          theme={VictoryTheme.material}
          containerComponent={<VictoryZoomContainer zoomDimension="x" zoomDomain={{x: [x.min, x.max]}}/>}
      >
          <VictoryAxis 
              dependentAxis
              tickValues={createTickValues(y.min, y.max, y.step)}
              label={title.y}
              standalone={false}
              orientation="left"
              style={{
                axisLabel: {padding: 30},
              }}
          />
          <VictoryAxis 
              offsetY={50}
              tickValues={createTickValues(x.min, x.max, x.step)}
              label={title.x}
              standalone={false}
              domainPadding={{y: 50}}
              orientation="bottom"
              style={{
                axisLabel: {padding: 30},
                grid: {stroke: 'transparent'}
              }}
          />
          <VictoryScatter
              style={{ data: { fill: "#c43a31" } }}
              size={2}
              data={data}
          />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    marginTop: -30
  }
  
});

export default VicChartComponent;