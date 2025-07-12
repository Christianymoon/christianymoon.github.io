import { Link } from "react-router";

export function CardSmall(props) {
  return (
    <div className="cardsm w-full h-auto mt-5 mb-5 border flex flex-row">
      {props.image && (
        <div className="w-20">
          <img
            className="object-cover"
            src={props.image}
            alt={props.imageTitle || "Project Image"}
          />
        </div>
      )}
      <div className="flex flex-col p-4">
        <h5 className="text-2xl">{props.title}</h5>
        <p className="">{props.description}</p>
        <p className="text-sm text-blue-600">{props.category}</p>
        <div className="">
          {props.github && (
            <a
              className=""
              href={props.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
            <i className="icons bi bi-github"></i>
            </a>
          )}
          {props.website && (
            <a
              className=""
              href={props.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Website"
            >
            <i className="icons bi bi-globe"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
