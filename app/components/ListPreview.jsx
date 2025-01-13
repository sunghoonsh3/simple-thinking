import clsx from "clsx";

export default function ListPreview({
  title = "default title",
  description = "default description",
  date = "default date",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex justify-center mt-10 px-6 font-lateef font-normal text-3xl", // Center entire div
        className
      )}
    >
      {/* Inner container with max width */}
      <div className="flex justify-start gap-x-[1000px] w-full max-w-[1500px]">
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <h2 className="font-normal">{title}</h2>
          <p className="text-descriptionGray mt-2">{description}</p>
        </div>
        {/* Right Column */}
        <div className="flex flex-col items-start">
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
}
