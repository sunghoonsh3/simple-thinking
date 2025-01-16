// components/SectionTitle.js
export default function SectionTitle({ title = "default title" }) {
  return (
    <div className="flex justify-center items-center mt-10">
      {" "}
      {/* mt-[850px] */}
      <p className="text-3xl font-lateef font-normal underline decoration-underlineBlue decoration-1 underline-offset-[6px]">
        {title}
      </p>
    </div>
  );
}
