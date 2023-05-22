import { FC, useEffect } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import { EVENT_NAME } from './customEvent/customEvent';

import './App.scss';

const App: FC = () => {
  useEffect(() => {
    const logger = (e: CustomEvent): void => console.log(e.detail);

    document.addEventListener(EVENT_NAME, logger);

    return () => {
      document.removeEventListener(EVENT_NAME, logger);
    }
  }, [])

  return (
    <Dropdown
      emptyStatePlaceholder="Select an option"
      options={[
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune',
        'Pluto',
      ]}
      // optionInitialIndex={0}
    />
  );
};

export default App;
