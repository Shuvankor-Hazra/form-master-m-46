import Special from "../Special/Special";
import PropTypes from 'prop-types';


const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

MySelf.propTypes = {
    asset: PropTypes.string
}

export default MySelf;