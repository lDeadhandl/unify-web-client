import {Paper, Tabs, Tab} from '@material-ui/core';
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RestoreIcon from '@material-ui/icons/Restore';



export default ({onSelect}) =>
      <Paper>
        <Tabs
          value={false}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Recent" icon={<RestoreIcon />}/>
          <Tab label="Favorites" icon={<FavoriteIcon />}/>

        </Tabs>
      </Paper>