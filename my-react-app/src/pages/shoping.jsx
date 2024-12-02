import "./page.css";
import { useState } from "react";

function shoping() {
    const [Poster, setPoster] = useState(["wolfposter", "leopardposter", "foxposter", "huskyposter", "catposter"]);

    function handleAddPoster() {
        const newPoster = document.getElementById("posteroptions").value;
        document.getElementById("posteroptions").value = "";

        setPoster((Poster) => [...Poster, newPoster]);
    }
    function handleRemovePoster() {
        setPoster(Poster.filter((_, i) => i !== index));
    }
    return (
        <div class="shopingSection">
            <h2 class="Header"> list of posters</h2>
            <ul class="options">
                {Poster.map((Poster, index) => (
                <li key={index} onClick={() => handleRemovePoster(index)}>
                    {Poster}</li>
            ))}
            </ul>
            <input type="text"  class="textzone" placeholder="enter poster animal" id="posteroption" />
            <button class="add" onClick={handleAddPoster}>add poster</button><button class="amount">add amount</button><button  class="remove" onClick={handleRemovePoster}>remove poster</button>
            <input type="text"  class="textzone" placeholder="enter poster animal" id="posteroption" />
            <button class="add" onClick={handleAddPoster}>add poster</button><button class="amount">add amount</button><button  class="remove" onClick={handleRemovePoster}>remove poster</button>
            <input type="text"  class="textzone" placeholder="enter poster animal" id="posteroption" />
            <button class="add" onClick={handleAddPoster}>add poster</button><button class="amount">add amount</button><button  class="remove" onClick={handleRemovePoster}>remove poster</button>
            <input type="text"  class="textzone" placeholder="enter poster animal" id="posteroption" />
            <button class="add" onClick={handleAddPoster}>add poster</button><button class="amount">add amount</button><button  class="remove" onClick={handleRemovePoster}>remove poster</button>
            <input type="text"  class="textzone" placeholder="enter poster animal" id="posteroption" />
            <button class="add" onClick={handleAddPoster}>add poster</button><button class="amount">add amount</button><button  class="remove" onClick={handleRemovePoster}>remove poster</button>
            <input type="text"  class="textzone" placeholder="enter poster animal" id="posteroption" />
            <button class="add" onClick={handleAddPoster}>add poster</button><button class="amount">add amount</button><button  class="remove" onClick={handleRemovePoster}>remove poster</button>

        </div>
    )


}
export default shoping;