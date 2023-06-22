import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../components/navbar';
import Fond from "../assets/img/knife.jpg";
import about from "../assets/img/police.jpg";
import crime from "../assets/img/weapon.jpg";
import crimes from "../assets/img/crimes.jpg";
import enquete from "../assets/img/enquete.jpg";

export class Home extends React.Component {

	render() {
		return (
			<div>
			<Navbar/>
			
			<div className="row-lg-12">
			<div style={{backgroundImage: 'url('+Fond+')',backgroundSize: "cover", height: "620px",}} >
				<div className="pb-5 mb-5"></div>
				<div className="pb-5 mb-3"></div>
				<h1 className=" text-center pt-5 mb-3  " style={{color:"orange" }}> Report your crime ... </h1>
				<div className="col-lg-9 justify-content-center">
					<p className="text-center offset-lg-5 text-light" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					 nisi ut aliquip ex ea commodo cons dolor sit amet, consectetur adipiscing elit, sed onsectetur adipiscing elit, sed . </p>
				</div>
				<div className="d-flex justify-content-center pt-5">
				<a href="/report" type="button" className="btn rounded text-white" style={{backgroundColor:"orange"}}>Report Crime</a></div>
			</div>
			</div>
			<div className="mx-5">
			<div className="row py-5">
			<div className="col-lg-6">
				<div className="rounded " style={{backgroundImage: 'url('+about+')',height:'300px',backgroundSize: "cover"}} />
			</div>
			<div className="col-lg-6">
				<h1 className="text-center"> ABOUT </h1>
				<p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
				laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
				Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
				atione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
			</div>
			</div>

			<h1 className="text py-2"> CRIMES </h1>
			<div className="row">
				<div className="col-lg-4 py-2 pb-5">
					<div className="card  border rounded" >
						<img className=" rounded" style={{height:''}} src={crimes}/>
						<span className="mx-2"> <h4 className="pt-4  my-0" style={{color:""}}> Woman's aggression  </h4>
						<p className=" text-secondary"> Mimboman - Yaoundé </p>
						<p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
							Nemo enim ipsam voluptatem quia voluptas... </p>
						<a className="" style={{textDecoration: "none", color:"orange", cursor:"pointer"}}>See more >>> </a>
						</span>	
					</div>
				</div>
				<div className="col-lg-4 py-2">
					<div className="card  border rounded" >
						<img className=" rounded" style={{height:'265px'}} src={Fond}/>
						<span className="mx-2"> <h4 className="pt-4  my-0" style={{color:""}}> Boko Haram terrorisim  </h4>
						<p className=" text-secondary"> Touba - Maroua </p>
						<p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
							Nemo enim ipsam voluptatem quia voluptas... </p>
						<a className="" style={{textDecoration: "none", color:"orange", cursor:"pointer"}}>See more >>> </a>
						</span>	
					</div>
				</div>
				<div className="col-lg-4 py-2">
					<div className="card  border rounded" >
						<img className=" rounded" style={{height:'265px'}} src={enquete}/>
						<span className="mx-2"> <h4 className="pt-4  my-0" style={{color:""}}> Children Kidnapping  </h4>
						<p className=" text-secondary"> Moyo - Bambili </p>
						<p>eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
							Nemo enim ipsam voluptatem quia voluptas... </p>
						<a className="" style={{textDecoration: "none", color:"orange", cursor:"pointer"}}>See more >>> </a>
						</span>	
					</div>
				</div>
			</div>
			</div>
 			<div className="py-4" style={{backgroundColor:"black"}}>
 				
 			</div>
			</div>
 		);
	}
}

export default Home;