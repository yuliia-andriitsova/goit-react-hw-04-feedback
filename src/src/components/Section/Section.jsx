import PropTypes from 'prop-types';

export const SectionFeedback = ({ title, children }) => {
  return (
    <section>
      <h2> {title}</h2>
      {children}
    </section>
  );
};

SectionFeedback.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
