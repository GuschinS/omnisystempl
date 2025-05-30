// src/components/Devices.jsx
import FMT100 from '../assets/img/FMT100.webp';
import FMP100 from '../assets/img/FMP100.webp';
import FMB020 from '../assets/img/FMB020.webp';
import FMB920 from '../assets/img/FMB920.webp';
import FMB965 from '../assets/img/FMB965.webp';
import TFT100 from '../assets/img/TFT100.webp';
import GH5200 from '../assets/img/GH5200.webp';
import TAT100 from '../assets/img/TAT100.webp';
import FMB003 from '../assets/img/FMB003.webp';

export default function Devices() {
  return (
    <section id="devices" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Terminale nawigacyjne
        </h2>
        <ul className="max-w-4xl mx-auto space-y-8">
          {/* Element listy */}
          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMT100}
              alt="FMT100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMT100</h3>
              <p className="text-gray-600 text-left">Śledzący 2G do montażu na akumulatorze samochodowym</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMP100}
              alt="FMP100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMP100</h3>
              <p className="text-gray-600 text-left">Śledzący typu Plug & Play 2G, podłączany do gniazdka zapalniczki</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB020}
              alt="FMB020"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB020</h3>
              <p className="text-gray-600 text-left">Najmniejszy śledzący 2G z instalacją Plug & Play, przeznaczony do szerokiego zakresu zastosowań</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB920}
              alt="FMB920"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB920</h3>
              <p className="text-gray-600 text-left">Najbardziej popularny kompaktowy model 2G do podstawowego śledzenia</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB965}
              alt="FMB965"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB965</h3>
              <p className="text-gray-600 text-left">Wodoodporný i energooszczędny śledzący 2G dla motocykli. Stopień ochrony IP67</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={TFT100}
              alt="TFT100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">TFT100</h3>
              <p className="text-gray-600 text-left">Śledzący z obsługą wysokiego napięcia dla pojazdów elektrycznych i maszyn ciężarowych. Stopień ochrony IP67. Napięcie robocze 10–97 V</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={GH5200}
              alt="GH5200"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">GH5200</h3>
              <p className="text-gray-600 text-left">Autonomiczny śledzący 2G do osobistej ochrony i zarządzania personelem</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={TAT100}
              alt="TAT100"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">TAT100</h3>
              <p className="text-gray-600 text-left">Śledzący 2G do monitorowania zasobów z klasą ochrony IP68 i przedłużonym czasem pracy baterii</p>
            </div>
          </li>

          <li className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors">
            <img
              src={FMB003}
              alt="FMB003"
              className="w-40 h-24 object-contain self-start md:self-center"
            />
            <div className="text-center md:text-left md:flex-1">
              <h3 className="font-semibold text-lg text-primary">FMB003</h3>
              <p className="text-gray-600 text-left">Najbardziej kompaktowy śledzący 2G, który zmieści się w każdym pojeździe. Posiada możliwość odczytu danych z gniazda OBD obiektu.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}