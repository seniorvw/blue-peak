import Card from './Card';
import styles from './Evidence.module.css';

const cardData = [
  {
    id: 1,
    content: (
      <p className='text-gray-700 leading-7'>
        We have <strong>testing data</strong> that compares the performance of
        our high-performance flat and thin wind turbines with existing designs.
      </p>
    ),
  },
  {
    id: 2,
    content: (
      <p className='text-gray-700 leading-7'>
        For example, our new design has an efficiency of <strong>0.54</strong>,
        significantly higher than the <strong>0.5</strong> efficiency of many
        traditional designs. This improved efficiency translates into higher
        power generation and lower operating costs for our customers.
      </p>
    ),
  },
  {
    id: 3,
    content: (
      <p className='text-gray-700 leading-7'>
        <strong>The higher efficiency</strong> of our new wind turbine design
        means that it is able to generate more power in low wind conditions,
        resulting in a more consistent and
        <strong>reliable source of power</strong>. This, in turn, leads to{' '}
        <strong>lower operating costs</strong> for our customers, as they are
        able to generate more power with the same amount of wind energy.
      </p>
    ),
  },
];

const CardList = () => {
  return (
    <>
      {cardData.map((card) => (
        <Card key={card.id}>{card.content}</Card>
      ))}
    </>
  );
};

export default CardList;
