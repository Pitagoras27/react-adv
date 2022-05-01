import styles from '../styles/styles.module.css'

interface Props {
  count: number;
  handleCount: (val: number) => void
}

export const ProductButtons = ({ count, handleCount } : Props) => {
  return (
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => handleCount(-1)}> -1 </button>
        <div className={styles.countLabel}>{count}</div>
        <button className={styles.buttonAdd} onClick={() => handleCount(+1)}> +1 </button>
    </div>
  )
}
