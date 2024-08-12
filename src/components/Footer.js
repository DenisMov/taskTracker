const Footer = ({ showAdd }) => {
  return (
    <footer style={showAdd ? { marginTop: "15px" } : {}}>
      <p>Copyright &copy; 2021</p>
      <a href="#">About</a>
    </footer>
  );
};

export default Footer;
