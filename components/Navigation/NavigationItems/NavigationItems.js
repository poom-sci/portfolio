import React from 'react';

import classes from './NavigationItems.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  let data = [
    { name: 'Home', link: '/' },
    { name: 'AboutMe', link: '/aboutMe' },
    { name: 'Contact', link: '/contact' },
    { name: 'Login', link: '/authen' },
  ];

  if (props.isAuthenticated) {
    data = [
      { name: 'Home', link: '/' },

      { name: 'AboutMe', link: '/aboutMe' },
      { name: 'Contact', link: '/contact' },
      { name: 'Logout', link: '/authen' },
    ];
  }

  return (
    <div>
      <List className={classes.NavigationItems}>
        {data.map((element, index) => (
          <ListItem key={element.name} style={{ textAlign: 'center ' }}>
            {/* <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon> */}
            <NavigationItem
              link={element.link}
              exact
              onClick={props.onClick}
              style={{ whiteSpace: 'nowrap' }}
            >
              {/* <ListItemText /> */}
              {element.name}
            </NavigationItem>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default navigationItems;
