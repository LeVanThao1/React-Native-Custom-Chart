/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LineChartScreen from './components/LineChartScreen';
import VictoryChartScatter from './components/VictoryChartScatter';
import PureChartComponent from './components/VicComponent';
import VicChartComponent from './components/VicComponent';

// const colors = ['red', 'blue', 'gray'];
const App = () => {
  
  
  // const intervalRef = useRef(null);
  // const numberRan = useRef(0);
  // // const refChilden = useRef()
  // const [isRun,setRun] = useState(false);
  // // const [color, setColor] = useState(0);
  // const numberRoot = useRef(0.01);
  // const [data2, setData2] = useState([{data: [], color: colors[0]}])
  // const [data, setData] = useState([{data: [], color: colors[0]}]);
  // const numberDir = useRef(0);
  // const numberRoot2 = useRef(0.01);

  // useEffect(() => {
  //   if(isRun) {
  //     intervalRef.current = setInterval(() => {
  //       if(numberRan.current === 0) {
  //         setData((cur) => {
  //           let newData = cur[numberDir.current];
  //           const dataChild = {x: numberRoot.current, y: 0.1}
  //           newData = {...newData, data: [dataChild]};
  //           setData2((cur2) => {
  //             let newData2 = cur2[numberDir.current];
  //             const dataChild2 = {x: numberRoot2.current + dataChild.y, y: dataChild.y/dataChild.x}
  //             newData2 = {...newData2, data: [dataChild2]};
  //             return [...cur2.slice(0,numberDir.current), newData2]
  //           })
  //           return [...cur.slice(0,numberDir.current), newData]
  //         })
  //       }
  //       else if (numberRan.current <= 25 ) {
  //         setData(cur => {
  //             const dataCur = cur[numberDir.current];
  //             const {x, y} = dataCur.data[numberRan.current-1];
  //             const newData = {x : x+0.05, y: y+ 0.08};
  //             dataCur.data.push(newData);
  //             // setData2((cur2) => {
  //             //   let newData2 = cur[numberDir.current];
  //             //   const dataChild2 = {x: newData.y, y: newData.y/newData.x}
  //             //   newData2 = {...newData2, data: [dataChild2]};
  //             //   return [...cur2.slice(0,numberDir.current), newData2]
  //             // })
  //             setData2(cur2 => {
  //               const dataCur2 = cur2[numberDir.current];
  //               const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x}
  //               dataCur2.data.push(newData2);
  //               return [...cur2.slice(0, numberDir.current), dataCur2];
  //             })
  //             return [...cur.slice(0, numberDir.current), dataCur];
  //           }
  //         )
  //       }
  //       else if(numberRan.current <= 50) {
  //         setData(cur => {
  //           const dataCur = cur[numberDir.current];
  //           const {x, y} = dataCur.data[numberRan.current-1];
  //           const newData = {x : x+ 0.05, y: y - 0.08};
  //           dataCur.data.push(newData);
  //           setData2(cur2 => {
  //             const dataCur2 = cur2[numberDir.current];
  //             const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x}
  //             dataCur2.data.push(newData2);
  //             return [...cur2.slice(0, numberDir.current), dataCur2];
  //           })
  //           return [...cur.slice(0, numberDir.current), dataCur];
  //         })
  //       }
  //       // else if (numberRan.current <= 60) {
  //       //   setData(cur => {
  //       //     const dataCur = cur[numberDir.current];
  //       //     const {x, y} = dataCur.data[numberRan.current-1];
  //       //     const newData = {x : x - 0.1, y: y - 0.4};
  //       //     dataCur.data.push(newData);
  //       //     return [...cur.slice(0, numberDir.current), dataCur];
  //       //   }
  //       // )r
  //       // }
  //       // else if (numberRan.current <= 80) {
  //       //   setData(cur => {
  //       //     const dataCur = cur[numberDir.current];
  //       //     const {x, y} = dataCur.data[numberRan.current-1];
  //       //     const newData = {x : x - 0.1, y: y + 0.4};
  //       //     dataCur.data.push(newData);
  //       //     return [...cur.slice(0, numberDir.current), dataCur];
  //       //   }
  //       // )
  //       // }
  //       else if (numberRan.current <= 70) {
  //         setData(cur => {
  //           const dataCur = cur[numberDir.current];
  //           const {x, y} = dataCur.data[numberRan.current-1];
  //           const newData = {x : x- 0.1, y: y};
  //           dataCur.data.push(newData);
  //           setData2(cur2 => {
  //             const dataCur2 = cur2[numberDir.current];
  //             const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x*5}
  //             dataCur2.data.push(newData2);
  //             return [...cur2.slice(0, numberDir.current), dataCur2];
  //           })
  //           return [...cur.slice(0, numberDir.current), dataCur];
  //         })
  //       }

  //       ++numberRan.current;
  //       // if (numberRan.current >= 80) {
  //       // numberRoot.current += 0.5;
  //       //   ++numberDir.current;
  //       //   numberRan.current = 0;
  //       //   setData((cur) => {
  //       //     return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
  //       //   })
  //       // }
  //       if (numberRan.current >= 70) {
  //         setData(cur => {
  //           numberRoot.current = cur[numberDir.current].data[numberRan.current-1].x || 0.01;
  //           numberRoot2.current += 0.3;
  //           ++numberDir.current;
  //           numberRan.current = 0;
  //           setData2((cur2) => {
  //             return ([...cur2, {data: [], color: colors[numberDir.current%3]}])
  //           })
  //           return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
  //         })
  //         // numberRoot.current = data[numberDir.current].data[numberRan.current-2]["x"] || 0.01;
  //         // ++numberDir.current;
  //         // numberRan.current = 0;
  //         // setData((cur) => {
  //         //   return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
  //         // })
  //       }
  //      }, 30)
  //   }
  //   return () => {
  //     clearInterval(intervalRef.current);
  //     console.log(3);
  //   }
  // }, [isRun]);

  // const handleBegin = useCallback(() => {
  //   setData([{data: [], color: colors[0]}]);
  //   numberRan.current =0;
  //   numberRoot.current = 0.1;
  //   numberDir.current = 0;
  //   setRun(true);
  // }, [])

  // const handleEnd = () => {
  //   setRun(false);
  // }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <VictoryChartScatter
          // refChilden={refChilden}
          // data1 = {data}
          // data2 = {data2}
          // begin = {handleBegin}
          // end = {handleEnd}
        />
        {/* <View style={styles.button}>
          <Button title='Bắt đầu' onPress={handleBegin}/>
          <Button title='Kết Thúc' onPress={handleEnd}/>
        </View> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  button: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingBottom: 10
  }
});
// const datas = [
//   [
//     {x,y}
//   ],

// ]
export default App;
