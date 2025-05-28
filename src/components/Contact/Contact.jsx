import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faPaperPlane 
} from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const contactRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      ...formStatus,
      isSubmitting: true
    });
  
    try {
      const response = await fetch('https://getform.io/f/apjngwja', {
        method: 'POST',
        body: new FormData(e.target),
      });
      
      if (response.ok) {
        setFormStatus({
          message: 'Thank you! Your message has been sent successfully.',
          isError: false,
          isSubmitting: false
        });
  
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        message: 'Failed to send message. Please try again.',
        isError: true,
        isSubmitting: false
      });
    }
  
    setTimeout(() => {
      setFormStatus({
        message: '',
        isError: false,
        isSubmitting: false
      });
    }, 5000);
  };
  

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      value: 'adityavermaa2006@gmail.com',
      link: 'mailto:adityavermaa2006@gmail.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      value: '+91 7977124534',
      link: 'tel:+917977124534'
    },
    {
      icon: faLocationDot,
      title: 'Location',
      value: 'Navi Mumbai, India'
    }
  ];

  return (
    <section id="contact" className="section contact-section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info-container reveal">
            <h3 className="contact-subtitle">Contact Information</h3>
            <p className="contact-text">
              Feel free to reach out to me for collaboration, job opportunities,
              or just to say hello. I'm always open to discussing new projects and ideas.
            </p>
            
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div className="contact-info-item" key={index}>
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div className="contact-item-content">
                    <h4 className="contact-item-title">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-item-value">
                        {info.value}
                      </a>
                    ) : (
                      <p className="contact-item-value">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="contact-pattern"></div>
          </div>
          
          <div className="contact-form-container reveal">
            <h3 className="contact-subtitle">Send Me a Message</h3>
            
            
            <form onSubmit={handleSubmit} className='contact-form'>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="form-label">Your Name</label>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-label">Your Email</label>
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject" className="form-label">Subject</label>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Your Message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="form-label">Your Message</label>
              </div>
              
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className="btn primary-btn submit-btn"
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Sending...' : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;