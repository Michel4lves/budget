import styles from './layoutCss/Container.module.css'

export default function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
    )
}
