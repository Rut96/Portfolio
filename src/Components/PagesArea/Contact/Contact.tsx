// import "./Contact.css";

// export function Contact(): JSX.Element {
//     return (
//         <div className="Contact">
// 			<p>Contact</p>
//         </div>
//     );
// }



// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import "./Contact.css";

// export function Contact(): JSX.Element {
//     const formRef = useRef<HTMLFormElement>(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (!formRef.current) return;

//         try {
//             setIsSubmitting(true);
//             setSubmitStatus('idle');

//             // Replace these with your actual EmailJS credentials
//             await emailjs.sendForm(
//                 'YOUR_SERVICE_ID',
//                 'YOUR_TEMPLATE_ID',
//                 formRef.current,
//                 'YOUR_PUBLIC_KEY'
//             );

//             setSubmitStatus('success');
//             formRef.current.reset();
//         } catch (error) {
//             setSubmitStatus('error');
//             console.error('Email send failed:', error);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="Contact">
//             <div className="contact-header">
//                 <div className="yellow-line"></div>
//                 <h2>Contact Me</h2>
//                 <div className="yellow-line"></div>
//             </div>

//             <div className="contact-container">
//                 <div className="contact-info">
//                     <h3>Let's Connect</h3>
//                     <p>Feel free to reach out for collaborations or just a friendly hello</p>
                    
//                     <div className="contact-details">
//                         <div className="contact-item">
//                             <i className="fas fa-envelope"></i>
//                             <span>your.email@gmail.com</span>
//                         </div>
//                         <div className="contact-item">
//                             <i className="fas fa-map-marker-alt"></i>
//                             <span>Tel Aviv, Israel</span>
//                         </div>
//                         <div className="contact-social">
//                             <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
//                                 <i className="fab fa-linkedin"></i>
//                             </a>
//                             <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
//                                 <i className="fab fa-github"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
//                     <div className="form-group">
//                         <input 
//                             type="text" 
//                             name="user_name" 
//                             required 
//                             placeholder="Your Name"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input 
//                             type="email" 
//                             name="user_email" 
//                             required 
//                             placeholder="Your Email"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input 
//                             type="text" 
//                             name="subject" 
//                             required 
//                             placeholder="Subject"
//                         />
//                     </div>
//                     <div className="form-group">
//                         <textarea 
//                             name="message" 
//                             required 
//                             placeholder="Your Message"
//                             rows={5}
//                         ></textarea>
//                     </div>
                    
//                     <button 
//                         type="submit" 
//                         className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
//                         disabled={isSubmitting}
//                     >
//                         {isSubmitting ? 'Sending...' : 'Send Message'}
//                     </button>

//                     {submitStatus === 'success' && (
//                         <div className="status-message success">
//                             Message sent successfully!
//                         </div>
//                     )}
                    
//                     {submitStatus === 'error' && (
//                         <div className="status-message error">
//                             Failed to send message. Please try again.
//                         </div>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// }



// Contact.tsx
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