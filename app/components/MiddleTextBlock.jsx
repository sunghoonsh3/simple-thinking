import clsx from "clsx";

export default function MiddleTextBlock({
  title = "default title",
  description = "default description",
  className = "",
}) {
  return (
    <div
      className="flex justify-center mt-10 font-lateef font-normal text-lg sm:text-2xl 2xl:text-3xl" // Center entire div
    >
      {/* Inner container with max width */}
      <div>
        {/* Left Column */}
        <div className="w-full max-w-3xl text-center">
          <div className="flex flex-col items-center">
            <h2 className={(clsx("font-lateef"), className)}>{title}</h2>
            <p className="text-descriptionGray mt-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
