import "./Info.css"
import styles from './Info.module.css'

console.log(styles)

/*{
  "info": "Info_info__jouzB",
  "myOtherButton": "Info_myOtherButton__xntPI"
}*/
function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the info component</h1>
      <h2>Heading in the info component</h2>
      <button className="myButton">Click me in the info component</button>
      <button className={styles.myOtherButton}>Button with local CSS styles</button>
    </div>
  )
}

export default Info
