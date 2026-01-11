export function HeroSection() {
  return (
    <section
      className={
        "relative mx-auto mt-16 mb-12 flex max-w-7xl items-center justify-between px-[32px]"
      }
    >
      <div className={"w-full text-center"}>
        <h1
          className={
            "animate-fade-in-up text-[48px] leading-[48px] font-medium tracking-[-1.6px] md:text-[80px] md:leading-[80px]"
          }
        >
          Communication reimagined.
          <br />
          Open source & scalable.
        </h1>
        <p
          className={
            "animate-fade-in-up-delay mt-6 text-[18px] leading-[27px] md:text-[20px] md:leading-[30px]"
          }
        >
          A modern chat platform built with microservices architecture by 15 students.
        </p>
      </div>
    </section>
  )
}
