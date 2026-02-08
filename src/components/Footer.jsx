import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} R&K Cleaning Services LLC</p>
      <p>Daytona Beach, Florida</p>
    </footer>
  );
}
