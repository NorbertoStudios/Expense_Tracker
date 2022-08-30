import App from '../components/App';

export default function Home() {

  return (
    <div className="flex flex-col bg-gray-700 text-gray-300 w-full">
      <main className="p-10 flex-1">
        <App />
      </main>

      <footer className="flex p-4 border-t justify-center items-center text-center">
        <p>© 2022 Norberto Studios</p>
      </footer>
    </div>
  );
}
