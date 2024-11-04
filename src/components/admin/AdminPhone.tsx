"use client";
import { getAllPhones } from "@/utils/fetchUserData";
import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SpinLoader from "../SpinLoader";
import { addNewPhone, scrapeDataForPhone } from "@/utils/fetchAdminData";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  // Fetch phones from backend
  const fetchPhones = async () => {
    const data = await getAllPhones(""); // empty "" means fetch all phones
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
            <th className="py-2 px-4 border-b">Brand</th>
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Price</th>
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
              <td className="py-2 px-4">{phone.brand}</td>
              <td className="py-2 px-4">{phone.model}</td>
              <td className="py-2 px-4">
                {phone.basePrice ? (
                  <span>{`₹${phone.basePrice}`}</span>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="py-2 px-4">
                {phone.variantPrices && phone.variantPrices.length > 0 ? (
                  <ul className="space-y-2">
                    {phone.variantPrices.map((variant: any, vIndex: number) => (
                      <li key={vIndex}>
                        {variant.variantName}: ₹{variant.basePrice}
                        {vIndex < phone.variantPrices.length - 1 && (
                          <hr className="border-t border-gray-300 my-2" />
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No Variants</span>
                )}
              </td>
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
  const [variants, setVariants] = useState<
    { variantName: string; basePrice: number }[]
  >([]);
  const [basePrice, setBasePrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  const handleLinkSubmit = async () => {
    setLoading(true);
    try {
      const data = await scrapeDataForPhone(link);
      console.log(data);

      setBrand(data.brand || "");
      setModel(data.model || "");
      setName(data.name || "");
      setThumbnail(data.thumbnail || "");
      setImages(data.images || []);
      
      // The scrape route returns only variant names in variants array
      if(!data.variants)
        data.variants = []
      setVariants(data.variants.map((variant: any) => {
        return {
          variantName: variant,
          basPrice: undefined
        };
      }));

      setBasePrice(data.basePrice || null);
    } catch (error) {
      console.error("Failed to fetch phone details:", error);
      alert("Error fetching phone details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !brand || !model || !thumbnail) {
      alert("Please fill in all required fields: Name, Brand, Model, and Thumbnail.");
      return;
    }

    // Check if either basePrice or variants is provided, but not both
    if ((basePrice !== null && variants.length > 0) ||
      (basePrice === null && variants.length === 0)) {
      alert("Please provide either a base price or variant prices, not both.");
      return;
    }

    // Validate that variants have both variantName and basePrice
    for (const variant of variants) {
      if (!variant.variantName || !variant.basePrice) {
        alert("Each variant must have both a name and a base price.");
        return;
      }
    }


    setLoading(true);
    try {
      const details = {
        name,
        brand,
        model,
        thumbnail,
        images,
        variantPrices: variants.length > 0 ? variants : undefined,
        basePrice: basePrice !== null ? basePrice : undefined,
      };

      const data = await addNewPhone(details);
      alert("Phone added successfully!");
      setOpen(false); // Close modal on success
    } catch (error) {
      console.error("Failed to add phone:", error);
      alert("Error adding phone. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddVariant = () => {
    setVariants([...variants, { variantName: "", basePrice: 0 }]);
  };

  const handleRemoveVariant = (index: number) => {
    setVariants(variants.filter((_, i) => i !== index));
  };

  const handleVariantChange = (index: number, field: string, value: string | number) => {
    const updatedVariants = [...variants];
    if (field === "variantName") {
      updatedVariants[index].variantName = value as string;
    } else if (field === "basePrice") {
      updatedVariants[index].basePrice = Number(value);
    }
    setVariants(updatedVariants);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="bg-blue-500 hover:bg-blue-600 w-16 sm:w-32 rounded-lg text-base text-white">
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
                {variants.map((variant, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Variant Name"
                      value={variant.variantName}
                      onChange={(e) => handleVariantChange(index, "variantName", e.target.value)}
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={variant.basePrice}
                      onChange={(e) => handleVariantChange(index, "basePrice", e.target.value)}
                      className="border border-gray-300 p-2 rounded-lg w-1/2"
                    />
                    <Button
                      type="button" // Prevents form submission
                      onClick={() => handleRemoveVariant(index)}
                      className="bg-red-500 text-white p-2 rounded-lg"
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <Button onClick={handleAddVariant} className="bg-green-500 text-white p-2 rounded-lg">
                  Add Variant
                </Button>
              </div>
              <input
                type="number"
                placeholder="Base Price (if no variants)"
                value={basePrice || ""}
                onChange={(e) => setBasePrice(e.target.value ? parseFloat(e.target.value) : null)}
                className="border border-gray-300 p-2 rounded-lg w-full"
              />

              <button
                type="submit"
                className="text-white px-4 py-2 rounded-lg w-full text-center flex justify-center bg-blue-500"
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
