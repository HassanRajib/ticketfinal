import { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import ColourfulText from "../ui/colourful-text";
import { Link } from "react-router-dom";
const serverUrl = import.meta.env.VITE_BACKEND_URL;

interface EventItem {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const BentoGri = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${serverUrl}api/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="h-full mb-3">
      <div className="h-full w-full flex items-center justify-center bg-white dark:bg-[#0a0a0a] p-4 mt-3">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center text-black dark:text-white relative z-2 font-other">
          Upcoming <ColourfulText text="Events" />
        </h1>
      </div>

      {loading ? (
        <p className="text-center mt-6 text-gray-500">Loading events...</p>
      ) : (
        // <BentoGrid className="max-w-4xl h-full mx-auto mt-2 mb-3 space-y-12">
        //   {events.map((event, i) => {
        //     const shortDesc =
        //       event.description.split(" ").slice(0, 10).join(" ") +
        //       (event.description.split(" ").length > 10 ? "..." : "");
        //     return (
        //       <Link to={`/event/${event._id}`} key={event._id}>
        //         <BentoGridItem
        //           title={event.title}
        //           description={shortDesc}
        //           header={
        //             <img
        //               src={`${serverUrl}${event.imageUrl}`}
        //               alt={event.title}
        //               className="w-full h-full object-cover rounded-xl "
        //             />
        //           }
        //           className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        //         />
        //       </Link>
        //     );
        //   })}
        // </BentoGrid>
        <BentoGrid className="max-w-6xl mx-auto mt-2 mb-3">
          {events.map((event, i) => {
            const shortDesc =
              event.description.split(" ").slice(0, 10).join(" ") +
              (event.description.split(" ").length > 10 ? "..." : "");

            // This is the 3-2-3 pattern logic.
            // It repeats every 8 items.
            const patternIndex = i % 8;
            
            // 
            // Row 1: 0, 1, 2 (1-col each)
            // Row 2: 3 (2-col), 4 (1-col)
            // Row 3: 5, 6, 7 (1-col each)
            const itemClassName =
              patternIndex === 3 ? "md:col-span-2" : "";

            return (
              <Link to={`/event/${event._id}`} key={event._id}>
                <BentoGridItem
                  title={event.title}
                  description={shortDesc}
                  header={
                    <img
                      src={`${serverUrl}${event.imageUrl}`}
                      alt={event.title}
                      // --- THIS IS THE MAIN FIX ---
                      // "h-full" caused the overlap.
                      // "h-48" ($12rem$) gives the image a fixed height
                      // INSIDE the "18rem" card, leaving 6rem for text and padding.
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  }
                  className={itemClassName}
                />
              </Link>
            );
          })}
        </BentoGrid>
      )}
    </div>
  );
};

export default BentoGri;
