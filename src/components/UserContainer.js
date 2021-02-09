import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";
const UserContainer = ({ userData, fetchUsers }) => {
  const [val, setVal] = React.useState(
    localStorage.getItem("persistantState") || ""
  );

  useEffect(() => {
    fetchUsers();
    console.log("runnnn");
  }, [val]);

  console.log(userData);
  return <div>{userData.loading ? <p>Loading</p> : <p>Bye</p>}</div>;
};

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
