import clsx from "clsx";

export default function MiddleTextBlock({
  title = "default title",
  description = "default description",
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
      <div>
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <h2 className="font-normal">{title}</h2>
          <p className="text-descriptionGray mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
