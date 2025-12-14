"use client"

import React, { useEffect, useState } from "react"
// 1. Import Link from react-router-dom (or next/link if using Next.js)
import { Link } from "react-router-dom"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

interface EventType {
  _id: string // 2. Added an ID field for linking
  title: string
  imageUrl: string
}

const HeroCaro = () => {
  const [events, setEvents] = useState<EventType[]>([])
  const [loading, setLoading] = useState(true)

  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // 3. Let the plugin handle hover state
    })
  )

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}api/events`)
        const data: EventType[] = await res.json()
        setEvents(data)
      } catch (error) {
        console.error("Error fetching events:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return <p className="text-center text-gray-500">Loading events...</p>
  }

  return (
    <div className="flex flex-col justify-center">
      <Carousel
        plugins={[plugin.current]}
        opts={{ loop: true }}
        className="w-full max-w-5xl mx-auto"
        // 4. Removed onMouseEnter and onMouseLeave props
      >
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem
              key={event._id} // 5. Use the event ID as the key
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              {/* 6. Wrap the card content in a Link */}
              <Link to={`/event/${event._id}`}>
                <div className="p-2 flex flex-col items-center">
                  <Card className="overflow-hidden rounded-lg">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={`${import.meta.env.VITE_BACKEND_URL}${event.imageUrl}`}
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
  )
}

export default HeroCaro