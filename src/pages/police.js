import React from 'react';
import { Sidebar } from '../components/SidebarP';
import { Navigation } from '../components/navbarDash';
import db from '../assets/img/db.jpg';

export class Police extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid ">
          <div className="">
            <Navigation />
          </div>

          <div className="row ">
            <div className="col-lg-3 p-0">
              <Sidebar />
            </div>
            <div className="col-lg-7 ">
              <img src={db} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Police;
