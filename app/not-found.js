export default function NotFound() {
  return (
    <main className="hero">
      <p className="eyebrow">Page Not Found</p>
      <h1>This ArmorTech Labs page does not exist.</h1>
      <p>
        Use the links below to return to Labs, open your account, or contact ArmorTech.
      </p>

      <div className="heroButtons">
        <a href="https://armortechlabs.com">Return To Labs</a>
        <a href="https://armortechrepair.com/login">My Account</a>
        <a href="mailto:service@armortechrepair.com">Email ArmorTech</a>
      </div>
    </main>
  );
}