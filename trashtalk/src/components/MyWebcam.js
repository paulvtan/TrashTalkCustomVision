import React from 'react';
import Webcam from 'react-webcam';

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
        const apiEndpoint = 'https://australiaeast.api.cognitive.microsoft.com/customvision/v3.0/Prediction/4aab90a2-98f7-4d55-ae5f-891f11fc43ea/detect/iterations/Iteration3/image'
        fetch(apiEndpoint, {
            body: byteArray,
            headers: {
                'cache-control': 'no-cache', 'Prediction-Key': apiKey, 'Content-Type': 'application/octet-stream'
            },
            method: 'POST'
        }).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    var maxPrediction = data.predictions[0];
                    data.predictions.forEach(prediction => {
                        if (prediction.probability >= maxPrediction.probability) {
                            maxPrediction = prediction
                        }
                    });
                    if (maxPrediction.probability >= 0.8) {
                        console.log(maxPrediction.tagName);
                    }
                });
            }
        });
    }

    render() {
        const videoConstraints = {
            width: window.screen.width,
            height: window.screen.height,
            facingMode: "user"
        };

        return (
            <div onClick={this.startCapturing} >
                    <Webcam
                audio={false}
                height={'100%'}
                width={'100%'}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
            />
            </div >
        );
    }
}

export default MyWebcam;