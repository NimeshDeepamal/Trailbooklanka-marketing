

const servicesfortravelers = [
  {
    id: 1,
    title: "Personalized Travel Planning:",
    desc: "Get custom itineraries based on your budget, interests, and preferred activities, all shown on an interactive map.",
  },
  {
    id: 2,
    title: "Hidden Gems & Local Experiences:",
    desc: "Discover secret spots, local food, and cultural insights shared by real travelers and guides.",
  },
  {
    id: 3,
    title: "Real Stories & Community:",
    desc: "Read and share travel stories, reviews, and tips in a supportive traveler community.",
  },
  {
    id: 4,
    title: "Travel Smart (Budget to Luxury):",
    desc: "Find stays for every budget, from hostels to luxury villas. Book hotels, compare transport, and explore saving tips.",
  },
  {
    id: 5,
    title: "Travel Safety & Support:",
    desc: "Get health alerts, travel advisories, and safety tips tailored to your destination.",
  },
  {
    id: 6,
    title: "Book Local Experiences:",
    desc: "Book activities like whale watching, food tours, or river safaris with trusted local guides.",
  },
  {
    id: 7,
    title: "Cultural, Culinary & Wellness Journeys:",
    desc: "Enjoy yoga, meditation, cooking classes, and explore Sri Lanka’s rich food and wellness culture.",
  },
  {
    id: 8,
    title: "Stay Updated:",
    desc: "Stay informed with blogs, travel tips, real-time weather, and event notifications.",
  },
];

const servicesforguiders = [
  {
    id: 1,
    title: "Guide Profile Creation:",
    desc: "Create a professional profile to showcase your tours, skills, and specialties.",
  },
  {
    id: 2,
    title: "Booking Management:",
    desc: "Manage bookings with ease using our built-in calendar and real-time updates.",
  },
  {
    id: 3,
    title: "Ratings & Reviews:",
    desc: "Gain visibility with verified reviews from past travelers to boost your credibility.",
  },
  {
    id: 4,
    title: "Analytics Dashboard:",
    desc: "Track views, bookings, earnings, and performance to grow your business.",
  },
  {
    id: 5,
    title: "Direct Messaging:",
    desc: "Connect with travelers, answer questions, and build trust through direct chat.",
  },
  {
    id: 6,
    title: "Multi-language Support:",
    desc: "Reach a wider audience with language tools and translation features.",
  },
];

const HowWeHelp = () => {
  const leftServices = servicesfortravelers.slice(0, 4);
  const rightServices = servicesfortravelers.slice(4);
  const guideleftServices = servicesforguiders.slice(0, 3);
  const guiderightServices = servicesforguiders.slice(3);

  return (
    <div
      className="bg-[#C6C2C24D] px-4 sm:px-6 md:px-10 py-10 mx-auto max-w-7xl rounded-2xl"
      id="Our-Services"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 ">
        How We Help You Travel Smarter
      </h1>

      {/* Traveler Services */}
      <div className="rounded-t-3xl bg-[#5C3D2ECC] py-5 text-center mb-6">
        <h2 className="text-white text-lg font-medium">
          Our Services for Travelers
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4">
          {leftServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#00000033] py-5 px-4 text-black min-h-[130px] h-auto"
            >
              <h2 className="text-base sm:text-lg font-bold">
                {service.title}
              </h2>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {rightServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#00000033] py-5 px-4 text-black min-h-[130px] h-auto"
            >
              <h2 className="text-base sm:text-lg font-bold">
                {service.title}
              </h2>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guide Services */}
      <div className="rounded-t-3xl bg-[#5C3D2ECC] py-5 text-center mt-10 mb-6">
        <h2 className="text-white text-lg font-medium">
          Our Services for Guiders
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4">
          {guideleftServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#00000033] py-5 px-4 text-black min-h-[130px] h-auto"
            >
              <h2 className="text-base sm:text-lg font-bold">
                {service.title}
              </h2>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {guiderightServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#00000033] py-5 px-4 text-black min-h-[130px] h-auto"
            >
              <h2 className="text-base sm:text-lg font-bold">
                {service.title}
              </h2>
              <p className="text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Paragraph */}
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center mt-10 mb-6 ">
        What Makes Us Unique
      </h1>
      <p className="text-sm sm:text-base leading-relaxed px-2 sm:px-6 text-justify">
        What sets our platform apart is the way we reimagine travel planning
        through personalization, local insight, and accessibility. Unlike
        traditional travel apps that offer one-size-fits-all suggestions, we
        focus on creating deeply customized itineraries that match your
        individual preferences, whether you're an adventure seeker, a culture
        lover, or a wellness enthusiast. We bring to light the hidden gems of
        Sri Lanka, from secluded beaches and family-run eateries to spiritual
        retreats and cultural festivals, all recommended by locals who know the
        land best.
        <br />
        <br />
        Our platform not only makes it easy to plan and organize your entire
        trip in one place, including booking hotels, transport, and unique
        activities but also empowers local guides and small businesses by giving
        them a space to shine and connect directly with travelers. With features
        like offline itinerary access, real-time weather and event alerts,
        safety tools, and multi-language support, we’re committed to making
        travel smoother, more inclusive, and more meaningful.
      </p>
    </div>
  );
};

export default HowWeHelp;
