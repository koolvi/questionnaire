import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabel(props) {
  const {
    checked,
    label,
    disabled = false,
    isItalicText = false,
    onChange,
  } = props;
  // const [state, setState] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  //   checkedF: true,
  //   checkedG: true,
  // });

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };

  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={checked}
          onChange={onChange}
          // name="checkedB"
          color="primary"
          disabled={disabled}
        />
      )}
      label={label}
      style={{
        'font-style': isItalicText ? 'italic' : 'normal',
        // 'font-weight': isItalicText ? 'bold' : 'normal',
      }}
    />
  );
}


// const styles = {
//   root: {
//     color: colors.PRIMARY,
//     '&$checked': {
//       color: colors.PRIMARY,
//     },
//   },
//   checked: {},
// };

// class Checkbox extends React.Component {
//   render() {
//     const { classes, onClick, completed } = this.props;

//     return (
//       <CheckboxMUI
//         onChange={onClick}
//         classes={{
//           root: classes.root,
//           checked: classes.checked,
//         }}
//         checked={completed}
//       />
//     );
//   }
// }

// export default withStyles(styles)(Checkbox);
