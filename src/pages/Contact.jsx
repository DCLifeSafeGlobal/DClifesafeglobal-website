import React from "react";

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title">Contact DC LifeSafe Global</h1>
          <p className="section-subtitle narrow">
            Get in touch to learn more, schedule a training, or start your journey.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-panel contact-panel-enhanced">
            <div className="contact-left-block">
              <div className="contact-info-header">
                <div className="contact-icon-circle">
                  <img src="/icon_contact_info.png" alt="Contact information" />
                </div>
                <div>
                  <h3>Contact Information</h3>
                </div>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon-circle small">
                    <img src="/icon_phone.png" alt="Phone" />
                  </div>
                  <div className="contact-info-copy">
                    <strong>720.527.9516</strong>
                    <span>Mon–Fri, 8:00 AM – 6:00 PM MST</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle small">
                    <img src="/icon_email.png" alt="Email" />
                  </div>
                  <div className="contact-info-copy">
                    <strong>info@dclifesafeglobal.com</strong>
                    <span>We typically reply within 24 hours</span>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon-circle small">
                    <img src="/icon_location.png" alt="Location" />
                  </div>
                  <div className="contact-info-copy">
                    <strong>Denver, Colorado</strong>
                    <span>Serving local and global communities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-divider" />

            <div className="contact-left-block">
              <div className="contact-info-header">
                <div className="contact-icon-circle">
                  <img src="/icon_message.png" alt="Send us a message" />
                </div>
                <div>
                  <h3>Send Us a Message</h3>
                </div>
              </div>

              <p className="contact-left-description">
                Use the form to request information, schedule a training, or ask
                about our wellness and outdoor experiences.
              </p>

              <div className="contact-quick-actions">
                <a className="btn" href="tel:+17205279516">
                  Call Now
                </a>
                <a
                  className="btn btn-outline"
                  href="mailto:info@dclifesafeglobal.com"
                >
                  Email Us
                </a>
              </div>

              <div className="contact-trust-note">
                <img src="/icon_shield_a.png" alt="Privacy" />
                <span>Your information is safe and will never be shared.</span>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Send a Message</h3>

            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="Your Name" />

            <label htmlFor="email">Your Email</label>
            <input id="email" type="email" placeholder="Your Email" />

            <label htmlFor="subject">Select Subject</label>
            <select id="subject" defaultValue="">
              <option value="" disabled>
                Select Subject
              </option>
              <option>General Inquiry</option>
              <option>Wellness / Surfviving</option>
              <option>Training Courses</option>
              <option>Outdoor Experiences</option>
              <option>Private Group Training</option>
              <option>Partnerships</option>
              <option>Other</option>
            </select>

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="6" placeholder="Your Message" />

            <button className="btn full" type="button">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}