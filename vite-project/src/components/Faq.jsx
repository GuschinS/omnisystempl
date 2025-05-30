// src/components/Faq.jsx
export default function Faq() {
  return (
    <section id="faq" className="py-20 bg-lightBg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Najczęściej zadawane pytania
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Czy można zainstalować system monitoringu na pojeździe lub urządzeniu innym niż samochód?
            </summary>
            <p className="mt-2">
              Tak, można podłączyć do każdego urządzenia posiadającego własne źródło zasilania o napięciu od 8 do 30 V. Istnieją również modele terminali pracujące przy napięciu do 89 V.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Jak długo przechowywana jest historia przejazdów?
            </summary>
            <p className="mt-2">
              Dane są przechowywane na serwerze monitoringu przez 1 rok.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Czy urządzenie zabezpieczy mój samochód przed kradzieżą?
            </summary>
            <p className="mt-2">
              Urządzenie nie pełni funkcji systemu antykradzieżowego. Na rynku dostępne są popularne zakłóiacze GPS dla samochodów, które mogą zakłócać jego działanie. Istnieją jednak modele terminali, które można wykorzystać jako dodatkową ochronę. Nie wymagają one podłączania do pokładowej sieci pojazdu i nie da się ich wykryć specjalistycznym sprzętem. Urządzenie to włącza się według ustawionego harmonogramu i przesyła swoją lokalizację na serwer.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Czy mogę przenieść urządzenie do innego samochodu przy sprzedaży obecnego?
            </summary>
            <p className="mt-2">
              Oczywiście, taka możliwość istnieje. Po prostu przenieś urządzenie do innego samochodu i zmień nazwę pojazdu w systemie monitoringu. Możesz też skontaktować się z nami, aby uzyskać pomoc.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Czy urządzenia są wodoodporne?
            </summary>
            <p className="mt-2">
              Istnieją modele terminali z ochroną IP68.
            </p>
          </details>

          <details className="bg-white p-4 rounded shadow">
            <summary className="font-semibold text-lg text-primary cursor-pointer">
              Ile urządzeń/pojazdów mogę mieć na jednym koncie?
            </summary>
            <p className="mt-2">
              Nasz system nie nakłada ograniczeń dotyczących liczby pojazdów wyświetlanych na jednej mapie.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}