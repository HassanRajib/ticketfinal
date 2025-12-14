

const Refund = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="w-5xl m-auto">
        <h1 className="font-bold text-3xl text-center pb-4">
          Refund Policy
        </h1>
        
      </div>
      <div className="w-5xl m-auto">
        <ol className="list-decimal list-inside space-y-4">
          {/* 1 */}
          <li>
            <span className="font-bold">General Refund Rules</span>
            <ul className="list-disc list-inside ml-4">
              <li>
                All ticket sales are final.
              </li>
              <li>
                Tickets are non-refundable unless the event organizer authorizes a refund.
              </li>
            </ul>
          </li>
          {/* 2 */}
          <li>
            <span className="font-bold">Refunds for Event Cancellation</span>
            <p className="ml-4">
              A refund is provided only if:
            </p>
            <ul className="list-disc list-inside ml-6">
              <li>The event is officially cancelled by the organizer</li>
              <li>Organizer instructs MytiketBD to refund customers</li>
            </ul>
            <p className="">Refund amount may exclude:</p>
            <ul className="list-disc list-inside ml-6">
              <li>Service fee</li>
              <li>Processing Changes</li>
            </ul>
          </li>
          {/* 3 */}
          <li>
            <span className="font-bold">Refunds for Event Postponement</span>
            <p className="ml-4">If an event is postponed:</p>
            <ul className="list-disc list-inside ml-6">
              <li>
                Tickets remain valid for the rescheduled date.
              </li>
              <li>
                Refunds depend on the organizer’s policy.
              </li>
              <li>
                MytiketBD cannot refund without organizer authorization.
              </li>
            </ul>
          </li>
          {/* 4 */}
          <li>
            <span className="font-bold">Incorrect Purchases & Personal Reasons</span>
            <p className="ml-4">Refunds are not provided for:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Change of mind.
              </li>
              <li>Incorrect ticket Purchases.</li>
              <li>
                Personal schedule conflicts.
              </li>
              <li>Failure to attend the event</li>
              <li>Late arrival or denied entry by venue authority</li>
            </ul>
          </li>
          {/* 5 */}
          <li>
            <span className="font-bold">Refund Method</span>
            
            <ul className="list-disc list-inside ml-6">
              <li>Approved refunds will be processed via the original payment method, unless otherwise instructed.</li>
              <li>Refund processing may take 5–10 working days.</li>
            </ul>

          </li>
          {/* 6 */}
          <li>
            <span className="font-bold">Processing Fee</span>
            <p className="ml-4">A processing fee may be deducted from the total refund (if applicable).</p>
            
          </li>
          {/* 7 */}
          <li>
            <span className="font-bold">
              Fraudulent Claims
            </span>
            <p className="ml-4">
              MytiketBD reserves the right to deny refund requests found to be fraudulent.
            </p>
          </li>
          {/* 8 */}
          <li>
            <span className="font-bold">Contact</span>
            <p className="ml-4">For support, Email</p>
            <a href="mailto:support@mytikitbd.com" className="ml-6 font-bold">
              support@mytiketbd.com
            </a>
            <p></p>
            <a href="tel:+8801332527540" className="ml-6 font-bold">Phone: +8801332527540</a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Refund;
