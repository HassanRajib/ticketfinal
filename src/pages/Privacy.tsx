const Privacy = () => {
  return (
    // eng
    <div className="max-w-7xl m-auto px-4">
      {/* ban */}
        <div className="max-w-5xl m-auto mt-3">
          <h1 className="font-bold text-3xl text-center pb-4">
            প্রাইভেসি পলিসি{" "}
          </h1>
          <p>সর্বশেষ হালনাগাদ: </p>
          <p className=" mb-4">
            এই নীতিমালায় বর্ণনা করা হয়েছে কীভাবে MytikitBD আপনার তথ্য সংগ্রহ,
            ব্যবহার ও সুরক্ষা করে।
          </p>
        </div>
        <div className="max-w-5xl m-auto">
          <ol className="list-decimal list-inside space-y-4">
            {/* 1 */}
            <li>
              <span className="font-bold">আমরা যেসব তথ্য সংগ্রহ করি</span>
              {/* <p className="ml-4">We may collect:</p> */}
              <ul className="list-[lower-alpha] list-inside ml-4">
                <li>
                  ব্যক্তিগত তথ্য
                  <ul className="list-disc list-inside ml-2">
                    <li>নাম</li>
                    <li>ফোন নম্বর</li>
                    <li>ইমেইল</li>
                    <li>ঠিকানা (প্রযোজ্য হলে)</li>
                    <li>জন্মতারিখ (প্রবেশ সীমাবদ্ধতার জন্য প্রয়োজন হলে)</li>
                  </ul>
                </li>
                <li>
                  পেমেন্ট তথ্য
                  <ul className="list-disc list-inside ml-2">
                    <li>মোবাইল ব্যাংকিং লেনদেন তথ্য</li>
                    <li>
                      কার্ড তথ্য (নিরাপদ থার্ড-পার্টি গেটওয়ের মাধ্যমে) আমরা
                      পূর্ণ কার্ড তথ্য সংরক্ষণ করি না।
                    </li>
                  </ul>
                </li>
                <li>
                  টেকনিক্যাল তথ্য
                  <ul className="list-disc list-inside ml-2">
                    <li>IP ঠিকানা</li>
                    <li>ব্রাউজার টাইপ</li>
                    <li>ডিভাইস তথ্য</li>
                    <li>কুকিজ ও ব্যবহারের তথ্য</li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* 2 */}
            <li>
              <span className="font-bold">তথ্য ব্যবহারের উদ্দেশ্য</span>
              {/* <p className="ml-4">We use user data for:</p> */}
              <ul className="list-disc list-inside ml-6">
                <li>টিকিট ক্রয় ও ডেলিভারি</li>
                <li>ইভেন্ট নোটিফিকেশন</li>
                <li>পেমেন্ট যাচাই</li>
                <li>কাস্টমার সাপোর্ট</li>
                <li>প্ল্যাটফর্ম উন্নয়ন</li>
                <li>জালিয়াতি প্রতিরোধ</li>
              </ul>
            </li>
            {/* 3 */}
            <li>
              <span className="font-bold">তথ্য শেয়ার</span>
              <p className="ml-4">
                আমরা প্রয়োজনীয় সীমিত তথ্য শেয়ার করতে পারি:
              </p>
              <ul className="list-disc list-inside ml-6">
                <li>ইভেন্ট অর্গানাইজারের সাথে</li>
                <li>পেমেন্ট গেটওয়ের সাথে</li>
                <li>ডেলিভারি সার্ভিসের সাথে</li>
                <li>আইন প্রয়োগকারী সংস্থার সাথে (আইনগত প্রয়োজনে)</li>
              </ul>
              <p className="ml-4">
                আমরা কখনোই ব্যক্তিগত তথ্য বিক্রি বা ভাড়া দিই না।
              </p>
            </li>
            {/* 4 */}
            <li>
              <span className="font-bold">কুকিজ</span>
              <p className="ml-4">আমাদের ওয়েবসাইট কুকিজ ব্যবহার করে:</p>
              <ul className="list-disc list-inside ml-4">
                <li>ইউজার এক্সপেরিয়েন্স উন্নত করতে</li>
                <li>লগইন তথ্য সংরক্ষণ করতে</li>
                <li>ট্রাফিক বিশ্লেষণ করতে</li>
              </ul>
              <p className="ml-4">
                ব্যবহারকারী ব্রাউজার সেটিংস থেকে কুকিজ বন্ধ করতে পারেন।
              </p>
            </li>
            {/* 5 */}
            <li>
              <span className="font-bold">তথ্য সুরক্ষা</span>
              <p className="ml-4">আমরা ব্যবহার করি:</p>
              <ul className="list-disc list-inside ml-6">
                <li>SSL এনক্রিপশন</li>
                <li>সিকিউর সার্ভার</li>
                <li>সীমিত অ্যাক্সেস কন্ট্রোল</li>
              </ul>
              <p className="ml-4">তবে অনলাইন সিস্টেম ১০০% নিরাপদ নয়।</p>
            </li>
            {/* 6 */}
            <li>
              <span className="font-bold">থার্ড পার্টি লিংক</span>
              <p className="ml-4">
                আমাদের ওয়েবসাইটে তৃতীয় পক্ষের লিংক থাকতে পারে। তাদের প্রাইভেসি
                নীতির জন্য আমরা দায়ী নই।
              </p>
            </li>
            {/* 7 */}
            <li>
              <span className="font-bold">ব্যবহারকারীর অধিকার</span>
              <p className="ml-4">ব্যবহারকারী চাইলে:</p>
              <ul className="list-disc list-inside ml-4">
                <li>সংরক্ষিত তথ্য দেখতে পারেন</li>
                <li>সংশোধনের অনুরোধ করতে পারেন</li>
                <li>অ্যাকাউন্ট ডিলিটের অনুরোধ করতে পারেন</li>
              </ul>
              <p className="ml-4">ইমেইলের মাধ্যমে আমাদের জানাতে হবে।</p>
            </li>
            <li>
              <span className="font-bold">নীতিমালা হালনাগাদ</span>
              <p className="ml-4">
                সময় সময় এই নীতিমালা পরিবর্তিত হতে পারে। ওয়েবসাইটে আপডেটেড
                তারিখসহ প্রকাশ করা হবে।
              </p>
            </li>
            {/* 8 */}
            <li>
              <span className="font-bold">যোগাযোগ</span>
              <p className="ml-4">For support, partnerships, or queries:</p>
              <a href="mailto:support@mytiketbd.com" className="ml-6 font-bold">
                support@mytiketbd.com
              </a>
            </li>
          </ol>
        </div>
      <div className="max-w-5xl m-auto pt-6">
        <h1 className="font-bold text-3xl text-center pb-4">Privacy Policy</h1>

        <p className=" mb-4">
          This Privacy Policy describes how MytiketBD collects, uses, stores,
          and protects your information.
        </p>
      </div>
      <div className="max-w-5xl m-auto">
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
              <li>Strict access control to protect your information .</li>
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

    // ban
  );
};

export default Privacy;
