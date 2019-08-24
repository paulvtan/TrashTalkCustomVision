import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import seperateCap from "./seperateCap.jpg"
import disposeBottleAndLid from "./disposeBottleAndLid.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./../App.css"
import { borderRadius } from '@material-ui/system';


function PlasticBottleModal(props) {
    return (
        <Modal style={{display:'flex',alignItems:'center',justifyContent:'center', margin:'20px'}} open={props.open}>
            <div style={{backgroundColor:"white", borderRadius:'1em', padding:'10px'}}>
            <Button style={{ position:'absolute', top:10,right:10}} onClick={props.closeModal}>
                    X
                </Button>
            <Typography align="center" component="h4" variant="h4" gutterBottom>
                <strong>Recycling a Glass Bottle</strong>
            </Typography>
            
                <Carousel useKeyboardArrows={true} showThumbs={false} emulateTouch={true} style={{height:'50%'}}>
                    <div>
                        <Card style={{backgroundColor: 'white'}}>
                            <CardContent>
                                <img src={seperateCap} style={{height:'400px', width:'400px', borderRadius:'3em', padding:'20px'}}></img>
                                <Typography color="primary" component="h4" variant="h4" align="center" gutterBottom>
                                    <strong>Remove the Lid</strong>
                                </Typography>
                                <Typography color="textPrimary" component="subtitle1" align="center" gutterBottom>
                                    <strong>Did you know that</strong> more than 27 percent of recyclable glass ends up in landfills due to metal contamination.
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardContent>
                                <img src={disposeBottleAndLid} style={{height:'400px', width:'400px', borderRadius:'3em', padding:'20px'}}></img>
                                <Typography color="primary" component="h4" variant="h4" align="center" gutterBottom>
                                    <strong>Dispose of the bottle and lid in the recycle bin</strong>
                                </Typography>
                                <Typography color="textPrimary" component="subtitle1" align="center" gutterBottom>
                                    <strong>Ka pai!</strong> You've helped the environment.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Carousel>
                
            </div>
        </Modal>
    );
}

export default PlasticBottleModal;