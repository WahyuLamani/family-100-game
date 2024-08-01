"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const BackspaceNavigation: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        event.preventDefault(); // Mencegah aksi default jika diperlukan
        router.back();
      }
    };

    // Menambahkan event listener untuk 'keydown'
    window.addEventListener("keydown", handleKeyDown);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router]);

  return null; // Komponen ini tidak perlu merender apa pun
};

export default BackspaceNavigation;
