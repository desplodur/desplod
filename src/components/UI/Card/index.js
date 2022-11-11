import styles from "./Card.module.css";

export default function Card({
  title,
  description,
  tasks,
  picURL,
  techstack,
  ...props
}) {
  console.log(props);
  return (
    <div className={styles.card} {...props}>
      <img
        className={styles.card__image}
        src={
          picURL
            ? picURL
            : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        }
        alt={title}
      />
      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__description}>{description}</p>
        {techstack.map((tech, index) => (
          <span key={index} className={styles.card__span}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
