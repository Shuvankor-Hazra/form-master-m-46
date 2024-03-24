
import PropTypes from 'prop-types';
import Special from '../Special/Special';


const Cousin = ({name}) => {
    return (
        <div>
            <h2> {name} </h2>
            
            <section>
                <Special></Special>
            </section>
        </div>
    );
};


Cousin.propTypes = {
name: PropTypes.string
};


export default Cousin;