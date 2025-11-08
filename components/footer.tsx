export default function Footer() {
  return (
    <footer key="footer" className="mt-12 py-6 border-t text-center text-sm text-gray-600">
      <p>
        &copy; {new Date().getFullYear()} Colby Foster. Built with{' '}
        <a
          href="https://nextjs.org"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>{' '}
        &{' '}
        <a
          href="https://tailwindcss.com"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>.
      </p>
    </footer>
  );
}
