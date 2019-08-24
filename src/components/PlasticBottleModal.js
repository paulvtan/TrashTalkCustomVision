import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Bottle from "./1.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./../App.css"
import { borderRadius } from '@material-ui/system';


function PlasticBottleModal(props) {
    return (
        <Modal style={{display:'flex',alignItems:'center',justifyContent:'center', margin:'20px'}} open={props.open}>
            <div style={{backgroundColor:"white", borderRadius:'1em', padding:'10px'}}>
            <Typography align="center" component="h3" variant="h3" gutterBottom>
                Recycling a Bottle
            </Typography>
                <Carousel useKeyboardArrows={true} showThumbs={false} emulateTouch={true} style={{height:'50%'}}>
                    <div>
                        <Card style={{backgroundColor: 'white'}}>
                            <CardContent>
                                
                                <img src={Bottle} style={{height:'auto', width:'auto'}}></img>
                                <Typography color="textPrimary" align="center">
                                    Dispose in
                                </Typography>
                                <Typography color="primary" align="center">
                                    <strong>Recycle Bin</strong>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <CardContent>
                                <img src={Bottle} style={{maxHeight:'50%', width:'auto'}}></img>
                                <Typography color="primary" align="center">
                                    Dispose in
                                </Typography>
                                <Typography color="primary" align="center">
                                    <strong>Trash Bin</strong>
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Carousel>
                <Button onClick={props.closeModal}>
                    Close me!
                </Button>
            </div>
        </Modal>
    );
}

export default PlasticBottleModal;