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
const Y = ({miny, maxy, label, step}) => {
    return (
        <VictoryAxis 
              dependentAxis
              tickValues={createTickValues(miny, maxy, step)}
              label={label}
              standalone={false}
              orientation="left"
              style={{
                axisLabel: {padding: 30},
              }}
          />
    )
}

export default React.memo(Y);