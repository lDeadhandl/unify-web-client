import React from 'react';
import { Grid, Paper, Typography, List, ListItemSecondaryAction,
ListItemText, IconButton, ListItem, Input, Avatar, ListItemAvatar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite'

 



const styles = {
    Paper: {
        height: '100%',
        overflowY: "auto"
    },
    Side: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 750,
        width: 300,
        overflowY: "auto"
    },
    Middle: {
        marginTop: 600
    }
}

export default ({ users }) =>
    <Grid container alignItems="stretch" >
        <Grid item xs={2}>
            <Paper style={styles.Paper}>
                Left Pane
            </Paper>
        </Grid>

        <Grid item xs={8}>
            <Paper style={styles.Paper}>
                <Grid container  direction="column" justify="center" alignItems="center">
                    <Grid item xl={12} >
                    <div>
                            <Input
                                defaultValue="Hello world"
                                inputProps={{
                                    'aria-label': 'Description',
                                }}
                            />
                        </div>
                    </Grid>
                    <Grid item xl={12} >
                        <List >
                            {[0, 1, 2, 3,4,5].map(value => (
                                <ListItem key={value} button>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt={`Avatar n°${value + 1}`}
                                            src={`/static/images/avatar/${value + 1}.jpg`}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText primary={`Line item ${value + 1}_______________`} />
                                    <ListItemSecondaryAction>
                                    <IconButton aria-label="AddUsers">
                                            <Favorite/>
                                        </IconButton>
                                        <IconButton aria-label="AddUsers">
                                            <AddIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
        ))}
      </List>
                    </Grid>
                    <Grid item xl={12} >
                        <iframe title="myframe" src="https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6"
                            width="500" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media">
                        </iframe>
                    </Grid>
                </Grid>    
            </Paper>
        </Grid>

        <Grid item xs={2}>
            <Paper style={styles.Paper}>
            <Typography
                variant="headline"
                style={{ textTransform: 'capitalize' }}
            >
            Friends
            <div>
      <Input
        defaultValue="Hello world"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      </div>
                <List>
                    {users.map((value, index) => (
                        <ListItem key={index} role={undefined} dense>
                            <ListItemText primary={value} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="AddUsers">
                                    <AddIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Typography>    
            </Paper>
        </Grid>
    </Grid>

// {users.map(([group]) => //outputs usernames in capital

//     <Typography
//         variant="display2"
//         style={{ textTransform: 'capitalize' }}
//     >
//     {group}
// </Typography>
// )}

