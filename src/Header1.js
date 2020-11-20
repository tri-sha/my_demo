import React from 'react';
import {Button,Row,Col} from 'reactstrap';
import './Header1.css';
import pic from './images/risingarjunlogo.png';
import Navbar from './Navbar';
import Button1 from './Button';
import Heroslider from './HeroSlider';
import Card1 from './CCARDD';
import {
    Card,
  
  
  } from 'reactstrap';
//import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';

class Header1 extends React.Component{
    constructor(props){
        super(props);
        this.clickMe=this.clickMe.bind(this);
    }
    clickMe(){
        alert("This is button");
    }

    render(){
        return(
          <div className="container">
           {/*<div className ="img_header">
            <a href="/"><img className="logo_header" src={pic} alt="Logo" height="100px" width="100px" border-left= "1px solid lightgrey" /></a>
            <div>
            <div className="text_header"><strong>Rising Arjun</strong>
            <br/>
            </div>
            <div className="about"><strong>IIT-JEE,NEET,CLAT,ALL BOARDS</strong></div>
            </div>
             <div className="text_header" >
            {/*<div className="quote">Experience Since 1995</div>
            <div className="gmail">therisingarjun@gmail.com</div>*/}
            {/*</container></div>
        </div> */ }
            <div>
            {/*<Router>
                <Navbar/>
                <Switch>
                    <Route path='/'/>
                </Switch>
            </Router>*/}
            <Navbar/>
	
            </div>
    <div className="Element">        
	<div>
	  <Button1/>
	</div>
	<div>
	  <Heroslider/>
	</div>


            
        <div className="offer" >        
        <h1  align="center">Offers and Services</h1>

        <div className="offer_button" align="center">
        <Row class="align-item-center">
        <Col>   
            <button id="IIT" class="b1" onClick={this.clickMe}>IIT</button>
        </Col>
        <Col>   
            <button id="CLAT" class="b1">CLAT</button>
        </Col>
        </Row>
        <br/>

        <Row class="align-item-center">
        <Col>   
            <button id="NEET" class="b1">NEET</button>
        </Col>
        <Col> 
            <button id="AllBoards" class="b1">All Boards</button>
        </Col>
        </Row> 
        </div>
        </div>
    <div className="ourResult">    
	<h1  align="center">Our Results</h1>
    <div className="stud_result">
	<Card1/>
    </div>
    </div>

    <div class="row row-content justify-content-center">
          <div class="col-12 col-md-12">
            <div class="card text-white bg-secondary mb-3 card text-center">
              <div class="card-header">ABOUT RISING ARJUN</div>
              <div class="card-body">
                <h5 class="card-title">A Institute with Vision</h5>
                <p class="card-text">
                  Rising Arjun coaching institute was founded by the vision and toil of corporate professionals, Alumnus of MCA from JNU,
                  New Delhi. The founder members have rich experience in giving coaching to school students, and to serious JEE/NEET/CLAT
                  aspirants. We aim to bring the best out of a student the way Guru Dronacharya brought the best in his student Arjuna and
                  made him the best scholar in Indian history who was admired by everyone even by his competitors. Lecturers go beyond
                  merely coaching for regular & competitive classes to make a difference in the way Students think and approach problems.
                  Today, aiming for the unachievable and continuously raising the bar has become a part of the Rising Arjun DNA. The Journey
                  is not over yet. For us at Rising Arjun, The Journey will never be over. For us, this Journey itself is the destination.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<div class="row row-content justify-content-center">
          <div class="col-12 col-md-12 p-4">
            <h2 class="font-weight-light text-center">Map of our location</h2>
            <a href="https://www.google.com/maps/dir//%2728.452499,76.9879394%27">
              <img src="content/images/map.png" alt="Map" width="100%" height="100%" class="p-3" />
          </a>
          </div>
          </div>*/}
    </div>
        </div>   

        );
    }

}


/*const mapStateToProps = storeState => ({
    account: storeState.authentication.account,
    isAuthenticated: storeState.authentication.isAuthenticated
  });
  
  const mapDispatchToProps = { getSession };
  
  type StateProps = ReturnType<typeof mapStateToProps>;
  type DispatchProps = typeof mapDispatchToProps;
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )*/
  export default Header1;