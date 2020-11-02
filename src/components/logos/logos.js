import './logos.css'

function Logos({ logoOne, logoTwo }) {
  return (
    <div className="logos">
      {logoOne}
      <div class="seperator" />
      {logoTwo}
    </div>
  );
}

export default Logos;
