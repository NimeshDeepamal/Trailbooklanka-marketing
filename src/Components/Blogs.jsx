import Carousel, { Card } from "./AnimatedCarousel";

const CulturalThings = () => {
  const data = [
    {
      title: "Jaffna Nallur Kovil Festival",
      category: "A Rare Northern Cultural Spectacle",
      src: "/nallur-kovil.webp",
      content: (
        <p>
          The Nallur Kandaswamy Kovil Festival in Jaffna is a deeply spiritual
          and vibrant celebration filled with traditional rituals, chariot
          processions, and devotional music rarely experienced by mainstream
          tourists.
        </p>
      ),
    },
    {
      title: "Riverston",
      category: "Misty Mountains and Untouched Trails",
      src: "/riverston.webp",
      content: (
        <p>
          Riverston is a tranquil highland escape known for cloud forests, cool
          climate, and scenic hiking trails, offering a peaceful alternative to
          crowded hill country destinations.
        </p>
      ),
    },
    {
      title: "Kalpitiya Lagoon",
      category: "Winds, Dolphins, and Silent Shores",
      src: "/kalpitiya.webp",
      content: (
        <p>
          Kalpitiya is a secluded coastal region famous for dolphin watching,
          kitesurfing, and untouched beaches, ideal for travelers seeking
          serenity and raw nature.
        </p>
      ),
    },
    {
      title: "Nilaveli Beach",
      category: "Crystal Waters of the East Coast",
      src: "/nilaveli.webp",
      content: (
        <p>
          Nilaveli offers pristine white sands and turquoise waters far from the
          bustle of the south coast, making it perfect for snorkeling and
          relaxed beach stays.
        </p>
      ),
    },
    {
      title: "Madulsima Mini World’s End",
      category: "Cliffs Above the Clouds",
      src: "/mini-worlds.webp",
      content: (
        <p>
          Madulsima provides breathtaking cliffside views similar to World’s End
          but with fewer visitors, offering dramatic sunrises and a sense of
          untouched wilderness.
        </p>
      ),
    },
    {
      title: "Gal Oya National Park",
      category: "Wildlife by the Water",
      src: "/galoya.webp",
      content: (
        <p>
          Gal Oya is one of Sri Lanka’s least visited national parks, uniquely
          offering boat safaris where elephants can be seen swimming between
          islands.
        </p>
      ),
    },
    {
      title: "Jungle Beach, Unawatuna",
      category: "A Secret Cove Near History",
      src: "/jungle-beach.webp",
      content: (
        <p>
          Tucked away near Galle Fort, Jungle Beach is a small, peaceful bay
          surrounded by greenery, perfect for swimming and escaping crowded
          beaches.
        </p>
      ),
    },
    {
      title: "Mannar Island",
      category: "Desert Landscapes and Ancient Ruins",
      src: "/mannar.webp",
      content: (
        <p>
          Mannar Island offers a unique landscape of baobab trees, salt flats,
          and historic ruins, providing a completely different experience from
          the rest of Sri Lanka.
        </p>
      ),
    },
  ];
  return (
    <div id="Blogs">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center mt-10 ">
        Tales from the Trail
      </h1>
      <Carousel
        items={data.map((card, idx) => (
          <Card key={idx} index={idx} card={card} layout />
        ))}
      />
    </div>
  );
};

export default CulturalThings;
