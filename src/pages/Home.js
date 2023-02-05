import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
const Home = ({ myBanks, banks }) => {
  useEffect(() => {
    banks();
    console.log("ass", myBanks);
  }, [myBanks]);
  return (
    <div className="flex flex-col items-center ">
      {myBanks.map((e, i) => {
        console.log(i);
        return (
          <Link
            to={`/product/${e.productId}`}
            className="w-1/2"
            id={e.productId}
          >
            <div className="w-full shadow-xl m-6 rounded-lg  p-4">
              <div>Bank Name : {e.brand}</div>
              <div className="my-2">{e.productCategory}</div>
              <div> {e.description}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
const mapState = (state) => ({
  myBanks: state.banks.banks,
});
const mapDispatch = (dispatch) => ({
  banks: (data) => dispatch.banks.getBanks(data),
});
export default connect(mapState, mapDispatch)(Home);
