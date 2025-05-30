// src/components/Features.jsx
export default function Features() {
  return (
    <section id="features" className="py-20 bg-lightBg">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-center text-primary mb-3">
          Wdrożenie kompleksowych rozwiązań do monitorowania transportu umożliwia
          <strong>
            {" "}
            zwiększenie efektywności, automatyzację procesów i optymalizację kosztów
          </strong>
        </h3>
        <br />
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Funkcje
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Monitoring 24/7
            </h3>
            <p className="text-gray-600">
              Dostęp do całej dostępnej informacji dotyczącej wszystkich obiektów z dowolnego urządzenia posiadającego dostęp do internetu.
              <br />
              Dane są przechowywane na serwerze przez 12 miesięcy.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Kontrola lokalizacji pojazdów
            </h3>
            <p className="text-gray-600">
              System kontroli transportu{" "}
              <strong> śledzi, rejestruje i analizuje </strong>
              podstawowe parametry eksploatacyjne samochodu i informacje o trasach:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>lokalizacja pojazdu</li>
              <li>trasy na mapie</li>
              <li>prędkość jazdy</li>
              <li>czas trwania kursu</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Rozwiązania do kontroli wjazdu i postoju w geostrefach
            </h3>
            <p className="text-gray-600">
              Przydatne i intuicyjne narzędzie do kontrolowania wjazdów oraz czasu postoju pojazdu w określonym obszarze.
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>kонтроль przestrzegania wyznaczonej trasy</li>
              <li>kонтроль miejsca postoju pojazdu przy załadunku/wyładunku towaru</li>
              <li>kонтrola przestrzegania ograniczeń prędkości w określonych lokalizacjach</li>
              <li>kонтrola ruchu pojazdu w skomplikowanym terenie: pola, plac budowy, kopalnie itp.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">Raporty</h3>
            <p className="text-gray-600">
              Szerokie możliwości filtrowania według każdego dostępnego parametru pozwalają stworzyć każdy raport w kilka kliknięć.
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>możliwość zapisania wyników raportu do pliku</li>
              <li>możliwość automatycznego generowania raportów według harmonogramu i wysyłania ich na wskazany adres e-mail</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Kontrola parametrów pracy silnika
            </h3>
            <p className="text-gray-600">
              Po podłączeniu do magistrali CAN samochodu w systemie monitoringu dostępne są następujące dane:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>obroty silnika</li>
              <li>temperatura cieczy chłodzącej</li>
              <li>poziom i ciśnienie oleju</li>
              <li>poziom paliwa</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Kontrola zużycia paliwa
            </h3>
            <p className="text-gray-600">
              Możliwość kontroli zużycia paliwa w trybie rzeczywistym dla samochodu lub maszyny specjalnej:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>zużycie paliwa na 100 km i m/h</li>
              <li>kontrola tankowań i opróżnień zbiornika</li>
              <li>kontrola paliwa w dwóch lub więcej zbiornikach</li>
              <li>kontrola wydawania paliwa dla pojazdów z cysterną</li>
              <li>prowadzenie ogólnego bilansu paliwowego firmy</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Obsługa dodatkowego sprzętu
            </h3>
            <p className="text-gray-600">
              System monitoringu pozwala kontrolować wiele różnych parametrów w zależności od przeznaczenia pojazdu:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>temperaturę i stan techniczny agregatu chłodniczego (IQFreeze)</li>
              <li>systemy ważenia pokładowego (VESA Systems)</li>
              <li>ciśnienie w oponach (TPMS)</li>
              <li>pracę generatorów prądu (Gencomm)</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Wyjazdy prywatne i służbowe
            </h3>
            <p className="text-gray-600">
              Możliwość podziału na <strong> wyjazdy prywatne i służbowe</strong>, poprzez ustawienie godzin pracy pojazdu lub ręczne oznaczanie wyjazdów. To wygodne narzędzie, które pozwala{" "}
              <strong> zoptymalizować koszty paliwa </strong> w każdej firmie.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Kontrola pracy kierowców
            </h3>
            <p className="text-gray-600">
              Analiza danych z pojazdów pozwala ocenić styl jazdy każdego kierowcy i kontrolować:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>prędkość</li>
              <li>liczbę i dynamikę przyspieszeń i hamowań</li>
              <li>manewry niebezpieczne i sytuacje awaryjne</li>
              <li>naruszenia przepisów ruchu drogowego</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Unia Europejska, Wielka Brytania i Norwegia
            </h3>
            <p className="text-gray-600">
              Nasze urządzenia działają bez ograniczeń i dodatkowych kosztów na całym obszarze Unii Europejskiej, Wielkiej Brytanii i Norwegii.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Właściwa informacja we właściwym czasie
            </h3>
            <p className="text-gray-600">
              Dzięki bieżącym danym nie ma potrzeby pamiętać o okresowych przeglądarkach i konserwacjach – system automatycznie wyśle powiadomienie o nadchodzącym zdarzeniu.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Dostęp dla pracowników
            </h3>
            <p className="text-gray-600">
              Administrator systemu ma możliwość tworzenia kont użytkowników dla pracowników lub liderów grup i przypisywania im wybranych pojazdów.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-3">
              Udostępnianie lokalizacji pojazdu
            </h3>
            <p className="text-gray-600">
              Istnieje możliwość udostępnienia lokalizacji pojazdu zewnętrznym firmom:
            </p>
            <br />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>wysłanie prostego linku z aktualną lokalizacją</li>
              <li>utworzenie subkonta i przypisanie mu tylko wybranych pojazdów</li>
              <li>konfiguracja transmisji danych telemetrycznych na serwer drugiej strony</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}