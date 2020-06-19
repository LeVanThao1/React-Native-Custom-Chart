/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef, useEffect } from 'react';
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

const colors = ['red', 'blue', 'gray'];
const App: () => React$Node = () => {
  
  
  const intervalRef = useRef(null);
  const numberRan = useRef(0);
  const [isRun,setRun] = useState(false);
  // const [color, setColor] = useState(0);
  const numberRoot = useRef(0.1);
  const [data, setData] = useState([{data: [], color: colors[0]}]);
  const numberDir = useRef(0);

  useEffect(() => {
    if(isRun) {
      intervalRef.current = setInterval(() => {
        if(numberRan.current === 0) {
          setData((cur) => {
            let newData = cur[numberDir.current];
            const dataChild = {x: numberRoot.current, y: 0.2}
            newData = {...newData, data: [dataChild]};
            return [...cur.slice(0,numberDir.current), newData]
          })
        }
        else if (numberRan.current <= 3 ) {
          setData(cur => {
              const dataCur = cur[numberDir.current];
              const {x, y} = dataCur.data[numberRan.current-1];
              const newData = {x : x+ 0.35, y: y+ 3.4};
              dataCur.data.push(newData);
              return [...cur.slice(0, numberDir.current), dataCur];
            }
          )
        }
        else if(numberRan.current <= 8) {
          setData(cur => {
            const dataCur = cur[numberDir.current];
            const {x, y} = dataCur.data[numberRan.current-1];
            const newData = {x : x+ 0.15, y: y - 1.5};
            dataCur.data.push(newData);
            return [...cur.slice(0, numberDir.current), dataCur];
          }
        )
        }
        else if (numberRan.current <= 11) {
          setData(cur => {
            const dataCur = cur[numberDir.current];
            const {x, y} = dataCur.data[numberRan.current-1];
            const newData = {x : x - 0.35, y: y - 2.5};
            dataCur.data.push(newData);
            return [...cur.slice(0, numberDir.current), dataCur];
          }
        )
        }
        else if (numberRan.current <= 14) {
          setData(cur => {
            const dataCur = cur[numberDir.current];
            const {x, y} = dataCur.data[numberRan.current-1];
            const newData = {x : x - 0.35, y: y + 1.3};
            dataCur.data.push(newData);
            return [...cur.slice(0, numberDir.current), dataCur];
          }
        )
        }

        ++numberRan.current;
        if (numberRan.current >= 16) {
        numberRoot.current += 0.5;
          ++numberDir.current;
          numberRan.current = 0;
          setData((cur) => {
            return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
          })
        }
       }, 30)
    }
    return () => {
      clearInterval(intervalRef.current);
      console.log(3);
    }
  }, [isRun]);

  const handleBegin = () => {
    setData([{data: [], color: colors[0]}]);
    numberRan.current =0;
    numberRoot.current = 0.1;
    numberDir.current = 0;
    setRun(true);
  }

  const handleEnd = () => {
    setRun(false);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <VictoryChartScatter
          data = {data}
          numberRan = {numberDir.current}
        />
        <View style={styles.button}>
          <Button title='Bắt đầu' onPress={handleBegin}/>
          <Button title='Kết Thúc' onPress={handleEnd}/>
        </View>
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
