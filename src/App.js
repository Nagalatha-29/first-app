import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeNav, setActiveNav] = useState("home");
  const [appointments, setAppointments] = useState([]);
  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    reason: "",
  });
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialty: "Cardiology",
      experience: "15+ years",
      image: "👨‍⚕️",
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Neurology",
      experience: "12+ years",
      image: "👨‍⚕️",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrics",
      experience: "10+ years",
      image: "👩‍⚕️",
    },
    {
      id: 4,
      name: "Dr. Michael Zhang",
      specialty: "Orthopedics",
      experience: "14+ years",
      image: "👨‍⚕️",
    },
  ];

  const services = [
    { id: 1, icon: "🏥", title: "Emergency Care", desc: "24/7 emergency services" },
    { id: 2, icon: "🩺", title: "Diagnostics", desc: "Advanced diagnostic tools" },
    { id: 3, icon: "💊", title: "Pharmacy", desc: "Complete medication services" },
    { id: 4, icon: "🔬", title: "Laboratory", desc: "Quick lab test results" },
    { id: 5, icon: "🧑‍⚕️", title: "Surgery", desc: "Expert surgical services" },
    { id: 6, icon: "🚑", title: "Ambulance", desc: "Emergency transport 24/7" },
  ];

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (
      appointmentForm.name &&
      appointmentForm.email &&
      appointmentForm.phone &&
      appointmentForm.date &&
      appointmentForm.time &&
      appointmentForm.doctor
    ) {
      setAppointments([...appointments, appointmentForm]);
      setAppointmentForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        doctor: "",
        reason: "",
      });
      setShowAppointmentModal(false);
      alert("Appointment booked successfully!");
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      alert("Message sent successfully! We'll contact you soon.");
      setContactForm({ name: "", email: "", message: "" });
      setShowContactForm(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">MediVerse</span>
          </div>
          <ul className="nav-menu">
            <li>
              <a
                href="#home"
                className={activeNav === "home" ? "active" : ""}
                onClick={() => setActiveNav("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeNav === "services" ? "active" : ""}
                onClick={() => setActiveNav("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#doctors"
                className={activeNav === "doctors" ? "active" : ""}
                onClick={() => setActiveNav("doctors")}
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                href="#appointment"
                className={activeNav === "appointment" ? "active" : ""}
                onClick={() => setActiveNav("appointment")}
              >
                Appointment
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeNav === "contact" ? "active" : ""}
                onClick={() => setActiveNav("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section
        id="home"
        className="hero"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="parallax-bg" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="pattern"></div>
        </div>
        <div className="hero-content">
          <div className="neon-text hero-title">
            Welcome to MediVerse
          </div>
          <p className="hero-subtitle">
            Advanced Healthcare Management System
          </p>
          <p className="hero-description">
            Experience world-class medical services with cutting-edge technology
          </p>
          <button
            className="cta-button"
            onClick={() => {
              setShowAppointmentModal(true);
              setActiveNav("appointment");
            }}
          >
            Book Appointment
          </button>
        </div>
        <div className="floating-elements">
          <div className="float float-1">+</div>
          <div className="float float-2">●</div>
          <div className="float float-3">■</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2 className="section-title" style={{ transform: `translateY(${(scrollY - 800) * 0.2}px)` }}>
            Our Services
          </h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Directory */}
      <section id="doctors" className="doctors">
        <div className="section-header">
          <h2 className="section-title">Our Doctors</h2>
        </div>
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-avatar">{doctor.image}</div>
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <p className="doctor-experience">{doctor.experience}</p>
              <button className="doctor-btn">View Profile</button>
            </div>
          ))}
        </div>
      </section>

      {/* Patient Dashboard */}
      <section className="dashboard">
        <div className="section-header">
          <h2 className="section-title">Patient Dashboard</h2>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-icon">📋</div>
            <h3>Appointments</h3>
            <p className="dashboard-number">{appointments.length}</p>
            <p className="dashboard-label">Total Bookings</p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">👨‍⚕️</div>
            <h3>Doctors</h3>
            <p className="dashboard-number">{doctors.length}</p>
            <p className="dashboard-label">Available</p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">⭐</div>
            <h3>Rating</h3>
            <p className="dashboard-number">4.9</p>
            <p className="dashboard-label">Out of 5</p>
          </div>
          <div className="dashboard-card">
            <div className="dashboard-icon">🏆</div>
            <h3>Awards</h3>
            <p className="dashboard-number">25+</p>
            <p className="dashboard-label">Achievements</p>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="appointment-section">
        <div className="section-header">
          <h2 className="section-title">Book an Appointment</h2>
        </div>
        {appointments.length > 0 && (
          <div className="appointments-list">
            <h3 className="appointments-title">Your Appointments</h3>
            {appointments.map((apt, idx) => (
              <div key={idx} className="appointment-item">
                <div className="apt-info">
                  <p>
                    <strong>{apt.name}</strong> with {apt.doctor}
                  </p>
                  <p>
                    📅 {apt.date} at {apt.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          className="cta-button"
          onClick={() => setShowAppointmentModal(true)}
        >
          + New Appointment
        </button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>123 Medical Plaza, Health City, HC 12345</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>info@mediverse.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <h4>Hours</h4>
                <p>24/7 Emergency | Mon-Fri 8AM-6PM</p>
              </div>
            </div>
          </div>
          <button
            className="cta-button"
            onClick={() => setShowContactForm(true)}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="modal-overlay" onClick={() => setShowAppointmentModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setShowAppointmentModal(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Book Your Appointment</h2>
            <form onSubmit={handleAppointmentSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                value={appointmentForm.name}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={appointmentForm.email}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, email: e.target.value })
                }
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                value={appointmentForm.phone}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, phone: e.target.value })
                }
                required
              />
              <input
                type="date"
                value={appointmentForm.date}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, date: e.target.value })
                }
                required
              />
              <input
                type="time"
                value={appointmentForm.time}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, time: e.target.value })
                }
                required
              />
              <select
                value={appointmentForm.doctor}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, doctor: e.target.value })
                }
                required
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} - {doc.specialty}
                  </option>
                ))}
              </select>
              <textarea
                placeholder="Reason for visit (optional)"
                value={appointmentForm.reason}
                onChange={(e) =>
                  setAppointmentForm({ ...appointmentForm, reason: e.target.value })
                }
              ></textarea>
              <button type="submit" className="submit-btn">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setShowContactForm(false)}
            >
              ✕
            </button>
            <h2 className="modal-title">Send us a Message</h2>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) =>
                  setContactForm({ ...contactForm, email: e.target.value })
                }
                required
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 MediVerse Hospital. All rights reserved.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#doctors">Doctors</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;