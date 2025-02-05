import clsx from "clsx";

export default function ListPreview_25({
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
          max-[350px]:grid-cols-[130px_115px]
          grid-cols-[170px_155px]
          sm:grid-cols-[320px_305px]
          xl:grid-cols-[500px_485px]
          2xl:grid-cols-[600px_585px]   /* first column 400px wide, second grows */              /* horizontal gap between columns */
          w-full
          max-w-[1500px]
        "
      >
        {/* Left Column */}
        <div className="text-lg sm:text-2xl">
          <h2 className="font-normal">{title}</h2>
          <p className="text-descriptionGray text-nowrap mt-2">{description}</p>
        </div>

        {/* Right Column (date), left-aligned */}
        <div className="grid justify-end">
          <h2 className="grid grid-cols-[50px] sm:grid-cols-[80px] text-lg sm:text-2xl justify-start">
            {date}
          </h2>
        </div>
      </div>
    </div>
  );
}
