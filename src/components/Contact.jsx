import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dati inviati:', formData);
    alert('Grazie per avermi contattato!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-5 bg-slate-50">
      <div className="container py-lg-5 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-5 pb-lg-4">
            <h2 className="display-5 fw-bold text-slate-900 mb-3">Get In Touch</h2>
            <div className="title-underline bg-cyan-500 mx-auto rounded-pill mb-4"></div>
            <p className="lead text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together!
            </p>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <h3 className="h2 fw-bold text-slate-900 mb-4">Let's Talk</h3>
              <p className="text-slate-600 mb-5 fs-5 leading-relaxed">
                Whether you have a question, want to discuss a project, or just
                want to say hi, feel free to reach out. I'm always open to
                discussing new projects, creative ideas, or opportunities to be
                part of your vision.
              </p>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-start gap-3">
                  <div className="contact-icon-box btn-purple text-white rounded-3 p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold text-slate-900 mb-1 text-uppercase small tracking-wider">Email</h4>
                    <a href="mailto:michedellagatta@gmail.com" className="text-slate-900 text-decoration-none contact-link">
                      michedellagatta@gmail.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3">
                  <div className="contact-icon-box btn-purple text-white rounded-3 p-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="h6 fw-bold text-slate-900 mb-1 text-uppercase small tracking-wider">Location</h4>
                    <p className="text-slate-600 mb-0">Remote / Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border border-light">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fw-bold text-slate-900">Name</label>
                    <input 
                      type="text" 
                      className="form-control custom-input" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name" 
                      required 
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fw-bold text-slate-900">Email</label>
                    <input 
                      type="email" 
                      className="form-control custom-input" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label fw-bold text-slate-900">Message</label>
                    <textarea 
                      className="form-control custom-input" 
                      id="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..." 
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-purple btn-transition-base btn-lg w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 shadow-sm transition-all">
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;