import React from "react";
import { StyleSheet, View } from "react-native";
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

const createTickValues = (min, max, space) => {
    let result = [];
    for(let i = min; i <= max; i+=space) {
        result.push(Math.round(i*100)/100);
    }
    return result;
}

const VictoryChartScatter = () => {
    return (
      <View style={styles.container}>
        <VictoryChart
            theme={VictoryTheme.material}
            
            domain={{ x: [0, 7.8], y: [-16, 16] }}
        >
            <VictoryAxis 
                dependentAxis
                tickValues={createTickValues(-16, 16, 4)}
                label="Lít/giây"
            />
            <VictoryAxis 
                offsetY={50}
                tickValues={createTickValues(0, 7.8, 0.6)}
                label="Lít"
                // offsetX={}
            />
            <VictoryScatter
                style={{ data: { fill: "#c43a31" } }}
                size={4}
                data={[
                    { x: 1, y: 2 },
                    { x: 2, y: 3 },
                    { x: 3, y: 5 },
                    { x: 4, y: 4 },
                    { x: 5, y: 7 }
                ]}
            />
        </VictoryChart>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  }
});

export default VictoryChartScatter;