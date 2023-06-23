import React from 'react';
import { Sidebar } from '../components/SidebarV';
import { Navigation } from '../components/navbarDash';
import db from '../assets/img/db.jpg';
import Fond from '../assets/img/knife.jpg';
import about from '../assets/img/police.jpg';
import crime from '../assets/img/weapon.jpg';
import crimes from '../assets/img/crimes.jpg';
import enquete from '../assets/img/enquete.jpg';

export class CrimeDV extends React.Component {
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
            <div className="col-lg-7 pt-5 mt-5">
              <div className="row">
                <div className="col-lg-4 py-2 pb-5">
                  <div className="card  border rounded">
                    <img
                      className=" rounded"
                      style={{ height: '265px' }}
                      src={crimes}
                    />
                    <span className="mx-2">
                      {' '}
                      <h4 className="pt-4  my-0" style={{ color: '' }}>
                        {' '}
                        Woman's aggression{' '}
                      </h4>
                      <p className=" text-secondary"> Mimboman - Yaoundé </p>
                      <p>
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo
                        voluptas...{' '}
                      </p>
                      <a
                        className=""
                        style={{
                          textDecoration: 'none',
                          color: 'orange',
                          cursor: 'pointer',
                        }}
                      >
                        See more {' >>>'}
                      </a>
                    </span>
                    
                  </div>
                </div>
                <div className="col-lg-4 py-2">
                  <div className="card  border rounded">
                    <img
                      className=" rounded"
                      style={{ height: '265px' }}
                      src={Fond}
                    />
                    <span className="mx-2">
                      {' '}
                      <h4 className="pt-4  my-0" style={{ color: '' }}>
                        {' '}
                        Boko Haram terrorisim{' '}
                      </h4>
                      <p className=" text-secondary"> Touba - Maroua </p>
                      <p>
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo
                        voluptas...{' '}
                      </p>
                      <a
                        className=""
                        style={{
                          textDecoration: 'none',
                          color: 'orange',
                          cursor: 'pointer',
                        }}
                      >
                        See more {' >>>'}
                      </a>
                    </span>
                    
                  </div>
                </div>
                <div className="col-lg-4 py-2">
                  <div className="card  border rounded">
                    <img
                      className=" rounded"
                      style={{ height: '265px' }}
                      src={enquete}
                    />
                    <span className="mx-2">
                      {' '}
                      <h4 className="pt-4  my-0" style={{ color: '' }}>
                        {' '}
                        Children Kidnapping{' '}
                      </h4>
                      <p className=" text-secondary"> Moyo - Bambili </p>
                      <p>
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo. Nemo
                        voluptas...{' '}
                      </p>
                      <a
                        className=""
                        style={{
                          textDecoration: 'none',
                          color: 'orange',
                          cursor: 'pointer',
                        }}
                      >
                        See more {'>>> '}
                      </a>
                    </span>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CrimeDV;
