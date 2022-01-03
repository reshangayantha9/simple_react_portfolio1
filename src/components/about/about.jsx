import './about.css'
import codeMan from '../../img/codeMan.jpg'
const About = () => {
    return (
        <div className='a'>
            <div className="aLeft">
                <div className="aCard bg"></div>
                <div className="aCard">
                    <img src={codeMan} alt="" className="aImg" />
                </div>
            </div>
            <div className="aRight">
                <h1 className="aTitle">About me</h1>
                <p className="aSub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores laboriosam exercitationem consectetur cupiditate. </p>
                <p className="aDesc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa beatae suscipit praesentium pariatur totam iure voluptates perspiciatis atque optio voluptatem? Minus inventore harum, quod esse maxime repudiandae quis aliquam culpa.</p>
            </div>
        </div>
    );
};
export default About;
