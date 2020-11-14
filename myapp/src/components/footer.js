import React from 'react'
import FooterLogo from './images/footer_logo.PNG'
import GooglePlay from  './images/play.PNG'
import AppleLogo from  './images/apple.PNG'
import Facebook from './images/fb.PNG'
import Twitter from './images/twitter.PNG'
import Youtube from './images/youtube.PNG'
import Instagram from './images/instagram.PNG'
import { Link } from 'react-router-dom';
class Footer extends React.Component{
    render(){
        const list =[
            {ID: 1, label:"Cars"},
            {ID: 2, label:"Flats for rent"},
            {ID: 3, label:"Jobs"},
            {ID: 4, label:"Mobile Phones"},
        ]

        const list2 =[
            {ID: 1, label:"Bikes"},
            {ID: 2, label:"Watches"},
            {ID: 3, label:"Books"},
            {ID: 4, label:"Dogs"},
        ]
        const list3 =[
            {ID: 1, label:"About OLX Group"},
            {ID: 2, label:"OLX Blog"},
            {ID: 3, label:"Contact Us"},
            {ID: 4, label:"OLX for Businesses"},
        ]
        const list4 =[
            {ID: 1, label:"Help"},
            {ID: 2, label:"Sitemap"},
            {ID: 3, label:"Legal & Privacy information"},

        ]
        const countries =[
            {ID: 1, label:"India"},
            {ID: 2, label:"SouthAfrica"},
            {ID: 3, label:"Indonesia"},
        ]
        return(
<React.Fragment>    
<div className="flex">
     <div>
            
              <img src={FooterLogo} width="850vh" height="200px"></img>
          
     </div>  
<div className="footer clr">
<div className="pdng ">
    <h6 className="b">
        GET YOUR APP TODAY
    </h6>
</div>

<div className="flex ">

<div className="pdng">
 <Link to="/browser/">
<img src={AppleLogo} width="110px" height="40px"></img>
</Link>
</div>
<div className="pt">
<Link to="/browser/">
<img  src={GooglePlay} width="110px" height="40px"></img>
</Link>
</div>
 
</div>
 </div> 

       </div>

       <div className="flex footer-two">



<li>
<h4 className="head1">POPULAR CATEGORIES</h4>
{list.map(item=>{
  return(
    <Link to={"/browser/" + item.ID} className="noul noulh font s12 bl col"> {item.label} </Link>
  )
})}</li>
<div>
<li>
<h4 className="head1">TRENDING SEARCHES</h4>
{list2.map(item=>{
  return(
    <Link to={"/browser/" + item.ID} className="noul noulh font s12 bl col"> {item.label} </Link>
  )
})}</li>

</div>

<div>
<li>
<h4 className="head1">ABOUT US</h4>
{list3.map(item=>{
  return(
    <Link to={"/browser/" + item.ID} className="noul noulh font s12 bl col"> {item.label} </Link>
  )
})}</li>

</div>

<div>
<li>
<h4 className="head1">OLX</h4>
{list4.map(item=>{
  return(
    <Link to={"/browser/" + item.ID} className="noul noulh font s12 bl col"> {item.label} </Link>
  )
})}</li>

</div>

<div>
<h4 className="head1">FOLLOW US</h4>
<div>
    
    
    
<Link>
 <img src={Facebook} ></img>
 </Link>
 <Link>
 <img src={Twitter} ></img>
 </Link>
 <Link>
 <img src={Youtube} ></img></Link>
 <Link>
 <img src={Instagram} ></img></Link>
</div>


<div className="flex ">

<div className="pdng">
 <Link to="/browser/">
<img src={AppleLogo} width="85px" height="25px"></img>
</Link>
</div>
<div className="pt">
<Link to="/browser/">
<img  src={GooglePlay} width="85px" height="25px"></img>
</Link>
</div>
 
</div>


</div>

       </div>

       
       <div className="footer3 flex">

           <div className="countries flex">
           <p className="s12">OtherCountries</p> 
           {countries.map(item=>{
  return(
    <Link to={"/browser/" + item.ID} className="links"> {item.label} -  </Link>
  )
})}
   
<h6 className="colr">Free Classifieds in Pakistan  . © 2006-2020 OLX</h6>
 
</div>

       </div>
       
       
    
       </React.Fragment>
        )
    }
}

export default Footer;