import { React, Component } from 'react'
import './../components/MapPage.css';
import backImage from './../images/background.jpg';
import logoBot from './../images/map_page/bot.png';
import logoBot2 from './../images/map_page/bot2.png';
import department from './../images/map_page/department.png';
import item1 from './../images/map_page/place_item1.png';
import item2 from './../images/map_page/place_item2.png';
import item3 from './../images/map_page/place_item_34.png';
import flag from './../images/map_page/flag.png';
export class MapPage extends Component {
    render() {
        return (
            <div class="container_map_page"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImage})`
                }}>
                <div class="map_title_block">
                    <div>
                        <div>
                            <img src={logoBot} style={{ width: "auto"}} />
                        </div>
                        <div>
                            <img src={logoBot2} style={{ width: "auto" }} />       
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{
                        margin:"0 auto",
                        width: "90vw",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                <div>
                    <p class="map_text">Карта</p>
                    <p class="map_road_text">Маршрут робота</p>
                </div>
                        <p style={{ textAlign:"right", color: "rgb(146,146,147)", fontSize: "30px", margin: "20px 0px 20px 0px" }}>Цех 18</p>
                        <img src={department} style={{ border:"2px solid rgb(245,102,0)", objectFit: "cover", width: "100%" }} />
                        <div>
                            <p class="map_place_text">Места остановки</p>
                        </div>

                        <div class="map_place_item" style={{ display: "flex" }}>
                            <div style={{ backgroundColor: "white", alignContent:"center", margin: "0px 20px 0px 20px" }}>
                                <img src={item1} style={{ width: "auto"}} />
                            </div>
                            <div style={{ padding:"10px" }}>
                                <p style={{ color: "rgb(87,122,85)", fontWeight: "bold" }}>Место остановки 1</p>
                                <p style={{ color: "gray", fontSize: "12px" }}>Описание</p>
                                <div style={{ display: "flex", margin: "10px 10px 0px 10px" }}>
                                    <img src={flag} style={{ width: "14px", height: "16px", margin: "0px 10px 10px 0px" }} />
                                    <p style={{ fontSize: "16px", cursor: "pointer" }}>Выбрать</p>
                                </div>
                            </div>
                        </div>

                        <div class="map_place_item" style={{ display: "flex" }}>
                            <div style={{ backgroundColor: "white", alignContent: "center", margin: "0px 20px 0px 20px" }}>
                                <img src={item2} style={{ width: "auto" }} />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <p style={{ color: "rgb(87,122,85)", fontWeight: "bold" }}>Место остановки 2</p>
                                <p style={{ color: "gray", fontSize: "12px" }}>Описание</p>
                                <div style={{ display: "flex", margin: "10px 10px 0px 10px" }}>
                                    <img src={flag} style={{ width: "14px", height: "16px", margin: "0px 10px 10px 0px" }} />
                                    <p style={{ fontSize: "16px", cursor: "pointer" }}>Выбрать</p>
                                </div>
                            </div>
                        </div>

                        <div class="map_place_item" style={{ display: "flex" }}>
                            <div style={{ backgroundColor: "white", alignContent: "center", margin: "0px 20px 0px 20px" }}>
                                <img src={item3} style={{ width: "auto" }} />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <p style={{ color: "rgb(87,122,85)", fontWeight: "bold" }}>Место остановки 3</p>
                                <p style={{ color: "gray", fontSize: "12px" }}>Описание</p>
                                <div style={{ display: "flex", margin: "10px 10px 0px 10px" }}>
                                    <img src={flag} style={{ width: "14px", height: "16px", margin: "0px 10px 10px 0px" }} />
                                    <p style={{ fontSize: "16px", cursor: "pointer" }}>Выбрать</p>
                                </div>
                            </div>
                        </div>

                        <div class="map_place_item" style={{ display: "flex", margin:"10px 0px 100px 0px" }}>
                            <div style={{ backgroundColor: "white", alignContent: "center", margin: "0px 20px 0px 20px" }}>
                                <img src={item3} style={{ width: "auto" }} />
                            </div>
                            <div style={{ padding: "10px" }}>
                                <p style={{ color: "rgb(87,122,85)", fontWeight: "bold" }}>Место остановки 4</p>
                                <p style={{ color: "gray", fontSize: "12px" }}>Описание</p>
                                <div style={{ display: "flex", margin: "10px 10px 0px 10px" }}>
                                    <img src={flag} style={{ width: "14px", height: "16px", margin: "0px 10px 10px 0px" }} />
                                    <p style={{ fontSize: "16px", cursor: "pointer" }}>Выбрать</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}