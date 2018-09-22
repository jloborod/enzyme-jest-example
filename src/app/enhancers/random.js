import { compose, withState, withHandler } from 'recompose';

const withRandomValue = compose(
  withState('value', 'setValue', 0),
  withHandler({
    generate: ({ setValue }) => e => {
      setValue(Math.floor(Math.random() * Math.floor(10)));
    },
  }),
);

export default withRandomValue;
