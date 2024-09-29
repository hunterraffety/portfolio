// app/contact/page.tsx
import styles from './Contact.module.scss'

const ContactPage = () => {
  return (
    <section className={styles.contact}>
      <h2>Reach Out</h2>
      <form
        action='https://formspree.io/f/manwrjrk'
        method='POST'
        className={styles.form}
      >
        <label>
          Name
          <input type='text' name='name' required />
        </label>
        <label>
          Email
          <input type='email' name='_replyto' required />
        </label>
        <label>
          Message
          <textarea name='message' rows={5} required></textarea>
        </label>
        <button type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default ContactPage
