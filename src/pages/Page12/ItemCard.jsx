import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckboxLabel from '../../components/CheckboxLabel';


const ItemCard = (props) => {
  const {
    classes,
    item,
    handleNameChecked,
    disabledCheckbox,
  } = props;


  return (
    <div
      className={classes.container}
      key={item.id}
    >
      <div className={classes.nameAndCheckbox}>
        <div className={classes.name}>{item.name}</div>
        <CheckboxLabel
          disabled={(item.checked === true) ? false : disabledCheckbox}
          checked={item.checked}
          // label={item.name}
          onChange={() => handleNameChecked(item.id)}
        />
      </div>
      <div className={classes.description}>{item.description}</div>
      <img className={classes.image} src={item.imgSrc} alt="img" />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    background: '#e8ebff',
    borderRadius: '5px',
    paddingBottom: '10px',
    paddingTop: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  nameAndCheckbox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 600,
  },
  description: {
    // fontSize: '13px',
    marginBottom: '10px',
    // textAlign: 'justify',
  },
  image: {
    width: '100%',
    borderRadius: '5px',
  },
};

export default withStyles(styles)(ItemCard);
