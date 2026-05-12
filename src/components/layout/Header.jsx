export default function Footer() {
  return (
    <footer className="bg-amber-100 text-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Khaanzaa service</p>
      </div>
    </footer>
  );
}
