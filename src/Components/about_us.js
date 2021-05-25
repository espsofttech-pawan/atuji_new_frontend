import React, { Component } from 'react';
 import axios from 'axios';
 import config from '../config/config'
import Header from '../directives/header'
import Footer from '../directives/footer'
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // for local server
//  const TEST_SITE_KEY = "6LcbmakaAAAAAD7pW2H9OZVULdhO2M_G8YutYckO"   // for live server


const headers = {
    'Content-Type': 'application/json'
 };

export default class aboutus extends Component {

    constructor(props) {
        super(props);
         this.state={
            email: '',
            name: '',
            subject : '',
            comments : '',
        };
         
        this.loginData = (!Cookies.get('loginSuccess')) ? [] : JSON.parse(Cookies.get('loginSuccess'));
    }
  

    handleChange = e =>{
       
        this.setState({
            [e.target.name] : e.target.value
         });
     }
     
     componentDidMount() {
        
    
   }



   
  

    render() {
      
        return (    

            <>
            <div className="body_bg">
              <Header/>
              <ToastContainer/>
              {/* <ReCAPTCHA/> */}
              <section className="product_section pt-5">
          <img src="img/banner.gif" className="gif-banner"/>

          <div className="container">
            <div className="row  ">
              {/* <!-- <h2>All Products</h2> --> */}
             

                 
                 <div className="col-sm-4 mt-5">
                   <div className="login-wrapse mt-5 py-4">
                   <div>
                   <h2>About Us</h2>
                   <br/>
   <div class="top_notice text-white mb-3">Welcome to Atujii! Atujii is a platform that allows you to buy, sell, and display Digital Collectibles. These Terms of Use are entered into by and between you and Atujii, Limited (“Atujii,” “Company,” “we,” or “us”). The following terms and conditions, together with any documents they expressly incorporate by reference, govern your access to and use of Atujii, including any content, functionality, and services offered on or through <a href="#" target="_blank" class="link">www.Atujii.com</a> (the “Site”).</div>
   <h5>1. Accepting these Terms</h5>
   <p>These Terms of Use set out your rights and responsibilities when you use Atujii to buy, sell, or display non-fungible tokens (“Digital Collectibles” or “Digital Collectible”) or create a collection of Digital Collectibles (collectively, the “Services”), so please read them carefully. Atujii is an administrative platform that facilitates transactions between a buyer and a seller but is not a party to any agreement between the buyer and seller of Digital Collectibles or between any users. By clicking on the “I Accept” button, completing the account registration process, or using the Site, you accept and agree to be bound and abide by these Terms of Use and all of the terms incorporated herein by reference. By agreeing to these terms, you hereby certify that you are at least 18 years of age. If you do not agree to these Terms of Use, you must not access or use the Site.</p>
   <p>Please note that Section 18 contains an arbitration clause and class action waiver. By agreeing to these Terms of Use, you agree to resolve all disputes through binding individual arbitration, which means that you waive any right to have the dispute decided by a judge or jury, and you waive any right to participate in collective action, whether that be a class action, class arbitration, or representative action.</p>
   <p>Atujii reserves the right to change or modify these Terms of Use at any time and in our sole discretion. You agree and understand that by logging into your account, accessing or using the Site following any change to these Terms of Use, you agree to the revised Terms of Use and all of the terms incorporated therein by reference. We encourage you to review the Terms of Use from time to time to ensure that you understand the terms and conditions that apply when you access or use the Site.</p>
   <h5>2. Your Atujii Account</h5>
   <p>You need to create an account with Atujii to use the Services. When you create an account, we will ask you for some information about yourself. We may require you, in our sole discretion, to provide additional information and/or documents. If you do not provide complete and accurate information and/or documents in response to such a request, we may refuse to provide you with the Services.</p>
   <p>Your Atujii account is subject to the following conditions:</p>
   <p><strong>• </strong>Access: you understand and agree that access to your Atujii account is limited solely to you. You agree that you will not sell, rent, lease, or grant access to your Atujii account to any person without our prior written permission.</p>
   <p><strong>• </strong>Security: you understand and agree that you are solely responsible for maintaining the security of your account and control over any user names, passwords, or any other codes that you use to access the Services. Any unauthorized access to your account by third parties could result in the loss or theft of Digital Collectibles and/or funds held in your account and any associated accounts, including your linked bank account(s) and credit card(s). You understand and agree that you will not hold us responsible for managing and maintaining the security of your account. You further understand and agree that we are not responsible (and you will not hold us responsible) for any unauthorized access to or use of your account. You are responsible for monitoring your account. If you notice any unauthorized or suspicious activity in your account, please notify us immediately.</p>
   <p><strong>• </strong>Trading Fees: by buying or selling a Digital Collectible on Atujii, you agree to pay all applicable fees and you authorize Atujii to automatically deduct fees directly from your payment. You will be provided with a breakdown of fees related to your purchase or sale of a Digital Collectible, on demand. Contact support.</p>
   <p><strong>• </strong>Your item price includes 20% VAT, 5% Platform Fee, and 1% Transaction Fee for all Primary Sales.</p>
   <p><strong>• </strong>Your item price includes a 1% Transaction Fee for all Secondary Sales.</p>
   <p><strong>• </strong>2.9% + 30¢ are credit card processing fees in case of FIAT transactions.</p>
   <p><strong>• </strong>Communication: you agree and understand that we will communicate with you via electronic means. To ensure that you receive all of our communications, you agree to keep your email address and telephone number current and notify us if there are any changes. You agree that any notices, agreements, disclosures, or other communications delivered to your email address on record is considered valid.</p>
   <p><strong>• </strong>USD Balance: certain approved users may carry a balance in U.S. Dollars to facilitate transactions on the Atujii platform. You are the owner of your balance.</p>
   <p><strong>• </strong>Unclaimed Property: if Atujii is holding funds in your account and has no record of your use of the Service for several years, we may be required, upon passage of applicable time periods, to report these funds as unclaimed property in accordance with the abandoned property and escheat laws. If this occurs, we will use reasonable efforts to give you written notice. If you fail to respond within seven business days or as required by law, we may be required to deliver any such funds to the applicable state or jurisdiction as unclaimed property. We reserve the right to deduct a dormancy fee or administrative fee from such unclaimed funds, as permitted by applicable law.</p>
   <p><strong>• </strong>Refunds: Since transactions on the blockchain are irreversible, we cannot provide refunds. We have no ability to cancel, revert, or modify any transactions on the Ethereum network.</p>
   <h5>3. Account Suspension</h5>
   <p>You agree that Atujii has the right to immediately suspend your account, pause or cancel your access to the Services, or close your account if we suspect, in our sole discretion, that (1) your account is being used for money laundering or any illegal activity; (2) you have concealed or provided false identification information or other details; (3) you have engaged in fraudulent activity; or (4) you have engaged in transactions in violation of these Terms of Use.</p>
   <h5>4. Refund Policy</h5>
   <p>Atujii cannot provide refunds for purchases made between two parties (ie ‘Trading’).</p>
   <p>Auction items are also exempt from refund so please be certain you definitely want the item before placing a bid.</p>
   <p>You will not be eligible for refunds for items for which you have violated the terms of service. In addition, you may not be eligible for refunds if Atujii determines that you are abusing the refund policy, for instance if you have made multiple refund requests.</p>
   <h5>5. Communication</h5>
   <p>You agree that we may send you promotional communications by email, including, but not limited to, newsletters, special offers, surveys, and other news and information we think will be of interest to you.</p>
   <p>You agree that we may send you communications by email or text message that pertain to the status of a purchase or sale of a Digital Collectible on Atujii, and other communications that pertain to your interaction with the website, including but not limited to notifications about the status of a Digital Collectible you are interested in purchasing. </p>
   <p>You may opt out of promotional communications at any time by following the instructions provided therein.</p>
   <h5>6. User Content</h5>
   <p>The Site allows (1) users to create a profile where they can post certain information about themselves, link to other websites, and display Digital Collectibles that they own (collectively, “Profile Information”); and (2) artists or creators of Digital Collectibles (“Digital Collectible Creators”) to post their Digital Collectibles (“Digital Collectible Creations”), and bios (collectively, with Profile Information, “User Content”). All User Content must comply with these Terms of Use.</p>
   <p>Any Profile Information you post to the Site will be considered non-confidential and non-proprietary. By providing any User Content on the Website, you grant us and our affiliates and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, retransmit, publish, broadcast, and otherwise disclose to third parties any such material for any purpose. You represent and warrant that (1) you own and control all rights in and to your User Content and have the right to grant such licenses to us and our affiliates and our respective licensees, successors, and assigns; and (2) all of your User Content do and will comply with these Terms of Use.</p>
   <p>You understand and agree that you are responsible for any User Content you submit or contribute, and you, not Atujii, have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness. We are not responsible or liable to any third party for the content, accuracy, or appropriateness of any User Content posted by you or any other user on the Site.</p>
   <p>If you are a Digital Collectible Creator, you hereby grant Atujii the right to use your name and image for marketing or promotional purposes. If you are a Digital Collectible Creator, you agree that we may use or modify images from the Digital Collectibles that you create for marketing or promotional purposes. You also agree that we can use your biography and other public information about you to promote the Digital Collectibles that you create. </p>
   <p>As a Digital Collectible Creator, you understand and agree that:</p>
   <p><strong>• </strong>You are responsible for the accuracy and content of your Digital Collectible Creations;</p>
   <p><strong>• </strong>Any Digital Collectible Creation that violates any of Atujii’s policies may be obfuscated or deleted by Atujii, in its sole discretion;</p>
   <p><strong>• </strong>You will respect the intellectual property of others; and</p>
   <p><strong>• </strong>You will not coordinate pricing with other Digital Collectible Creators.</p>
   <p>We reserve the right, in our sole discretion, to prohibit you from uploading your Digital Collectible Creations. Although we are not required to monitor any User Content, we may, in our sole discretion, remove User Content at any time and for any reason without notice. Atujii may monitor User Content to detect and prevent fraudulent activity or violation of these Terms of Use.</p>
   <h5>7. Ownership</h5>
   <p>Unless otherwise indicated in writing by us, the Site, all content, and all other materials contained therein, including, without limitation, the Atujii logo, and all designs, text, graphics, pictures, information, data, software, sound files, other files, and the selection and arrangement thereof (collectively, “Atujii Content”) are the proprietary property of Atujii or our affiliates, licensors, or users, as applicable. The Atujii logo and any Atujii product or service names, logos, or slogans that may appear on the Site or elsewhere are trademarks of Atujii or our affiliates, and may not be copied, imitated or used, in whole or in part, without our prior written permission. </p>
   <p>You may not use any Atujii Content to link to the Site or Content without our express written permission. You may not use framing techniques to enclose any Atujii Content without our express written consent. In addition, the look and feel of the Site and Content, including without limitation, all page headers, custom graphics, button icons, and scripts constitute the service mark, trademark, or trade dress of Atujii and may not be copied, imitated, or used, in whole or in part, without our prior written permission.</p>
   <p>Notwithstanding anything to the contrary herein, you understand and agree that you shall have no ownership or other property interest in your account, and you further agree that all rights in and to your account are and shall forever be owned by and inure to the benefit of Atujii.</p>
   <h5>8. Intellectual Property</h5>
   <p>Outside the Atujii Content, all other trademarks, product names, and logos on the Site are the property of their respective owners and may not be copied, imitated, or used, in whole or in part, without the permission of the applicable trademark holder. Without limiting the foregoing, if you believe that third-party material hosted by Atujii infringes your copyright or trademark rights, please file a notice of infringement by contacting Atujii at <a href="#" class="link">info@Atujii.com</a> with the subject line ‘COPYRIGHT INFRINGEMENT’</p>
   <p>In such event, please provide Atujii with the following information: (1) an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest; (2) a description of the copyrighted work that you claim has been infringed; (3) a description of the location on Site of the material that you claim is infringing; (4) your address, telephone number and e-mail address; (5) a written statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; and (6) a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.</p>
   <p>Atujii’s policy is to suspend or terminate the account of repeat infringers. Atujii’s response may depend on relevant aggravating or mitigating circumstances, but generally we will terminate an account if it is the subject of three valid infringement notices.</p>
   <h5>9. Your Use of Atujii</h5>
   <p>We hereby grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Site and Content. Our grant of such license is subject to the following conditions:</p>
   <p><strong>• </strong>Unlawful Activity: you agree not to engage, or assist, in any activity that violates any law, statute, ordinance, regulation, or sanctions program, including but not limited to the U.S. Department of Treasury’s Office of Foreign Assets Control (“OFAC”), or that involves proceeds of any unlawful activity.</p>
   <p><strong>• </strong>Abusive Activity: you agree not to engage in any activity that poses a threat to Atujii, for example by distributing a virus or other harmful code, or through unauthorized access to the Site or other users’ accounts.  </p>
   <p><strong>• </strong>Inappropriate Behavior: you agree not to interfere with other users’ access to or use of the Services.</p>
   <p><strong>• </strong>Communication: you agree not to communicate with other users for purposes of (1) sending unsolicited advertising or promotions, requests for donations, or spam; (2) harassing or abusing other users; (3) interfering with transactions of other users. You agree not to use data collected from the Site to contact individuals, companies, or other persons or entities outside the Site for any purpose, including but not limited to marketing activity.</p>
   <p><strong>• </strong>Fraud: you agree not to engage in any activity which operates to defraud Atujii, others users, or any other person; or to provide any false, inaccurate, or misleading information to Atujii.</p>
   <p><strong>• </strong>Gambling: you agree not to utilize the Services to engage in any lottery, bidding fee auctions, contests, sweepstakes, or other games of chance.</p>
   <p><strong>• </strong>Taxes: you agree that you are solely responsible for determining what, if any, taxes apply to your Digital Collectible transactions. Neither Atujii nor any other Atujii Party is responsible for determining the taxes that apply to your Digital Collectible transactions.</p>
   <p><strong>• </strong>Intellectual Property Infringement: you agree not to (1) engage in transactions involving items that infringe or violate any copyright, trademark, right of publicity or privacy or any other proprietary right under the law; (2) use Atujii Content (as defined in Section 7 above) without express written consent from Atujii; or (3) engage in any action that implies an untrue endorsement or affiliation with Atujii. </p>
   <p><strong>• </strong>Hyperlinks: you are hereby granted a limited, non-exclusive, non-transferable, revocable license to create a text hyperlink to the Site for noncommercial purposes, provided that such link does not portray Atujii, our affiliates, or the Services in a false, misleading, derogatory, or otherwise defamatory manner, and provided further that the linking site does not contain any adult or illegal materials, or other materials that is offensive, harassing, or otherwise objectionable.</p>
   <p><strong>• </strong>Additional Prohibitions: you agree not to (1) distribute, publish, broadcast, reproduce, copy, retransmit, or publicly display any Content; (2) modify or create derivative works from the Site or Content, or any portion thereof; (3) use any data mining, robots, or similar data gathering or extraction methods on the Site or Content; (4) download any portion of the Site or Content, other than for purposes of page caching, except as expressly permitted by us. </p>
   <p>If you are unsure whether a contemplated use would violate these Terms of Use, please contact us at the address listed below under Contact Information.</p>
   <h5>10. Privacy</h5>
   <p>You acknowledge and agree to the collection, use, and disclosure of your personal information in accordance with <a href="#" target="_blank" class="link">Atujii’s Privacy Policy</a>, which is incorporated into this User Agreement by reference.</p>
   <h5>11. Modifications</h5>
   <p>You agree and understand that we may modify part or all of Atujii or the Services without notice.</p>
   <h5>12. Risks</h5>
   <p>Please note the following risks in accessing or using Atujii:</p>
   <p><strong>• </strong>The price and liquidity of blockchain assets, including Digital Collectibles, are extremely volatile and may be subject to large fluctuations;</p>
   <p><strong>• </strong>Fluctuations in the price of other digital assets could materially and adversely affect Digital Collectibles, which may also be subject to significant price volatility;</p>
   <p><strong>• </strong>Legislative and regulatory changes or actions at the state, federal, or international level may adversely affect the use, transfer, exchange, and value of Digital Collectibles;</p>
   <p><strong>• </strong>Digital Collectibles are not legal tender and are not backed by the government; </p>
   <p><strong>• </strong>Transactions in Digital Collectibles may be irreversible, and, accordingly, losses due to fraudulent or accidental transactions may not be recoverable;</p>
   <p><strong>• </strong>Some transactions in Digital Collectibles shall be deemed to be made when recorded on a public ledger, which is not necessarily the date or time that you initiated the transaction;</p>
   <p>The value of Digital Collectibles may be derived from the continued willingness of market participants to exchange fiat currency or digital assets for Digital Collectibles, which may result in the potential for permanent and total loss of value of a particular Digital Collectible should the market for that Digital Collectible disappear; </p>
   <p><strong>• </strong> The nature of Digital Collectibles may lead to an increased risk of fraud or cyber attack, and may mean that technological difficulties experienced by Gemini may prevent the access to or use of your Digital Assets; </p>
   <p><strong>• </strong>Changes to Third Party Sites (discussed in Section 12 below) may create a risk that your access to and use of the Site will suffer.</p>
   <p>You agree and understand that you are solely responsible for determining the nature, potential value, suitability, and appropriateness of these risks for yourself, and that Atujii does not give advice or recommendations regarding Digital Collectibles, including the suitability and appropriateness of, and investment strategies for, Digital Collectibles. <strong><i>You agree and understand that you access and use Atujii at your own risk</i></strong>; however, this brief statement does not disclose all of the risks associated with Digital Collectibles and other digital assets. You agree and understand that Atujii will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using Digital Collectibles, however caused.</p>
   <h5>13. Third Parties</h5>
   <p>Atujii may rely on third-party platforms to perform Digital Collectible transactions. Our Site may contain links to third-party websites or applications (collectively, “Third Party Sites”). Atujii does not own or control Third Party Sites. You understand and agree that your use of any Third Party Site is subject to any terms of use and/or privacy policy provided by such Third Party Site. Atujii is not a party to any such agreement. You should review any terms of use and/or privacy policy provided by such Third Party Site and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party. </p>
   <p>Atujii provides these Third Party Sites only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third Party Sites, or their products or services. You use all links in Third Party Sites at your own risk. When you leave our Site, our Agreement and policies no longer govern. We may, but are not obligated to, warn you that you are leaving our Site. </p>
   <h5>14. Disclaimers</h5>
   <p>EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY Atujii, THE SITE, CONTENT CONTAINED THEREIN, AND DIGITAL COLLECTIBLES LISTED THEREIN ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED. Atujii (AND ITS SUPPLIERS) MAKE NO WARRANTY THAT THE SITE WILL (1) MEET YOUR REQUIREMENTS; (2) BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (3) BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.</p>
   <p>WE WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE SITE. Atujii DOES NOT REPRESENT OR WARRANT THAT CONTENT ON THE SITE IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE. </p>
   <p>WHILE Atujii ATTEMPTS TO MAKE YOUR ACCESS TO AND USE OF THE SITE AND CONTENT SAFE, Atujii CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE SITE, CONTENT, ANY DIGITAL COLLECTIBLES LISTED ON OUR SITE OR OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.</p>
   <p>WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKE NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE OF DIGITAL COLLECTIBLES INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (1) USER ERROR SUCH AS FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED ADDRESSES; (2) SERVER FAILURE OR DATA LOSS; (3) CORRUPTED WALLET FILES; (4) UNAUTHORIZED ACCESS TO APPLICATIONS; (5) ANY UNAUTHORIZED THIRD PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE SITE OR DIGITAL COLLECTIBLES.</p>
   <p>DIGITAL COLLECTIBLES ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE ETHEREUM NETWORK. ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE ETHEREUM PLATFORM. WE DO NOT GUARANTEE THAT Atujii OR ANY Atujii PARTY CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN ANY DIGITAL COLLECTIBLES.</p>
   <p>Atujii is not responsible for sustained losses due to vulnerability or any kind of failure, abnormal behavior of software (e.g., wallet, smart contract), blockchains, or any other features of Digital Collectibles. Atujii is not responsible for sustained losses due to late reports by developers or representatives (or no report at all) of any issues with the blockchain supporting Digital Collectibles including forks, technical node issues or any other issues having fund losses as a result.</p>
   <p>Nothing in this Agreement shall exclude or limit liability of either party for fraud, death or bodily injury caused by negligence, violation of laws, or any other activity that cannot be limited or excluded by legitimate means.</p>
   <p>TO THE FULLEST EXTENT PROVIDED BY LAW, Atujii HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT AS TO THE SITE AND CONTENT CONTAINED THEREIN. </p>
   <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW. </p>
   <h5>15. Limitation of Liability</h5>
   <p>TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL Atujii BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM THIS AGREEMENT, THE SITE, PRODUCTS OR THIRD PARTY SITES AND PRODUCTS, OR FOR ANY DAMAGES RELATED TO LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF Atujii HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITES, PRODUCTS OR THIRD PARTY SITES AND PRODUCTS ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM.</p>
   <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL THE MAXIMUM AGGREGATE LIABILITY OF Atujii ARISING OUT OF OR IN ANY WAY RELATED TO THIS AGREEMENT, THE ACCESS TO AND USE OF THE SITE, CONTENT, DIGITAL COLLECTIBLES, OR ANY PRODUCTS OR SERVICES PURCHASED ON THE SITE EXCEED THE GREATER OF (A) $100 OR (B) THE AMOUNT YOU HAVE PAID TO Atujii FOR THE SERVICES IN THE LAST SIX MONTHS OUT OF WHICH LIABILITY AROSE. THE FOREGOING LIMITATIONS OF LIABILITY SHALL NOT APPLY TO LIABILITY OF Atujii FOR (A) DEATH OR PERSONAL INJURY CAUSED BY A MEMBER OF Atujii’S NEGLIGENCE; OR FOR (B) ANY INJURY CAUSED BY A MEMBER OF Atujii’S FRAUD OR FRAUDULENT MISREPRESENTATION.</p>
   <p>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you. Some jurisdictions also limit disclaimers or limitations of liability for personal injury from consumer products, so this limitation may not apply to personal injury claims.</p>
   <h5>16. Indemnification</h5>
   <p>To the fullest extent permitted by applicable law, you agree to indemnify, defend and hold harmless Atujii, and our respective past, present and future employees, officers, directors, contractors, consultants, equity holders, suppliers, vendors, service providers, parent companies, subsidiaries, affiliates, agents, representatives, predecessors, successors and assigns (individually and collectively, the “Atujii Parties”), from and against all actual or alleged third party claims, damages, awards, judgments, losses, liabilities, obligations, penalties, interest, fees, expenses (including, without limitation, attorneys’ fees and expenses) and costs (including, without limitation, court costs, costs of settlement and costs of pursuing indemnification and insurance), of every kind and nature whatsoever, whether known or unknown, foreseen or unforeseen, matured or unmatured, or suspected or unsuspected, in law or equity, whether in tort, contract or otherwise (collectively, “Claims”), including, but not limited to, damages to property or personal injury, that are caused by, arise out of or are related to (a) your use or misuse of the Site, Content or Digital Collectibles, (b) any Feedback you provide, (c) your violation of these Terms of Use, and (d) your violation of the rights of a third party, including another user. You agree to promptly notify Atujii of any third party Claims and cooperate with the Atujii Parties in defending such Claims. You further agree that the Atujii Parties shall have control of the defense or settlement of any third party Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF, ANY OTHER INDEMNITIES SET FORTH IN A WRITTEN AGREEMENT BETWEEN YOU AND Atujii.</p>
   <h5>17. Governing Law</h5>
   <p>These Terms of Use, your use of Atujii, your rights and obligations, and all actions contemplated by, arising out of or related to these Terms of Use shall be governed by the laws of the United Kingdom, as if these Terms of Use are a contract wholly entered into and wholly performed within the United Kingdom. YOU UNDERSTAND AND AGREE THAT YOUR USE OF Atujii AS CONTEMPLATED BY THESE TERMS OF USE SHALL BE DEEMED TO HAVE OCCURRED IN THE UNITED KINGDOM AND BE SUBJECT TO THE INTERNAL LAWS OF THAT COUNTRY WITHOUT REGARD TO ITS CONFLICTS OF LAWS PROVISIONS.</p>
   <h5>18. Disputes</h5>
   <p>Please read the following agreement to arbitrate (“Arbitration Agreement”) in its entirety. This clause requires you to arbitrate disputes with Atujii and limits the manner in which you can seek relief from us. </p>
   <p>You agree that any dispute or claim relating in any way to: your access, use, or attempted access or use of the Site; any products sold or distributed through the Site; or any aspect of your relationship with Atujii will be resolved by binding arbitration, except that (1) you may assert claims in small claims court if your claims qualify; and (2) you or Atujii may seek equitable relief in court for infringement or other misuse of intellectual property rights (such as trademarks, trade dress, domain names, trade secrets, copyright, or patent). You agree that any such arbitration shall be settled solely and exclusively by binding arbitration held in the United Kingdom and conducted in English, rather than in court.</p>
   <p>The arbitrator shall have exclusive authority to (1) determine the scope and enforceability of this Arbitration Agreement; and (2) resolve any dispute related to the interpretation, applicability, enforceability or formation of this Arbitration Agreement, including but not limited to any claim that all or part of this Arbitration Agreement is void or voidable; (3) decide the rights and liabilities, if any, of you and Atujii; (4) grant motions dispositive of all or part of any claim; (5) award monetary damages and grant any non-monetary remedy or relief available to a party under applicable law, arbitration rules, and these Terms of Use (including the Arbitration Agreement). The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based, including the calculation of any damages awarded. Such an award is final and binding upon you and us.</p>
   <p>You understand that by agreeing to this Arbitration Agreement, you and Atujii are each waiving their right to trial by jury and to participate in a class action or class arbitration.</p>
   <p>If any part of this Arbitration Agreement is found to be invalid or unenforceable, then such part shall be of no force and effect and shall be severed and the remainder of the Arbitration Agreement shall continue to in full force and effect. </p>
   <p>This Arbitration Agreement shall survive the termination of your relationship with Atujii. </p>
   <h5>19. Termination</h5>
   <p>We reserve the right, without notice and in our sole discretion, to terminate your license to access or use the Site or Content, at any time and for any reason. You understand and agree that we shall have no liability or obligation to you in such an event.</p>
   <h5>20. Severability</h5>
   <p>If any term, clause, or provision of these Terms of Use is held invalid or unenforceable, then that term, clause, or provision shall be severable from these Terms of Use and will not affect the validity or enforceability of any remaining part of that term, cause, or provision, or any other terms, clause, or provision of these Terms of Use.</p>
   <h5>21. Entire Agreement</h5>
   <p>These Terms of Use comprise the entire agreement between you and Atujii relating to your access to and use of the Site and Content, and supersede any and all prior discussions agreements, and understandings of any kind (including without limitation prior versions of this User Agreement). Except as otherwise provided herein, these Terms of Use are intended solely for the benefit of the parties and are not intended to confer third party beneficiary rights upon any other person or entity.</p>
   <h5>22. Survival</h5>
   <p>You agree and understand that all provisions of these Terms of Use shall survive the termination or expiration of these Terms of Use.</p>
   <h5>23. Contact Information</h5>
   <p>If you have any questions, would like to provide feedback, or would like more information about Atujii, please feel free to email us at <a href="#" class="link">info@Atujii.com</a>. If you would like to lodge a complaint, please contact us at <a href="#" class="link">help@Atujii.com</a> or write to us at:</p>
   <p>Atujii <br/>Kemp House,<br/>160 City Road,<br/>London EC1V 2NX,<br/>United Kingdom</p>
</div>
                   </div>
                 </div>
                 
                
                
               </div>
              
            </div>
            
          {/* </div> */}




         </section>
              <Footer/>


          </div>

            </>
        )
    }

        }