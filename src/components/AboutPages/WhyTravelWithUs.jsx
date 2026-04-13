export default function WhyTravelWithUs() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-50 pt-5 pb-7">
        <div className="text-left  p-5 ">
          <h2 className="title mb-4 text-center ">Why Travel with Us?</h2>
          <ul className="list-disc space-y-2 border-style p-4 pl-9 hover:bg-base-200">
            <li>Handpicked destinations for every type of traveler</li>
            <li>Exclusive deals and competitive prices worldwide</li>
            <li>Safe, reliable, and memorable experiences</li>
            <li>Passionate team dedicated to making your trip perfect</li>
          </ul>
        </div>
        <img
          className="h-110 object-cover w-x1 rounded-3xl shadow-md shrink-0 "
          src="https://bombaytrooper.com/cdn/shop/articles/Travel-Agency-bt-Blog.jpg?v=1752669360&width=800"
          alt="world"
        />
      </div>
    </>
  );
}
