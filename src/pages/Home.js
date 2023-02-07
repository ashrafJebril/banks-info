import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import Excell from "../excell";
const Home = ({ myBanks, banks }) => {
  useEffect(() => {
    banks();
    console.log("asas", myBanks);
  }, [banks]);

  const data = myBanks ? (
    myBanks.map((e) => {
      console.log("eee", e);
      return (
        <div className="w-1/2 my-6">
          <div className="w-full shadow-xl m-6 rounded-lg  p-4">
            <div>Bank Name : {e.bank.brand}</div>
            <div className="my-2">{e.bank.productCategory}</div>
            <div> {e.bank.description}</div>
            <div>
              {" "}
              {e.data
                ? e.data.lendingRates
                  ? e.data.lendingRates.map((ele) => {
                      return (
                        <div>
                          <div className="mb-2">Rates</div>
                          <div className="flex gap-x-2">
                            <div> {ele.lendingRateType}</div>
                            <div> {ele.rate}</div>
                          </div>

                          <div className="flex gap-x-2">
                            <div className="text-xs">
                              {" "}
                              {ele.additionalValue}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""
                : ""}
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>No Data</div>
  );
  return (
    <div className="flex flex-col items-center ">
      {/* <Excell /> */}
      {data}
      {/* {myBanks
        ? myBanks.map((e, i) => {
            console.log(e);
            return (
              <Link
                to={`/product/${e.productId}`}
                className="w-1/2"
                id={e.productId}
              >
                <div className="w-full shadow-xl m-6 rounded-lg  p-4">
                  <div>Bank Name : {e.bank.brand}</div>
                  <div className="my-2">{e.bank.productCategory}</div>
                  <div> {e.bank.description}</div>
                  <div>
                    {" "}
                    {e.data
                      ? e.data.lendingRates.map((ele) => {
                          return (
                            <div>
                              <div className="mb-2">Rates</div>
                              <div className="flex gap-x-2">
                                <div> {ele.lendingRateType}</div>
                                <div> {ele.rate}</div>
                              </div>

                              <div className="flex gap-x-2">
                                <div className="text-xs">
                                  {" "}
                                  {ele.additionalValue}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </Link>
            );
          })
        : ""} */}
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
