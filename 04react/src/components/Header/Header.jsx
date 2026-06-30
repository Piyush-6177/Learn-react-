import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.body}>
      <h3>Persians</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header