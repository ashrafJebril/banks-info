import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = (props) => {
  const [data, setData] = useState("second");
  const url = useParams();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8 ");
    myHeaders.append("x-v", "3");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions = {
      crossDomain: true,
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://api.commbank.com.au/public/cds-au/v1/banking/products/${url.id}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => setData(JSON.parse(result)))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="flex flex-col items-center ">
      {" "}
      <div className="w-1/2  shadow-2xl bg-gray-200 p-4 rounded-lg">
        {/* <div>{data.data.brandName}</div> */}
        <div className=" gap-x-6 mt-16 text-sm mb-8">
          <div>
            <div className="font-bold text-xl">Constraints</div>
            {data.data
              ? data.data.constraints.map((e) => {
                  return (
                    <div className="p-2">
                      <div className="flex mt-2  my-2">
                        <div className="mr-2 font-bold ">constraintType :</div>{" "}
                        <div>{e.constraintType}</div>
                      </div>

                      <div className="flex mt-2  my-2">
                        <div className="mr-2 font-bold ">additionalValue :</div>{" "}
                        <div>{e.additionalValue}</div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="border-b border-t border-white py-2">
            <div className="font-bold mb-3 text-xl">Eligibility</div>

            {data.data
              ? data.data.eligibility.map((e) => {
                  return (
                    <div className="p-2">
                      <div className="flex mt-2  my-2">
                        <div className="mr-2 font-bold ">Info :</div>{" "}
                        <div>{e.additionalInfo}</div>
                      </div>

                      <div className="flex mt-2  ">
                        <div className="mr-2 font-bold">Eligibility Type :</div>{" "}
                        <div>{e.eligibilityType}</div>
                      </div>

                      <div className="flex mt-2  ">
                        <div className="mr-2 font-bold">Constraint Type :</div>{" "}
                        <div>{e.constraintType}</div>
                      </div>

                      <div className="flex mt-2  ">
                        <div className="mr-2 font-bold">Additional Value :</div>{" "}
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="border-b border-t">
            <div className="font-bold mb-3 text-xl  border-white py-2">
              Fees
            </div>

            {data.data
              ? data.data.fees.map((e) => {
                  return (
                    <div className="p-2">
                      <div className="flex mt-2  ">
                        <div className="mr-2 font-bold">Info :</div>{" "}
                        <div>{e.additionalInfo}</div>
                      </div>

                      <div className="flex mt-2 ">
                        <div className="mr-2 font-bold">Amount :</div>{" "}
                        <div>{e.amount}</div>
                      </div>
                      <div className="flex mt-2 ">
                        <div className="mr-2 font-bold">Currency :</div>{" "}
                        <div>{e.currency}</div>
                      </div>
                      <div className="flex mt-2 ">
                        <div className="mr-2 font-bold">Fee Type :</div>{" "}
                        <div>{e.feeType}</div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
          <div className="border-b border-t border-white py-6">
            <div className="font-bold mb-3 text-xl  ">lendingRates</div>

            {data.data
              ? data.data.lendingRates.map((e) => {
                  return (
                    <div className=" p-2">
                      <div className="flex mt-2 ">
                        <div className="mr-2 font-bold">Info :</div>{" "}
                        <div>{e.additionalInfo}</div>
                      </div>

                      <div className="flex">
                        <div className="mr-2 font-bold">
                          Additional Value :{" "}
                        </div>{" "}
                        <div>{e.additionalValue}</div>
                      </div>

                      <div className="flex">
                        <div className="mr-2 font-bold">
                          Lending Rate Type :{" "}
                        </div>{" "}
                        <div>{e.lendingRateType}</div>
                      </div>
                      <div className="flex">
                        <div className="mr-2 font-bold">Rate : </div>{" "}
                        <div>{e.rate}</div>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
