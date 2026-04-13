export default function WhyBookWithUs() {
  return (
    <>
      <h2 className=" title">Why book with Us?</h2>
      <div className="flex flex-col md:flex-row gap- px-2 ">
        <div className="card-style ">
          <div className="card-body items-center ">
            <h2 className="card-title">Curated Student Trips</h2>
            <p>
              Every destination is selected to inspire, educate, and energize
              student travelers...
            </p>
          </div>
        </div>
        <div className="card-style">
          <div className="card-body items-center">
            <h2 className="card-title ">Affordable Packages</h2>
            <p>
              Competitive rates and exclusive deals help you travel smart and
              save money...
            </p>
          </div>
        </div>
        <div className="card-style">
          <div className="card-body items-center">
            <h2 className="card-title">Flexible Dates</h2>
            <p>
              Travel plans built around your schedule, book when it works for
              you...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
