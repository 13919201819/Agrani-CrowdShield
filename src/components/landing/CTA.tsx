"use client";

import { useRouter } from "next/navigation";

export default function CTA() {
  const router = useRouter();

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl mb-6">Ready to Secure Your City?</h2>

      <button
        onClick={() => router.push("/login")}
        className="px-8 py-3 bg-purple-600 rounded-lg"
      >
        Get Started
      </button>
    </section>
  );
}