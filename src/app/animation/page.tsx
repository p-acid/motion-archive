const Animation = () => {
  return (
    <main className="min-h-screen overflow-auto">
      <section className="flex h-[600px] flex-col items-center justify-center bg-zinc-700">
        <div className="relative">
          <div className="-space-y-8">
            <div className="overflow-hidden">
              <p className="animate-[0.8s_rise_0.1s_both] text-9xl font-extrabold tracking-tighter">
                We work
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="animate-[0.8s_rise_0.5s_both] text-9xl font-extrabold leading-[1.2] tracking-tighter">
                Together
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="animate-[0.8s_rise_1s_both] text-9xl font-extrabold tracking-tighter">
                For Our Team
              </p>
            </div>
          </div>

          <p className="absolute bottom-[35%] right-[-8%] mt-3 animate-[0.8s_fade-in_1.8s_both] whitespace-pre-line text-2xl font-thin leading-[1.1] max-lg:static max-lg:whitespace-normal">
            {
              "We are the ones\nwho create a culture\ncollaboration\nand cohesion for the team"
            }
          </p>
        </div>
      </section>

      <div className="h-[600px]">For Scroll</div>
    </main>
  )
}

export default Animation
