import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.esm';

import Navbar from '../components/navbar';
import Fond from "../assets/img/knife.jpg";
import about from "../assets/img/police.jpg";
import crime from "../assets/img/weapon.jpg";
import crimes from "../assets/img/crimes.jpg";
import enquete from "../assets/img/enquete.jpg";


export class LoginAS extends React.Component {

	render() {
		return (
			<div>

			<Navbar/>
			<div className="py-5"></div>

			<div className="row d-flex justify-content-center py-5 container-fluid"  >

  			<div className="col-lg-7 card shadow rounded"  >
            <div>
  			<h1  className="text-center">WELCOME ON CRIME REPORT</h1>

    		<p className="text-center">Logis as:</p>
    		<div className=" pt-3 pb-3 d-flex justify-content-center">
                    <a href="/loginv"
                     
                      className="btn col-lg-4 rounded text-light"
                      style={{ backgroundColor: 'orange' }}
                    >
                      Victim
                    </a >
                  </div>
                  <div className=" pt-3 pb-3 d-flex justify-content-center">
                    <a href="/login"
                     
                      className="btn col-lg-4 rounded text-light"
                      style={{ backgroundColor: 'orange' }}
                    >
                      Police
                    </a>
                  </div>

			</div>
  			</div>
			</div>
		
			</div>
 		);
	}
}

export default LoginAS;