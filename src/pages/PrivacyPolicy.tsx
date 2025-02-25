import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Chelsea Bobbitt Realty</title>
        <meta 
          name="description" 
          content="Privacy Policy for Chelsea Bobbitt Realty. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold mb-6">PRIVACY POLICY</h1>
          <p className="text-muted-foreground mb-8">Last Updated: February 25, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">INTRODUCTION</h2>
          <p>
            Chelsea Bobbitt, REALTOR® with EXIT Realty Refined ("Chelsea Bobbitt Realty," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website chelsearealty615.com (the "Site") or use our real estate services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our Site or services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Site or services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. INFORMATION WE COLLECT</h2>
          <p>We may collect several types of information from and about users of our Site, including:</p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">1.1 Personal Information</h3>
          <p>Personal information is information that identifies you as an individual. The personal information we may collect includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email address, mailing address, and phone number)</li>
            <li>Property search criteria and preferences</li>
            <li>Information you provide when requesting property valuations or market analyses</li>
            <li>Financial information necessary for real estate transactions (when applicable)</li>
            <li>Information you provide in communications with us</li>
            <li>Authentication information if you create an account</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">1.2 Non-Personal Information</h3>
          <p>We may also collect non-personal information about you, which does not directly identify you, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Demographic information</li>
            <li>Browser and device information</li>
            <li>IP address</li>
            <li>Usage data regarding your interaction with our Site</li>
            <li>Technical information about your connection to our Site</li>
            <li>Location data</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. HOW WE COLLECT YOUR INFORMATION</h2>
          <p>We collect information from you in various ways, including:</p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2.1 Direct Collection</h3>
          <p>Information you provide to us directly when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out forms on our Site</li>
            <li>Register for an account</li>
            <li>Request property information</li>
            <li>Use our mortgage calculator or other tools</li>
            <li>Subscribe to newsletters or marketing communications</li>
            <li>Participate in surveys or feedback forms</li>
            <li>Communicate with us via email, phone, or in person</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2.2 Automated Collection</h3>
          <p>Information collected automatically as you navigate through our Site using various technologies such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Cookies and similar tracking technologies</li>
            <li>Web beacons and tracking pixels</li>
            <li>Server logs</li>
            <li>Analytics tools</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">2.3 Third-Party Sources</h3>
          <p>We may receive information about you from third parties, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Multiple Listing Services (MLS)</li>
            <li>Other real estate professionals</li>
            <li>Marketing partners</li>
            <li>Public records</li>
            <li>Social media platforms (if you interact with us through these platforms)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. HOW WE USE YOUR INFORMATION</h2>
          <p>We may use the information we collect for various purposes, including to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our Site and services</li>
            <li>Process and fulfill your real estate inquiries and requests</li>
            <li>Personalize your experience and deliver content relevant to your interests</li>
            <li>Provide property recommendations based on your search criteria</li>
            <li>Communicate with you about our services, updates, and promotions</li>
            <li>Respond to your comments, questions, and customer service requests</li>
            <li>Send administrative information, such as updates to our terms, conditions, and policies</li>
            <li>Analyze usage patterns and trends to improve user experience</li>
            <li>Protect the security and integrity of our Site and business</li>
            <li>Comply with legal obligations and enforce our legal rights</li>
            <li>Fulfill any other purpose for which you provide the information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. DISCLOSURE OF YOUR INFORMATION</h2>
          <p>We may disclose your personal information in the following circumstances:</p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">4.1 Business Operations</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>To our subsidiaries, affiliates, and service providers to support our business operations</li>
            <li>To EXIT Realty Refined and other real estate professionals as necessary to facilitate your transactions</li>
            <li>To third-party vendors who provide services on our behalf (e.g., email delivery, hosting services, analytics providers)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">4.2 Legal Requirements</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>To comply with any court order, law, or legal process, including responding to government or regulatory requests</li>
            <li>To enforce or apply our Terms of Service and other agreements</li>
            <li>To protect the rights, property, or safety of our business, our clients, or others</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">4.3 Business Transfers</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>In connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy</li>
            <li>As part of due diligence processes</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">4.4 With Your Consent</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>To fulfill the purpose for which you provide it</li>
            <li>For any other purpose disclosed by us when you provide the information</li>
            <li>With your consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. COOKIES AND TRACKING TECHNOLOGIES</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">5.1 What We Use</h3>
          <p>
            Our Site uses cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to distinguish you from other users. These tools help us analyze website traffic, customize our services, content, and advertising, and enhance your experience while using our Site.
          </p>
          
          <h3 className="text-xl font-medium mt-6 mb-3">5.2 Types of Cookies We Use</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential Cookies: Necessary for the operation of our Site</li>
            <li>Analytical/Performance Cookies: Allow us to recognize and count visitors and analyze Site usage</li>
            <li>Functionality Cookies: Enable our Site to remember your preferences</li>
            <li>Targeting/Advertising Cookies: Record your visit to our Site, the pages you visit, and the links you follow</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">5.3 Your Choices Regarding Cookies</h3>
          <p>
            Most web browsers allow you to control cookies through browser settings. You may refuse to accept cookies by activating the appropriate setting on your browser. However, if you disable or refuse cookies, some parts of our Site may become inaccessible or not function properly.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. THIRD-PARTY WEBSITES AND SERVICES</h2>
          <p>
            Our Site may contain links to third-party websites or services, including those of partners, advertisers, and social media platforms. These third parties have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. We encourage you to review the privacy policies of any site you visit.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. DATA SECURITY</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, the transmission of information via the internet is not completely secure. We cannot guarantee the security of your information transmitted to our Site, and any transmission is at your own risk.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. DATA RETENTION</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will securely delete or anonymize your information when it is no longer needed for the purposes for which it was collected.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. YOUR RIGHTS AND CHOICES</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, which may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accessing your personal information</li>
            <li>Correcting inaccurate information</li>
            <li>Requesting deletion of your information</li>
            <li>Restricting or objecting to certain processing activities</li>
            <li>Requesting portability of your information</li>
            <li>Withdrawing consent (where processing is based on consent)</li>
            <li>Opting out of marketing communications</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided in the "Contact Information" section below.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. CHILDREN'S PRIVACY</h2>
          <p>
            Our Site is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe we may have collected information from your child, please contact us immediately.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. CALIFORNIA PRIVACY RIGHTS</h2>
          <p>
            If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, please contact us using the information provided below.
          </p>
          <p>
            Under California's "Shine the Light" law, California residents who provide personal information in obtaining products or services for personal, family, or household use are entitled to request and obtain from us, once a calendar year, information about the customer information we shared, if any, with other businesses for their own direct marketing uses. To request a copy of the information disclosure provided by Chelsea Bobbitt Realty, please contact us using the information below.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. CHANGES TO OUR PRIVACY POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The date this Privacy Policy was last revised is identified at the top of the page. We will post any revised privacy policy on this page and, if the changes are significant, we will provide a more prominent notice.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">13. CONTACT INFORMATION</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="mt-4 mb-8">
            <p className="font-medium">Chelsea Bobbitt, REALTOR®</p>
            <p>EXIT Realty Refined</p>
            <p>101 Public Square</p>
            <p>Gallatin, TN 37066</p>
            <p>Email: <a href="mailto:chelsea.realty615@gmail.com" className="text-primary hover:underline">chelsea.realty615@gmail.com</a></p>
            <p>Phone: <a href="tel:615-579-3834" className="text-primary hover:underline">615-579-3834</a></p>
          </div>
          
          <div className="border-t pt-6 mt-10 text-sm text-muted-foreground">
            <p>© 2025 Chelsea Bobbitt Realty. All rights reserved.</p>
            <p>Each EXIT Office is Independently Owned and Operated.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
