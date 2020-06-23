import React, { useState, useEffect, useRef, useImperativeHandle, useMemo, useCallback } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
// import VicChart from "./VicChart";

const createTickValues = (min, max, space) => {
    let result = [];
    for(let i = min; i <= max; i+=space) {
        result.push(Math.round(i*100)/100);
    }
    return result;
}
const X = ({minx, maxx, label, step}) => {
    return (
        <VictoryAxis 
              offsetY={50}
              tickValues={createTickValues(minx, maxx, step)}
              label={label}
              standalone={false}
              domainPadding={{y: 50}}
              orientation="bottom"
              style={{
                axisLabel: {padding: 30},
                grid: {stroke: 'transparent'}
              }}
          />
    )
}

export default React.memo(X);