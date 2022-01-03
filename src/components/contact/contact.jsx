import './contact.css';
import phone from '../../img/phone.png'
import location from '../../img/location.png'
import email from '../../img/email.png'
import { useRef } from 'react';


const Contact = () => {
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='c'>
            <div className="cBg"></div>
            <div className="cWrap">
                <div className="cLeft">
                    <h1 className="cTitle">Let's discuss your project</h1>
                    <div className="cInfo">
                        <div className="cInforItem">
                            <img src={phone} alt="" className="cIcon" />
                            +9471212515
                        </div>
                        <div className="cInforItem">
                            <img src={email} alt="" className="cIcon" />
                            reshan@abc.com
                        </div>
                        <div className="cInforItem">
                            <img src={location} alt="" className="cIcon" />
                            no1, 1st lane, Colombo
                        </div>
                    </div>
                </div>
                <div className="cRight">
                    <p className="cDesc">
                        <b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Commodi aut ab laboriosam similique, recusandae ratione vel numquam tempora excepturi impedit dolorem amet, quidem totam, veritatis deserunt tenetur placeat fugit inventore.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="subject" />
                        <input type="text" placeholder='Email' name="email" />
                        <textarea rows="5" placeholder='message' name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
