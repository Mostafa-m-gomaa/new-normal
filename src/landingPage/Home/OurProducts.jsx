import { Link } from "react-router-dom";
import imageOne from "../../assets/products/product_1.png";
import imageTwo from "../../assets/products/product_2.png";
import imageThree from "../../assets/products/product_3.png";
import imageFour from "../../assets/products/product_4.png";
const OurProducts = () => {
  const products = [
    {
      image: imageOne,
      heading: "ادوات استثمارية مساعدة",
      paragraph: "تحليلات الخبير للتطبيق",
    },
    {
      image: imageTwo,
      heading: "محللين المستقبل",
      paragraph:
        "يجمع بين الخبير و المتدربين و المحللين لمناقشة التحليل والتصحيح",
    },
    {
      image: imageThree,
      heading: "خدمة الرد على استفسارات المتدربين",
      paragraph: "مجتمع المتدربين للنقاشات",
    },
    { image: imageFour, heading: "تعليم شامل للأسواق المالية ومدارس التحليل" },
  ];
  return (
    <section className="py-16 " id="productsSection">
      <div className="container mx-auto">
        <div>
          <div className="flex my-12 items-center gap-8">
            <div className="flex-1">
              <h2 className="leading-tight mx-auto text-2xl md:text-4xl lg:text-5xl">
                الخدمات
              </h2>
            </div>

            <Link
              to={"/login"}
              className="py-3 group hidden lg:flex items-center gap-2 rounded-full bg-mainText text-main text-sm font-medium px-6"
            >
              <i className="text-xs transition-all group-hover:translate-x-1 duration-300 fa-solid fa-angle-right"></i>
              <span>ابدأ الان</span>
            </Link>
          </div>
          {/* <div className="relative mt-32">
            {products.map((product, index) => (
              <div
                key={index}
                style={{
                  zIndex: 10 - index,
                  transform: `translateY(${index * 20 - 50}px)`,
                }}
                className="sm:h-[480px] flex sm:flex-row flex-col  items-center gap-4 sm:gap-8 sticky bottom-[50px] mx-auto -translate-y-1 p-8 md:p-16 rounded-lg border border-mainBorders bg-main shadow-lg"
              >
                <img
                  src={product.image}
                  className="sm:w-[20%] max-h-full border-4 rounded-xl border-mainBorders"
                  alt=""
                />{" "}
                <div className="sm:w-[50%]">
                  <h3 className="text-2xl md:text-3xl font-semibold ">
                    {product.heading}
                  </h3>
                  <p className="my-8 text-sm sm:text-base">
                    {product.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="cards-cont">
            {products.map((product, index) => (
              <div className="product-card border border-mainBorders" key={index}>
                <img
                  src={product.image}
                 
                />{" "}
                
                  <h3 className="text-gold">
                    {product.heading}
                  </h3>
                  <p>
                    {product.paragraph}
                  </p>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
