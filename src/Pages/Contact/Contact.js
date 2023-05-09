import React from "react";
import "./Contact.css";
import CommonHero from "../../Components/CommonHero/CommonHero";
import img from "../../assets/img/contact.jpg";

const Contact = () => {
  return (
    <div>
      <CommonHero text="Contact Us" img={img} />
      <form className="contact_container">
        <div className="container_form">
          <div className="form_name">
            <label for="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_email">
            <label for="name">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form_subject">
            <label for="subject">Subject</label>
            <input type="text" name="subject" />
          </div>
          <div className="form_textarea">
            <label for="textarea">Message</label>
            <input type="text" name="subject" />
          </div>
        </div>
        <div className="btn_div">
          <button class="btn_form">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
