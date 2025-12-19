import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import mitsubishi1 from "../images/mitsubhishi3.jfif";
import mitsubishi2 from "../images/mitsubhishi4.jfif";

/* ---------------- MOCK API ---------------- */

const fetchProducts = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: mitsubishi1,
          name: "Mitsubishi AC Drive",
          brand: "Mitsubishi",
          model: "P-200X",
          location: "Ludhiana, Punjab",
          price: "₹213.23",
          description:
            "Industrial-grade AC drive for reliable speed control.",
          specs: { power: "3 HP", phase: "3 Phase", area: "250 sq ft" },
          seller: "Saini Enterprises",
          industries: ["Textile", "FMCG"],
          stock: "In Stock",
          trending: true,
        },
        {
          id: 2,
          image: mitsubishi2,
          name: "Panasonic AC Drive",
          brand: "Delta",
          model: "DX-88",
          location: "Rohini, New Delhi",
          price: "₹345.18",
          description:
            "Compact and efficient AC drive for automation systems.",
          specs: { power: "5 HP", phase: "3 Phase", area: "450 sq ft" },
          seller: "Yogesh Saini",
          industries: ["Packaging", "Pharma"],
          stock: "Limited",
          trending: true,
        },
        {
          id: 3,
          image: mitsubishi1,
          name: "Servo Drive",
          brand: "Delta",
          model: "ASDA-B2",
          location: "Noida, UP",
          price: "₹520.00",
          description:
            "High-precision servo drive for motion control.",
          specs: { power: "2 HP", phase: "3 Phase", area: "300 sq ft" },
          seller: "Automation Hub",
          industries: ["Robotics", "CNC"],
          stock: "On Order",
          trending: false,
        },{
          id: 1,
          image: mitsubishi1,
          name: "Mitsubishi AC Drive",
          brand: "Mitsubishi",
          model: "P-200X",
          location: "Ludhiana, Punjab",
          price: "₹213.23",
          description:
            "Industrial-grade AC drive for reliable speed control.",
          specs: { power: "3 HP", phase: "3 Phase", area: "250 sq ft" },
          seller: "Saini Enterprises",
          industries: ["Textile", "FMCG"],
          stock: "In Stock",
          trending: true,
        },
        {
          id: 2,
          image: mitsubishi2,
          name: "Panasonic AC Drive",
          brand: "Delta",
          model: "DX-88",
          location: "Rohini, New Delhi",
          price: "₹345.18",
          description:
            "Compact and efficient AC drive for automation systems.",
          specs: { power: "5 HP", phase: "3 Phase", area: "450 sq ft" },
          seller: "Yogesh Saini",
          industries: ["Packaging", "Pharma"],
          stock: "Limited",
          trending: true,
        },
        {
          id: 3,
          image: mitsubishi1,
          name: "Servo Drive",
          brand: "Delta",
          model: "ASDA-B2",
          location: "Noida, UP",
          price: "₹520.00",
          description:
            "High-precision servo drive for motion control.",
          specs: { power: "2 HP", phase: "3 Phase", area: "300 sq ft" },
          seller: "Automation Hub",
          industries: ["Robotics", "CNC"],
          stock: "On Order",
          trending: false,
        }
      ]);
    }, 800)
  );

/* ---------------- COMPONENT ---------------- */

const ProductCards = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inquiryProduct, setInquiryProduct] = useState(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-14 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-[#f8991d] uppercase tracking-widest text-sm font-semibold">
            Trending Products
          </span>
          <h2 className="mt-2 text-3xl font-bold text-neutral-900">
            Industrial Automation Products
          </h2>
          <p className="mt-3 text-neutral-600 text-sm">
            High-demand automation components trusted by industries.
          </p>
        </div>

        {/* ARROWS */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2
                     h-9 w-9 rounded-full bg-white border shadow
                     items-center justify-center hover:border-[#f8991d]"
        >
          ‹
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2
                     h-9 w-9 rounded-full bg-white border shadow
                     items-center justify-center hover:border-[#f8991d]"
        >
          ›
        </button>

        {/* SCROLL */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-6
                     snap-x snap-mandatory scroll-smooth
                     hide-scrollbar"
        >
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="min-w-[280px] h-[360px]
                             bg-neutral-100 rounded-xl animate-pulse"
                />
              ))
            : products.map((p) => (
                <div
                  key={p.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/products/${p.id}`)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && navigate(`/products/${p.id}`)
                  }
                  className="min-w-[280px] flex-shrink-0 snap-start
                             bg-white border rounded-xl
                             shadow-sm hover:shadow-lg transition
                             cursor-pointer focus:outline-none
                             focus:ring-2 focus:ring-[#f8991d]/40"
                >
                  {/* IMAGE */}
                  <div className="relative h-40 rounded-t-xl overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover
                                 transition-transform duration-500
                                 hover:scale-[1.04]"
                    />

                    {p.trending && (
                      <span className="absolute top-3 right-3
                        bg-red-600 text-white text-[11px]
                        px-2 py-0.5 rounded-full">
                        Trending
                      </span>
                    )}

                    <span
                      className={`absolute bottom-3 left-3
                        text-[11px] px-2 py-0.5 rounded-full
                        ${
                          p.stock === "In Stock"
                            ? "bg-green-600 text-white"
                            : p.stock === "Limited"
                            ? "bg-orange-500 text-white"
                            : "bg-neutral-600 text-white"
                        }`}
                    >
                      {p.stock}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 text-sm">
                    <p className="text-[11px] text-neutral-500">
                      {p.location}
                    </p>

                    <h3 className="mt-1 font-semibold text-neutral-900 text-sm">
                      {p.name}
                    </h3>

                    <p className="text-[12px] text-neutral-600">
                      {p.brand} | {p.model}
                    </p>

                    <p className="mt-1 font-semibold text-neutral-900">
                      {p.price}
                    </p>

                    <p className="mt-1 text-[12px] text-neutral-600">
                      {p.description}
                    </p>

                    {/* SPECS */}
                    <div className="mt-2 grid grid-cols-3 gap-1 text-[11px]">
                      <span className="bg-neutral-100 px-1 py-0.5 rounded">
                        {p.specs.power}
                      </span>
                      <span className="bg-neutral-100 px-1 py-0.5 rounded">
                        {p.specs.phase}
                      </span>
                      <span className="bg-neutral-100 px-1 py-0.5 rounded">
                        {p.specs.area}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] text-neutral-500">
                      Supplier: <strong>{p.seller}</strong>
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-3 space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setInquiryProduct(p);
                        }}
                        className="w-full bg-[#f8991d]
                                   text-white text-xs font-semibold
                                   py-2 rounded-lg"
                      >
                        Request Quote
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/products/${p.id}`);
                        }}
                        className="w-full border border-neutral-300
                                   text-neutral-700 text-xs font-semibold
                                   py-2 rounded-lg
                                   hover:border-[#f8991d]
                                   hover:text-[#f8991d]
                                   transition"
                      >
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* VIEW MORE */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/all-products")}
            className="
              inline-flex items-center gap-2
              px-7 py-2.5
              rounded-full
              border border-[#f8991d]
              text-[#f8991d] text-sm font-semibold
              transition-all duration-300
              hover:bg-[#f8991d] hover:text-white
            "
          >
            View More Products →
          </button>
        </div>
      </div>

      {/* MODAL */}
      {inquiryProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <h3 className="font-semibold text-neutral-900">
              Request Quote – {inquiryProduct.name}
            </h3>
            <button
              onClick={() => setInquiryProduct(null)}
              className="mt-4 w-full bg-[#f8991d]
                         text-white py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCards;
