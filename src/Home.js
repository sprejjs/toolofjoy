import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    withStyles
} from "@material-ui/core";
import {Link} from "react-router-dom";
import React from "react";

const useStyles = () => ({
    root: {
        paddingTop: 24
    }
});

class Home extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container spacing={2} className={classes.root} justify="center">
                <Grid item md={3}>
                    <Card>
                        <CardContent>
                            <Typography component="h5" variant="h5" align="left" color="textPrimary" gutterBottom>
                                Alphabet of Joy
                            </Typography>
                            <Button fullWidth component={Link} to={'/alphabet'}>Visit</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card>
                        <CardContent>
                            <Typography component="h5" variant="h5" align="left" color="textPrimary" gutterBottom>
                                Encoder of Joy
                            </Typography>
                            <Button fullWidth component={Link} to={'/encoder'}>Visit</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3}>
                    <Card>
                        <CardContent>
                            <Typography component="h5" variant="h5" align="left" color="textPrimary" gutterBottom>
                                Decoder of Joy
                            </Typography>
                            <Button fullWidth component={Link} to={'/decoder'}>Visit</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Home)