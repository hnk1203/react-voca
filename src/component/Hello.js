import World from "./World"
import styles from  "./Hello.module.css";
// const Hello = function() {
//     <p>Hello</p>
// };

// const Hello = () => {
//     <p>Hello</p>
// };

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <World />
            <World />
            <div className={styles.box} >Hello</div>
        </div>
    ) 
}