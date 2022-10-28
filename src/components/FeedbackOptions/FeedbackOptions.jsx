import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <div className={css.buttons}>
      {options.map(item => (
        <button
          className={css.button}
          key={item}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,

  onLeaveFeedback: PropTypes.func,
};
