"use client";

const AboutFe = () => {
  return (
    <section className="w-full bg-background dark:text-white py-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* patner with us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 h-full">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Who We Are
            </h2>
            <p className="text-md text-justify mt-4 text-gray-700 dark:text-gray-400">
              MytiketBD is operated by Variation Communications Ltd., an IT and
              digital solutions company based in Dhaka, Bangladesh. With years
              of expertise in website development, e-commerce solutions, and
              digital services, we built MytiketBD to bring a modern and
              reliable ticketing experience to the Bangladeshi audience.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 h-full">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Partner With Us
            </h2>

            <p className="text-md text-justify mt-4 text-gray-700 dark:text-gray-400">
              Despite having quite a few global grade musicians, Bangladesh has
              arguably not progressed enough in the music industry, especially
              for Band Music scenes. Even though it is a form of art with
              profound utilization and conceptual works, to engage the works to
              public
            </p>
          </div>
        </div>
        {/* what we offer */}
        <div className="m-auto w-full py-5">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <p className="ml-2">We sell tickets for a wide range of categories, including:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Concerts & Musical Shows</li>
            <li>Movies & Cinema</li>
            <li>Corporate Events</li>
            <li>Fairs & Exhibitions</li>
            <li>Food Festivals</li>
            <li>Seasonal Festivals</li>
            <li>Sports Events</li>
            <li>Conferences, Seminars & Workshops</li>
            <li>Theatre & Stage Shows</li>
            <li>Special Programs and More</li>
          </ul>
          <p>
            Whether it’s entertainment, arts, food, culture, or
            learning—MytikitBD connects you to everything.
          </p>
        </div>
        {/* mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1 */}
          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 h-full">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-md text-justify mt-4 text-gray-700 dark:text-gray-400">
              To simplify ticket purchasing in Bangladesh by offering a smooth,
              transparent, and trustworthy online ticketing experience for all
              types of events.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 h-full">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
              Our Vision
            </h2>

            <p className="text-md text-justify mt-4 text-gray-700 dark:text-gray-400">
              To become Bangladesh’s leading digital ticketing ecosystem—where
              anyone can discover, book, and enjoy events with just a few
              clicks.
            </p>
          </div>
        </div>
        {/* SSt */}
        <div className="m-auto w-full py-5">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Safe & Secure Ticketing
          </h2>
          <p className="ml-2">Your safety is our priority, We ensure:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Verified event listings</li>
            <li>Secure online payment</li>
            <li>Instant digital ticket delivery</li>
            <li>Fraud protection</li>
            <li>Account & data confidentiality</li>
          </ul>
          <p>
            MytiketBD uses trusted payment gateways and encrypted technology to protect every transaction.
          </p>
        </div>
        {/* WCU */}
        <div className="m-auto w-full py-5">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          {/* <p className="ml-2">We sell tickets for a wide range of categories, including:</p> */}
          <ul className="list-disc list-inside ml-2">
            <li>Easy-to-use online platform</li>
            <li>Instant ticket delivery via SMS & Email</li>
            <li>Multiple payment methods (Mobile Banking, Card, etc.)</li>
            <li>24/7 customer support</li>
            <li>Verified organizers & authentic tickets</li>
            <li>No long queues or manual hassle</li>
            <li>Personalized user dashboard</li>
          </ul>
          <p>
            We don’t just sell tickets—we open doors to unforgettable experiences.
          </p>
        </div>
        {/* con */}
        <div>
          <span className="font-bold">Contact</span>
            <p className="ml-4">For support, partnerships, or queries:</p>
            <a href="mailto:support@mytiketbd.com" className="ml-4 font-bold">
              support@mytiketbd.com
            </a>
        </div>
      </div>
    </section>
  );
};

export default AboutFe;
