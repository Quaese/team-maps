import React, { useEffect, MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectUsers, fetchUsersAsync, addUser } from "./userSlice";
import { User } from "./userSlice";

import "./Users.css";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users, loading, hasErrors } = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  // render user list
  const renderUsers = () => {
    return users.length ? (
      <ul>
        {users.map((user: User) => (
          <li key={user.id} className="PostItem">
            <h4>
              {user.id} -{user.username}
            </h4>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    ) : (
      <div>no users</div>
    );
  };

  // add user to existing user list in store
  const hAddUser = (e: MouseEvent) => {
    e.preventDefault();

    dispatch(
      addUser({
        name: "hans",
        username: "wuasd",
        email: "hab@ich.net",
      })
    );
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader">Loading...</div>
      </div>
    );
  }
  if (hasErrors) return <p>Unable to get Users.</p>;

  return (
    <section className="users">
      <h1>Users List</h1>
      <div>Status: {loading ? "loading" : "idle"}</div>
      <button onClick={(e) => hAddUser(e)}>Add User</button>
      <div>
        <button onClick={() => dispatch(fetchUsersAsync())}>fetchUsers</button>
      </div>
      {renderUsers()}
    </section>
  );
};

export default Users;
