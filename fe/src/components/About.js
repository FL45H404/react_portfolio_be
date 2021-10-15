import React, { useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import { SocialIcon } from 'react-native-elements'
// import {actionLogin} from '../reducer/action'
const About = () => {
	// const history = useHistory()
	// const login=useSelector(state=>state.isLogin);
	// const Login = async () => {
	// 	try {
	// 		const res = await fetch('/about', {
	// 			method: "GET", headers: {
	// 				"Accept": "application/json", "Content-Type": "application/json"
	// 			}, credentials: "include"
	// 		})
	// 		console.log(res)
		
	// 		if (res.status != 200) {
	// 			const error = new Error(res.error);
	// 			throw error
	// 			// history.push('/')
	// 		}
	// 		// console.log(data)
	// 	} catch (err) {
	// 		console.log(err)
	// 		history.push('/login')
	// 	}
	// }


	// useEffect(() => {
	// 	Login();
	// 	// if(login){
	// 	// 	history.push('/login')
	// 	// }
	// }, []);
	return (
		<>
			<section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
				<div className="container">
					<div className="row d-flex no-gutters">
						<div className="col-md-6 col-lg-6 d-flex">
							<div className="img-about img d-flex align-items-stretch">
								<div className="overlay"></div>
								<div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: "url(" + "images/contact.jpeg" + ")" }} >
									<img src="DSC_0141.JPG" class="img-thumbnail" alt="profile_pic" />
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 pl-md-5 py-5">
							<div className="row justify-content-start pb-3">
								<div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
									<h1 className="big">About</h1>
									<h2 className="mb-4">About Me</h2>
									<p>Hey! Iam Vipul Waghamode.</p>
									<ul className="about-info mt-4 px-md-0 px-2">
										<li className="d-flex"><span>Name:</span> <span>Vipul Waghamode</span></li>
										<li className="d-flex"><span>Date of birth:</span> <span>November 01, 1997</span></li>
										<li className="d-flex"><span>Address:</span> <span>Sankeshwar, Belgaum</span></li>
										<li className="d-flex"><span>Zip code:</span> <span>591313</span></li>
										<li className="d-flex"><span>Email:</span> <span>Vipulwaghamode194@gmail.com</span></li>
										<li className="d-flex"><span>Phone: </span> <span>+91-8197100673</span></li>
									</ul>
								</div>
							</div>
							<div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
								<div className="text">
									<p className="mb-4">
										<span className="number" data-number="120"></span>
										<span>To more Info:-</span>
									</p>
										
									<p><a href="https://drive.google.com/file/d/1fVR3_f3oGAaHWaytYcjkpLdQH5nb5yHe/preview" target="_blank" className="btn btn-primary py-3 px-3">Download CV</a></p>
								</div>
							</div>
							<div>
							
    
							</div>
						</div>
					</div>
				</div>
			</section>


		</>
	)
}
export default About;
