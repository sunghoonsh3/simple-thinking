import Link from "next/link";

export default function StackBlogPreview({
  title = "Default Title",
  date = "Default Date",
  content = "Default Content",
  slug = "#",
}) {
  return (
    <div className="flex flex-col lg:flex-row justify-start lg:items-start font-lateef mt-10">
      {/* Left section: Title and Date */}
      <div className="flex flex-col mx-2 sm:mx-20 xl:mx-60 2xl:ml-[780px] mb-4 lg:mb-0">
        <h2 className="font-normal text-xl md:text-2xl lg:text-2xl whitespace-nowrap text-wrap mb-2">
          {title}
        </h2>
        <p className="flex items-center text-descriptionGray text-sm sm:text-lg lg:text-lg xl:text-xl mb-2">
          {date}
        </p>

        {/* Right section: Blog Body */}
        <div className="lg:mr-10 md:max-w-[800px] xl:max-w-[1200px] max-w-3xl text-lg lg:text-xl font-normal">
          <p>{content}</p>
          <Link
            href={slug ? `/blog/${slug}` : "#"}
            className="underline decoration-underlineBlue decoration-1 underline-offset-4 mt-4 inline-block"
          >
            continue reading -{">"}
          </Link>
        </div>
      </div>
    </div>
  );
}
