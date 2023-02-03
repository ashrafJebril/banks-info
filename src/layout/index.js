import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
const Layout = ({ user }) => {
  return (
    <div className="">
      Layout
      <Outlet />
      {user}
    </div>
  );
};

const mapState = (state) => ({
  user: state.example.user,
});
export default connect(mapState)(Layout);
