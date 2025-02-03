export default function BlogPreview({
  title = "Default Title",
  date = "Default Date",
  content = "Default Content",
  link = "#",
}) {
  return (
    <div className="flex flex-col mx-2 sm:flex-row justify-center sm:gap-20 md:gap-44 sm:items-center font-lateef mt-[100px]">
      {/* Left section: Title and Date */}
      <div className="flex flex-col sm:ml-10 mb-4 sm:mb-0">
        <h2 className="font-normal text-2xl sm:text-3xl text-nowrap">
          {title}
        </h2>
        <p className="flex items-center text-descriptionGray text-lg">{date}</p>
      </div>

      {/* Right section: Blog Body */}
      <div className="sm:mr-10 max-w-3xl text-lg sm:text-2xl font-normal">
        <p>{content}</p>
        <a
          href={link}
          className="underline decoration-underlineBlue decoration-1 underline-offset-4 mt-4 inline-block"
        >
          continue reading -{">"}
        </a>
      </div>
    </div>
  );
}
