import React from 'react';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = (checked: boolean) => {
    if (checked) return setTheme('dark');
    return setTheme('light');

  };


  return (
            <div className='grid place-items-center'>
              <DarkModeSwitch
                  checked={theme === 'dark'}
                  onChange={toggleDarkMode}
                  moonColor='white'
                  sunColor='#FB8500'
                  size={30}
              />

            </div>
  );
};

export default DarkModeToggle;