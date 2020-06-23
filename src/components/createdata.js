// const createData = useEffect(() => {
//     if(isRun) {
//       intervalRef.current = setInterval(() => {
//         if(numberRan.current === 0) {
//           setData((cur) => {
//             let newData = cur[numberDir.current];
//             const dataChild = {x: numberRoot.current, y: 0.1}
//             newData = {...newData, data: [dataChild]};
//             setData2((cur2) => {
//               let newData2 = cur2[numberDir.current];
//               const dataChild2 = {x: numberRoot2.current + dataChild.y, y: dataChild.y/dataChild.x}
//               newData2 = {...newData2, data: [dataChild2]};
//               return [...cur2.slice(0,numberDir.current), newData2]
//             })
//             return [...cur.slice(0,numberDir.current), newData]
//           })
//         }
//         else if (numberRan.current <= 25 ) {
//           setData(cur => {
//               const dataCur = cur[numberDir.current];
//               const {x, y} = dataCur.data[numberRan.current-1];
//               const newData = {x : x+0.05, y: y+ 0.08};
//               dataCur.data.push(newData);
//               setData2(cur2 => {
//                 const dataCur2 = cur2[numberDir.current];
//                 const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x}
//                 dataCur2.data.push(newData2);
//                 return [...cur2.slice(0, numberDir.current), dataCur2];
//               })
//               return [...cur.slice(0, numberDir.current), dataCur];
//             }
//           )
//         }
//         else if(numberRan.current <= 50) {
//           setData(cur => {
//             const dataCur = cur[numberDir.current];
//             const {x, y} = dataCur.data[numberRan.current-1];
//             const newData = {x : x+ 0.05, y: y - 0.08};
//             dataCur.data.push(newData);
//             setData2(cur2 => {
//               const dataCur2 = cur2[numberDir.current];
//               const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x}
//               dataCur2.data.push(newData2);
//               return [...cur2.slice(0, numberDir.current), dataCur2];
//             })
//             return [...cur.slice(0, numberDir.current), dataCur];
//           })
//         }
//         else if (numberRan.current <= 70) {
//           setData(cur => {
//             const dataCur = cur[numberDir.current];
//             const {x, y} = dataCur.data[numberRan.current-1];
//             const newData = {x : x- 0.1, y: y};
//             dataCur.data.push(newData);
//             setData2(cur2 => {
//               const dataCur2 = cur2[numberDir.current];
//               const newData2 = {x: numberRoot2.current + newData.y, y: newData.y/newData.x*5}
//               dataCur2.data.push(newData2);
//               return [...cur2.slice(0, numberDir.current), dataCur2];
//             })
//             return [...cur.slice(0, numberDir.current), dataCur];
//           })
//         }

//         ++numberRan.current;

//         if(numberDir.current > 9) {
//           console.log(JSON.stringify(data));
//           setRun(false);
//         }
//         else if (numberRan.current >= 70) {
//           setData(cur => {
//             numberRoot.current = cur[numberDir.current].data[numberRan.current-1].x || 0.01;
//             numberRoot2.current += 0.3;
//             ++numberDir.current;
//             numberRan.current = 0;
//             setData2((cur2) => {
//               return ([...cur2, {data: [], color: colors[numberDir.current%3]}])
//             })
//             return ([...cur, {data: [], color: colors[numberDir.current%3]}]);
//           })
//         }
//        }, 300)
//     }