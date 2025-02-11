import clsx from "clsx";

export default function ListPreview({
  title = "default title",
  description = "",
  date = "",
  recommendation = "",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex justify-center mt-10 font-lateef font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl",
        className
      )}
    >
      {/* Flexbox for Equal Spacing */}
      <div
        className="
          flex w-full lg:max-w-[1100px] 2xl:max-w-[1500px] justify-between items-start
          px-4 sm:px-6 lg:px-12
        "
      >
        {/* Left Column (Title + Description) */}
        <div className="flex-1 pr-4 max-w-44 sm:max-w-none">
          <h2 className="leading-snug text-lg sm:text-xl md:text-2xl 2xl:text-3xl">
            {title}
          </h2>
          <p className="text-descriptionGray mt-1 text-base sm:text-lg md:text-xl 2xl:text-3xl">
            {description}
          </p>
        </div>

        {/* Right Column (Recommendation) */}
        <div className="text-left max-w-20 sm:max-w-none">
          <h2 className="leading-snug text-lg sm:text-xl md:text-2xl 2xl:text-3xl">
            {recommendation} {date}
          </h2>
        </div>
      </div>
    </div>
  );
}
