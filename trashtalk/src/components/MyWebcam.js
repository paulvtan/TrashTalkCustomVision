import React from 'react';
import Webcam from 'react-webcam';
import Button from 'react-bootstrap/Button';

class MyWebcam extends React.Component {
    constructor(props) {
        super(props);
        this.timerId = null;
        this.isCapturing = false;
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    startCapturing = () => {
        this.isCapturing = true;
        this.timerId = setInterval(() => {
            const image = this.webcam.getScreenshot();
            const byteArrayImage = this.convertToByteArray(image);
            this.fetchData(byteArrayImage);
        }, 2000);
    }

    convertToByteArray = (image) => {
        const base64 = require('base64-js');
        const base64string = image.split(',')[1];
        return base64.toByteArray(base64string)
    };

    fetchData = (byteArray) => {
        const apiKey = '2bfbc0af59f14723a95339436208ff8b';
        const apiEndpoint = 'https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/66170156-16d7-4f5b-b575-9444c3467abc/detect/iterations/TrashTalkModel/image'
        fetch(apiEndpoint, {
            body: byteArray,
            headers: {
                'cache-control': 'no-cache', 'Prediction-Key': apiKey, 'Content-Type': 'application/octet-stream'
            },
            method: 'POST'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    // console.log(data.predictions.map(x => x.));
                    // data.predictions.forEach(prediction => {
                        
                    // });
                    var maxProb = Math.max.apply(Math, data.predictions.map(function(x) {return x.probability}));
                    console.log(data.predictions.map(function (x) {if( x.probability === maxProb) {return x;}}));
                });
            }
        });
    }

    render() {
        const videoConstraints = {
            width: 1500,
            height: 1500,
            facingMode: "user"
        };
        return (
            <div>
                <div>
                    <Webcam
                        audio={false}
                        height={250}
                        width={375}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                </div>
                <Button variant="primary" onClick={this.startCapturing}>Scan</Button>
            </div>
        );
    }
}

export default MyWebcam;