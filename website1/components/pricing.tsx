"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ACCENT = "#AEFFDE"

const products = [
  {
    id: 1,
    name: "Premium Watch",
    image: "/luxury-watch-product.jpg",
    link: "#product-1",
  },
  {
    id: 2,
    name: "Designer Bag",
    image: "/designer-handbag-product.jpg",
    link: "#product-2",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    image: "/premium-headphones.png",
    link: "#product-3",
  },
  {
    id: 4,
    name: "Smart Glasses",
    image: "/smart-glasses-product.png",
    link: "#product-4",
  },
  {
    id: 5,
    name: "Leather Wallet",
    image: "/premium-leather-wallet.png",
    link: "#product-5",
  },
  {
    id: 6,
    name: "Running Shoes",
    image: "/athletic-running-shoes.jpg",
    link: "#product-6",
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Our Products
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Our Products.</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300">
            Explore our curated collection of premium products.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full px-5 text-neutral-900 hover:brightness-95"
              style={{ backgroundColor: "#E4F1FF" }}
            >
              <Link href="https://wa.link/rc25na" target="_blank">
                Contact now
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)] hover:scale-[1.02]"
            >
              <Card className="border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="relative aspect-[340/460] w-full overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{product.name}</h3>
                    <p
                      className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: ACCENT }}
                    >
                      View Details →
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
