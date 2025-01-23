import React, { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const events = [
  {
    id: 1,
    title: "Hackathon 2025",
    description: "Join us for our annual coding competition with amazing prizes",
    date: "March 15-16, 2025",
    image: "evenement/photo3.jpeg",
  },
  {
    id: 2,
    title: "Career Fair",
    description: "Meet top employers and discover your future career path",
    date: "April 5, 2025",
    image: "evenement/photo2.jpeg",
  },
  {
    id: 3,
    title: "Tech Workshop Series",
    description: "Learn the latest technologies from industry experts",
    date: "Every Weekend",
    image: "evenement/photo1.jpeg",
  },
]

export default function EventHero({ onNavigate }) {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Memoize slide variants to prevent unnecessary re-renders
  const slideVariants = useMemo(() => ({
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }), [])

  // Memoize swipe calculations
  const swipeConfidenceThreshold = 10000
  const swipePower = useCallback((offset, velocity) => {
    return Math.abs(offset) * velocity
  }, [])

  // Optimize paginate function with useCallback
  const paginate = useCallback((newDirection) => {
    setPage((prevPage) => {
      const newPage = prevPage + newDirection
      setDirection(newDirection)
      return newPage
    })
  }, [])

  // Optimize auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      paginate(1)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])

  // Memoize current event calculation
  const currentIndex = useMemo(() => 
    ((page % events.length) + events.length) % events.length
  , [page])
  
  const currentEvent = useMemo(() => 
    events[currentIndex]
  , [currentIndex])

  // Prevent unnecessary re-renders of event navigation dots
  const NavigationDots = React.memo(() => (
    <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-4 z-20">
      {events.map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setDirection(index > currentIndex ? 1 : -1)
            setPage(index)
          }}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentIndex ? "bg-white w-8" : "bg-white/50"
          }`}
        />
      ))}
    </div>
  ))

  return (
    <div
      className="relative h-[500px] md:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0"
        >
          <LazyLoadImage
            src={currentEvent.image}
            effect="blur"
            wrapperClassName="absolute inset-0"
            className="w-full h-full object-cover"
            alt={currentEvent.title}
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.div
                key={currentEvent.id} // Add key to force re-render of content
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                  {currentEvent.date}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white">{currentEvent.title}</h1>
                <p className="text-xl md:text-2xl text-gray-200">{currentEvent.description}</p>
                <button
                  onClick={() => {
                    onNavigate("actualite")
                    window.scrollTo(0, 0)
                  }}
                  className="mt-8 px-8 py-3 bg-white text-blue-900 rounded-lg font-medium hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
                >
                  Lire plus
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <NavigationDots />

      {/* Arrow Navigation */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/30 transition-colors z-20"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/30 transition-colors z-20"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  )
} 