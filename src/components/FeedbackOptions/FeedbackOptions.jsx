import PropTypes from 'prop-types';
import { OptionsWrapper, Button } from './FeedbackOptions.styled.jsx';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionList = Object.keys(options);
  return (
    <OptionsWrapper>
      {optionList.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
