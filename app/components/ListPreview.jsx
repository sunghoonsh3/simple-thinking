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
        "flex justify-center mt-10 px-6 font-lateef font-normal text-3xl whitespace-nowrap",
        className
      )}
    >
      {/* Inner container with max width */}
      <div
        className="
          grid
          grid-cols-[400px_auto]  /* first column 400px wide, second grows */
          gap-x-[1000px]                /* horizontal gap between columns */
          w-full
          max-w-[1500px]
        "
      >
        {/* Left Column */}
        <div>
          <h2 className="font-normal">{title}</h2>
          <p className="text-descriptionGray mt-2">{description}</p>
        </div>

        {/* Right Column (date), left-aligned */}
        <div>
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
}
