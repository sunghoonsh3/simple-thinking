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
        "flex justify-center mt-10 px-6 font-lateef font-normal text-2xl 2xl:text-3xl whitespace-nowrap",
        className
      )}
    >
      {/* Inner container with max width */}
      <div
        className="
          grid
          justify-center
          sm:grid-cols-[250px_250px]
          lg:grid-cols-[320px_320px]
          xl:grid-cols-[500px_500px]
          2xl:grid-cols-[600px_600px]   /* first column 400px wide, second grows */              /* horizontal gap between columns */
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
        <div className="grid justify-end">
          <h2 className="grid grid-cols-[50px] justify-start">{date}</h2>
        </div>
      </div>
    </div>
  );
}
