import "./Contact.css";
import githubIcon from "../../../Assets/svg/github-icon.svg";
import linkedinIcon from "../../../Assets/Images/linkdin-icon.png";
import emailIcon from "../../../Assets/Images/email-icon.png";
import phoneIcon from "../../../Assets/Images/phone-icon.png";
import contactIcon from "../../../Assets/svg/Contact.svg"; // Add your contact image

interface ContactLink {
    icon: string;
    label: string;
    href: string;
    username: string;
}

export function Contact(): JSX.Element {
    const contactLinks: ContactLink[] = [
        {
            icon: githubIcon,
            label: "GitHub",
            href: "https://github.com/Rut96",
            username: "@rut96"
        },
        {
            icon: linkedinIcon,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/vanrut/",
            username: "Rut Van Tinkelman"
        },
        {
            icon: emailIcon,
            label: "Email",
            href: "mailto:vanrut042@gmail.com",
            username: "vanrut042@gmail.com"
        },
        {
            icon: phoneIcon,
            label: "Phone",
            href: "tel:+972XXXXXXXXX",
            username: "+972 XX-XXX-XXXX"
        }
    ];

    const isExternalLink = (label: string): boolean => {
        return label === "GitHub" || label === "LinkedIn";
    };

    return (
        <div className="Contact">
            <div className="contact-header">
                <div className="header-line"></div>
                <h2>Contact Me</h2>
                <div className="header-line"></div>
            </div>

            <div className="contact-content">
                <div className="contact-left">
                    <div className="contact-text">
                        <h3>Let's Connect</h3>
                        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                    </div>
                    <div className="contact-image">
                        <img src={contactIcon} alt="Contact illustration" />
                    </div>
                </div>

                <div className="contact-right">
                    <div className="contact-links">
                        {contactLinks.map((link) => (
                            <a 
                                key={link.label}
                                href={link.href}
                                className="contact-link"
                                target={isExternalLink(link.label) ? '_blank' : '_self'}
                                rel={isExternalLink(link.label) ? 'noopener noreferrer' : undefined}
                            >
                                <div className="link-content">
                                    <div className="link-icon">
                                        <img 
                                            src={link.icon} 
                                            alt={`${link.label} icon`}
                                            className="icon-image"
                                        />
                                    </div>
                                    <div className="link-text">
                                        <span className="link-label">{link.label}</span>
                                        <span className="link-username">{link.username}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}