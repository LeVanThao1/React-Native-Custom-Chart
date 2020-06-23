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
const statisData= [
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
    },
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
  ]
const colors = ['red', 'blue', 'gray'];
const stepx = 0.05;
const stepy = 0.1;
let up = true;
const VictoryChartScatter2 = () => {
  const intervalRef = useRef(null);
  const numberRan = useRef(0);
  // const refChilden = useRef()
  const [isRun,setRun] = useState(false);
  // const [color, setColor] = useState(0);
  const numberRoot = useRef(0);
  const [data2, setData2] = useState([{data: [], color: colors[0]}])
  const [data, setData] = useState([{data: [], color: colors[0]}]);
  const numberDir = useRef(0);
  const numberRoot2 = useRef(0.01);

    useEffect(() => {
        if(isRun) {
            intervalRef.current = setInterval(() => {
                setData((cur) => {
                    const curArr = {...cur[numberDir.current]};
                    let dataChild, newData;
                    console.log(curArr);
                    console.log(numberRan.current)
                    if(curArr.data.length === 0) {
                        dataChild = {x: stepx + numberRoot.current, y: stepy}
                    }
                    else if (curArr.data[numberRan.current -1 ].y < 0.1) {
                        const x = Math.round((curArr.data[numberRan.current -1 ].x - stepx) * 100)/100;
                        const y = Math.round((curArr.data[numberRan.current -1 ].y) * 100)/100;
                        dataChild = {x,y};
                        console.log(3)
                    }
                    else if (curArr.data[numberRan.current - 1].y < 2 && up) {
                        console.log(6);
                        const x = Math.round((curArr.data[numberRan.current -1].x + stepx) * 100)/100;
                        const y = Math.round((curArr.data[numberRan.current -1 ].y + stepy) * 100)/100;
                        dataChild = {x,y};
                        console.log(1)
                    }
                    else if (curArr.data[numberRan.current - 1].y < 2 && !up) {
                        console.log(6);
                        const x = Math.round((curArr.data[numberRan.current -1].x + stepx) * 100)/100;
                        const y = Math.round((curArr.data[numberRan.current -1 ].y - stepy) * 100)/100;
                        dataChild = {x,y};
                        console.log(1)
                    }
                    else if (curArr.data[numberRan.current -1 ].y >= 2 ) {
                        const x = Math.round((curArr.data[numberRan.current -1].x + stepx) * 100)/100;
                        const y = Math.round((curArr.data[numberRan.current -1].y - stepy) * 100)/100;
                        up = false;
                        dataChild = {x,y};
                        console.log(2)
                    }
                    
                    curArr.data.push(dataChild);
                    newData = [...cur.slice(0, numberDir.current), curArr];
                    if (curArr.data.length > 1 ) {
                        if(curArr.data[numberRan.current].x - curArr.data[0].x <= 0.2) {
                            numberDir.current++;
                            numberRoot.current = curArr.data[numberRan.current].x
                        }
                        console.log(4)
                    }
    
                    numberRan.current++;
                    return newData;
                })
            }, 300)
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRun])
  
  const handleBegin = useCallback(() => {
    setRun(true);
    setData([{data: [], color: colors[0]}]);
    numberRan.current =0;
    numberRoot.current = 0.1;
    numberDir.current = 0;
    // createData();
  }, [])

  const handleEnd = () => {
    setRun(false);
    console.log(intervalRef.current)
    // setTimeout(() => {
    //     clearInterval(intervalRef.current);
    // }, 300)
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
    console.log(intervalRef.current)
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
          <VictoryScatter 
                  style={{ data: { fill: 'red'} }}
                  size={2}
                  data={statisData}/>
          {/* {
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
          } */}
          
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
          <Button title={data[0].data.length < 1? 'Bắt đầu' : 'Bắt đầu lại'} style={styles.btn} onPress={handleBegin}/>
          <Button title={isRun? 'Tạm dừng': data[0].data.length < 1 ? 'Kết thúc' : 'Tiếp tục'} style={styles.btn}onPress={handleEnd}/>
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
    
  },
  button: {
      flexDirection: "row",
      justifyContent: "space-around"
  }
});

export default VictoryChartScatter2;