import styles from "../UI/UserTable.module.css";

const UserTable = ({ users }) => {
  return (
    <div className={styles["user-table"]}>
      <h2>Table of Users</h2>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
