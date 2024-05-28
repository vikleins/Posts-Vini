import styles from './Header.module.css'
import igniteSimbol from '../assets/Ignite-simbol.svg'
export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteSimbol} alt="Logotipo Ignite" />
            <span>Vini Feed</span>
        </header>
    )
}