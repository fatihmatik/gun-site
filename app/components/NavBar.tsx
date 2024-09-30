export default function NavBar() {
  return (
    <nav className="bg-background p-4 text-gray-600 shadow-md px-32">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <div className="text-accent font-bold text-center text-xl">
            <h1>Oversea Education & Consulting</h1>
          </div>
        </div>

        <ul className="flex space-x-16 font-semibold text-base">
          <li>
            <a href="/about">Biz Kimiz</a>
          </li>
          <li>
            <a href="/services">Servislerimiz</a>
          </li>
          <li>
            <a href="/stories">Başarı Hikayeleri</a>
          </li>
          <li>
            <a href="/contact">İletişim</a>
          </li>
        </ul>

        <div>
          <a
            href="/appointment"
            className="border-2 border-lightaccent text-lightaccent py-2 px-4 rounded-lg hover:bg-lightaccent hover:text-white transition-colors"
          >
            Randevu Alın
          </a>
        </div>
      </div>
    </nav>
  );
}
