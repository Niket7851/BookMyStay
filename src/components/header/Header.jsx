import './header.css';
import React from 'react';
import { faBed, faCalendar, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"; 
import { useNavigate } from 'react-router-dom';



const Header = ({type}) => {
    const [openDates,setOpenDate]=useState(false)
    const [openOptions,setOpenOptions]=useState(false)
    const [destination,setDestination]=useState("")
    const [options,setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    })

    const handelOption = (name,operation) =>{
        setOptions((prev)=>{
            return{
                ...prev,
                [name]:operation === "i" ? options[name] + 1 : options[name] -1,
            };
        });
    };
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const navigate = useNavigate()
    const handelSearch = () =>{
        navigate("/hotels",{state : {destination,date,options}});

    }

  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className='headerList'>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Cars</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi</span>
            </div>
        </div>
       { type !=="list" &&
        <> <h1 className="headerTitle">A lifetime of discount? Its's Genius.</h1>
        <p className='headerDesc'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Book My Stay account</p>
         <button className="headerButton">Sign in / Register</button>
         <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <input type="text" 
                       placeholder="Where are you going?" 
                       className='headerSearchInput' 
                       onChange={(e)=>setDestination(e.target.value)}
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                <span onClick={()=>setOpenDate(!openDates)} className='headerSearchText'>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                {openDates && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                />}
            </div>
            <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                <span className='passanger' onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult - ${options.children} children - ${options.room} room `}</span>
               {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className='optionTet'>Adult</span>
                        <div className="optionContainer">
                        <button className='optionCounterButton' onClick={()=>handelOption("adult","d")} disabled={options.adult<=1}>-</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button className='optionCounterButton' onClick={()=>handelOption("adult","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className='optionTet'>Children</span>
                        <div className="optionContainer">
                        <button className='optionCounterButton' onClick={()=>handelOption("children","d")} disabled={options.children<=0}>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className='optionCounterButton' onClick={()=>handelOption("children","i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className='optionTet'>Room</span>
                        <div className="optionContainer">
                        <button className='optionCounterButton' onClick={()=>handelOption("room","d")} disabled={options.room<=1}>-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button className='optionCounterButton' onClick={()=>handelOption("room","i")}>+</button>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="headerSearchItem">
               <button className="headerButton" onClick={handelSearch}>Search</button>
            </div>
            
         </div></>}
        </div>
    </div>
  )
}

export default Header