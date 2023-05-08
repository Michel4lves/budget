import styles from './layoutCss/Loading.module.css'

import loading from '../../img/blue-spinner.gif'

export default function Loading() {
    return (
        <div className={styles.loader_container}>
            <img src={loading} alt="loading" className={styles.loader} />
        </div>
    )
}