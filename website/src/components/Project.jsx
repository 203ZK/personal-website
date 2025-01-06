function Project({ source, title }) {
    return (
        <div className="project">
            <img src={source} className="thumbnail" />
            <p className="project-title">{title}</p>
        </div>
    );
}

export default Project;