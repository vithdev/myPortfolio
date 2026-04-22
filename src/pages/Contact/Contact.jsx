import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Swal from "sweetalert2";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. I'll get back to you soon!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#777777",
      background: "#202020",
      color: "#ffffff",
      iconColor: "#777777",
      borderRadius: "12px",
    });

    e.target.reset();
  };

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2 className="cursor-target">Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h3>Get In Touch</h3>

          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <span>aminehamzaoui1925@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="contact-icon" />
            <span>+213 XX XX XX XX</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Algeria</span>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            className="cursor-target"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            className="cursor-target"
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            className="cursor-target"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button className="cursor-target" type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;