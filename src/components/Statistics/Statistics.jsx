import { Message } from 'components/Message/Message';
import PropTypes from 'prop-types';
import css from './Stastistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <div className={css.Statistics}>
      <span>Good : {good}</span>
      <span>Neutral : {neutral}</span>
      <span>Bad : {bad}</span>
      <span>Total : {total}</span>
      <span>Positive feedback : {positivePercentage || 0}%</span>
    </div>
  ) : (
    <Message />
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
