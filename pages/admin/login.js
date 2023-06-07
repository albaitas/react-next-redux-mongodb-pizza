import styles from '../../styles/Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post('https://react-next-redux-mongodb-pizza.vercel.app/api/login', { username, password });
      router.push('/admin');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Admin Dashboard</h3>
        <input placeholder='username' type='text' className={styles.input} onChange={(e) => setUsername(e.target.value)} />
        <input placeholder='password' type='text' className={styles.input} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
