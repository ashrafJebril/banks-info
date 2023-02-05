import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = (props) => {
  const [data, setData] = useState("second");
  const url = useParams();
  console.log("url", url.id);
  useEffect(() => {
    console.log(data.data);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8 ");
    myHeaders.append("x-v", "3");

    var requestOptions = {
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

  console.log(props);
  return (
    <div>
      <div>{data.data.brandName}</div>
      <div className="flex gap-x-6 mt-16 text-sm mb-8">
        <div>
          <div className="font-bold">Constraints</div>
          {data.data.constraints.map((e) => {
            return (
              <div>
                <div className="my-4">{e.constraintType}</div>
                <div>{e.additionalValue}</div>
                <div>{e.constraintType}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="font-bold mb-8">eligibility</div>

          {data.data.eligibility.map((e) => {
            return (
              <div>
                <div>{e.additionalInfo}</div>
                <div>{e.eligibilityType}</div>
                <div>{e.constraintType}</div>
                <div>{e.additionalValue}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="font-bold mb-8">fees</div>

          {data.data.fees.map((e) => {
            return (
              <div>
                <div>{e.additionalInfo}</div>
                <div>{e.amount}</div>
                <div>{e.currency}</div>
                <div>{e.feeType}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="font-bold mb-8">lendingRates</div>

          {data.data.lendingRates.map((e) => {
            return (
              <div>
                <div>{e.additionalInfo}</div>
                <div>{e.additionalValue}</div>
                <div>{e.lendingRateType}</div>
                <div>{e.rate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
