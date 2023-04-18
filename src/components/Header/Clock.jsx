import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  //creation du refresh par seconde
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);
  //condition pour que 1 sec soit ecrit en 01 par exemple
  const zero = (i) => (i < 10 ? '0' + i : i);

  const hours = zero(time.getHours());
  const minutes = zero(time.getMinutes());
  const seconds = zero(time.getSeconds());
  const date = zero(time.getDate());
  const year = time.getFullYear();
  const month = time.toLocaleString('fr-FR', { month: 'long' });

  return (
    <div>
      {date} {month} {year} {hours}:{minutes}:{seconds}
    </div>
  );
};
export default Clock;
