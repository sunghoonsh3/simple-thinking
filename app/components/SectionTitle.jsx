import clsx from "clsx";

// components/SectionTitle.js
export default function SectionTitle({
  title = "default title",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex justify-center items-center text-xl sm:text-2xl 2xl:text-3xl",
        className
      )}
    >
      {" "}
      {/* mt-[850px] */}
      <p className="font-lateef font-normal underline decoration-underlineBlue decoration-1 underline-offset-[6px]">
        {title}
      </p>
    </div>
  );
}
