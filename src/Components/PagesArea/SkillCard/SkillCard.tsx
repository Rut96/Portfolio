import "./SkillCard.css";

type SkillProps = {
    image?: string;
    title: string;
}

export function SkillCard(props: SkillProps): JSX.Element {
    return (
        <div className="SkillCard">
            <div className="skill-icon">
                <div className="icon-background"></div>
                {props.image ? (
                    <img src={props.image} alt={props.title} />
                ) : (
                    <div className="skill-dot">
                        <div className="dot-core"></div>
                        <div className="dot-pulse"></div>
                    </div>
                )}
            </div>
            <h3>{props.title}</h3>
            <div className="card-border"></div>
        </div>
    );
}