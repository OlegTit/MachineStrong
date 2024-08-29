import { React, Component } from 'react'
import './../components/MapPage.css';
import backImage from './../images/background.jpg';
import item1 from './../images/route_page/1.png';
import item2 from './../images/route_page/2.png';
import item3 from './../images/route_page/3.png';

export class RoutePage extends Component {
    render() {
        return (
            <div class="container_map_page"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImage})`
                }}>
                <div
                    style={{
                        maxWidth: "100vw",
                        margin: "0 auto",
                        padding: "0px 0px 300px 0px"
                    } }
                >

                    <div>
                        <p class="map_text" style={{ padding: "100px 0px 0px 50px" }}>Маршрут</p>
                        <p class="map_road_text" style={{ padding: "0px 0px 50px 50px" }}>задать маршрут роботу</p>
                    </div>
                    <div style={{
                        background: "linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9))",
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: "78%",
                        margin: "20px auto"
                    }}>
                        <div style={{ margin: "20px", width:"auto" }}>
                                <p style={{ padding: "20px 0px 40px 50px", color: "rgb(169,122,66)", fontWeight: "bold", fontSize: "20px" }}>По техническому процессу</p>
                                <p style={{ padding: "20px 0px 0px 50px", fontSize:"14px" }} >Описание</p>
                                <p style={{ padding: "20px 0px 20px 50px", fontSize: "14px" }} >Подробно</p>
                        </div>
                        <div style={{ display: "flex", width: "60%", alignItems: "center", margin: "0 auto" }}>
                            <img src={item1} style={{ width: "70%", marginLeft:"auto" }} />
                            </div>
                    </div>



                    <div style={{
                        background: "linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9))",
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: "78%",
                        margin: " 20px auto"
                    }}>
                        <div style={{ margin: "20px", width: "auto" }}>
                            <p style={{ padding: "20px 145px 40px 50px", color: "rgb(169,122,66)", fontWeight: "bold", fontSize: "20px" }}>Регламентно</p>
                            <p style={{ padding: "20px 0px 0px 50px", fontSize: "14px" }} >Описание</p>
                            <p style={{ padding: "20px 0px 20px 50px", fontSize: "14px" }} >Подробно</p>
                        </div>
                        <div style={{ display: "flex", width: "60%", alignItems: "center", margin: "0 auto" }}>
                            <img src={item2} style={{ width: "70%", marginLeft: "auto" }} />
                        </div>
                    </div>


                    <div style={{
                        background: "linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.9))",
                        display: "flex",
                        flexWrap: "wrap",
                        maxWidth: "78%",
                        margin: "20px auto"
                    }}>
                        <div style={{ margin: "20px", width: "auto" }}>
                            <p style={{ padding: "20px 0px 40px 50px", color: "rgb(169,122,66)", fontWeight: "bold", fontSize: "20px" }}>По уникальному маршруту</p>
                            <p style={{ padding: "20px 0px 0px 50px", fontSize: "14px" }} >Описание</p>
                            <p style={{ padding: "20px 0px 20px 50px", fontSize: "14px" }} >Подробно</p>
                        </div>
                        <div style={{ display: "flex", width: "60%", alignItems: "center", margin: "0 auto" }}>
                            <img src={item3} style={{ width: "70%", marginLeft: "auto" }} />
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}