import styles from './Button.module.css';

export default function Button({ children, ...props }) {
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}