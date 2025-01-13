export default function BlogPreview({
  blogTitle = "what i love about nd",
  date = "Friday, December 27, 2024",
  content = "I’ve been closely monitoring the reports of pro-Palestinian protests at various U.S. university campuses, a topic widely covered by Korean media. My interest in the Israeli-Palestinian conflict is not new; it was the subject of my History EE, focusing on the Balfour Declaration and its ongoing implications.",
  navigation = "#",
}) {
  return (
    <div className="flex justify-center gap-10 items-center font-lateef mt-[100px]">
      {/* Left section: Title and Date */}
      <div className="flex flex-col text-gray-700 bg-amber-600">
        <h2 className="font-normal text-2xl">{blogTitle}</h2>
        <p className="text-sm">{date}</p>
      </div>

      {/* Right section: Blog Body */}
      <div className="bg-violet-50 max-w-lg text-xl font-normal">
        <p>{content}</p>
      </div>
      <a
        href={navigation}
        className="underline decoration-underlineBlue decoration-1 underline-offset-4"
      >
        Continue reading -{">"}
      </a>
    </div>
  );
}
