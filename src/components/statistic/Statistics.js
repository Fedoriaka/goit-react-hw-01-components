import PropTypes from 'prop-types';
import styles from './statistic.module.css';

export default function Statistic({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={styles.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li className={styles.item} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
