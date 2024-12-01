import "./page.css";
import { useState } from "react";
function Shopingcart(){
   
    
        const [Poster, setPoster,] = useState([ "wolfposter","leopardposter","foxposter","huskyposter","catposter"]);

        function handelAddPoster(){
            const newPoster = document.getElementById("posteroptions").value;
            document.getElementById("posteroptions").value = "";

            setPoster((Poster) => [...Poster, newPoster]);
        }
        function handelRemovePoster(){
           
        }
 return(
    <div>
        <h2> list of posters</h2>
        <ul>{Poster.map((Poster, index) => (
            <li key={index}>{Poster}</li>
        ))}
        </ul>
        <input type="text" placeholder="enter poster animal" id="posteroption"/>
        <button>add poster</button><button>addamount</button><button>remove poster</button>
    </div>
 )


}
export default Shopingcart;