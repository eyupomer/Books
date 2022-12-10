import React from "react";

const Author = () => {
  return (
    <div className="w-full bg-[#f8d0db] py-16 px-10 text-blackcolor flex flex-col items-center md:flex-row justify-between">
      <div className="w-1/2">
        <div className="flex flex-col items-center justify-center">
          <img
          className=" w-full md:w-1/2 mb-4 rounded-md"
            src="https://www.haberler.com/i/27/turgut-ozakman_1018_b.jpg"
            alt="author img"
          />
        </div>
        <div>
          <p className='text-center text-2xl font-semibold mb-12'>Turgut ÖZAKMAN</p>
        </div>
      </div>
      <div className="w-3/4">
        <div>
          <h3 className='text-center text-3xl font-semibold mb-12'>Hakkında</h3>
        </div>
        <div>
          <p className='text-[#010101]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            nesciunt doloribus voluptas eius recusandae laborum, voluptatibus
            consectetur ut dolor ab nobis porro nam. Inventore dignissimos culpa
            vel voluptatem nesciunt impedit libero voluptates rerum tempora? Sed
            earum exercitationem eveniet in quis molestiae nesciunt enim
            cupiditate amet voluptatibus ea quod cumque adipisci rem, ipsum
            aspernatur impedit dolorum doloremque reprehenderit nihil. Quidem
            quam ipsam, ipsa sunt fugiat animi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Author;
