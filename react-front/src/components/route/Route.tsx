import React, { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const API_URL = process.env.REACT_APP_API_URL

interface IRoute {
    title: string,
    startPosition: [number,number],
    endPosition: [number,number]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      minWidth: 250,
      backgroundColor: theme.palette.background.paper,
      marginBottom: 15,
      padding: 15
    },
  }),
);

function Route() {
     const classes = useStyles();
    const [routes, setRoutes] = useState<IRoute[]>([]);
    
    useEffect(() => {
        if (routes.length === 0) {
            fetch(API_URL + "/routes")
            .then(response => response.json())
            .then(json => setRoutes(json))
        }
    })

    return (
       <Container style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', height: '100vh' }}>
        <Grid container spacing={5}>
        {routes.map((r,k)=>(
            <Grid item xs={6}>
                <Card className={classes.root}>
                    <CardActionArea> 
                        <Typography gutterBottom variant="h5" component="h2">
                            { r.title}
                        </Typography>
                            <Box>
                                <Typography paragraph>
                                    <Typography variant='caption'>Start Position: </Typography>
                                    <Typography variant='body1'>Lat: {r.startPosition[0]} | Long: {r.startPosition[1]}</Typography>
                                </Typography>
                            </Box>
                            <Box>
                                <Typography paragraph>
                                    <Typography variant='caption'>End Position: </Typography>
                                    <Typography variant='body1'>Lat: {r.endPosition[0]} | Long: {r.endPosition[1]}</Typography>
                                </Typography>
                            </Box>
                    </CardActionArea>
                </Card>
         </Grid>     
        ))}
        </Grid>
        </Container>

    );
}

export default Route;

