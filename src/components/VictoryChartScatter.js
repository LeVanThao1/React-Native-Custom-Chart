import React, { useState, useEffect, useRef, useImperativeHandle, useMemo, useCallback } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryAxis, VictoryZoomContainer } from "victory-native";
import VicChart from "./VicChart";

const createTickValues = (min, max, space) => {
    let result = [];
    for(let i = min; i <= max; i+=space) {
        result.push(Math.round(i*100)/100);
    }
    return result;
}
const colors = ['red', 'blue', 'gray'];
const VictoryChartScatter = () => {
  const intervalRef = useRef(null);
  const numberRan = useRef(0);
  // const refChilden = useRef()
  const [isRun,setRun] = useState(false);
  // const [color, setColor] = useState(0);
  const numberRoot = useRef(0.01);
  const [data2, setData2] = useState([{data: [], color: colors[0]}])
  const [data, setData] = useState([{data: [], color: colors[0]}]);
  const numberDir = useRef(0);
  const numberRoot2 = useRef(0.01);

  useEffect(() => {
    if(isRun) {
      intervalRef.current = setInterval(() => {
        if(numberRan.current === 0) {
          setData((cur) => {
            let newData = cur[numberDir.current];
            const dataChild = {x: numberRoot.current, y: 0.1}
            newData = {...newData, data: [dataChild]};
            setData2((cur2) => {
              let newData2 = cur2[numberDir.current];
              const dataChild2 = {x: numberRoot2.current + dataChild.y, y: dataChild.y/dataChild.x}
              newData2 = {...newData2, data: [dataChild2]};
              return [...cur2.slice(0,numberDir.current), newData2]
            })
            return [...cur.slice(0,numberDir.current), newData]
          })
        }
        else if (numberRan.current <= 25 ) {
          setData(cur => {
              const dataCur = cur[numberDir.current];
              const {x, y} = dataCur.data[numberRan.current-1];
              const newData = {x : x+0.05, y: y+ 0.08};
              dataCur.data.push(newData);
              // setData2((cur2) => {
              //   let newData2 = cur[numberDir.current];
              //   const dataChild2 = {x: newData.y, y: newData.y/newData.x}
              //   newData2 = {...newData2, data: [dataChild2]};
              //   return [...cur2.slice(0,numberDir.current), newData2]
              // })
              setData2(cur2 => {
                const dataCur2 = cur2[numberDir.current];
                const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x}
                dataCur2.data.push(newData2);
                return [...cur2.slice(0, numberDir.current), dataCur2];
              })
              return [...cur.slice(0, numberDir.current), dataCur];
            }
          )
        }
        else if(numberRan.current <= 50) {
          setData(cur => {
            const dataCur = cur[numberDir.current];
            const {x, y} = dataCur.data[numberRan.current-1];
            const newData = {x : x+ 0.05, y: y - 0.08};
            dataCur.data.push(newData);
            setData2(cur2 => {
              const dataCur2 = cur2[numberDir.current];
              const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x}
              dataCur2.data.push(newData2);
              return [...cur2.slice(0, numberDir.current), dataCur2];
            })
            return [...cur.slice(0, numberDir.current), dataCur];
          })
        }
        // else if (numberRan.current <= 60) {
        //   setData(cur => {
        //     const dataCur = cur[numberDir.current];
        //     const {x, y} = dataCur.data[numberRan.current-1];
        //     const newData = {x : x - 0.1, y: y - 0.4};
        //     dataCur.data.push(newData);
        //     return [...cur.slice(0, numberDir.current), dataCur];
        //   }
        // )r
        // }
        // else if (numberRan.current <= 80) {
        //   setData(cur => {
        //     const dataCur = cur[numberDir.current];
        //     const {x, y} = dataCur.data[numberRan.current-1];
        //     const newData = {x : x - 0.1, y: y + 0.4};
        //     dataCur.data.push(newData);
        //     return [...cur.slice(0, numberDir.current), dataCur];
        //   }
        // )
        // }
        else if (numberRan.current <= 70) {
          setData(cur => {
            const dataCur = cur[numberDir.current];
            const {x, y} = dataCur.data[numberRan.current-1];
            const newData = {x : x- 0.1, y: y};
            dataCur.data.push(newData);
            setData2(cur2 => {
              const dataCur2 = cur2[numberDir.current];
              const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x*5}
              dataCur2.data.push(newData2);
              return [...cur2.slice(0, numberDir.current), dataCur2];
            })
            return [...cur.slice(0, numberDir.current), dataCur];
          })
        }

        ++numberRan.current;
        // if (numberRan.current >= 80) {
        // numberRoot.current += 0.5;
        //   ++numberDir.current;
        //   numberRan.current = 0;
        //   setData((cur) => {
        //     return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
        //   })
        // }

        if(numberDir.current > 9) {
          console.log(JSON.stringify(data));
          setRun(false);
        }
        else if (numberRan.current >= 70) {
          setData(cur => {
            numberRoot.current = cur[numberDir.current].data[numberRan.current-1].x || 0.01;
            numberRoot2.current += 0.3;
            ++numberDir.current;
            numberRan.current = 0;
            setData2((cur2) => {
              return ([...cur2, {data: [], color: colors[numberDir.current%3]}])
            })
            return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
          })
          // numberRoot.current = data[numberDir.current].data[numberRan.current-2]["x"] || 0.01;
          // ++numberDir.current;
          // numberRan.current = 0;
          // setData((cur) => {
          //   return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
          // })
        }
       }, 300)
    }
    else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
      console.log(3);
    }
  }, [isRun]);

  const handleBegin = useCallback(() => {
    setData([{data: [], color: colors[0]}]);
    numberRan.current =0;
    numberRoot.current = 0.1;
    numberDir.current = 0;
    setRun(true);
  }, [])

  const handleEnd = () => {
    setRun(false);
  }

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
              // console.log(item)
              return (
                // useMemo((item) => 
                (<VictoryScatter key={item}
                  style={{ data: { fill: item.color } }}
                  size={2}
                  data={item.data}
              />)
              // , [item])
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
            data.map(item => {
              return (
                // useMemo((item) => 
                // (
                  <VictoryScatter key={item}
                    style={{ data: { fill: item.color } }}
                    size={2}
                    data={item.data}
                  />
                  // useMemo(() => <VicChart item={item}/>, [item])
                // )
                  // ,[item])
              )
            }) 
          }
          
      </VictoryChart>
      <View style={styles.button}>
          <Button title='Bắt đầu' onPress={handleBegin}/>
          <Button title='Kết Thúc' onPress={handleEnd}/>
        </View>
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

const AlertButton = () => {
  Alert.alert(
    "Thông báo",
    "Bạn đã kết thúc",
    [
      {
        text: "Oke",
        onPress: () => console.log("OK Pressed")
      }
    ],
    {cancelable: false}
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5fcff",
    // marginTop: -30
  },
  chart: {
    // marginTop: -30,
    // paddingTop: -30
    
  }
});

export default VictoryChartScatter;