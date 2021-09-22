import 'date-fns';
import React from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';

export default function MaterialUIPickers(props) {
  const { value, handleDate } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <Grid container justify="space-around">
        <DatePicker
          autoOk
          disableToolbar
          minDate={new Date()}
          orientation="landscape"
          variant="static"
          openTo="date"
          value={value}
          onChange={handleDate}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
