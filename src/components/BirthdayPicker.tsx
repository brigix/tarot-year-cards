import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import enLocale from 'date-fns/locale/en-GB';


const BirthdayPicker =  ({selectBirthday}: any) => {
  const [birthday, setBirthday] = useState<Date | null>(new Date());
  const localeMap = {
    en: enLocale,
  };   

  const handleOnSelectBirthday = (birthdaySelected: Date | null) => {
    setBirthday(birthdaySelected);
    selectBirthday(birthdaySelected);
  };  

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap['en']}>
      <Stack spacing={3}>
      <DatePicker
          disableFuture
          label="Pick birthday"
          openTo="year"
          views={['year', 'month', 'day']}
          value={birthday}
          onChange={(newValue) => {
            handleOnSelectBirthday(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
       </Stack>
     </LocalizationProvider>
    </div>
  )
}

export default BirthdayPicker