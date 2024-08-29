import { React, Component } from 'react'
import './../components/CameraPage.css';
import backImage from './../images/background.jpg';
import department from './../images/map_page/department.png';
import camera from './../images/camera_page/camera.png';

export class CameraPage extends Component {
    render() {
        return (
            <div class="container_camera_page"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImage})`
                }}>
                    <div class="camera_title_block">
                            <div style={{ width: "auto", margin:"0 auto" }}>
                                <p class="camera_title">Прямая трансляция</p>
                                <p class="camera_second_title">с камеры робота</p>
                            </div>
                    </div>
                <div class="camera_content_block">
                    <img src={camera} style={{
                        width: "40px"
                    }} />
                    <img src={department} style={{
                        border: "10px solid gray",
                        objectFit: "cover",
                        width: "100%"
                    }} />
                    </div>
            </div>
        )
    }
}