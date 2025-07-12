import styles from "./BlogCard.module.css"

export function BlogCard(props) {
  return (

    <div className="blogcard w-full border-1 p-5 mt-10 mb-10
    md:mx-10">
      <div className={styles.imagecontainer}>
        <img className={styles.image} src={props.image} alt="Place" />
      </div>
      <h1 className="text-2xl">{props.title}</h1>
      <p className={styles.description}>{props.description} <br />
      {
        props.badge.map((badge, index) => (
          <span key={index} className="badge rounded-pill text-bg-dark">{badge.name}</span>
        ))
      }
      </p>
      <a className="underline text-sky-600" href={props.link} rel="noopener noreferrer">Leer</a>

    </div>

  )
}