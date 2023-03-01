import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    if (checked) return setTheme('dark');
    return setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width:30, height:30 }}/>;
  }

  return (
            <div className='grid place-items-center'>
              <DarkModeSwitch
                  checked={theme === 'dark'}
                  onChange={toggleDarkMode}
                  moonColor='white'
                  sunColor='black'
                  size={30}
              />

            </div>
  );
};

export default DarkModeToggle;