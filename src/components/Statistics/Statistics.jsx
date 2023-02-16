import propTypes from 'prop-types';
import { StatisticsSection, StatList, Stat } from './Statistics.styled';

export const Statistics = ({ statistics, title }) => {
  return (
    <StatisticsSection>
      {title && <h2>{title}</h2>}
      <StatList>
        {statistics.map(stat => {
          return (
            <Stat key={stat.id}>
              <span>{stat.label} </span>
              <span>{stat.percentage} </span>
            </Stat>
          );
        })}
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  statistics: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ),
  title: propTypes.string.isRequired,
};
