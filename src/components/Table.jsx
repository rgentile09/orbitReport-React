import { useState } from "react";
import satData from "./satData";
import Buttons from "./Buttons";

const Table = ({ sat }) => {
  
  return (
    
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satallite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((data, id) => { 
     
      return (
     <tr key = {data.id}>
       <td>{data.name}</td>
       <td>{data.type}</td>
       <td>{data.launchDate}</td>
       <td>{data.operational ? "Active" : "Inactive"}</td>

     </tr>
     );
     })}</tbody>
   </table>
      
  );
}

export default Table;