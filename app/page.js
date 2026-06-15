export default function Home() {
  const navLinks = [
    { label: 'Repair', href: 'https://armortechrepair.com' },
    { label: 'Solutions', href: 'https://armortech-solutions.com' },
    { label: 'Labs', href: 'https://armortechlabs.com' },
    { label: 'Protect', href: 'https://armortechprotect.com' },
    { label: 'Shop', href: 'https://armortechrepair.shop' },
    { label: 'My Account', href: 'https://armortechrepair.com/login' },
  ];

  const labServices = [
    {
      title: 'Precision Microsoldering',
      text:
        'Fine-pitch connector work, HDMI ports, USB-C ports, charging ports, lifted pads, broken traces, flex connector repair, and board-level solder restoration.',
    },
    {
      title: 'Mail-In Board Repair',
      text:
        'Nationwide mail-in evaluation for appliance boards, TV boards, power boards, control boards, audio boards, game console boards, and specialty electronics.',
    },
    {
      title: 'Console HDMI Repair',
      text:
        'PS5, PS4, Xbox Series X/S, Xbox One, Nintendo Switch dock/charging faults, HDMI port damage, no-display issues, cracked ports, missing pads, and trace repair.',
    },
    {
      title: 'Motherboard Repair',
      text:
        'Laptop boards, desktop boards, console motherboards, shorted rails, no-power faults, charging faults, liquid damage evaluation, and connector-level repair.',
    },
    {
      title: 'Automotive Electronics',
      text:
        'Instrument clusters, infotainment boards, display boards, camera modules, control modules, connectors, solder faults, and hard-to-source automotive electronics.',
    },
    {
      title: 'Industrial Board Diagnostics',
      text:
        'Control boards, power boards, machine electronics, specialty equipment boards, discontinued boards, and industrial modules evaluated for practical repair paths.',
    },
    {
      title: 'Appliance Control Boards',
      text:
        'Washer boards, dryer boards, oven boards, refrigerator boards, dishwasher boards, relay faults, power faults, damaged connectors, and unavailable board recovery.',
    },
    {
      title: 'TV Board Repair',
      text:
        'Main boards, power boards, T-Con related evaluation, HDMI faults, power faults, no-backlight board paths, damaged ports, and discontinued TV board recovery.',
    },
    {
      title: 'Liquid Damage Evaluation',
      text:
        'Board cleaning, corrosion inspection, short detection, damaged connector review, power-path evaluation, and repair-versus-replacement guidance.',
    },
  ];

  const tiers = [
    {
      name: 'Standard Board Diagnostic',
      price: '$60',
      tag: 'Base',
      text:
        'General electronics, appliance boards, TV boards, game console boards, audio boards, and standard control boards.',
    },
    {
      name: 'Console HDMI / Port Diagnostic',
      price: '$60',
      tag: 'Console',
      text:
        'HDMI, USB-C, charging ports, damaged connectors, lifted pads, trace issues, and no-display console board evaluation.',
    },
    {
      name: 'Advanced Motherboard Diagnostic',
      price: '$85',
      tag: 'Advanced',
      text:
        'Laptop motherboards, console motherboards, shorted rails, liquid damage, no-power faults, and deeper board-level inspection.',
    },
    {
      name: 'Automotive Electronics Diagnostic',
      price: '$100',
      tag: 'Auto',
      text:
        'Clusters, infotainment boards, modules, vehicle displays, camera electronics, connectors, and specialty automotive electronic assemblies.',
    },
    {
      name: 'Industrial Board Diagnostic',
      price: '$125',
      tag: 'Industrial',
      text:
        'Industrial control boards, discontinued machine boards, specialty equipment boards, commercial electronics, and harder-to-source assemblies.',
    },
    {
      name: 'Medical / Lab Electronics Review',
      price: '$175',
      tag: 'Specialty',
      text:
        'Specialty lab or medical-related electronics review where legally and safely serviceable. Life-safety, implantable, calibrated, or patient-critical systems may be declined.',
    },
  ];

  const mailInSteps = [
    {
      title: '1. Submit Details',
      text:
        'Send the device type, brand, model number, board number, photos, symptoms, and any previous repair attempts before shipping.',
    },
    {
      title: '2. Pay Diagnostic Fee',
      text:
        'Diagnostic fees are non-refundable and cover evaluation time, failure-path review, documentation, and repair feasibility inspection.',
    },
    {
      title: '3. Ship Safely',
      text:
        'Package the board or device carefully. Include your name, phone, email, return address, symptom notes, and order/reference information.',
    },
    {
      title: '4. Review & Quote',
      text:
        'ArmorTech Labs evaluates the board and provides a final repair quote before completing the repair when additional repair charges apply.',
    },
    {
      title: '5. Repair Or Return',
      text:
        'If repair is approved, the board is repaired and returned. If repair is not practical, replacement, donor board, or return options can be discussed.',
    },
    {
      title: '6. Records Saved',
      text:
        'Mail-in orders, payment history, service history, and board repair notes can be connected to your ArmorTech account.',
    },
  ];

  const supportedItems = [
    'PS5 HDMI Ports',
    'PS4 HDMI Ports',
    'Xbox HDMI Ports',
    'Nintendo Switch USB-C',
    'Laptop Motherboards',
    'Desktop Motherboards',
    'TV Main Boards',
    'TV Power Boards',
    'Appliance Control Boards',
    'Oven Boards',
    'Washer Boards',
    'Dryer Boards',
    'Refrigerator Boards',
    'Dishwasher Boards',
    'Audio Receiver Boards',
    'Instrument Clusters',
    'Infotainment Boards',
    'Automotive Modules',
    'Industrial Control Boards',
    'Specialty Electronics',
    'Liquid Damage Boards',
    'Damaged Connectors',
    'No-Power Boards',
    'Shorted Power Rails',
    'Discontinued Boards',
  ];

  const accountItems = [
    'Payment History',
    'Service History',
    'Pending Orders',
    'Mail-In Orders',
    'Protect Membership Status',
    'Past Memberships',
    'Device Vault',
    'Quote History',
    'Repair Notes',
    'Shop Orders',
  ];

  return (
    <>
      <header className="siteHeader">
        <nav className="siteNav">
          <a href="/" className="brandLink">
            ARMORTECH LABS
          </a>

          <div className="navLinks">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://armortechrepair.shop"
            className="navButton"
          >
            Pay Diagnostic
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">
            Precision Microsoldering • Mail-In Board Repair • HDMI Repair • Motherboard Repair
          </p>

          <h1>
            Board-Level Repair For The Failures Most Companies Replace.
          </h1>

          <p>
            ArmorTech Labs handles precision microsoldering, console HDMI repair,
            motherboard repair, appliance control boards, automotive electronics,
            industrial boards, liquid damage evaluation, and hard-to-source
            electronics recovery.
          </p>

          <div className="heroButtons">
            <a href="https://armortechrepair.shop">Pay Diagnostic Fee</a>
            <a href="#mailin">Start Mail-In Repair</a>
            <a href="mailto:service@armortechrepair.com">Email Photos</a>
          </div>

          <div className="heroNotice">
            <strong>Important:</strong> ArmorTech IQ is for whole-device repair guidance,
            appliance/electronics symptoms, parts direction, and customer troubleshooting.
            Board-level mail-in repair requires Labs evaluation and should use the
            diagnostic fee process below.
          </div>
        </section>

        <section className="section" id="services">
          <h2>Precision Repair Services</h2>
          <p>
            Built for board-level failures, damaged ports, no-power faults,
            discontinued assemblies, and repairs where replacement is expensive,
            unavailable, or impractical.
          </p>

          <div className="grid">
            {labServices.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section darkBand" id="pricing">
          <h2>Diagnostic Fee Tiers</h2>
          <p>
            Diagnostic fees are non-refundable and cover evaluation time, failure
            path review, documentation, and repair feasibility inspection. Final
            repair pricing is discussed before repair is completed.
          </p>

          <div className="pricingGrid">
            {tiers.map((tier) => (
              <div className="priceCard" key={tier.name}>
                <span className="tag">{tier.tag}</span>
                <h3>{tier.name}</h3>
                <h4>{tier.price}</h4>
                <p>{tier.text}</p>
              </div>
            ))}
          </div>

          <div className="heroButtons">
            <a href="https://armortechrepair.shop">Pay Through ArmorTech Shop</a>
            <a href="mailto:service@armortechrepair.com">Ask Which Tier Applies</a>
          </div>
        </section>

        <section className="section" id="mailin">
          <h2>Mail-In Repair Process</h2>
          <p>
            Do not ship a board blindly. Send photos, model numbers, board numbers,
            and symptoms first so ArmorTech can confirm the correct intake path.
          </p>

          <div className="grid">
            {mailInSteps.map((step) => (
              <div className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section darkBand">
          <h2>Common Mail-In Items</h2>
          <p>
            If it has a board, connector, power path, port, control circuit,
            display circuit, or failed electronic assembly, ArmorTech Labs may
            be able to evaluate it.
          </p>

          <div className="pills">
            {supportedItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Repair Diagnosis App Notice</h2>
          <p>
            ArmorTech IQ is still useful for whole-device symptoms, appliance
            diagnostics, TV symptoms, computer issues, console symptoms, and
            parts direction. It is not a replacement for bench-level board
            diagnostics, microsoldering inspection, or mail-in Labs evaluation.
          </p>

          <div className="splitGrid">
            <div className="card">
              <h3>Use ArmorTech IQ For</h3>
              <ul>
                <li>Whole-device symptoms</li>
                <li>Appliance troubleshooting</li>
                <li>TV repair direction</li>
                <li>Computer and console symptoms</li>
                <li>Part path guidance</li>
                <li>Repair-or-replace decisions</li>
              </ul>
              <div className="cardButtons">
                <a href="https://iq.armortechrepair.com">Open ArmorTech IQ</a>
              </div>
            </div>

            <div className="card">
              <h3>Use ArmorTech Labs For</h3>
              <ul>
                <li>Board-level faults</li>
                <li>Microsoldering</li>
                <li>HDMI and port replacement</li>
                <li>Lifted pads and broken traces</li>
                <li>Liquid damage boards</li>
                <li>Mail-in diagnostic evaluation</li>
              </ul>
              <div className="cardButtons">
                <a href="https://armortechrepair.shop">Pay Labs Diagnostic</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section darkBand">
          <h2>My Account Access</h2>
          <p>
            Customers use one ArmorTech account across the ecosystem. Device
            Vault records are customer-visible but admin-controlled, so customers
            can view their records without changing repair data.
          </p>

          <div className="pills">
            {accountItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="accountNotice">
            Device Vault records should list the customer&apos;s registered devices
            numbered 1–10. Customers should be able to view their devices, service
            records, orders, and membership status. Editing device records should
            remain admin-only.
          </div>

          <div className="heroButtons">
            <a href="https://armortechrepair.com/login">Open My Account</a>
            <a href="https://armortechrepair.com/portal">Customer Portal</a>
          </div>
        </section>

        <section className="notice">
          <h2>Important Labs Terms</h2>
          <p>
            Diagnostic fees are non-refundable. The diagnostic fee covers evaluation
            and does not guarantee repair, replacement, recovery, data restoration,
            or successful component-level repair.
          </p>
          <p>
            Final repair pricing is discussed before repair is completed. Some
            boards may be declined due to severe damage, missing parts, prior repair
            damage, locked programming, unavailable components, safety concerns, or
            repair cost exceeding practical replacement value.
          </p>
          <p>
            Medical, industrial, automotive, and specialty electronics may have
            limitations. ArmorTech Labs does not claim manufacturer certification,
            calibration authority, life-safety authorization, or compliance approval
            unless specifically stated in writing.
          </p>
        </section>

        <section className="cta">
          <p className="eyebrow">Start With Photos Before Shipping</p>
          <h2>Have A Board Or Device That Needs Labs Evaluation?</h2>
          <p>
            Send clear photos of the board, model tag, board number, damaged area,
            and a description of the symptoms before mailing anything in.
          </p>

          <div className="contactBox">
            <a href="mailto:service@armortechrepair.com">Email Photos</a>
            <a href="https://armortechrepair.shop">Pay Diagnostic Fee</a>
            <a href="tel:2282155595">Call 228-215-5595</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>ArmorTech Labs</h3>
        <p>
          Precision microsoldering, mail-in board repair, console HDMI repair,
          motherboard repair, automotive electronics, industrial board diagnostics,
          and specialty electronics recovery.
        </p>

        <div className="footerLinks">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="https://iq.armortechrepair.com">Repair Diagnosis</a>
        </div>

        <p className="finePrint">
          © 2026 ArmorTech Labs. All rights reserved.
        </p>
      </footer>
    </>
  );
}