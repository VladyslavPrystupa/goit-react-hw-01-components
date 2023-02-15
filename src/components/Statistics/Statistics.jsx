import css from './statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({ statistics, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {statistics.map(stat => {
          return (
            <li key={stat.id} className={css.stat}>
              <span>{stat.label} </span>
              <span>{stat.percentage} </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
};
