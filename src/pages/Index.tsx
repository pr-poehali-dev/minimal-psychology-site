import { useEffect } from "react";

const PHOTO_URL = "https://cdn.poehali.dev/projects/a6269ab6-fa19-4a46-980c-6a2c0abc08a0/files/754f23e7-42b5-425f-b85a-e3f08f6e6d1c.jpg";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal, .line-draw").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

const Index = () => {
  useReveal();

  return (
    <div
      style={{ backgroundColor: "var(--warm-white)", color: "var(--charcoal)" }}
      className="min-h-screen"
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between"
        style={{ backgroundColor: "rgba(250,247,244,0.92)", backdropFilter: "blur(12px)" }}
      >
        <span className="font-display text-lg tracking-wide" style={{ color: "var(--charcoal)" }}>
          Анна Соколова
        </span>
        <button
          className="btn-dark font-body text-xs tracking-[0.15em] uppercase px-6 py-3"
          style={{ backgroundColor: "var(--charcoal)", color: "var(--warm-white)" }}
        >
          <span>Записаться</span>
        </button>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-20 relative overflow-hidden">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display leading-none select-none pointer-events-none"
          style={{ color: "var(--beige-dark)", fontSize: "clamp(160px, 22vw, 340px)", opacity: 0.55 }}
        >
          ψ
        </div>

        <div className="max-w-3xl relative z-10">
          <p
            className="reveal font-body text-xs tracking-[0.2em] uppercase mb-10"
            style={{ color: "var(--stone)" }}
          >
            Психолог · Онлайн-консультации
          </p>

          <h1
            className="reveal reveal-delay-1 font-display leading-[1.1] mb-8"
            style={{ fontWeight: 400, fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
          >
            Ты многое понимаешь
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 300 }}>про себя.</em>
            <br />
            Но продолжаешь жить
            <br />
            не так, как хочешь.
          </h1>

          <div className="reveal reveal-delay-2 line-draw my-10" style={{ maxWidth: "80px" }}></div>

          <p
            className="reveal reveal-delay-3 font-body text-base md:text-lg leading-relaxed mb-12"
            style={{ color: "var(--stone)", maxWidth: "480px", fontWeight: 300 }}
          >
            Я помогаю выйти из повторяющихся жизненных сценариев
            и начать жить свою жизнь.
          </p>

          <button
            className="reveal reveal-delay-4 btn-dark font-body text-sm tracking-[0.12em] uppercase px-10 py-4"
            style={{ backgroundColor: "var(--charcoal)", color: "var(--warm-white)" }}
          >
            <span>Записаться на консультацию</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-px h-10 animate-pulse" style={{ backgroundColor: "var(--stone)", opacity: 0.4 }}></div>
        </div>
      </section>

      {/* SECTION 01: В чём проблема */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--stone)" }}>
            01 — Узнаёшь себя?
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl mb-16" style={{ fontWeight: 400 }}>
            Ты не одинок в этом
          </h2>

          <div className="grid md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--beige-dark)" }}>
            {[
              {
                text: "Я всё понимаю,\nно ничего не меняется",
                sub: "Осознание есть. Движения нет. Это не слабость — это сигнал.",
              },
              {
                text: "Я снова выбираю\nне тех людей",
                sub: "Снова тот же сценарий, другие лица. Что-то тянет туда, куда не хочется.",
              },
              {
                text: "Я живу как надо,\nно не как хочу",
                sub: "Всё правильно. Всё на месте. Только радости нет.",
              },
              {
                text: "Мне сложно проявляться\nи быть собой",
                sub: "Ощущение, что настоящий ты — где-то рядом, но не здесь.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal p-10 md:p-12"
                style={{
                  backgroundColor: "var(--warm-white)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <p
                  className="font-display text-2xl md:text-3xl mb-4 leading-snug whitespace-pre-line"
                  style={{ fontWeight: 400 }}
                >
                  {item.text}
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--stone)", fontWeight: 300 }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02: Что происходит */}
      <section className="px-6 md:px-16 py-24 md:py-36">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <p className="reveal font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--stone)" }}>
              02 — Понимание
            </p>
            <h2
              className="reveal reveal-delay-1 font-display text-3xl md:text-5xl leading-tight mb-8"
              style={{ fontWeight: 400 }}
            >
              Это не слабость.
              <br />
              <em style={{ fontStyle: "italic" }}>Это сценарий.</em>
            </h2>
            <div className="reveal reveal-delay-2 divider mb-8"></div>
            <p
              className="reveal reveal-delay-2 font-body text-base leading-relaxed mb-6"
              style={{ color: "var(--stone)", fontWeight: 300 }}
            >
              То, что ты называешь «моей проблемой» — это устойчивые психологические
              паттерны, сформированные задолго до сознательного возраста.
            </p>
            <p
              className="reveal reveal-delay-3 font-body text-base leading-relaxed"
              style={{ color: "var(--stone)", fontWeight: 300 }}
            >
              Они возникли как защита. Они были нужны. Но теперь они управляют
              твоей жизнью вместо тебя — и именно с этим можно работать.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ border: "1px solid var(--beige-dark)" }}
              ></div>
              <blockquote className="relative p-10 md:p-14" style={{ backgroundColor: "var(--beige)" }}>
                <p
                  className="font-display text-xl md:text-2xl leading-snug mb-6"
                  style={{ fontWeight: 300, fontStyle: "italic" }}
                >
                  «Человек повторяет то, что не проработал — не потому что хочет страдать,
                  а потому что ищет другой исход.»
                </p>
                <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--stone)" }}>
                  З. Фрейд
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Как я работаю */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--stone)" }}>
            03 — Подход
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl mb-16" style={{ fontWeight: 400 }}>
            Как я работаю
          </h2>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {[
              {
                title: "Без поверхностных советов",
                text: "Советы не меняют структуру. Я работаю с тем, что лежит глубже — с убеждениями, страхами, ранними решениями.",
              },
              {
                title: "Без «починки» человека",
                text: "Ты не сломан. Я не чиню. Я помогаю восстановить контакт с собой и убрать то, что мешает.",
              },
              {
                title: "С причинами, не симптомами",
                text: "Тревога, прокрастинация, конфликты — это симптомы. Работаем с тем, что их порождает.",
              },
              {
                title: "В безопасном пространстве",
                text: "Здесь можно говорить то, что не говоришь никому. Без оценки. Без давления.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal flex gap-6"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span
                  className="mt-1 flex-shrink-0 w-1 h-1 rounded-full"
                  style={{ backgroundColor: "var(--stone)", marginTop: "10px" }}
                ></span>
                <div>
                  <h3 className="font-body text-base mb-2" style={{ fontWeight: 500 }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "var(--stone)", fontWeight: 300 }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04: О специалисте */}
      <section className="px-6 md:px-16 py-24 md:py-36">
        <div className="max-w-5xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--stone)" }}>
            04 — Специалист
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="reveal reveal-delay-1 relative order-2 md:order-1">
              <div
                className="absolute -bottom-4 -right-4 w-full h-full"
                style={{ border: "1px solid var(--beige-dark)" }}
              ></div>
              <img
                src={PHOTO_URL}
                alt="Анна Соколова — психолог"
                className="relative w-full object-cover"
                style={{ aspectRatio: "3/4", objectPosition: "top" }}
              />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="reveal font-display text-3xl md:text-4xl mb-2" style={{ fontWeight: 400 }}>
                Анна Соколова
              </h2>
              <p className="reveal reveal-delay-1 font-body text-sm mb-8" style={{ color: "var(--stone)", fontWeight: 300 }}>
                Психолог · Психотерапевт
              </p>

              <div className="reveal reveal-delay-2 divider mb-8"></div>

              <p
                className="reveal reveal-delay-2 font-body text-base leading-relaxed mb-6"
                style={{ color: "var(--stone)", fontWeight: 300 }}
              >
                Я сама прошла долгий путь — несколько лет повторяла одни и те же ошибки,
                не понимая почему. Именно это привело меня в профессию.
              </p>
              <p
                className="reveal reveal-delay-3 font-body text-base leading-relaxed mb-10"
                style={{ color: "var(--stone)", fontWeight: 300 }}
              >
                Сегодня я работаю с людьми, которые застряли — умными, чувствующими,
                ищущими. Теми, кому не нужны советы, а нужна настоящая работа.
              </p>

              <div className="reveal reveal-delay-4 space-y-4">
                {[
                  "Клинический психолог, МГУ им. Ломоносова",
                  "Специализация: психодинамическая терапия",
                  "Личная терапия — 300+ часов",
                  "Практика — более 8 лет",
                  "Регулярная супервизия",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 rounded-full"
                      style={{ backgroundColor: "var(--stone)", width: "4px", height: "4px", marginTop: "9px" }}
                    ></span>
                    <span className="font-body text-sm" style={{ fontWeight: 300 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05: Формат */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="reveal font-body text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--stone)" }}>
            05 — Формат
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl mb-16" style={{ fontWeight: 400 }}>
            Как проходит работа
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--beige-dark)" }}>
            {[
              { label: "Формат", value: "Индивидуально\nОнлайн" },
              { label: "Длительность", value: "60 минут" },
              { label: "Конфиденциально", value: "Полная\nприватность" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal p-10 md:p-12 flex flex-col gap-3"
                style={{ backgroundColor: "var(--warm-white)", transitionDelay: `${i * 0.1}s` }}
              >
                <span className="font-body text-xs tracking-[0.15em] uppercase" style={{ color: "var(--stone)" }}>
                  {item.label}
                </span>
                <span
                  className="font-display text-2xl md:text-3xl whitespace-pre-line leading-tight"
                  style={{ fontWeight: 400 }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        className="px-6 md:px-16 py-28 md:py-44 text-center relative overflow-hidden"
        style={{ backgroundColor: "var(--charcoal)" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center font-display leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.03)", fontSize: "clamp(160px, 30vw, 420px)" }}
        >
          ψ
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <p
            className="reveal font-body text-xs tracking-[0.2em] uppercase mb-8"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Начать
          </p>
          <h2
            className="reveal reveal-delay-1 font-display leading-tight mb-8"
            style={{
              color: "var(--warm-white)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
            }}
          >
            Иногда понимания
            <br />
            <em style={{ fontStyle: "italic" }}>недостаточно.</em>
          </h2>
          <p
            className="reveal reveal-delay-2 font-body text-base md:text-lg mb-14"
            style={{ color: "rgba(255,255,255,0.4)", fontWeight: 300 }}
          >
            Именно здесь начинается настоящая работа.
          </p>
          <button
            className="reveal reveal-delay-3 btn-dark font-body text-sm tracking-[0.12em] uppercase px-12 py-5"
            style={{
              backgroundColor: "transparent",
              color: "var(--warm-white)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span>Записаться</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 md:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ backgroundColor: "var(--charcoal)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="font-display text-base" style={{ color: "rgba(255,255,255,0.3)" }}>
          Анна Соколова
        </span>
        <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>
          Конфиденциальность гарантирована
        </span>
      </footer>
    </div>
  );
};

export default Index;
