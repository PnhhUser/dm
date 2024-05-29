export default function HeaderContent({ text, icon }) {
  return (
    <div className="h-10 leading-10 bg-teaDark">
      <p className="capitalize text-[#EEF7FF] font-semibold pl-3 flex w-full items-center ">
        {icon}
        <span className="pl-1">{text}</span>
      </p>
    </div>
  );
}
