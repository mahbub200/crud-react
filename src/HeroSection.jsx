import frame from "./assets/frame.jpeg";
export default function HeroSection() {
  return (
    <section className="pb-[112px] pt-20 md:mt-[100px]">
      <div className="container lg:px-20">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center md:order-2">
            <img
              className="max-md:w-full"
              src={frame}
              width="326"
              height="290"
              alt="frame"
            />
          </div>
          <div>
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
              Crud
            </h1>
            <p className="text-lg my-2 ">
              CRUD operations are fundamental in database management, enabling
              the basic functionalities of creating, reading, updating, and
              deleting data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
