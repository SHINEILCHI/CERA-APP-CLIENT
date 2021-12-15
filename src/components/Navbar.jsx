import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyles = makeStyles({
  buttonConfig: {
    fontSize: "1rem",
    marginTop: "15px",
    marginLeft: "10px",
  },
});

function SimpleMenu() {
  // create a state that will be an empty array initially or/and will be fed by the currency data from the CoinAPI
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* create and monitor the state of the current selected value on the dropdown menu, on onClick event, changed the `button name` (for eg; FROM USD ---> EUR) along with all of its corresponding data to the table */}
      <Fab
        variant="extended"
        className={classes.buttonConfig}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountBalanceIcon /> USD
      </Fab>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu;
