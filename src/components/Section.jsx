import { Link } from "react-router-dom";

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-[104px] bg-[#f9f8fe] pt-8 md:pt-14">
      
      <div className="flex items-center justify-between mb-[24px] px-4 md:px-0">
        <h2 className="text-[24px] font-semibold text-[#474747]"> {title} </h2>
        {link && titleAlign !== "center" && (
          <Link to={link.href} className="text-[#c92071] text-[16px] font-medium whitespace-nowrap hover:underline">{link.text} <span className="inline-block"> → </span>
          </Link>
        )}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;