import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect({projects}) {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}

