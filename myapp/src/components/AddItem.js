import React from "react"
import HeartLogo from './images/heart_logo.PNG'

class AddItem extends React.Component{
    render(){
   
        return(
            <div className="Add-Item flex ">
{/*                 
                <h3>More on Tractors & Trailers</h3> */}
               <div className="flex">
                
                {/* <div className="Mobile-card "> 
                     
                    <div className="flex ml-img">
                
                        <img src={MobileLogo}></img> <span className="ml"><img src={HeartLogo}></img></span>
                     </div>

                   <h5>Price:26000</h5>
                 <p className="s14">Selling my huawei y9 prime</p><br/>
                   <p className="font s12">SADDAR,KARACHI </p>
                   </div>            
                 */}
                   <div className="Mobile-card "> 
                   <div className="fl1">
                          <img src={HeartLogo}></img>
                          </div>
                          <div className="featured">
                            <h6 align="center" className="s11">FEATURED</h6>
                          </div>
                     <div className="flex img-c">

                          <div>
                         <img src={this.props.image}></img>
                         </div>

                      </div>

    <div className="flex ">                  
 <div className="yellow">

 </div>
<div className="pdng1">
                    <h5>Price:{this.props.Price}</h5>
                    <p className="s14">{this.props.detail}</p><br/> 
                    <p className="font s12">{this.props.location} </p>
</div>                    
</div>             
                    </div>            
 

                 </div>
                 
              </div>
        )
    }
}
export default AddItem;