import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback, arrayState }) {
  return (
    <div className={css.buttons}>
      {Object.keys(arrayState).map(item => (
        <button
          key={item}
          name={item}
          type="button"
          onClick={event => onLeaveFeedback(event)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, title: PropTypes.string })
  ),
  onLeaveFeedback: PropTypes.func,
};
