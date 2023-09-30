import { BsFillBagHeartFill } from 'react-icons/bs';

const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div>
      <section className='card'>
        <img src={img} alt={title} className='card-img' />
        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
            {star} {star} {star} {star}
            <span className='total-reviews'>3</span>
          </section>
          <div className='card-price'>
            <div className='price'>
              <del>{prevPrice}</del> {newPrice}
            </div>

            <div className='bag'>
              <BsFillBagHeartFill className='bag-icon' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
