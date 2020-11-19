import React from 'react';
import {Button,Row,Col} from 'reactstrap';
import './Header1.css';
import pic from './images/risingarjunlogo.png';
import Navbar from './Navbar';
import Button1 from './Button';
import Heroslider from './HeroSlider';
import Card from './Card';
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

          <container>
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
	<Card/>
    <Card/>
    <Card/>
    </div>
    </div>
    </div>
        </container>   

        );
    }

}

export default Header1;