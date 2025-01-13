// components/SectionTitle.js
export default function SectionTitle({ title = "recent blog" }) {
  return (
    <div className="flex justify-center items-center mt-[850px]">
      <p className="text-2xl font-lateef font-normal underline decoration-underlineBlue decoration-1 underline-offset-[6px]">
        {title}
      </p>
    </div>
  );
}
