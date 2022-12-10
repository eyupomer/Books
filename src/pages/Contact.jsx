import React from 'react'

const Iletisim = () => {
    return (
      <div
        className="w-full h-screen bg-[#f8d0db] p-4 text-blackcolor"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#f56dbf]">
              Bize Ulaşın
            </p>
            <p className="py-6">Bizimle iletişime geçmek için formu doldurun.</p>
          </div>
          <div className="flex justify-center items-center">
            <form
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                className="p-2 bg-transparent border-2 border-[#f56dbf] rounded-md focus:outline-none"
                type="text"
                name="name"
                placeholder="Adınız."
              />
              <input
                className="my-4 p-2 bg-transparent border-2 border-[#f56dbf] rounded-md focus:outline-none"
                type="email"
                name="email"
                placeholder="Mail adresiniz."
              />
              <textarea
                className="p-2 resize-none bg-transparent border-2 border-[#f56dbf] rounded-md focus:outline-none"
                name="message"
                cols="30"
                rows="10"
                placeholder="Mesajınız."
              ></textarea>
              <button className="text-blackcolor bg-[#f56dbf] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Iletisim