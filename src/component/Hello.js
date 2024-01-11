import World from "./World"
import styles from  "./Hello.module.css";
// const Hello = function() {
//     <p>Hello</p>
// };

// const Hello = () => {
//     <p>Hello</p>
// };
export default function Hello() {
    function showName() {
        console.log("Mike");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(e) {
        console.log(e.target.value);
    }

    return (
      <div>
        <h1>state</h1>
        <h1>Hello</h1>
        <World />
        <div className={styles.box}>Hello</div>

        <button onClick={showName}>Show name</button>
        <button
          onClick={() => {
            showAge(10);
          }}
        >
          Show age
        </button>
        <input type="text" onChange={showText}/>
      </div>
    );
}