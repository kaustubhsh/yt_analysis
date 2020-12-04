import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 400,
        marginTop: 250,
    },
  search: {
    position: 'relative',
    backgroundColor: '#ededed',
    height: '50%',
    width : '70%',
    borderRadius: '40px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  function onChangeHandler(event){
    const name = event.target.value
    console.log(name);
  }

  return (
    <div className={classes.root}>
        <Toolbar>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter a Keyword"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onChangeHandler}
            />
        </div>
        </Toolbar>
    </div>
  );
}
