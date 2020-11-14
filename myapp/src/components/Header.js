
import React,{Component} from 'react';
import LogoImage from './images/olx_logo.PNG'
import SearchImage from './images/search_logo.PNG'
import SearchImage2 from './images/search_logo2.PNG'
import ArrowImage from './images/arror_logo.PNG'
import SellLogo from './images/sell_logo.PNG'
import { Link } from 'react-router-dom';
import ImageHeader from './images/imageheader.PNG'

class Header extends React.Component{
render(){
  const nav =[
    {ID: 1, label:"Mobile Phones"},
    {ID: 2, label:"Cars"},
    {ID: 3, label:"Motorcycles"},
    {ID: 4, label:"Houses"},
    {ID: 5, label:"TV-Videos-Audio"},
    {ID: 6, label:"Tablets"},
    {ID: 7, label:"Land & Plots"},
  ];

  return(
    
<React.Fragment>
<div class="header fixed flex aic">

<div className="olxlogo"> 
    <img  src={LogoImage} alt="" width="60px" />
 </div>

 <div className="location rel flex">
   
 <div><img src={SearchImage} alt="" width="45px" /></div>      
    <input className="inpt" type="text" placeholder={"Pakistan"}></input> 
    <button className="btnarrow"><img src={ArrowImage} width="45px"></img></button>
    
 </div>

 <div className="search location flex aic">
   <input className="inpt2" type="text"  placeholder="  Find cars, Mobile Phones and more..."></input>
   <div><img src={SearchImage2} alt="" width="45px" /></div>      

 </div>
 <div className="action flex aic">
   <Link to="/account/signin" className="log">Login</Link>
   <button className="btn-sell"><img src={SellLogo} width="100px"></img></button>

 </div>
 
</div>
<br/>
<div className="flex fixed aic hnav">
  <button className="flex aic view-cates">
    <h2 className="s18 font fl">All categories</h2>
    <button id="slide" className="s24 arrow fl"><img src={ArrowImage} width="35px"></img> </button>
  </button>
  
{nav.map(item=>{
  return(
    <Link to={"/browser/" + item.ID} className="noul noulh font s15 bl"> {item.label} </Link>
  )
})}

</div>

<div >
  {<img className="imagehead" src={ImageHeader}></img>}
</div>


</React.Fragment>
  )
 }
}
export default Header;
