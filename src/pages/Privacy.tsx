

const Privacy = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="w-5xl m-auto">
        <h1 className="font-bold text-3xl text-center pb-4">Privacy Policy</h1>

        <p className=" mb-4">
          This Privacy Policy describes how MytiketBD collects, uses, stores,
          and protects your information.
        </p>
      </div>
      <div className="w-5xl m-auto">
        <ol className="list-decimal list-inside space-y-4">
          {/* 1 */}
          <li>
            <span className="font-bold">Information We Collect</span>
            <p className="ml-4">We may collect:</p>
            <ul className="list-[lower-alpha] list-inside ml-4">
              <li>
                Personal Information.
                <ul className="list-disc list-inside ml-2">
                  <li>Name</li>
                  <li>Phone Number</li>
                  <li>Email address</li>
                  <li>Address (if needed for delivery)</li>
                  <li>Date of birth (if required for entry restrictions)</li>
                </ul>
              </li>
              <li>
                Payment Information
                <ul className="list-disc list-inside ml-2">
                  <li>Mobile banking transaction details</li>
                  <li>
                    Card details (processed via secure third-party gateway) We
                    do not store your full card information.
                  </li>
                </ul>
              </li>
              <li>
                Technical Data
                <ul className="list-disc list-inside ml-2">
                  <li>IP Address</li>
                  <li>Browser type</li>
                  <li>Device Information</li>
                  <li>Cookies and usage data</li>
                </ul>
              </li>
            </ul>
          </li>
          {/* 2 */}
          <li>
            <span className="font-bold">How We Use Your Information</span>
            <p className="ml-4">We use user data for:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Ticket purchase and delivery</li>
              <li>Event reminders & notifications</li>
              <li>Payment verification</li>
              <li>Customer support</li>
              <li>Platform improvement</li>
              <li>Fraud detection & security</li>
            </ul>
          </li>
          {/* 3 */}
          <li>
            <span className="font-bold">Sharing of Information</span>
            <p className="ml-4">We may share limited necessary data with:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Event organizers (to verify ticket holders).</li>
              <li>Payment gateway providers.</li>
              <li>Delivery service (if physical tickets are delivered).</li>
              <li>Law enforcement, if required by law.</li>
            </ul>
            <p className="ml-4">
              We never sell or rent personal data to third parties.
            </p>
          </li>
          {/* 4 */}
          <li>
            <span className="font-bold">Cookies & Tracking</span>
            <p className="ml-4">Our website uses cookies to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Improve user experience.</li>
              <li>Save login preferences.</li>
              <li>Analyze traffic and usage.</li>
            </ul>
            <p className="ml-4">
              Users can disable cookies through browser settings.
            </p>
          </li>
          {/* 5 */}
          <li>
            <span className="font-bold">Data Protection</span>
            <p className="ml-4">We use:</p>
            <ul className="list-disc list-inside ml-6">
              <li>SSL encryption</li>
              <li>Secure servers.</li>
              <li>• Strict access control to protect your information .</li>
            </ul>
            <p className="ml-4">However, no online system is 100% secure.</p>
          </li>
          {/* 6 */}
          <li>
            <span className="font-bold">Third-Party Links</span>
            <p className="ml-4">
              Our website may contain links to external sites. We are not
              responsible for their privacy practices.
            </p>
          </li>
          {/* 7 */}
          <li>
            <span className="font-bold">User Rights</span>
            <p className="ml-4">Users may:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Request to view stored personal data</li>
              <li>Request correction</li>
              <li>Request account deletion</li>
            </ul>
            <p className="ml-4">Email us to make such requests</p>
          </li>
          <li>
            <span className="font-bold">Policy Updates</span>
            <p className="ml-4">
              We may update this policy occasionally. Changes will be posted on
              the website with a revised “Last Updated” date.
            </p>
          </li>
          {/* 8 */}
          <li>
            <span className="font-bold">Contact</span>
            <p className="ml-4">For support, partnerships, or queries:</p>
            <a href="mailto:support@mytiketbd.com" className="ml-6 font-bold">
              support@mytiketbd.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Privacy;
