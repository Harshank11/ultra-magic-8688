import React from 'react';
import "./style.css";

// import "./home.css"


function Home() {
  return (
    <div className='home' >
        <div id='img'>
            {/* <img src='https://zoomcar-assets.zoomcar.com/images/original/a121667db0d5e435e48884b015120bc180a4ad2f.jpg?1661426287'></img> */}
        </div>
         

        <div class="top">
            <div class="selection">
                <form onsubmit="searchCar(event)" id="timeForm">
            
                    <div class="box">
                        <div class="wrap">
                            <a href="location.html" onclick="setPickUp()">
                                <div class="select-address">
                                    <div class="green-icon"></div>
                                    <div class="placeholder pick-up">Pick Up City, Airport, Address or Hotel</div>
                                </div>
                            </a>
                        </div>
                        <div class="wrap wrap-two">
                            <a href="/location.html" onclick="setDropOff()">
                                <div class="select-address">
                                    <div class="red-icon"></div>
                                    <div class="placeholder drop-off">Drop Off City, Airport, Address or Hotel</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="box">
                        <a href="/calender.html">
                            <div class="ride-time">
                                <span id="start_time"></span>
                                <span class="separator">
                                    <i class="icon icon-arrow-right"></i>
                                </span>
                                <span id="end_time"></span>
                            </div>
                        </a>
                    </div>
                    <div class="btn-wrapper">
 
                   <button class="btn-primary"><a href='product.html'>FIND CARS</a></button>
    
                   {/* </Link> */}
                        {/* <button class="btn-primary">FIND CARS</button> */}
                        {/* <button disabled="disabled" class="btn-primary">FIND CARS</button> */}
                    </div>
                </form>
            </div>
        </div>



    </div>
  );
}

export default Home;