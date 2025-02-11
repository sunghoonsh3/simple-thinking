import clsx from "clsx";

export default function SectionTitle({
  title = "default title",
  alignment = "center", // Accept "left" or "center"
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex items-center text-xl sm:text-2xl 2xl:text-3xl",
        {
          "justify-start0": alignment === "left",
          "ml-2 sm:ml-20 xl:ml-32 2xl:ml-20": alignment === "left",
          "justify-center": alignment === "center",
          "justify-end": alignment === "right", // Optional
        },
        className
      )}
    >
      <p className="font-lateef font-normal underline decoration-underlineBlue decoration-1 underline-offset-[6px]">
        {title}
      </p>
    </div>
  );
}
