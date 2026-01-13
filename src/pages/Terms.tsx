const Terms = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="w-5xl m-auto">
        <h1 className="font-bold text-3xl text-center pb-4">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Welcome to MytiketBD ( https://mytiketbd.com/ ). By accessing or using
          our website, you agree to comply with and be bound by the following
          Terms & Conditions. If you do not agree, please do not use our
          platform.
        </p>
      </div>
      <div className="w-5xl m-auto">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <span className="font-bold">Definition</span>
            <ul className="list-disc list-inside ml-4">
              <li>
                "MytiketBD", "we", "us", "our" refers to the ticketing platform
                operated by Variation Communication Ltd.
              </li>
              <li>
                "User", "you" refers to anyone accessing or purchasing tickets.
              </li>
              <li>
                "Event Organizer" refers to third-party organizers who list
                events on our platform.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Service Description</span>
            <p className="ml-4">
              MytiketBD is an online ticket marketplace that facilitates ticket
              sales for:
            </p>
            <ul className="list-disc list-inside ml-6">
              <li>Concerts</li>
              <li>Events</li>
              <li>Movies</li>
              <li>Fairs</li>
              <li>Exhibition</li>
              <li>Food Festivals</li>
              <li>Seasonal Festivals</li>
              <li>Other Entertainment Programs</li>
            </ul>
            <p className="ml-4">
              We act as a ticketing service provider, not the event organizer.
            </p>
          </li>
          <li>
            <span className="font-bold">User Account</span>
            <ul className="list-disc list-inside ml-6">
              <li>
                Users may be required to create an account to purchase tickets.
              </li>
              <li>
                You are responsible for keeping your account credentials secure.
              </li>
              <li>
                Any activity under your account will be considered your
                responsibility.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Ticket Purchase & Pricing</span>
            <ul className="list-disc list-inside ml-4">
              <li>
                All prices listed include relevant charges unless stated
                otherwise.
              </li>
              <li>Tickets are subject to availability.</li>
              <li>
                MytiketBD reserves the right to change prices or cancel listings
                at any time.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Service & Convenience Fees</span>
            <p className="ml-4">MytiketBD may charge:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Service Fee</li>
              <li>Processing Fee</li>
              <li>Delivery Charges (if applicable)</li>
            </ul>
            <p className="ml-4">
              These fees are non-refundable, unless otherwise stated.
            </p>
          </li>
          <li>
            <span className="font-bold">Ticket Delivery</span>
            <p className="ml-4">Ticket may be delivered via:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Email</li>
              <li>SMS</li>
              <li>User dashboard download</li>
              <li>Physical delivery (if specified)</li>
            </ul>
            <p className="ml-4">
              Users must ensure correct contact information during checkout.
            </p>
          </li>
          <li>
            <span className="font-bold">
              Event Changes, Postponement & Cancellation
            </span>
            <p className="ml-4">
              Event details are controlled by the event organizer. Organizers
              reserve the right to:
            </p>
            <ul className="list-disc list-inside ml-6">
              <li>Change date or time</li>
              <li>Change venue</li>
              <li>Postpone or cancel the event</li>
            </ul>
            <p className="ml-4">
              MytiketBD will update users as soon as official notice is
              received.
            </p>
          </li>
          <li>
            <span className="font-bold">No Duplication or Resale</span>
            <ul className="list-disc list-inside ml-6">
              <li>
                Tickets purchased from MytiketBD cannot be duplicated, resold,
                or transferred for commercial purposes.
              </li>
              <li>Any violation may cause the ticket to become invalid.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Entry Requirements</span>
            <ul className="list-disc list-inside ml-6">
              <li>Entry to an event is controlled by the organizer/venue.</li>
              <li>
                Users must follow all rules (ID check, age restriction, security
                check).
              </li>
              <li>MytiketBD is not responsible for denial of entry.</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Limitation of Liability</span>
            <p className="ml-4">MytiketBD is not liable for:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Event quality, delays, postponement, or cancellation</li>
              <li>Venue safety or seating arrangements</li>
              <li>Loss, injury, or incidents during the event</li>
              <li>Errors caused by incorrect user information</li>
            </ul>
            <p className="ml-4">We only act as a Ticketing intermediary.</p>
          </li>
          <li>
            <span className="font-bold">Prohibited Activities</span>
            <p className="ml-4">User must not</p>
            <ul className="list-disc list-inside ml-6">
              <li>Interfere with the website</li>
              <li>Attempt fraudulent purchases</li>
              <li>Use bots to buy tickets</li>
              <li>Misuse or manipulate ticket sales</li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Intellectual Property</span>
            <p className="ml-4">
              All content on MytiketBD, including logo, text, and designs, are
              owned by Variation Communication Ltd. Unauthorized use is
              prohibited.
            </p>
          </li>
          <li>
            <span className="font-bold">Governing Law</span>
            <p className="ml-4">
              These Terms & Conditions are governed by the laws of Bangladesh.
            </p>
          </li>
          <li>
            <span className="font-bold">Contact</span>
            <p className="ml-4">For support, Email</p>
            <a href="mailto:support@mytikitbd.com" className="ml-6 font-bold">
              support@mytiketbd.com
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Terms;
