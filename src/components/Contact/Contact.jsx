import React, { useRef } from 'react';
import './Contact.css';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmailRequest, sendEmailSuccess } from '../../redux/actions';

const Contact = () => {
    const dispatch = useDispatch();
    const form = useRef();
    const { loading, error } = useSelector(state => state.email);

    const sendEmail = (e) => {
        e.preventDefault();
        dispatch(sendEmailRequest());

        setTimeout(() => {
            dispatch(sendEmailSuccess());
            form.current.reset();
        }, 2000);
    };

    return (
        <div className="contact-form" id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span>Сізге менің жұмыстарым
                        <br/>
                        қызық болса
                    </span>
                    <span>байланысқа шығыңыз!!!</span>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Атыңыз" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Хабарлама жазыңыз" />
                    <input type="submit" value="Жіберілді" className="button" disabled={loading} />
                    {error && <span>Error: {error}</span>}
                    {loading && <span>жіберіліп жатыр...</span>}
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
