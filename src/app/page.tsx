// src/app/page.tsx
import { GradientBlob } from "@/components/ui/gradient-blob";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <GradientBlob
          colors={["#FF0080", "#7928CA"]}
          size="lg"
          className="absolute -z-10"
        />
        <div className="text-4xl font-bold">Haber UI</div>
      </div>
    </div>
  );
}
