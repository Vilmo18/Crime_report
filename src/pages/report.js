import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fond from '../assets/img/enquete.jpg';
import Navbar from '../components/navbar';

export class Report extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="py-5 "></div>
        <div className="mx-5 p-3">
          <div className="row">
            <div
              className="col-lg-5"
              style={{
                backgroundImage: 'url(' + fond + ')',
                height: 960,
                backgroundSize: 'cover',
              }}
            >
              {' '}
            </div>
            <div className="col-lg-5 offset-lg-1 card shadow ">
              <div className="row pt-3 mx-1">
                <h3 className="pt-3 text-center">
                  {' '}
                  Report the crime in detail{' '}
                </h3>
                <div className="row text-center pt-3">
                  <p className="text-secondary ">
                    {' '}
                    Please, give all information you have for a better
                    intervention
                  </p>
                </div>
                <form className="  rounded ">
                  <label className="text mt-1"> Crime Type</label>
                  <input
                    type="text"
                    id="type_crime" 
                    name="type_crime"
                    placeholder="Enter the Crime Type 'Ex: Terrorism'"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2"> Country</label>
                  <input
                    type="text"
                    id="pays" 
                    name="pays"
                    placeholder="Enter the Country"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2"> City</label>
                  <input
                    type="text"
                    id="ville" 
                    name="ville"
                    placeholder="Enter the City"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2"> District</label>
                  <input
                    type="text"
                    id="quartier" 
                    name="quartier"
                    placeholder="Enter the district"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2">
                    {' '}
                    Victim number (Estimation)
                  </label>
                  <input
                    type="number"
                    id="nbre_victime" 
                    name="nbre_victime"
                    placeholder="Enter the Victim number"
                    className="col-lg-12 mt-1 rounded border-0"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  ></input>
                  <label className="text mt-2">Crime's gravity</label>
                  <select
                    class="form-select form-select"
                    id="gravité" 
                    name="gravité"
                    aria-label=".form-select-lg example"
                    style={{ backgroundColor: '#f3f3f3', height: '40px' }}
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">No big deal</option>
                    <option value="2">Serious</option>
                    <option value="3">Very serious</option>
                  </select>
                  <label className="text mt-2">Add image (facultative)</label>
                  <input
                    type="file"
                    id="image" 
                    name="image"
                    accept="image/*"
                    multiple="multiple"
                  ></input>
                  <p className="text mt-4"> Description (max 500 caracters)</p>
                  <textarea
                    className="card shadow col-lg-12"
                    id="description" 
                    name="description"
                    placeholder="Add Text"
                    style={{ height: 150 }}
                  ></textarea>

                  <div className="mt-4 mb-4 d-flex justify-content-center row">
                    <button
                      type="button"
                      className="btn rounded col-lg-5 text-white "
                      style={{ backgroundColor: 'orange' }}
                    >
                      {' '}
                      Send Crime Report
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
