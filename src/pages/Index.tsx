import { useEffect } from "react";
import Icon from "@/components/ui/icon";

const PHOTO_URL =
  "https://cdn.poehali.dev/projects/a6269ab6-fa19-4a46-980c-6a2c0abc08a0/files/754f23e7-42b5-425f-b85a-e3f08f6e6d1c.jpg";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal, .line-draw").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const painCards = [
  {
    icon: "RefreshCw",
    text: "Я всё понимаю,\nно ничего не меняется",
    sub: "Осознание есть. Движения нет. Это не слабость — это сигнал.",
  },
  {
    icon: "Users",
    text: "Я снова выбираю\nне тех людей",
    sub: "Снова тот же сценарий, другие лица. Что-то тянет туда, куда не хочется.",
  },
  {
    icon: "Compass",
    text: "Я живу как надо,\nно не как хочу",
    sub: "Всё правильно. Всё на месте. Только радости нет.",
  },
  {
    icon: "EyeOff",
    text: "Мне сложно проявляться\nи быть собой",
    sub: "Ощущение, что настоящий ты — где-то рядом, но не здесь.",
  },
];

const approachItems = [
  {
    icon: "Ban",
    title: "Без поверхностных советов",
    text: "Советы не меняют структуру. Я работаю с тем, что лежит глубже — с убеждениями, страхами, ранними решениями.",
  },
  {
    icon: "Heart",
    title: "Без «починки» человека",
    text: "Ты не сломан. Я не чиню. Я помогаю восстановить контакт с собой и убрать то, что мешает.",
  },
  {
    icon: "Layers",
    title: "С причинами, не симптомами",
    text: "Тревога, прокрастинация, конфликты — это симптомы. Работаем с тем, что их порождает.",
  },
  {
    icon: "Shield",
    title: "В безопасном пространстве",
    text: "Здесь можно говорить то, что не говоришь никому. Без оценки. Без давления.",
  },
];

const credentials = [
  { icon: "GraduationCap", text: "Клинический психолог, МГУ им. Ломоносова" },
  { icon: "BookOpen", text: "Специализация: психодинамическая терапия" },
  { icon: "Clock", text: "Личная терапия — 300+ часов" },
  { icon: "Star", text: "Практика — более 8 лет" },
  { icon: "RefreshCw", text: "Регулярная супервизия" },
];

const formatItems = [
  {
    icon: "Video",
    label: "Формат",
    value: "Индивидуально · Онлайн",
    desc: "Работаю через Zoom или любой удобный мессенджер",
  },
  {
    icon: "Timer",
    label: "Длительность",
    value: "60 минут",
    desc: "Каждая сессия — полный час сосредоточенной работы",
  },
  {
    icon: "Lock",
    label: "Конфиденциально",
    value: "Полная приватность",
    desc: "Всё, что происходит на сессии, остаётся между нами",
  },
];

const Index = () => {
  useReveal();

  return (
    <div style={{ backgroundColor: "var(--warm-white)", color: "var(--charcoal)" }} className="min-h-screen">

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between"
        style={{ backgroundColor: "rgba(250,247,243,0.94)", backdropFilter: "blur(14px)", borderBottom: "1px solid var(--beige-dark)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--charcoal)" }}>
            <span className="font-display text-sm" style={{ color: "var(--warm-white)", lineHeight: 1 }}>А</span>
          </div>
          <span className="font-display text-lg tracking-wide">Анна Соколова</span>
        </div>
        <button
          className="btn-dark font-body text-xs tracking-[0.15em] uppercase px-6 py-3"
          style={{ backgroundColor: "var(--charcoal)", color: "var(--warm-white)" }}
        >
          <span>Записаться</span>
        </button>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-28 pb-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--warm-white)" }}
      >
        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.035 }}>
          {[20, 40, 60, 80].map((p) => (
            <div key={p} className="absolute top-0 bottom-0 w-px" style={{ left: `${p}%`, backgroundColor: "var(--charcoal)" }} />
          ))}
        </div>

        {/* Large ψ */}
        <div
          className="absolute right-[-2vw] top-1/2 -translate-y-1/2 font-display leading-none select-none pointer-events-none"
          style={{ color: "var(--beige-dark)", fontSize: "clamp(180px, 26vw, 400px)", opacity: 0.7 }}
        >
          ψ
        </div>

        <div className="max-w-3xl relative z-10">
          <div className="reveal flex items-center gap-2 mb-10">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--stone)" }}></div>
            <p className="font-body text-xs tracking-[0.22em] uppercase" style={{ color: "var(--stone)" }}>
              Психолог · Онлайн-консультации
            </p>
          </div>

          {/* Hero headline — visual split */}
          <div className="reveal reveal-delay-1 mb-8">
            {/* Line 1: "Ты многое понимаешь про себя." */}
            <div className="overflow-hidden mb-1">
              <p
                className="font-display leading-[1.1]"
                style={{ fontWeight: 400, fontSize: "clamp(2.2rem, 5.4vw, 4.4rem)" }}
              >
                Ты многое понимаешь{" "}
                <em style={{ fontStyle: "italic", fontWeight: 400 }}>про себя.</em>
              </p>
            </div>
            {/* Separator */}
            <div className="flex items-center gap-4 my-4">
              <div className="h-px flex-1" style={{ backgroundColor: "var(--beige-dark)", maxWidth: "60px" }}></div>
              <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "var(--stone-light)" }}>но</span>
              <div className="h-px flex-1" style={{ backgroundColor: "var(--beige-dark)", maxWidth: "60px" }}></div>
            </div>
            {/* Line 2: highlighted */}
            <div
              className="inline-block px-4 py-2 -mx-4"
              style={{ backgroundColor: "var(--charcoal)" }}
            >
              <p
                className="font-display leading-[1.15]"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(2.2rem, 5.4vw, 4.4rem)",
                  color: "var(--warm-white)",
                }}
              >
                продолжаешь жить
              </p>
            </div>
            <div className="mt-1">
              <p
                className="font-display leading-[1.1]"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(2.2rem, 5.4vw, 4.4rem)",
                  color: "var(--charcoal)",
                }}
              >
                не так, как хочешь.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-2 line-draw my-10" style={{ maxWidth: "80px" }}></div>

          <p
            className="reveal reveal-delay-3 font-body text-base md:text-lg leading-relaxed mb-12"
            style={{ color: "var(--stone)", maxWidth: "460px", fontWeight: 300 }}
          >
            Я помогаю выйти из повторяющихся жизненных сценариев
            и начать жить свою жизнь.
          </p>

          <div className="reveal reveal-delay-4 flex items-center gap-6 flex-wrap">
            <button
              className="btn-dark font-body text-sm tracking-[0.12em] uppercase px-10 py-4"
              style={{ backgroundColor: "var(--charcoal)", color: "var(--warm-white)" }}
            >
              <span>Записаться на консультацию</span>
            </button>
            <div className="flex items-center gap-2" style={{ color: "var(--stone-light)" }}>
              <Icon name="Clock" size={14} />
              <span className="font-body text-xs">60 мин · Онлайн</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <Icon name="ChevronDown" size={16} style={{ color: "var(--stone)", opacity: 0.4 }} className="animate-bounce" />
        </div>
      </section>

      {/* INTERLUDE: Фото + цитата */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--charcoal)", minHeight: "90vh" }}
      >
        <div className="grid md:grid-cols-2 min-h-[90vh]">
          {/* Photo side */}
          <div className="relative overflow-hidden" style={{ minHeight: "400px" }}>
            <img
              src={PHOTO_URL}
              alt="Анна Соколова"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{ filter: "grayscale(20%) brightness(0.82)" }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, transparent 60%, var(--charcoal) 100%)",
              }}
            />
            <div
              className="absolute inset-0 md:hidden"
              style={{
                background: "linear-gradient(to top, var(--charcoal) 20%, transparent 70%)",
              }}
            />
          </div>

          {/* Quote side */}
          <div className="relative flex flex-col justify-center px-8 md:px-16 py-20 md:py-0 z-10">
            {/* Decorative quote mark */}
            <div
              className="font-display leading-none select-none mb-6"
              style={{ fontSize: "clamp(80px, 12vw, 140px)", color: "rgba(255,255,255,0.06)", lineHeight: 0.8 }}
            >
              "
            </div>

            <div className="reveal">
              <p
                className="font-display leading-[1.25] mb-8"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(1.7rem, 3.2vw, 2.8rem)",
                  color: "var(--warm-white)",
                }}
              >
                Ты привык справляться{" "}
                <em style={{ fontStyle: "italic" }}>сам.</em>
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <p
                className="font-display leading-[1.25] mb-10"
                style={{
                  fontWeight: 400,
                  fontSize: "clamp(1.7rem, 3.2vw, 2.8rem)",
                  color: "rgba(250,247,243,0.55)",
                }}
              >
                Но, возможно, именно{" "}
                <em style={{ fontStyle: "italic" }}>это</em>{" "}
                и не даёт тебе сдвинуться.
              </p>
            </div>

            <div className="reveal reveal-delay-2 flex items-center gap-4">
              <div className="w-8 h-px" style={{ backgroundColor: "var(--stone-light)" }}></div>
              <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone-light)" }}>
                Анна Соколова
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: Боли */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>01</span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--beige-dark)" }}></div>
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>Узнаёшь себя?</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl mb-16" style={{ fontWeight: 400 }}>
            Ты не одинок в этом
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            {painCards.map((item, i) => (
              <div
                key={i}
                className="reveal group p-8 md:p-10 flex flex-col gap-5 transition-all duration-300"
                style={{
                  backgroundColor: "var(--warm-white)",
                  transitionDelay: `${i * 0.1}s`,
                  border: "1px solid var(--beige-dark)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "var(--beige)", border: "1px solid var(--beige-dark)" }}
                >
                  <Icon name={item.icon} size={16} style={{ color: "var(--stone)" }} />
                </div>
                <p className="font-display text-2xl md:text-3xl leading-snug whitespace-pre-line" style={{ fontWeight: 400 }}>
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

      {/* SECTION 02: Понимание */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--charcoal)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <div className="reveal flex items-center gap-3 mb-4">
              <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone-light)" }}>02</span>
              <div className="h-px w-8" style={{ backgroundColor: "var(--charcoal-mid)" }}></div>
              <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone-light)" }}>Понимание</span>
            </div>
            <h2
              className="reveal reveal-delay-1 font-display text-3xl md:text-5xl leading-tight mb-8"
              style={{ fontWeight: 400, color: "var(--warm-white)" }}
            >
              Это не слабость.
              <br />
              <em style={{ fontStyle: "italic" }}>Это сценарий.</em>
            </h2>
            <div className="reveal reveal-delay-2 mb-8" style={{ width: "40px", height: "1px", backgroundColor: "var(--stone-light)" }}></div>
            <p
              className="reveal reveal-delay-2 font-body text-base leading-relaxed mb-6"
              style={{ color: "rgba(250,247,243,0.55)", fontWeight: 300 }}
            >
              То, что ты называешь «моей проблемой» — это устойчивые психологические
              паттерны, сформированные задолго до сознательного возраста.
            </p>
            <p
              className="reveal reveal-delay-3 font-body text-base leading-relaxed"
              style={{ color: "rgba(250,247,243,0.55)", fontWeight: 300 }}
            >
              Они возникли как защита. Они были нужны. Но теперь они управляют
              твоей жизнью вместо тебя — и именно с этим можно работать.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ border: "1px solid var(--charcoal-mid)" }}
              ></div>
              <blockquote className="relative p-10 md:p-14" style={{ backgroundColor: "var(--charcoal-light)" }}>
                <Icon name="Quote" size={28} style={{ color: "var(--stone-light)", opacity: 0.5, marginBottom: "20px" }} />
                <p
                  className="font-display text-xl md:text-2xl leading-snug mb-6"
                  style={{ fontWeight: 300, fontStyle: "italic", color: "rgba(250,247,243,0.85)" }}
                >
                  «Человек повторяет то, что не проработал — не потому что хочет страдать,
                  а потому что ищет другой исход.»
                </p>
                <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--stone-light)" }}>
                  З. Фрейд
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: Подход */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>03</span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--beige-dark)" }}></div>
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>Подход</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl mb-16" style={{ fontWeight: 400 }}>
            Как я работаю
          </h2>

          <div className="grid md:grid-cols-2 gap-3">
            {approachItems.map((item, i) => (
              <div
                key={i}
                className="reveal p-8 md:p-10 flex gap-5"
                style={{
                  backgroundColor: "var(--warm-white)",
                  border: "1px solid var(--beige-dark)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: "var(--charcoal)" }}
                >
                  <Icon name={item.icon} size={15} style={{ color: "var(--warm-white)" }} />
                </div>
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

      {/* SECTION 04: Специалист */}
      <section className="px-6 md:px-16 py-24 md:py-36" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="reveal flex items-center gap-3 mb-12">
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>04</span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--beige-dark)" }}></div>
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>Специалист</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Photo */}
            <div className="reveal reveal-delay-1 relative order-2 md:order-1">
              <div
                className="absolute -bottom-5 -right-5 w-full h-full"
                style={{ border: "1px solid var(--beige-dark)" }}
              ></div>
              <img
                src={PHOTO_URL}
                alt="Анна Соколова — психолог"
                className="relative w-full object-cover"
                style={{ aspectRatio: "3/4", objectPosition: "top" }}
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-8 left-0 -translate-x-4 px-5 py-3 flex items-center gap-3"
                style={{ backgroundColor: "var(--charcoal)", color: "var(--warm-white)" }}
              >
                <Icon name="Star" size={13} style={{ color: "var(--beige-dark)" }} />
                <span className="font-body text-xs tracking-wide">8 лет практики</span>
              </div>
            </div>

            {/* Info */}
            <div className="order-1 md:order-2">
              <h2 className="reveal font-display text-3xl md:text-5xl mb-2" style={{ fontWeight: 400 }}>
                Анна Соколова
              </h2>
              <p className="reveal reveal-delay-1 font-body text-sm mb-8" style={{ color: "var(--stone)", fontWeight: 300 }}>
                Психолог · Психотерапевт
              </p>

              <div className="reveal reveal-delay-2" style={{ width: "40px", height: "1px", backgroundColor: "var(--stone)", marginBottom: "2rem" }}></div>

              <p
                className="reveal reveal-delay-2 font-body text-base leading-relaxed mb-5"
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

              <div className="reveal reveal-delay-4 space-y-3">
                {credentials.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid var(--beige-dark)" }}>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "var(--beige)" }}
                    >
                      <Icon name={item.icon} size={12} style={{ color: "var(--stone)" }} />
                    </div>
                    <span className="font-body text-sm" style={{ fontWeight: 300 }}>{item.text}</span>
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
          <div className="reveal flex items-center gap-3 mb-4">
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>05</span>
            <div className="h-px w-8" style={{ backgroundColor: "var(--beige-dark)" }}></div>
            <span className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "var(--stone)" }}>Формат</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-display text-3xl md:text-5xl mb-16" style={{ fontWeight: 400 }}>
            Как проходит работа
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {formatItems.map((item, i) => (
              <div
                key={i}
                className="reveal p-8 md:p-10"
                style={{
                  backgroundColor: "var(--warm-white)",
                  border: "1px solid var(--beige-dark)",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "var(--beige)", border: "1px solid var(--beige-dark)" }}
                >
                  <Icon name={item.icon} size={18} style={{ color: "var(--charcoal)" }} />
                </div>
                <span className="font-body text-xs tracking-[0.15em] uppercase block mb-2" style={{ color: "var(--stone)" }}>
                  {item.label}
                </span>
                <span className="font-display text-2xl block mb-3" style={{ fontWeight: 400 }}>
                  {item.value}
                </span>
                <p className="font-body text-xs leading-relaxed" style={{ color: "var(--stone)", fontWeight: 300 }}>
                  {item.desc}
                </p>
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
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          {[600, 900, 1200].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center font-display leading-none select-none pointer-events-none"
          style={{ color: "rgba(255,255,255,0.025)", fontSize: "clamp(180px, 32vw, 480px)" }}
        >
          ψ
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="reveal flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}></div>
            <p className="font-body text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
              Начать
            </p>
            <div className="h-px w-8" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}></div>
          </div>
          <h2
            className="reveal reveal-delay-1 font-display leading-tight mb-8"
            style={{
              color: "var(--warm-white)",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5.2vw, 4rem)",
            }}
          >
            Иногда понимания
            <br />
            <em style={{ fontStyle: "italic" }}>недостаточно.</em>
          </h2>
          <p
            className="reveal reveal-delay-2 font-body text-base md:text-lg mb-14"
            style={{ color: "rgba(250,247,243,0.38)", fontWeight: 300 }}
          >
            Именно здесь начинается настоящая работа.
          </p>
          <button
            className="reveal reveal-delay-3 btn-dark font-body text-sm tracking-[0.12em] uppercase px-12 py-5 inline-flex items-center gap-3"
            style={{
              backgroundColor: "transparent",
              color: "var(--warm-white)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span>Записаться</span>
            <Icon name="ArrowRight" size={14} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{ backgroundColor: "var(--charcoal)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--charcoal-mid)" }}>
            <span className="font-display text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>А</span>
          </div>
          <span className="font-display text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
            Анна Соколова
          </span>
        </div>
        <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.2)" }}>
          <Icon name="Lock" size={11} />
          <span className="font-body text-xs" style={{ fontWeight: 300 }}>
            Конфиденциальность гарантирована
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;