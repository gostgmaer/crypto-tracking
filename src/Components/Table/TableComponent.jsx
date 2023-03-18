// import React from "react";
// import { Link } from "react-router-dom";

// const TableComponent = ({ data, header, Tableheading,navigation }) => {
//   return (
//     <div className="TableComponent">
//       <div className="tableWrapper">
//         <h3 className="heading">{header}</h3>
//         <div className="table">
//           <table className="table table-hover table-borderless align-middle">
//             <thead className="table-light">
//               <tr>
//                 {Tableheading.map((item, index) => (
//                   <th key={index}>{item.name}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="table-group-divider">
//               {data?.map((item) => {
//                 return (
//                   <tr className="" key={item.id}>
//                     <td className=>
//                       <Link
//                         to={`/coins/${item.id}`}
//                         className=" d-flex nav-link justify-content-start align-items-center"
//                       >
//                         {item.market_cap_rank}
//                         <img
//                           className="m-2"
//                           height={30}
//                           src={item.image}
//                           alt={item.name}
//                         />{" "}
//                         <span className=" h5">{item.name}</span>{" "}
//                       </Link>
//                     </td>
                   
//                   </tr>
//                 );
//               })}
//             </tbody>
//             <tfoot></tfoot>
//           </table>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableComponent;
