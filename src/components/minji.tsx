import {useState} from 'react';

type AuthUser = {
  name: string;
  email: string;
};

const list = [
  {
    first: 'minji',
    last: 'kim',
  },
  {
    first: 'junhyun',
    last: 'lee',
  },
  {
    first: 'cooper',
    last: 'kim',
  },
];

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'minji',
      email: '321963741@namver./cpom',
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>LOGIN</button>
      <div>user name is {user.name}</div>
      <div>user email is {user.email}</div>
    </div>
  );
};
