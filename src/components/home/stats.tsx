import { NumberTicker } from "../magicui/number-ticker"

export const Stats = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center" >
                <div className="flex items-center justify-center text-4xl font-bold tracking-tighter text-teal-600" >
                    <NumberTicker
                    value={7}
                    className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-teal-600"
                    />
                    <div>+</div>
                </div>
                <p className="text-slate-600">Years of Excellence</p>
            </div>
            

            <div className="text-center" >
                <div className="flex items-center justify-center text-4xl font-bold tracking-tighter text-teal-600" >
                    <NumberTicker
                    value={1200}
                    className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-teal-600"
                    />
                    <div>+</div>
                </div>
              <p className="text-slate-600">Students Trained</p>
            </div>

            <div className="text-center" >
              <div className="flex items-center justify-center text-4xl font-bold tracking-tighter text-teal-600" >
                <NumberTicker
                  value={50}
                  className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-teal-600"
                />
                <div>+</div>
              </div>
              <p className="text-slate-600">Professional Courses</p>
            </div>

            <div className="text-center" >
              <div className="flex items-center justify-center text-4xl font-bold tracking-tighter text-teal-600" >
                <NumberTicker
                  value={90}
                  className="whitespace-pre-wrap text-4xl font-bold tracking-tighter text-teal-600"
                />
                <div>%</div>

              </div>
              <p className="text-slate-600">Placement Rate</p>
            </div>
          </div>
        </div>
    </section>
  )
}
