"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface EventType {
  _id: string;
  title: string;
  imageUrl: string;
}

interface HeroCaroProps {
  type: "Event" | "Movie" | "Festival";
}

const HeroCaro = ({ type }: HeroCaroProps) => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);

  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}api/events?type=${type}`
        );
        const data: EventType[] = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [type]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading events...</p>;
  }

  return (
    <div className="flex flex-col justify-center">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem
              key={event._id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <Link to={`/${type.toLowerCase()}/${event._id}`}>
                <div className="p-2 flex flex-col items-center">
                  <Card className="overflow-hidden rounded-lg">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}${
                          event.imageUrl
                        }`}
                        alt={event.title}
                        className="object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"
                      />
                    </CardContent>
                  </Card>
                  <p className="mt-2 text-center text-sm font-semibold text-black dark:text-white">
                    {event.title}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCaro;
