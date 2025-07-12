import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_p6wz41k', 'template_lx81p3h', form.current, {
        publicKey: '57C_XjHsjI-MlEaaM',
      })
      .then(
        () => {
          alert('Mensaje enviado correctamente');
        },
        (error) => {
          alert('Error en el envio: ', error.text);
        },
      );
  };



  return (
    <div className="flex bg-black h-full w-full md:w-6/12 md:rounded-xl 2xl:w-3/12">

      <form ref={form} className="flex flex-col w-full p-10 justify-center align-center" id="contact-form" onSubmit={sendEmail}>
        <h5 className='text-xl pt-5 pb-5 text-white'>Contactame</h5>
        <input className='contact-input' type="text" name="name" placeholder="Tu nombre" required />
        <input className='contact-input' type="text" name="subject" placeholder="Asunto" required />
        <input className='contact-input' type="email" name="email" placeholder="Tu correo" required />
        <textarea className='contact-input' name="message" placeholder="message" required></textarea>
        <button id="contactme-button" type="submit">Enviar</button>
      </form>
    </div>
  )
}