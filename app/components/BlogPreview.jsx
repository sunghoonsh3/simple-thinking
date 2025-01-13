export default function BlogPreview({
  title = "Default Title",
  date = "Default Date",
  content = "Default Content",
  link = "#",
}) {
  return (
    <div className="flex justify-center gap-44 items-center font-lateef mt-[100px]">
      {/* Left section: Title and Date */}
      <div className="flex flex-col">
        <h2 className="font-normal text-2xl">{title}</h2>
        <p className="text-sm text-descriptionGray">{date}</p>
      </div>

      {/* Right section: Blog Body */}
      <div className="max-w-3xl text-2xl font-normal">
        <p>{content}</p>
        <a
          href={link}
          className="underline decoration-underlineBlue decoration-1 underline-offset-4 mt-4 inline-block"
        >
          Continue reading -{">"}
        </a>
      </div>
    </div>
  );
}
