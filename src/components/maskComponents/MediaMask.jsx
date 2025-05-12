import React from "react";




const projects_data_mask = [
  {
    id: 1,
    title: "vpmu-studio",
    link: "https://www.vpmu-studio.co.uk/",
    content: "Make-up artist Web",
    speed: 0.5,
  },
  {
    id: 2,
    title: "j&l gradzkie",
    link: "https://www.jl-gradzkie.pl/",
    content: "Agritourism Web",
    speed: 0.5,
  },
];

function MediaMask(props) {
  return (
    <>
      <div
        className="h-screen relative shadow"
        style={{ backgroundColor: "#EBCA98" }}
      >
        <div className="absolute top-20 left-0 w-full ">
          <div className=" ms-52  mb-52">
            <p className="text text-left font-bold" style={{ color: "transparent" }}>
              Projects
            </p>
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "transparent",
              }}
              className="mt-10"
            ></div>
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "transparent",
              }}
              className="mt-5"
            ></div>
            <div
              style={{
                width: "5px",
                height: "5px",
                backgroundColor: "transparent",
              }}
              className="mt-5"
            ></div>
          </div>

          {projects_data_mask.map((project) => (
            <div
              className="flex items-center justify-start border-b border-slate-500 "
              key={project.id}
              onMouseEnter={props.handleHover}
              onMouseLeave={props.handleHoverBack}
            >
          
              <p
                className="text font-bold ms-52 w-64"
                style={{ color: "black",cursor: 'pointer' }}
               
              >
                {project.content}
              </p>
             

              <div className="ms-40 relative ">
                <div>
                  <a
                    href={project.link}
                    className="title "
                    style={{ color: "black" }}
                  
                  >
                    {project.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MediaMask;
