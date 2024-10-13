import PropTypes from 'prop-types';
import styles from './friends.module.css';
function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <div className={styles.avatarwrapper}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <span
          className={`${styles.status} ${
            isOnline ? styles.online : styles.offline
          }`}
        ></span>
      </div>
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendlist}>
      {friends.map(friend => (
        <FriendItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
