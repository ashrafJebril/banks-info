import axios from "axios";
import Apis from "../../apis/index";

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
      let result = [];
      const myApis = new Apis();

      const banks = await myApis.getBanks();
      await Promise.all(
        banks.map(async (bank) => {
          await Promise.all(
            bank.data.map(async (product) => {
              let data = await myApis.getProducts(product.productId, bank.link);

              result.push({
                bank: product,
                data: data,
              });
            })
          );
        })
      );

      this.myBanks(result);

      // const banksArr = banks.flat();

      // banksArr.map(async (e) => {
      //   let data = await myApis.getProducts(e.productId);
      //   result.push({
      //     bank: e,
      //     data: data,
      //   });

      //   console.log("ss", result);
      //   this.myBanks(result);
      // });

      // if (arr.length === 0) {
      //   return;
      // }
      // let link = arr.pop();
      // var myHeaders = new Headers();

      // myHeaders.append("Content-Type", "application/json; charset=utf-8");
      // myHeaders.append("x-v", "3");

      // var requestOptions = {
      //   method: "GET",
      //   headers: myHeaders,
      //   redirect: "follow",
      // };
      // await new Promise((resolve) => setTimeout(resolve, 500));
      // const data = await fetch(
      //   `${link}/banking/products?effective=ALL&product-category=BUSINESS_LOANS\n`,

      //   requestOptions
      // )
      //   .then((response) => {
      //     if (response.status === 200) {
      //       return response.text();
      //     }
      //     throw new Error(
      //       "Request failed with status code: " + response.status
      //     );
      //   })
      //   .then((result) => {
      //     if (JSON.parse(result).data.products.length > 0) {
      //       allBanks.push(JSON.parse(result).data.products);
      //     }

      //     console.log(this.banks);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      // console.log(link);
      // await this.getBanks();
      // this.myBanks(allBanks.flat());
    },

    getAllProducts() {},
  }),
};

export default Banks;
