import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import config from './config/config'
// import Header from './directives/header'
// import Footer from './directives/footer'
import login from './Components/login'
import register from './Components/register'
import VerifyAccount from './Components/register'
import Forgot from './Components/forgot'
import Resetpassword from './Components/resetpassword'
import Marketplace from './Components/marketplace'
import userProfile from './Components/userprofile'
import home from "./Components/Home";
import marketplacedetail from "./Components/marketplacedetail";
import Store from "./Components/store";
import Wishlist from "./Components/wishlist";
import limitedEdition from "./Components/limited_edition";
import ourWorld from "./Components/our_world";
import howItWorks from "./Components/how_it_works";
import myNft from "./Components/mynft";
import transactions from "./Components/transactions";
import viewNfttransaction from './Components/view_nft_transaction_details'
import helpcenter from "./Components/help_center";
import contactus from "./Components/contact_us";
import privacypolicy from "./Components/privacy_policy";
import termsandcondition from "./Components/terms_and_condition";
import aboutus from "./Components/about_us";

// import cart from './components/cart'
// import marketplace from './components/marketplace'
// import userprofile from './userprofile'
// import home from './home'
// import whishlist from './components/whishlist'
// import transaction from './components/transaction'

function App() {
  return (
    <BrowserRouter>
     
        <Switch>
          <Route path={`${config.baseUrl}`} exact component={home} />
          <Route path={`${config.baseUrl}marketplace`} exact component={Marketplace} />
          <Route path={`${config.baseUrl}nftDetail/:id`} exact component={marketplacedetail} />
          <Route path={`${config.baseUrl}login`} exact component={login} />
          <Route path={`${config.baseUrl}register`} exact component={register} />
          <Route path={`${config.baseUrl}userprofile`} exact component={userProfile} />
          <Route path={`${config.baseUrl}forgot`} component={Forgot} /> 
          <Route path={`${config.baseUrl}verifyAccount/:token`}  component={VerifyAccount} />
          <Route path={`${config.baseUrl}resetpassword/:token`}  component={Resetpassword} />
          <Route path={`${config.baseUrl}store`}  component={Store} />
          <Route path={`${config.baseUrl}wishlist`}  component={Wishlist} />
          <Route path={`${config.baseUrl}limitedEdition`}  component={limitedEdition} />
          <Route path={`${config.baseUrl}ourWorld`}  component={ourWorld} />
          <Route path={`${config.baseUrl}howItWorks`}  component={howItWorks} />
          <Route path={`${config.baseUrl}myNft`}  component={myNft} />
          <Route path={`${config.baseUrl}transactions`}  component={transactions} />
          <Route path={`${config.baseUrl}viewNfttransaction/:id`} exact component={viewNfttransaction} />
          <Route path={`${config.baseUrl}helpcenter`}  component={helpcenter} />
          <Route path={`${config.baseUrl}contactus`}  component={contactus} />
          <Route path={`${config.baseUrl}privacypolicy`}  component={privacypolicy} />
          <Route path={`${config.baseUrl}termsandcondition`}  component={termsandcondition} />
          <Route path={`${config.baseUrl}aboutus`}  component={aboutus} />


          {/* <Route path={`${config.baseUrl}home`} exact component={home} /> */}
          {/* <Route path={`${config.baseUrl}cart`} exact component={cart} /> */}
          {/* <Route path={`${config.baseUrl}marketplace`} exact component={marketplace} /> */}
          {/* <Route path={`${config.baseUrl}userprofile`} exact component={userprofile} /> */}
          {/* <Route path={`${config.baseUrl}whishlist`} exact component={whishlist} /> */}
          {/* <Route path={`${config.baseUrl}transaction`} exact component={transaction} /> */}         

        </Switch>
      
    </BrowserRouter>
  );
}

export default App;
