import Button from "@mui/material/Button";
import React, { useState } from 'react'
import TimelineRecord from '../dataTypes/TimelineRecord';
import BirthdayPicker from './BirthdayPicker'
import LifetimeTarotTable from './LifetimeTarotTable';
import {calculateLifeNumber, calculateTimeline} from './../services/DateServices';
import CardsServices from "../services/CardsServices";
import ButtonGroup from '@mui/material/ButtonGroup';
import LifetimeTarotDiagram from "./LifetimeTarotDiagram";

const LifetimeTarotCalulator = () => {
    const [timelineRecordsArr, setTimelineRecordsArr] = useState<TimelineRecord[]>([]);
    const [birthday, setBirthday] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(true);
    const [showTimelineTable, setShowTimelineTable] = useState<boolean>(false);
    const [showDiagram, setShowDiagram] = useState<boolean>(false);
  

    const selectBirthday = (birthdaySelected: Date) => {
      setBirthday(birthdaySelected);
      calculate(birthdaySelected);
    }

    const calculate = (birthdaySelected: Date) => {
      setTimelineRecordsArr(calculateTimeline(birthdaySelected));  
      }

    const handleShowTable = () => {
        if (timelineRecordsArr?.length != undefined) {
            setShowDatePicker(false);
            setShowTimelineTable(true);
            setShowDiagram(false);
        } 
    }

    const handleSelectBirthday = () => {
      setShowDatePicker(true);
      setShowTimelineTable(false);
      setShowDiagram(false);
    }
    const handleShowDiagram = () => {
      setShowDatePicker(false);
      setShowTimelineTable(false);
      setShowDiagram(true);
    }

  return (
    <div>
        <ButtonGroup variant="outlined" color="secondary" aria-label="outlined button group">
            {<Button onClick={handleSelectBirthday} disabled={showDatePicker}>Select birthday</Button>}
            {<Button onClick={handleShowTable} disabled={showTimelineTable}>Show table</Button>}
            {<Button onClick={handleShowDiagram} disabled={showDiagram}>Show diagram</Button>}
        </ButtonGroup>
        <hr/>
        {showDatePicker && <BirthdayPicker selectBirthday={selectBirthday}/>} 
        {showTimelineTable && <LifetimeTarotTable birthday={birthday} timelineRecordsArr={timelineRecordsArr}/>}
        {showDiagram && <LifetimeTarotDiagram birthday={birthday} timelineRecordsArr={timelineRecordsArr}/>}
    </div>
  )
}

export default LifetimeTarotCalulator;
