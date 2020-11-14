import React from "react"
import AddItem from "./AddItem"
import CarLogo from './images/car_logo.PNG'
import MobileLogo from './images/mobileAd.PNG'

class HomePage extends React.Component{
    render(){
    // const [list, setList]=useState([]);
    // const[loading, setLoading]=useState(true);

        return(
            <React.Fragment>
                   <div className="home-page flex">
        
               <p className="abs mt">More on Tractors & Trailers</p>
        
                 <AddItem image={CarLogo} Price="370,000" detail="Selling my car" location="Korangi,Karachi" />
                 <AddItem image={MobileLogo} Price="37,000" detail="Selling my huawei y9 prime" location="DEFENCE,Karachi" />
                 <AddItem image={CarLogo} Price="370,000" detail="Selling my car" location="Korangi,Karachi" />
                 <AddItem image={MobileLogo} Price="37,000" detail="Selling my huawei y9 prime" location="DEFENCE,Karachi" />
            
            </div>
        
        <div className="flex ml-cards"> 
                
        <AddItem image={CarLogo} Price="370,000" detail="Selling my car" location="Korangi,Karachi" />
        <AddItem image={MobileLogo} Price="37,000" detail="Selling my huawei y9 prime" location="DEFENCE,Karachi" />
        <AddItem image={CarLogo} Price="370,000" detail="Selling my car" location="Korangi,Karachi" />
        <AddItem image={MobileLogo} Price="37,000" detail="Selling my huawei y9 prime" location="DEFENCE,Karachi" />
        </div>

        <div className="flex ml-cards"> 
                
        <AddItem image={CarLogo} Price="370,000" detail="Selling my car" location="Korangi,Karachi" />
        <AddItem image={MobileLogo} Price="37,000" detail="Selling my huawei y9 prime" location="DEFENCE,Karachi" />
        <AddItem image={CarLogo} Price="370,000" detail="Selling my car" location="Korangi,Karachi" />
        <AddItem image={MobileLogo} Price="37,000" detail="Selling my huawei y9 prime" location="DEFENCE,Karachi" />
        </div>

</React.Fragment>
        )


    }
}
export default HomePage;