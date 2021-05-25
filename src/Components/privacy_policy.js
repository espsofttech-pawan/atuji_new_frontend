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

export default class privacypolicy extends Component {

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
   <h2 class="main-title">Privacy Policy</h2>
   <br/>
   <h5>WELCOME TO Atujii </h5>
   
   <p>Atujii provides a social digital goods platform via the Atujii website (the “Site”), the Atujii application (the “App”) and related Internet services (collectively, the “Service(s)”). The Service is operated by Atujii (the “Company”, “we” or “us”) for users of the Service (“you”). This Privacy Policy sets forth our policy with respect to information that is collected from visitors to the Site and users of the App and/or the Services. Under applicable law, Atujii Inc. is the “data controller” of personal data collected through the Services.</p>
   <h5>INFORMATION WE COLLECT</h5>
   <p>When you interact with us through the Services, we may collect information from you, as further described below:</p>
   <p>Information You Provide: We collect information from you when you voluntarily provide such information, such as when you register for access to the Services or use certain Services. Information we collect may include but not be limited to username, email address, and any messages, images, transient VOIP data (to enable communication delivery only) or other content you send via the chat feature.</p>
   <h5>OTHER INFORMATION:</h5>
   <p><strong>• Data We Collect Automatically:</strong> When you interact with us through the Services, we receive and store certain information such as an IP address, device ID, and your activities within the Services. We may store such information or such information may be included in databases owned and maintained by affiliates, agents or service providers. The Services may use such information and pool it with other information to track, for example, the total number of visitors to our Site, the number of messages users have sent, as well as the sites which refer visitors to Atujii.</p>
   <p><strong>• Aggregated Information:</strong> In an ongoing effort to better understand and serve the users of the Services, we may conduct research on our customer demographics, interests and behavior based on the information collected. This research may be compiled and analyzed on an aggregate basis, and we may share this aggregate data with our affiliates, agents and business partners. We may also disclose aggregated user statistics in order to describe our services to current and prospective business partners, and to other third parties for other lawful purposes.</p>
   <p><strong>• Info through other Services:</strong> You may give us permission to collect your information in other services. For example, you may connect a social networking service ("SNS") such as Facebook or Twitter to your Atujii account. When you do this, it allows us to obtain information from those accounts (for example, your friends or contacts).</p>
   <p><strong>• Cookies:</strong> We employ cookies and similar technologies to keep track of your local computer’s settings such as which account you have logged into and notification settings. Cookies are pieces of data that sites and services can set on your browser or device that can be read on future visits. We may expand our use of cookies to save additional data as new features are added to the Service. In addition, we use technologies such as web beacons and single-pixel gifs to record log data such as open rates for emails sent by the system.</p>
   <p>We may use third party web site analytic tools such as Google Analytics on our website that employ cookies to collect certain information concerning your use of our Services. However, you can disable cookies by changing your browser settings. Further information about the procedure to follow in order to disable cookies can be found on your Internet browser provider's website via your help screen.</p>
   <p><strong>• Advertisements:</strong> You may see our Service advertised in other applications or websites. After clicking on one of these advertisements and installing our Service, you will become a user of the Service. Advertising platforms, which include Twitter and Facebook (and whose SDKs are integrated within our Service), may collect information for optimizing advertising campaigns outside of the Service.</p>
   <p>If you do not wish to receive personalized advertising that is delivered by third parties outside of the Atujii Service, you may be able to exercise that choice through opt-out programs that are administered by third parties, including the Network Advertising Initiative (NAI), the Digital Advertising Alliance (DAA). Our Services currently do not respond to “Do Not Track” (DNT) signals and operate as described in this Privacy Policy whether or not a DNT signal is received, as there is no consistent industry standard for compliance.</p>
   <h5>WHERE INFORMATION IS PROCESSED</h5>
   <p>The Company is based in the United Kingdom. No matter where you are located, you consent to the processing and transferring of your information in and to the UK and other countries. The laws of the UK and other countries governing data collection and use may not be as comprehensive or protective as the laws of the country where you live.</p>
   <h5>OUR USE OF YOUR INFORMATION</h5>
   <p>We use the information you provide in a manner that is consistent with this Privacy Policy. If you provide information for a certain reason, we may use the information in connection with the reason for which it was provided. For instance, if you contact us by email, we will use the information you provide to answer your question or resolve your problem. Also, if you provide information in order to obtain access to the Services, we will use your information to provide you with access to such services and to monitor your use of such services. The Company and its subsidiaries and affiliates (the “Related Companies”) may also use your information collected through the Services to help us improve the content and functionality of the Services, to better understand our users and to improve the Services. The Company and its affiliates may use this information to contact you in the future to tell you about services we believe will be of interest to you. If we do so, each marketing communication we send you will contain instructions permitting you to "opt-out" of receiving future marketing communications. In addition, if at any time you wish not to receive any future marketing communications or you wish to have your name deleted from our mailing lists, please contact us as indicated below.</p>
   <h5>OUR DISCLOSURE OF YOUR INFORMATION</h5>
   <p>The Company is not in the business of selling your information. We consider this information to be a vital part of our relationship with you. There are, however, certain circumstances in which we may share your information with certain third parties, as set forth below:</p>
   <p><strong>• Business Transfers:</strong> As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, bankruptcy, dissolution or similar event, your information may be part of the transferred assets.</p>
   <p><strong>• Consent:</strong> We may transfer your information with your consent.</p>
   <p><strong>• Related Companies:</strong> We may also share your information with our Related Companies for purposes consistent with this Privacy Policy.</p>
   <p><strong>• Developers:</strong> Developers using our SDK or API will have access to their end users’ information, including message content, message metadata, and voice metadata. Developers must use such information only to provide the SDK/API functionality within their applications and/or services.</p>
   <p><strong>• Agents, Consultants and Related Third Parties:</strong> Like many businesses, we sometimes hire other companies or individuals to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases and processing payments.</p>
   <p><strong>• Legal Requirements:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend the rights or property of the Company or Related Companies, (iii) protect the personal safety of users of the Services or the public, or (iv) protect against legal liability.</p>
   <p><strong>• Aggregated or Non-identifiable Data:</strong> We may also share aggregated or non-personally identifiable information with our partners or others for business purposes.</p>
   <h5>UNSOLICITED INFORMATION</h5>
   <p>You may provide us with ideas for new products or modifications to existing products, and other unsolicited submissions (collectively, “Unsolicited Information”). All Unsolicited Information shall be deemed to be non-confidential and we shall be free to reproduce, use, disclose, and distribute such Unsolicited Information to others without limitation or attribution.</p>
   <h5>CHILDREN</h5>
   <p>Our Services are for users age 13 and over and we do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian of a child under the age of 13 and believe he or she has disclosed personal information to us please contact us at <a href="#" class="link">privacy@Atujii.com</a>. For residents of the EEA, where processing of personal information is based on consent, Atujii will not knowingly engage in that processing for users under the age of consent established by applicable data protection law. If we learn that we are engaged in that processing with such users, we will halt such processing and will take reasonable measures to promptly remove applicable information from our records.</p>
   <h5>LINKS TO OTHER WEB SITES</h5>
   <p>This Privacy Policy applies only to the Services. The Services may contain links to other web sites not operated or controlled by us (the “Third Party Sites”). The policies and procedures we described here do not apply to the Third Party Sites. The links from the Services do not imply that we endorse or have reviewed the Third Party Sites. We suggest contacting those sites directly for information on their privacy policies.</p>
   <h5>DATA RETENTION</h5>
   <p>We generally retain personal data for so long as it may be relevant to the purposes identified herein. To dispose of personal data, we may anonymize it, delete it or take other appropriate steps. Data may persist in copies made for backup and business continuity purposes for additional time.</p>
   <h5>SECURITY</h5>
   <p>We take reasonable steps to protect the information provided via the Services from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from the Services may not be secure. Therefore, you should take special care in deciding what information you send to us via email. Please keep this in mind when disclosing any information via the Internet.</p>
   <h5>YOUR DATA RIGHTS AND CHOICES</h5>
   <p>We believe that users should be treated equally no matter where they are, and so we are making the following options to control your data available to all users, regardless of their location.</p>
   <p>You can update certain information by accessing your profile via “Settings.” You can also unsubscribe from certain emails by clicking the “unsubscribe” link they contain. You can opt out from certain cookie- related processing by following the instructions above in “Other Information.”</p>
   <p>Individuals in the European Economic Area, Canada, Costa Rica and some other jurisdictions outside the United States have certain legal rights to obtain confirmation of whether we hold personal data about them, to access personal data we hold about them (including, in some cases, in portable form), and to obtain its correction, update, amendment or deletion in appropriate circumstances. They may also object to our uses or disclosures of personal data, to request a restriction on its processing, or withdraw any consent, though such actions typically will not have retroactive effect. They also will not affect our ability to continue processing data in lawful ways.</p>
   <p><strong>• How can I access the personal data you have about me?</strong></p>
   <p>If you would like to submit a data access request, you can do so from the “Settings” page of the Services, where there is a button to download your data. We will then start the process and provide you a link to access the personal data that Atujii has on you within 30 days.</p>
   <p><strong>• How do I correct, update, amend, or delete the personal data you have about me?</strong></p>
   <p>In addition to the functionality available through the “Settings” of the Services, in which you can correct, update, amend, or delete certain personal data, you can also request other modifications from us directly. Please write us at <a href="#" class="link">privacy@atujii.com</a> with the words “Personal Data Request” in the subject or body of your message, along with an explanation of what data subject right you are seeking to exercise. For your protection, we may take steps to verify identity before responding to your request.</p>
   <p><strong>• How do I object or restrict the manner in which Atujii processes my personal data?</strong></p>
   <p>You have a right to ask us to stop using or limit our use of your personal data in certain circumstances—for example, if we have no lawful basis to keep using your data, or if you think your personal data is inaccurate.</p>
   <p>Atujii offers you the ability to restrict the processing of your data for specific uses, which you can find in the “Settings” page of the services. Individuals in the European Economic Area have the right to opt out of all of our processing of their personal data for direct marketing purposes. To exercise this right, please see the “Settings” page for your Account. You may also click the “unsubscribe” link in any of our marketing emails.</p>
   <p>The rights and options described above are subject to limitations and exceptions under applicable law. In addition to those rights, you have the right to lodge a complaint with the relevant supervisory authority. However, we encourage you to contact us first, and we will do our very best to resolve your concern.</p>
   <h5>EU-U.S. PRIVACY SHIELD AND SWISS-U.S. PRIVACY SHIELD</h5>
   <p>Atujii complies with the EU-U.S. Privacy Shield Framework and the Swiss – U.S. Privacy Shield Framework as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union and Switzerland to the United States, respectively. Atujii Limited has certified to the Department of Commerce that it adheres to the Privacy Shield Principles. If there is any conflict between the terms in this privacy policy and the Privacy Shield Principles, the Privacy Shield Principles shall govern. To learn more about the Privacy Shield program, and to view our certification, please visit <a href="#" target="_blank" class="link" rel="noopener">https://www.privacyshield.gov/</a>.</p>
   <p>Atujii Limited is potentially liable for onward transfers to third parties of personal data of EU or Swiss individuals received pursuant to Privacy Shield. Atujii Limited is subject to oversight by the U.S. FTC. JAMS is the US-based alternative dispute resolution provider responsible for reviewing and resolving complaints about Atujii Limited’s Privacy Shield compliance. We ask that you first submit any complaints to us at <a href="#" class="link">privacy@Atujii.com</a>. If you aren't satisfied with our response, you can then contact JAMS at <a href="#" target="_blank" class="link" rel="noopener">https://www.jamsadr.com/eu-us-privacy-shield</a>. In the event your concern still isn't addressed by JAMS, you may be entitled to a binding arbitration under Privacy Shield and its principles.</p>
   <h5 style={{fontSize: '12px'}}>December 02, 2020 Updates</h5>
   <h5>Interpretation and Definitions</h5>
   <h5>Interpretation</h5>
   <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
   <h5>Definitions</h5>
   <p>For the purposes of this Privacy Policy:</p>
   <p><strong>•</strong> Account means a unique account created for You to access our Service or parts of our Service.</p>
   <p><strong>•</strong> Company (referred to as either; the Company; We; Us; or Our; in this Agreement) refers to Atujii Ltd, Kemp House, 160 City Road, London, EC1V 2NX.</p>
   <p><strong>•</strong> Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>
   <p><strong>•</strong> Country refers to:  United Kingdom</p>
   <p><strong>•</strong> Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
   <p><strong>•</strong> Personal Data is any information that relates to an identified or identifiable individual.</p>
   <p><strong>•</strong> Service refers to the Website.</p>
   <p><strong>•</strong> Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>
   <p><strong>•</strong>Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service.</p>
   <p><strong>•</strong>Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
   <p><strong>•</strong>Website refers to Atujii, accessible from <a class="link" href="#" rel="external nofollow noopener" target="_blank">atujii.com</a></p>
   <p><strong>•</strong>You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
   <h5>Information from Third-Party Social Media Services</h5>
   <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
   <p><strong>•</strong> Google</p>
   <p><strong>•</strong> Facebook</p>
   <p><strong>•</strong> Twitter</p>
   <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
   <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
   <h5>Tracking Technologies and Cookies</h5>
   <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
   <h5>Cookies or Browser Cookies </h5>
   <p>A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</p>
   <h5>Flash Cookies </h5>
   <p>Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read ; <a class="link" href="#" target="_blank">Where can I change the settings for disabling, or deleting local shared objects?</a></p>
   <h5>Web Beacons </h5>
   <p>Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</p>
   <p>Cookies can be ;Persistent; or ;Session; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: <a href="#" target="_blank">What Are Cookies?</a>.</p>
   <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
   <p><strong>Necessary / Essential Cookies</strong><br/><strong>Type:</strong> Session Cookies<br/><strong>Administered by:</strong> Us<br/><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
   <p><strong>Cookies Policy / Notice Acceptance Cookies</strong><br/><strong>Type:</strong> Persistent Cookies<br/><strong>Administered by:</strong> Us<br/><strong>Purpose:</strong> These Cookies identify if users have accepted the use of cookies on the Website.</p>
   <p><strong>Functionality Cookies</strong><br/><strong>Type:</strong> Persistent Cookies<br/><strong>Administered by:</strong> Us<br/><strong>Purpose:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
   <p><strong>Tracking and Performance Cookies</strong><br/><strong>Type:</strong> Persistent Cookies<br/><strong>Administered by:</strong> Third-Parties<br/><strong>Purpose:</strong> These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new pages, features or new functionality of the Website to see how our users react to them.</p>
   <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>
   <h5>Analytics</h5>
   <p>We may use third-party Service providers to monitor and analyze the use of our Service.</p>
   <h5>Google Analytics</h5>
   <p>Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</p>
   <p>You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.</p>
   <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a class="link" href="#" target="_blank">https://atujii.com/privacy</a></p>
   <h5>Behavioral Remarketing</h5>
   <p>The Company uses remarketing services to advertise to You after You accessed or visited our Service. We and Our third-party vendors use cookies and non-cookie technologies to help Us recognize Your Device and understand how You use our Service so that We can improve our Service to reflect Your interests and serve You advertisements that are likely to be of more interest to You.</p>
   <p>These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies and to enable Us to:</p>
   <p><strong>•</strong> Measure and analyze traffic and browsing activity on Our Service</p>
   <p><strong>•</strong> Show advertisements for our products and/or services to You on third-party websites or apps</p>
   <p><strong>•</strong> Measure and analyze the performance of Our advertising campaigns</p>
   <p>Some of these third-party vendors may use non-cookie technologies that may not be impacted by browser settings that block cookies. Your browser may not permit You to block such technologies. You can use the following third-party tools to decline the collection and use of information for the purpose of serving You interest-based advertising:</p>
   <p>The NAI's opt-out platform: <a class="link" href="#" target="_blank">http://www.networkadvertising.org/choices/</a><br/>The EDAA's opt-out platform: <a class="link" href="#" target="_blank">http://www.youronlinechoices.com/</a><br/>The DAA's opt-out platform: <a class="link" href="#" target="_blank">http://optout.aboutads.info/?c=2&amp;lang=EN</a></p>
   <p>You may opt-out of all personalized advertising by enabling privacy features on Your mobile device such as Limit Ad Tracking (iOS) and Opt Out of Ads Personalization (Android). See Your mobile device Help system for more information.</p>
   <p>We may share information, such as hashed email addresses (if available) or other online identifiers collected on Our Service with these third-party vendors. This allows Our third-party vendors to recognize and deliver You ads across devices and browsers. To read more about the technologies used by these third-party vendors and their cross-device capabilities please refer to the Privacy Policy of each vendor listed below.</p>
   <h5>The third-party vendors We use are:</h5>
   <h5>Google Ads (AdWords)</h5>
   <p>Google Ads (AdWords) remarketing service is provided by Google Inc.</p>
   <p>You can opt-out of Google Analytics for Display Advertising and customise the Google Display Network ads by visiting the Google Ads Settings page: <a class="link" href="#" target="_blank">http://www.google.com/settings/ads</a></p>
   <p>Google also recommends installing the Google Analytics Opt-out Browser Add-on <a class="link" href="#" target="_blank">https://tools.google.com/dlpage/gaoptout</a> - for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics.</p>
   <p>For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a class="link" href="#" target="_blank">https://policies.google.com/privacy</a></p>
   <h5>Bing Ads Remarketing</h5>
   <p>Bing Ads remarketing service is provided by Microsoft Inc.</p>
   <p>You can opt-out of Bing Ads interest-based ads by following their instructions: <a class="link" href="#" target="_blank">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a></p>
   <p>You can learn more about the privacy practices and policies of Microsoft by visiting their Privacy Policy page: <a class="link" href="#" target="_blank">https://privacy.microsoft.com/en-us/PrivacyStatement</a></p>
   <h5>Twitter</h5>
   <p>Twitter remarketing service is provided by Twitter Inc.</p>
   <p>You can opt-out from Twitter's interest-based ads by following their instructions: <a class="link" href="#" target="_blank">https://support.twitter.com/articles/20170405</a></p>
   <p>You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: <a class="link" href="#" target="_blank">https://twitter.com/privacy</a></p>
   <h5>Facebook</h5>
   <p>Facebook remarketing service is provided by Facebook Inc.</p>
   <p>You can learn more about interest-based advertising from Facebook by visiting this page: <a class="link" href="#" target="_blank">https://www.facebook.com/help/164968693837950</a></p>
   <p>To opt-out from Facebook's interest-based ads, follow these instructions from Facebook:<a class="link" href="#" target="_blank">https://www.facebook.com/help/568137493302217</a></p>
   <p>Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA <a href="#" target="_blank" class="link">http://www.aboutads.info/choices/</a>, the Digital Advertising Alliance of Canada in Canada <a href="#" target="_blank" class="link">http://youradchoices.ca/</a>  or the European Interactive Digital Advertising Alliance in Europe <a href="#" target="_blank" class="link">http://www.youronlinechoices.eu/</a> , or opt-out using your mobile device settings.</p>
   <p>For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: <a class="link" href="#" target="_blank">https://www.facebook.com/privacy/explanation</a></p>
   <h5>Pinterest</h5>
   <p>Pinterest remarketing service is provided by Pinterest Inc.</p>
   <p>You can opt-out from Pinterest's interest-based ads by enabling the ;Do Not Track; functionality of your web browser or by following Pinterest instructions: <a class="link" href="#" target="_blank">http://help.pinterest.com/en/articles/personalization-and-data</a> </p>
   <p>You can learn more about the privacy practices and policies of Pinterest by visiting their Privacy Policy page: <a href="#" target="_blank" class="link">https://about.pinterest.com/en/privacy-policy</a></p>
   <h5>Links to Other Websites</h5>
   <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
   <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
   <h5>CHANGES TO THIS PRIVACY POLICY</h5>
   <p>We reserve the right to update or modify this Privacy Policy at any time and from time to time without prior notice. Please review this policy periodically, and especially before you provide any information. This Privacy Policy was last updated on the date indicated above. Your continued use of the Services after any changes or revisions to this Privacy Policy shall indicate your agreement with the terms of such revised Privacy Policy.</p>
   <h5>CONTACTING US</h5>
   <p>Please also feel free to contact us if you have any questions about this Privacy Policy or the information practices of the Services. You may contact us as follows: <a href="#" class="link">privacy@Atujii.com</a>.</p>
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