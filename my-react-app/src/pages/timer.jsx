import "./page.css";
function Timer(){
    let count = 0;
    const handelEvent = (name) => {
        if (count < 3) {
            count++
            console.log(`${name} you clicked me ${count} times`)
        } else {
            console.log (`${name} stop clicking me`)
        }
    }

    return(
        <div>
            <button classname="counter-button" cnClick={() => handelEvent("")}>
                count up
            </button>
        </div>
    )
}
export default Timer;