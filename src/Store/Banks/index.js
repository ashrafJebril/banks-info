import axios from "axios";
const arr = [
  "https://api.commbank.com.au/public/cds-au/v1",
  "https://digital-api.westpac.com.au/cds-au/v1/",
  "https://api.anz/cds-au/v1/",
  "https://openbank.api.nab.com.au/cds-au/v1",
  "https://secure.api.boq.com.au/cds-au/v1",
  "https://api.macquariebank.io/cds-au/v1",
  "https://api.cdr.bendigobank.com.au",
  "https://api.cdr.adelaidebank.com.au/cds-au",
  "https://api.cdr-api.amp.com.au/cds-au/v1",
  "https://prd.suncorpbank.com.au/cds-au",
];
const allBanks = [];
const Banks = {
  name: "banks",
  state: {
    banks: [],
  },
  reducers: {
    myBanks(state, payload) {
      return { ...state, banks: payload };
    },
  },
  effects: (dispatch) => ({
    async getBanks() {
      if (arr.length === 0) {
        return;
      }
      let link = arr.pop();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json; charset=utf-8");
      myHeaders.append("x-v", "3");
      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await fetch(
        `${link}/banking/products?effective=ALL&product-category=BUSINESS_LOANS\n`,
        requestOptions
      )
        .then((response) => {
          if (response.status === 200) {
            return response.text();
          }
          throw new Error(
            "Request failed with status code: " + response.status
          );
        })
        .then((result) => {
          if (JSON.parse(result).data.products.length > 0) {
            allBanks.push(JSON.parse(result).data.products);
          }

          console.log(this.banks);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log(link);
      await this.getBanks();
      this.myBanks(allBanks.flat());
    },
  }),
};

export default Banks;
