import React, {useEffect,useState,Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import Avatar from "react-avatar";
import './ManageShares.scss'
import Search from "../SearchBar/SearchBar";
import useModal from '../UI/Modal/useModal';
import DeleteModal from '../UI/Modal/DeleteModal';

function ManageShares(){
  const[FileState,setFileState]=useState([]);
  const {isShowing: isShowing1,toggle: toggle4} = useModal();
 
useEffect(()=>{
let FileState=[
{id:1 ,Item_Name:"Sample1.pdf",Shared_by:"Daniel Ross",Shared_On:"2 Days Ago"},
{id:2 ,Item_Name:"Sample2.pdf",Shared_by:"Gabriel Santiago",Shared_On:"12 Days Ago"},
{id:3 ,Item_Name:"Sample3.pdf",Shared_by:"Arun Sharma",Shared_On:"20 Days Ago"}
];

setFileState(
  FileState.map(d=>{
    return{
    id:d.id,
    Item_Name:d.Item_Name,
    Shared_by:d.Shared_by,
    Shared_On:d.Shared_On,
        };
      }));
    },[]);

    return( 
      <Fragment>
        <DeleteModal isShowing = {isShowing1} hide={toggle4}/>
         <div id="second_section">
            <h2>Manage Shares</h2>
            <Search />

            <Avatar className='avtarStyle'
                color='#E07050' size='3rem'
                round 
                name="Shayane Basu" /> 
          
                
              <div className="filesShared">
                <table id="doc_list">
                  <thead>
                  <tr id="icons">
                    <th id="item-names">Item Name</th>
                    <th id="shared">Shared By</th>
                    <th id="shared">Shared On</th>
                    <th id="action">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  { FileState.map((d,i) => (
                    <tr  key={d.id} id="first_details">
                    <td className="file_name-u">
                    
                    <FontAwesomeIcon className="pdf-file fas fa-file-pdf" icon={faFilePdf}/> {d.Item_Name}</td>
                    <td className="details-u-s">{d.Shared_by}</td>
                    <td className="details-u-s">{d.Shared_On}</td>
                    <td className="delete-u-s">
                    <FontAwesomeIcon className="fas fa-times-circle" icon={faTimesCircle} 
                      onClick={toggle4}
                       />
                  </td>
                  </tr>
                  ) )}
                </tbody>
              </table>
            </div>
            </div>
    </Fragment>

          )
          }

export default ManageShares;