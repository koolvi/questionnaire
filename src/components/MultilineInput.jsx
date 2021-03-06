import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mediaQueries from '../mediaQueries';
import colors from '../style/colors';


const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: '100%',
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
    const { classes, label, onChange } = this.props;

    return (
      <form className={classes.container}>
        <TextField
          id="outlined-textarea"
          label={label}
          // placeholder="Введите текст..."
          multiline
          className={classes.textField}
          // style={{ width: (size === 'small' ? '180px' : '400px') }}
          margin="normal"
          variant="outlined"
          rowsMax={50}
          // inputProps={{ min: 0, style: { textAlign: 'center' } }}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(MultilineInput);
