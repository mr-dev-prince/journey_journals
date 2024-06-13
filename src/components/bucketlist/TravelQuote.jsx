import WordRotate from "@/components/ui/word-rotate";

export async function TravelQuote() {
  return (
    <div className="h-[6rem] mt-[15vh] mb-16 flex gap-4">
      <div className="h-full w-3 rounded-r-full bg-black dark:bg-white" />
      <WordRotate
        className="text-4xl font-bold text-black dark:text-white"
        quotes={Quotes}
      />
    </div>
  );
}

const Quotes = [
  "The journey of a thousand miles begins with a single step.",
  "Not all those who wander are lost.",
  "The world is a book, and those who do not travel read only one page.",
  "To travel is to live.",
  "Traveling: it leaves you speechless, then turns you into a storyteller.",
  "Take only memories, leave only footprints.",
  "The gladdest moment in human life is a departure into unknown lands.",
  "Travel makes one modest. You see what a tiny place you occupy in the world.",
  "We travel not to escape life, but for life not to escape us.",
  "Travel is the only thing you buy that makes you richer.",
  "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
  "Life begins at the end of your comfort zone.",
];
