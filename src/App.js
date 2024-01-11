import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import Status from './component/Status';
import styles from './App.module.css'

function App() {
  // const name = "Tom";
  // const naver = {
  //   name : "네이버",
  //   url : "https://naver.com",
  // };
  return (
    <div className="App">
     {/* <h1 style={{
      color : "#f0f",
      backgroundColor : 'green',
    }}>
      hello, {name}.
    </h1>
    <a href={naver.url}>{naver.name}</a> */}
    <Hello /> 
    <Welcome />
    <div className={styles.box} >App</div>

    <Status age={10}/>
    <Status age={20}/>
    <Status age={30}/>
    </div>
  );
}
 
export default App;

