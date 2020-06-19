import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";

const VicChart = ({item}) => {
    return (
       <>
        <VictoryScatter
            style={{ data: { fill: item.color } }}
            size={2}
            data={item.data}
        />
        </>
    )
}

export default React.memo(VicChart)