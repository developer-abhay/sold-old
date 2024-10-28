"use client";
import { getAllPhones } from "@/utils/fetchUserData";
import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SpinLoader from "../SpinLoader";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  // Fetch phones from backend
  const fetchPhones = async () => {
    const data = await getAllPhones(""); // empty "" means fetch all phone
    setPhones(data);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Phones</h1>
      <AddPhoneModal />
      {/* Phones Table */}
      <table className="mt-5 min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Models</th>
            <th className="py-2 px-4 border-b">Variants</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((phone: any, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4">{phone.name}</td>
              <td className="py-2 px-4">
                <img src={phone.thumbnail} alt={phone.brand} width={50} />
              </td>
              <td>{phone.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Add new phone modal
const AddPhoneModal: React.FC<any> = ({ text }) => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [variantPrices, setVariantPrices] = useState<
    { variantName: string; basePrice: number }[]
  >([]);
  const [basePrice, setBasePrice] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  const handleLinkSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetchPhoneDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ link }),
      });
      const data = await response.json();

      setName(data.name || "");
      setBrand(data.brand || "");
      setModel(data.model || "");
      setThumbnail(data.thumbnail || "");
      setImages(data.images || []);
      setVariantPrices(data.variantPrices || []);
      setBasePrice(data.basePrice || null);
    } catch (error) {
      alert("Failed to fetch phone details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if either basePrice or variantPrices is provided, but not both
    if (
      (basePrice !== null && variantPrices.length > 0) ||
      (basePrice === null && variantPrices.length === 0)
    ) {
      alert("Please provide either a base price or variant prices, not both.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/sellable-phone/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          brand,
          model,
          thumbnail,
          images,
          variantPrices: variantPrices.length > 0 ? variantPrices : undefined,
          basePrice: basePrice !== null ? basePrice : undefined,
        }),
      });

      if (response.status === 201) {
        alert("Phone added successfully!");
        setOpen(false); // Close modal on success
      } else {
        alert("Failed to add phone. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="bg-blue-500  hover:bg-blue-600 w-16 sm:w-32 rounded-lg text-base text-white">
          Add Phone
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="z-40 bg-black bg-opacity-70 fixed inset-0" />
        <Dialog.Content className="fixed top-1/2 left-1/2 min-w-[800px] min-h-[70vh] max-h-[90vh] transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 flex overflow-scroll">
          <div className="w-full">
            <h1 className="text-xl font-semibold">Add Phone Link</h1>
            <div className="mb-4 flex gap-2">
              <input
                type="text"
                placeholder="Enter URL with phone details"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
              <Button
                className="bg-blue-800 text-white hover:bg-blue-900 w-16 sm:w-32 rounded-lg text-base"
                onClick={handleLinkSubmit}
                disabled={loading}
              >
                {loading ? <SpinLoader /> : "Fetch Details"}
              </Button>
            </div>
            <h1 className="text-xl font-semibold">Add Phone Details</h1>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Phone Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                placeholder="Thumbnail URL"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full"
                required
              />
              <textarea
                placeholder="Image URLs (comma separated)"
                value={images.join(", ")}
                onChange={(e) =>
                  setImages(e.target.value.split(", ").map((img) => img.trim()))
                }
                className="border border-gray-300 p-2 rounded-lg w-full"
              />
              <div className="space-y-2">
                <label>Variant Prices (optional)</label>
                {variantPrices.map((variant, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Variant Name"
                      value={variant.variantName}
                      onChange={(e) => {
                        const updatedVariants = [...variantPrices];
                        updatedVariants[index].variantName = e.target.value;
                        setVariantPrices(updatedVariants);
                      }}
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={variant.basePrice}
                      onChange={(e) => {
                        const updatedVariants = [...variantPrices];
                        updatedVariants[index].basePrice = parseFloat(
                          e.target.value
                        );
                        setVariantPrices(updatedVariants);
                      }}
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <Button
                      onClick={() =>
                        setVariantPrices((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() =>
                    setVariantPrices([
                      ...variantPrices,
                      { variantName: "", basePrice: 0 },
                    ])
                  }
                >
                  Add Variant
                </Button>
              </div>
              <input
                type="number"
                placeholder="Base Price (if no variants)"
                value={basePrice || ""}
                onChange={(e) =>
                  setBasePrice(
                    e.target.value ? parseFloat(e.target.value) : null
                  )
                }
                className="border border-gray-300 p-2 rounded-lg w-full"
              />

              <button
                type="submit"
                className={cn(
                  "text-white px-4 py-2 rounded-lg w-full text-center flex justify-center",
                  "bg-blue-500"
                )}
                disabled={loading}
              >
                {loading ? <SpinLoader /> : "Add Phone"}
              </button>
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Phones;
