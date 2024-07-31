export const Students = () => {
  return (
    <>
      <div>
        <div className="m-5 border-4 border-yellow-600 rounded-md ">
          <p className="text-center mt-4 text-2xl ">Students</p>
          <p className="m-2">● Life at Springdale :</p>
          <p className="p-2 sm:ml-14 block sm:flex ">
            <p className="text-indigo-600 font-bold ">
              ○ Extracurricular Activities :
            </p>
            <p className="text-yellow-600 sm:ml-2">
              Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science
              Club.
            </p>
          </p>
          <p className="p-2 sm:ml-14 block sm:flex ">
            <p className="text-indigo-600 font-bold ">
              ○ Clubs and Societies :
            </p>
            <p className="text-yellow-600 sm:ml-2 ">
              Literary Society, Environmental Club, Astronomy Club, Coding Club.
            </p>
          </p>

          {/* Achievements */}

          <p className="m-2">● Achievements : </p>
          <p className="p-2 sm:ml-14 block sm:flex ">
            <p className="text-indigo-600 font-bold ">
              ○ John Smith :
            </p>
            <p className="text-yellow-600 sm:ml-2">
              National Level Math Olympiad Winner.
            </p>
          </p>
          <p className="p-2 sm:ml-14 block sm:flex ">
            <p className="text-indigo-600 font-bold ">
              ○ Sarah Lee :
            </p>
            <p className="text-yellow-600 sm:ml-2 ">
            Gold Medalist in State Swimming Championship.
            </p>
          </p>
          <p className="p-2 sm:ml-14 block sm:flex ">
            <p className="text-indigo-600 font-bold ">
              ○ Tech Innovators Club :
            </p>
            <p className="text-yellow-600 sm:ml-2 ">
            Winners of Inter-School Robotics Competition.
            </p>
        </p>

          {/* STUDENT COUNCIL */}
  
        <p className="m-2">● Student Council : </p>
          <p className="p-2 sm:ml-14 flex ">
            <p className="text-indigo-600 font-bold ">
              ○ President :
            </p>
            <p className="text-yellow-600 sm:ml-2">
            Amy Parker, Grade 12.
            </p>
          </p>
          <p className="p-2 sm:ml-14 flex ">
            <p className="text-indigo-600 font-bold ">
              ○Vice President :
            </p>
            <p className="text-yellow-600 sm:ml-2 ">
            Rajiv Mehta, Grade 11.
            </p>
          </p>
          <p className="p-2 sm:ml-14 flex ">
            <p className="text-indigo-600 font-bold ">
              ○ Secretary :
            </p>
            <p className="text-yellow-600 sm:ml-2 ">
            Lisa Wong, Grade 10.
            </p>
        </p>
        </div>
      </div>
      <br />
    </>
  );
};
