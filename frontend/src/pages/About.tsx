// The team members array is now updated with your provided names.
const teamMembers = [
  {
    name: "Ritusree",
    role: "Team Leader",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
  {
    name: "Saptarshi",
    role: "Team Member",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
  {
    name: "Priyansu",
    role: "Team Member",
    imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
  {
    name: "Pallavi",
    role: "Team Member",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
  {
    name: "Nazia",
    role: "Team Member",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
  {
    name: "Tamanna",
    role: "Team Member",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200",
  },
];


export default function About() {
  return (
    <div className="bg-background-light font-display text-gray-800">
      <div className="relative flex min-h-screen w-full flex-col">
        {/* Main Content */}
        <main className="flex-1">
          <div className="px-4 sm:px-6 lg:px-40 py-16 sm:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-gray-900">About Us</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  Welcome to ScholarPay, the smart platform dedicated to simplifying scholarship management. We are committed to empowering learners by reducing administrative barriers and ensuring equal access to educational resources.
                </p>
              </div>

              {/* This section now contains the three alternating slides */}
              <section className="space-y-16">

                {/* Slide 1: Our Mission (Text Left) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
                    <p className="text-base text-gray-600">
                      Our mission is to streamline scholarship processes, making them accessible, transparent, and efficient for every student. We aim to promote transparency and inclusivity in financial aid through accessible and reliable technology.
                    </p>
                  </div>
                  <div className="w-full aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <img alt="Team collaborating on a mission" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&q=80&fm=jpg&w=1080" />
                  </div>
                </div>

                {/* Slide 2: What is ScholarPay? (Text Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-4 lg:order-2">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">What is ScholarPay?</h2>
                    <p className="text-base text-gray-600">
                      ScholarPay is the modern solution for financial aid management. It serves as a unified ecosystem for both educational institutions and students, streamlining everything from application verification to the secure distribution of funds. By replacing outdated processes, we ensure financial aid is not just accessible, but prompt and reliable.
                    </p>
                  </div>
                  <div className="w-full aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg lg:order-1">
                    <img alt="ScholarPay Dashboard representation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=80&fm=jpg&w=1080" />
                  </div>
                </div>

                {/* Slide 3: How It Works (Text Left) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">How It Works</h2>
                    <p className="text-base text-gray-600">
                      Our platform acts as your direct link to the world of scholarships. We automate the discovery and verification of opportunities, cutting through the noise and eliminating outdated information. This ensures you receive timely, accurate, and comprehensive details, empowering you to act on the best opportunities without delay.
                    </p>
                  </div>
                  <div className="w-full aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <img alt="Student working on a laptop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&q=80&fm=jpg&w=1080" />
                  </div>
                </div>
              </section>
              
              {/* Benefits Section */}
              <section className="mt-20">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-gray-900">Benefits of ScholarPay</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900">Enhanced Security</h3>
                    <p className="mt-2 text-sm text-gray-600">Digital verification ensures secure and reliable identification of recipients.</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900">Improved Targeting</h3>
                    <p className="mt-2 text-sm text-gray-600">Ensures that funds reach the intended beneficiaries, minimizing diversions.</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900">Faster Delivery</h3>
                    <p className="mt-2 text-sm text-gray-600">Direct transfers to student accounts ensure timely receipt of benefits.</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white border border-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900">Reduced Fraud</h3>
                    <p className="mt-2 text-sm text-gray-600">By eliminating intermediaries, our platform significantly reduces corruption.</p>
                  </div>
                </div>
              </section>

              {/* Our Team Section */}
              <section className="mt-20">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center text-gray-900">Our Team</h2>
                <p className="mt-4 text-base text-gray-600 text-center max-w-3xl mx-auto">
                  Built with dedication by <span className="font-medium text-primary">Team RAGtags</span>. We are passionate innovators leveraging digital solutions to improve the lives of students and promote inclusive growth.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center text-center">
                      <div className="relative w-32 h-32">
                        <img alt={member.name} className="w-full h-full rounded-full object-cover shadow-md" src={member.imageUrl} />
                      </div>
                      <div className="mt-4">
                        <p className="text-lg font-bold text-gray-900">{member.name}</p>
                        <p className="text-sm text-primary">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}