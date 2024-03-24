import PropTypes from 'prop-types';

const Special = ({asset,price}) => {
    
    return (
        <div>
            <h2>Special</h2>
            <p>{asset}</p>
            <p>{price}</p>
        </div>
    );
};

Special.propTypes = {
    asset: PropTypes.string,
    price: PropTypes.string
}

export default Special;