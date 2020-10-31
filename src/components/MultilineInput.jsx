import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mediaQueries from '../mediaQueries';
import colors from '../style/colors';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: '400px',
    [`@media ${mediaQueries.mobile}`]: {
      width: '100%',
    },
    background: colors.WHITE,
    border: 'red',
    // border: `1px solid ${colors.SECONDARY}`,
    borderRadius: '5px',
  },
});

class MultilineInput extends React.Component {
  render() {
    const { classes, label, size } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label={label}
          // placeholder="Введите текст..."
          multiline
          className={classes.textField}
          style={{ width: (size === 'small' ? '180px' : '400px') }}
          margin="normal"
          variant="outlined"
          rowsMax={50}
          inputProps={{ min: 0, style: { textAlign: 'center' } }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(MultilineInput);
