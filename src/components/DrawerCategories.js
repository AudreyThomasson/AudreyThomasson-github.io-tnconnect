import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function DrawerCategories() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

    return (
        <>
            <Toolbar />
            <div className={classes.drawerContainer}></div>
            <List
            component="nav"
            aria-labelledby="category-subheader"
            subheader={
                <ListSubheader component="div" id="category-subheader">
                Click a category to view:
                </ListSubheader>
            }
            className={classes.root}
            >

                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Children's Services" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Childcare" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Children's Services" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Teen Services" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Christmas" />
                        </ListItem>                        
                    </List>
                </Collapse>
                
                <ListItem button>
                    <ListItemText primary="Clothing Assistance" />
                </ListItem>
                
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Crisis Services" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Crisis Info Resources" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Rehab- Drug / Alcohol" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Counseling" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Teen Services" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Men's Resources" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Fire Stations" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary="Police Stations" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </>
    );
}