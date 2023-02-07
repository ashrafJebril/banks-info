const allBanks = [];
const arr = [
  "https://api.cdr-api.amp.com.au/cds-au/v1",
  "https://api.anz/cds-au/v1",
  "https://cdr.apix.anz/cds-au/v1",
  "https://api.cdr.awaalliancebank.com.au/cds-au/v1",
  "https://api.cdr.adelaidebank.com.au/cds-au/v1",
  "https://netbank.yourmutual.com.au/ym-OpenBanking/cds-au/v1",
  "https://public.cdr.arabbank.com.au/cds-au/v1",
  "https://aussie.cdropenportal.io/cds-au/v1",
  "https://public.open.australianmilitarybank.com.au/cds-au/v1",
  "https://internetbanking.australianmutual.bank/openbanking/cds-au/v1",
  "https://datasharing-open-banking.australianunity.com.au/OpenBanking/cds-au/v1",
  "https://api.auswidebank.com.au/openbanking/cds-au/v1",
  "https://api.cdr.bdcualliancebank.com.au/cds-au/v1",
  "https://public.cdr-api.bhccu.com.au/cds-au/v1",
  "https://api.cds.boqspecialist.com.au/cds-au/v1",
  "https://public.cdr-api.bankaust.com.au/cds-au/v1",
  "https://public.cdr.bankfirst.com.au/cds-au/v1",
  "https://api-gateway.bankofchina.com.au/cds-au/v1",
  "https://digital-api.bankofmelbourne.com.au/cds-au/v1",
  "https://api.cds.boq.com.au/cds-au/v1",
  "https://openbank.api.banksyd.com.au/cds-au/v1",
  "https://api.bankofus.com.au/OpenBanking/cds-au/v1",
  "https://digital-api.banksa.com.au/cds-au/v1",
  "https://ib.bankvic.com.au/openbanking/cds-au/v1",
  "https://open-api.bankwest.com.au/bwpublic/cds-au/v1",
  "https://bellpotter.openportal.com.au/cds-au/v1",
  "https://api.cdr.bendigobank.com.au/cds-au/v1",
  "https://public.cdr.api.beyondbank.com.au/cds-au/v1",
  "https://internetbanking.swcredit.com.au/openbanking/cds-au/v1",
  "https://cdr.commbiz.api.commbank.com.au/cbzpublic/cds-au/v1",
  "https://openbanking.cairnsbank.com.au/OpenBanking/cds-au/v1",
  "https://api.openbanking.cardservicesdirect.com.au/cds-au/v1",
  "https://secure.cmcu.com.au/openbanking/cds-au/v1",
  "https://ib.cwcu.com.au/openbanking/cds-au/v1",
  "https://api.openbanking.challenger.com.au/cds-au/v1",
  "https://api.cdr.circle.com.au/cds-au/v1",
  "https://openbanking.api.citi.com.au/cds-au/v1",
  "https://public.cdr-api.coastline.com.au/cds-au/v1",
  "https://api.openbanking.secure.coles.com.au/cds-au/v1",
  "https://api.commbank.com.au/public/cds-au/v1",
  "https://netbank.communityfirst.com.au/cf-OpenBanking/cds-au/v1",
  "https://openbanking.api.creditunionsa.com.au/cds-au/v1",
  "https://api.cds.ddhgraham.com.au/cds-au/v1",
  "https://product.defencebank.com.au/cds-au/v1",
  "https://public.cdr-api.dnister.com.au/cds-au/v1",
  "https://ebranch.easystreet.com.au/es-OpenBanking/cds-au/v1",
  "https://public.cdr.familyfirst.com.au/cds-au/v1",
  "https://public.cdr-api.fscu.com.au/cds-au/v1",
  "https://ob.tmbl.com.au/fmbank/cds-au/v1",
  "https://public.cdr-api.firstchoicecu.com.au/cds-au/v1",
  "https://internetbanking.firstoption.com.au/OpenBanking/cds-au/v1",
  "https://ibank.gcmutualbank.com.au/OpenBanking/cds-au/v1",
  "https://public.cdr-api.gatewaybank.com.au/cds-au/v1",
  "https://online.geelongbank.com.au/OpenBanking/cds-au/v1",
  "https://prd.bnk.com.au/cds-au/v1",
  "https://api.open-banking.greatsouthernbank.com.au/cds-au/v1",
  "https://public.cdr-api.greater.com.au/cds-au/v1",
  "https://public.ob.hsbc.com.au/cds-au/v1",
  "https://public.ob.business.hsbc.com.au/cds-au/v1",
  "https://ob.tmbl.com.au/hpbank/cds-au/v1",
  "https://product.api.heritage.com.au/cds-au/v1",
  "https://ob.tmbl.com.au/hiver/cds-au/v1",
  "https://onlinebanking.horizonbank.com.au/openbanking/cds-au/v1",
  "https://ibankob.humebank.com.au/OpenBanking/cds-au/v1",
  "https://openbank.openbanking.imb.com.au/cds-au/v1",
  "https://apic.ing.com.au/cds-au/v1",
  "https://onlineteller.cu.com.au/OpenBanking/cds-au/v1",
  "https://public.open.judo.bank/cds-au/v1",
  "https://api.openbanking.cards.koganmoney.com.au/cds-au/v1",
  "https://internetbanking.lcu.com.au/OpenBanking/cds-au/v1",
  "https://public.openbank.mebank.com.au/cds-au/v1",
  "https://openbanking.movebank.com.au/OpenBanking/cds-au/v1",
  "https://api.macquariebank.io/cds-au/v1",
  "https://banking.macquariecu.com.au/OpenBanking/cds-au/v1",
  "https://openbanking.themutual.com.au/OpenBanking/cds-au/v1",
  "https://openbank.api.mystate.com.au/cds-au/v1",
  "https://myer.cdropenportal.io/cds-au/v1",
  "https://openbank.api.nab.com.au/cds-au/v1",
  "https://openbank.newcastlepermanent.com.au/cds-au/v1",
  "https://api.cds.nicu.com.au/cds-au/v1",
  "https://api.cdr.novaalliancebank.com.au/cds-au/v1",
  "https://online.orangecu.com.au/openbanking/cds-au/v1",
  "https://public.cdr-api.pnbank.com.au/cds-au/v1",
  "https://api.paypal.com/v1/identity/cds-au/v1",
  "https://ob-public.peopleschoice.com.au/cds-au/v1",
  "https://product.api.policebank.com.au/cds-au/v1",
  "https://api.policecu.com.au/OpenBanking/cds-au/v1",
  "https://banking.qbank.com.au/openbanking/cds-au/v1",
  "https://api.openbanking.qantasmoney.com/cds-au/v1",
  "https://public.cdr-api.qudosbank.com.au/cds-au/v1",
  "https://public.cdr-api.queenslandcountry.bank/cds-au/v1",
  "https://cdrbank.racq.com.au/cds-au/v1",
  "https://digital-api.westpac.com.au/rams/cds-au/v1",
  "https://public.open.rslmoney.com.au/cds-au/v1",
  "https://openbanking.api.rabobank.com.au/public/cds-au/v1",
  "https://public-data.cdr.regaustbank.io/cds-au/v1",
  "https://ibanking.reliancebank.com.au/rel-openbanking/cds-au/v1",
  "https://api.cdr.ruralbank.com.au/cds-au/v1",
  "https://api.cdr.serviceone.com.au/cds-au/v1",
  "https://api.cds.societyone.com.au/cds-au/v1",
  "https://online.swscu.com.au/openbanking/cds-au/v1",
  "https://cdr.sccu.com.au/openbanking/cds-au/v1",
  "https://digital-api.stgeorge.com.au/cds-au/v1",
  "https://public.cdr-api.summerland.com.au/cds-au/v1",
  "https://id-ob.suncorpbank.com.au/cds-au/v1",
  "https://banking.transportmutual.com.au/OpenBanking/cds-au/v1",
  "https://ob.tmbl.com.au/tmbank/cds-au/v1",
  "https://public.cdr.onlinebanking.capricornian.com.au/cds-au/v1",
  "https://onlinebanking.themaccu.com.au/OpenBanking/cds-au/v1",
  "https://public.cdr.thriday.com.au/cds-au/v1",
  "https://prd.tcu.com.au/cds-au/v1",
  "https://public.cdr.tyro.com/cds-au/v1",
  "https://openbank.api.ubank.com.au/cds-au/v1",
  "https://ob.tmbl.com.au/unibank/cds-au/v1",
  "https://ibanking.unitybank.com.au/OpenBanking/cds-au/v1",
  "https://public.api.cdr.unloan.com.au/cds-au/v1",
  "https://api.up.com.au/cds-au/v1",
  "https://api.cds.virginmoney.com.au/cds-au/v1",
  "https://openbanking.wcu.com.au/OpenBanking/cds-au/v1",
  "https://digital-api.westpac.com.au/cds-au/v1",
  "https://au-cdrbanking-pub.wise.com/cds-au/v1",
  "https://woolworths.cdropenportal.io/cds-au/v1",
  "https://online.woolworthsteambank.com.au/OpenBanking/cds-au/v1",
  "https://onlinebanking.wawcu.com.au/OpenBanking/cds-au/v1",
  "https://public.cdr-api.bcu.com.au/cds-au/v1",
  "https://secure.gmcu.com.au/OpenBanking/cds-au/v1",
  "https://public.cdr-api.86400.com.au/cds-au/v1",
];

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
class Apis {
  constructor() {}

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
    // await new Promise((resolve) => setTimeout(resolve, 100));
    const data = await fetch(
      `${link}/banking/products?effective=ALL&product-category=BUSINESS_LOANS\n`,

      requestOptions
    )
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        }
        throw new Error("Request failed with status code: " + response.status);
      })
      .then((result) => {
        if (JSON.parse(result).data.products.length > 0) {
          allBanks.push({ data: JSON.parse(result).data.products, link: link });
        }
      })
      .catch((error) => {
        console.error(error);
      });

    await this.getBanks();
    return allBanks;
  }
  async getProducts(id, link) {
    return await fetch(`${link}/banking/products/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result).data)
      .catch((error) => console.log("error", error));
  }
}

module.exports = Apis;
