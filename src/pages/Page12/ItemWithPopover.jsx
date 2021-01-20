import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
// import mediaQueries from '../../mediaQueries';
import CheckboxLabel from '../../components/CheckboxLabel';


const ItemWithPopover = (props) => {
  const { classes, item, handleNameChecked } = props;

  // ///////////// часть для popover
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    // global.console.log(2423523);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  // ///////////// часть для popover

  return (
    <div
      className={classes.container}
      key={item.id}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <CheckboxLabel
        checked={item.checked}
        label={item.name}
        onChange={() => handleNameChecked(item.id)}
      />

      <Popover
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div className={classes.containerImage}>
          <img className={classes.image} src={item.imgSrc} alt="img" />
          <Typography>
            {item.description}
          </Typography>
        </div>

      </Popover>
      {/* <div className={classes.nameAndCheckbox}>
        <Typography>
          {item.name}
        </Typography>

        <div className={classes.checkbox}>
          <CheckboxLabel
            checked={item.checked}
            // label={item.color}
            onChange={() => handleNameChecked(item.id)}
          />
        </div>
      </div> */}

      {/* <div className={classes.containerImage}>
        <img className={classes.image} src={item.imgSrc} alt="img" />
      </div> */}
    </div>
  );
};

const styles = {
  // checkbox: {
  //   [`@media ${mediaQueries.mobile}`]: {
  //     width: '50%',
  //   },
  //   width: '33%',
  // },
  container: {
    // width: '350px',
    width: '50%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   // border: '1px solid black',
  //   paddingTop: '5px',
  //   // paddingLeft: '20px',
  //   // paddingRight: '20px',
  //   // paddingBottom: '15px',
  //   marginBottom: '40px',
  //   marginLeft: '20px',
  //   marginRight: '20px',
  },
  nameAndCheckbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerImage: {
    width: '550px',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  image: {
    width: '550px',
    borderRadius: '5px',
    marginBottom: '10px',
    // height: '70px',
  },
  popover: {
    pointerEvents: 'none',
  },
};

export default withStyles(styles)(ItemWithPopover);
