// import React, { useState, useEffect } from "react";
// import { RouteComponentProps } from "react-router-dom";
// import { api } from "../Services/apiServices";
// import {
//   Card,
//   ListGroup,
//   ListGroupItem,
//   Container,
//   Row,
//   Col,
//   Button,
//   Image,
// } from "react-bootstrap";
// // import styles from '../scss/app.scss';
// // import '../styles.css';
// import { IVegetables } from "../../server/Models/index";

// interface IGardenProps extends RouteComponentProps<{ id: string }> {}
// const Garden: React.FC<IGardenProps> = ({
//   match: {
//     params: { id },
//   },
// }) => {
//   const [userVeggies, setUserVeggies] = useState([
//     {
//       id: 1,
//       name: "Cabbage",
//       url:
//         "https://harvesttotable.com/wp-content/uploads/2009/01/Cabbage-bigstock-Salad-Species-That-Includes-Se-251274103-scaled.jpg",
//       row: 2,
//       column: 5,
//     },
//   ]);
//   const [soilArray, setSoilArray] = useState<any>(
//     new Array(20).fill(0).map(() => new Array(10).fill(0))
//   );

//   useEffect(() => {
//     const placedVeggiesArray = [...soilArray];

//     for (let i = 0; i < userVeggies.length; i++) {
//       const { row, column } = userVeggies[i];
//       placedVeggiesArray[row].splice(column, 1, userVeggies[i]);
//     }
//     setSoilArray(placedVeggiesArray);
//   }, [userVeggies]);

//   let fetchAPI = async () => {
//     let [response] = await api(`/api/vegetables/${id}`);
//     makeGarden(response);
//   };
//   let makeGarden = (resObj: any) => {
//     let vgId = resObj.id;
//     let vgName = resObj.name;
//     let vgPosition = resObj.position;
//     let vgSpacing = resObj.spacing;
//     let vgSandP = resObj.sow_and_plant;
//     let vgImg = resObj.url;
//   };
//   useEffect(() => {
//     fetchAPI();
//   }, []);

//   return (
//     <section id="view">
//       <Container fluid="md">
//         <div id="board">
//           <div id="soil">
//             {/* need a top row for things to start insde (CM) */}
//             {soilArray.map((row, rowIndex) => (
//               <div className="dirtRow" key={rowIndex}>
//                 {row.map((column, columnIndex) => (
//                   <div key={columnIndex} className="plot">
//                     <Image
//                       src={column.url ? column.url : "/assets/dirt.jpg"}
//                       style={{ width: "100%" }}
//                       onClick={() =>
//                         console.log({ row: rowIndex, column: columnIndex })
//                       }
//                     ></Image>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };
// export default Garden;
