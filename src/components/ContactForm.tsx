"use client";

import { useState } from "react";
import "../styles/contact.css";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="section-badge">Get in Touch</div>

            <h2 className="section-title-left">Request a Demo or Learn More</h2>

            <p className="contact-intro">
              Interested in implementing smart greenhouse technology? Contact us
              to schedule a demonstration or discuss how this innovation can
              benefit your agricultural operations.
            </p>

            <div className="contact-methods">
              {/* Email */}
              <div className="contact-method">
                <div className="method-icon">
                  <Mail size={24} />
                </div>
                <div className="method-content">
                  <div className="method-label">Email</div>

                  <a
                    href="mailto:smartgreenhouse@agronexus.site"
                    className="method-value link"
                  >
                    smartgreenhouse@agronexus.site
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-method">
                <div className="method-icon">
                  <Phone size={24} />
                </div>
                <div className="method-content">
                  <div className="method-label">Phone</div>
                  <a href="tel:+94771234567" className="method-value link">
                    +94 77 123 4567
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-method">
                <div className="method-icon">
                  <MessageCircle size={24} />
                </div>
                <div className="method-content">
                  <div className="method-label">WhatsApp</div>

                  <a
                    href="https://wa.me/94771234567"
                    className="method-value link"
                    target="_blank"
                  >
                    +94 77 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+94 77 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your interest in the Smart Greenhouse project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
