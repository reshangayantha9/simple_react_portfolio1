import Product from '../product/product';
import './productList.css'

const Productlist = () => {
    return (
        <div className='pl'>
            <div className="plText">
                <h1 className="plTitle">Create & inspire.</h1>
                <p className="plDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laborum, voluptatibus dolor, iusto adipisci assumenda maiores dolores recusandae eum, tempore asperiores cupiditate doloribus quasi iste esse expedita quos repudiandae porro.</p>
            </div>
            <div className="pList">
                <Product />
                <Product />
                <Product />
                <Product />

            </div>
        </div>
    );
}

export default Productlist;
