import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*
 * User Card Component
 */

const UserCard = props => {
    const classes = useStyles();
    const {user}=props;
    const {picture:{large},name:{title,first,last},location:{city,state}}=user;

    return (
        <Card className={classes.card} elevation={2}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={large}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h3" className={classes.title}>
                        {`${title} ${first} ${last}`}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="h5">
                        {`City: ${city}`}
                    </Typography>
                    <Typography gutterBottom variant="body2" color="textSecondary" component="h5">
                        {`State: ${state}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardAction}>
                <Button size="small" variant="outlined" color="primary">
                    View
                </Button>
                <Button size="small" variant="outlined" color="secondary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
};
export default UserCard;

// Apply Style of material components
const useStyles = makeStyles({
    card: {
        width: 320,
    },
    media: {
        height: 240
    },
    cardAction: {
        justifyContent: 'center'
    },
    title: {
        textOverflow: 'ellipsis',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        overflow: 'hidden !important',
        width: '100%'
    }
});