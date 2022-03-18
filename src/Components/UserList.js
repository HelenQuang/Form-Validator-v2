import styles from "../UI/UserList.module.css";

const UserList = ({ users }) => {
  return (
    // <ul className={styles["user-list"]}>
    //   {users.map((user) => (
    //     <li>
    //       Name:{user.firstname} {user.lastname}
    //       Birthday:{user.birth}
    //       Email:{user.email}
    //     </li>
    //   ))}
    // </ul>
    <table className={styles["user-table"]}>
      <tr>
        <th>Name</th>
        <th>DOB</th>
        <th>Email</th>
        <th>Username</th>
      </tr>

      {users.map((user) => (
        <tr>
          <td>
            {user.firstname} {user.lastname}
          </td>
          <td>{user.birth}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
        </tr>
      ))}
    </table>
  );
};

export default UserList;
