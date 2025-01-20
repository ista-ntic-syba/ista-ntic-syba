"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, GraduationCap, Network, UserCog } from "lucide-react"

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = parseInt(value.toString().replace(/,/g, ""))
    const incrementTime = (duration * 1000) / end

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value, duration])

  return count.toLocaleString()
}

const stats = [
  {
    icon: Users,
    value: 455,
    label: "USERS",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: GraduationCap,
    value: 766,
    label: "GRADUATES",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Network,
    value: 200,
    label: "PROJECTS",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: UserCog,
    value: 200,
    label: "EXPERTS",
    color: "from-blue-700 to-blue-900",
  },
]

export default function Stats() {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-blue-900">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}