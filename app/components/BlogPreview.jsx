import Link from "next/link";

export default function BlogPreview({
  title = "Default Title",
  date = "Default Date",
  content = "Default Content",
  slug = "#",
}) {
  return (
    <div className="flex flex-col mx-2 lg:flex-row justify-center lg:gap-20 xl:gap-40 lg:items-center font-lateef mt-[100px]">
      {/* Left section: Title and Date */}
      <div className="flex flex-col lg:ml-10 xl:ml-16 2xl:ml-20 mb-4 lg:mb-0">
        <h2 className="font-normal text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-wrap">
          {title}
        </h2>
        <p className="flex items-center text-descriptionGray text-sm sm:text-lg lg:text-xl xl:text-2xl">
          {date}
        </p>
      </div>

      {/* Right section: Blog Body */}
      <div className="lg:mr-10 lg:min-w-[300px] max-w-3xl text-lg lg:text-2xl font-normal">
        <p>{content}</p>
        <Link
          href={slug ? `/blog/${slug}` : "#"}
          className="underline decoration-underlineBlue decoration-1 underline-offset-4 mt-4 inline-block"
        >
          continue reading -{">"}
        </Link>
      </div>
    </div>
  );
}
