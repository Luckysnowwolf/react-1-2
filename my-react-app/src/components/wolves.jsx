import wolves from "../assets/wolf.jpg";
import "../profile.css";

function Wolves(props){
    return(
        <div className="Profile">
        <img src={wolves} alt="wolves" className="Wolves"/>
        <h2 className="name">{props.title}</h2>
        <p className="text">{props.text} <button>click for more info {props.moreInfo}</button></p>
        </div>
      );
}



export default  Wolves;