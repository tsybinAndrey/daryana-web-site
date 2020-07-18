import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import style from "./contact.module.css"


const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <div className={style.contact}>
      <div className={style.contactTitle}>
        <h1>DARYANA OSOTKINA</h1>
        <h2>Photography</h2>
        <p><Link to="/">Home | Домой</Link></p>
      </div>
      <div className={style.contactContent}>
        <h3>Contact | Контакты</h3>
        <p>@OSOTKINADARYANA</p>
        <p>phone: +79824410176</p>
        <p>email: osotkinaph@mail.ru</p>
        <p>
          <a
            target="_blank"
            title="Contact Me On WhatsApp"
            href="https://wa.me/79824410176?text=Hi%2C%20I%20wanna%20get%20some%20info!"
          >WhatsApp</a>
          &nbsp;
          <a
            target="_blank"
            title="Contact Me On Telegram"
            href="https://t.me/osotkinadaryana"
          >Telegram</a>
        </p>
      </div>
    </div>
  </>
)

export default ContactPage
