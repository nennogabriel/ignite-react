import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04b361" />
      Diego Fernandes
      <FiX className={styles.closeIcon} color="#737370" />
    </button>
  ) : (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#eba417" />
      Sign In with Github
    </button>
  );
}
