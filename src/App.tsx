import srcDesktop from "./assets/images/Device - Macbook Pro.png";
import srcAtom from "./assets/icons/atom.png";
import srcLayout from "./assets/icons/layout.png";

function App() {
  return (
    <main className="w-full flex bg-[#F0F4F4] pt-[126px] relative before:w-[144px] before:h-[144px] before:absolute before:bg-white before:shadow-xl before:bg-center before:bg-[url(./assets/icons/logo.png)]  before:rounded-full before:left-[8%] before:-translate-y-1/2 before:bg-no-repeat">
      <div className="w-[58%] max-h-[954px] overflow-hidden bg-white rounded-tr-[80px]">
        <div className="mx-auto w-full max-w-[70%]">
          <h1 className="text-[#4d61aa] font-medium font-barlow text-7xl mt-40 mb-10 text-left ">
            QR code component
          </h1>
          <p className="mb-24 font-heebo text-[#1C2022] text-2xl">
            This is a Figma design file for a Frontend Mentor challenge. Figma
            is a design tool professional teams use to collaborate on projects.
            Need help using Figma?{" "}
            <span className="font-bold">
              Read our Figma for developers article
            </span>
          </p>
        </div>
        <div className="max-w-[956px] mx-auto py-10">
          <img src={srcDesktop} alt="desktop" />
        </div>
      </div>
      <div className="w-[42%]">
        <div className="mt-36 mx-auto flex justify-start items-center max-w-[75%] border-[#979797] border-b-2 pb-14">
          <div className="w-1/6">
            <img src={srcAtom} alt="atom" />
          </div>
          <div className="w-5/6">
            <h2 className="inline-block relative font-barlow font-semibold text-[32px] cursor-pointer after:absolute after:w-8 after:h-8 after:-right-10 after:top-1/2 after:-translate-y-1/2 after:bg-contain after:bg-no-repeat after:bg-center after:block after:bg-[url(./assets/icons/arrow-right.png)]">
              Design System
            </h2>
            <p className="font-regular font-heebo text-xl">
              The design system contains all the information for reusable
              components and styles. It shows colors, typography styles, and
              components, including various component states if they're
              interactive.
            </p>
          </div>
        </div>

        <div className="mt-14 mx-auto flex justify-start items-center max-w-[75%] pb-14">
          <div className="w-1/6">
            <img src={srcLayout} alt="layout" />
          </div>
          <div className="w-5/6">
            <h2 className="inline-block relative font-barlow font-semibold text-[32px] cursor-pointer after:absolute after:w-8 after:h-8 after:-right-10 after:top-1/2 after:-translate-y-1/2 after:bg-contain after:bg-no-repeat after:bg-center after:block after:bg-[url(./assets/icons/arrow-right.png)]">
              Designs
            </h2>
            <p className="font-regular font-heebo text-xl">
              The high-fidelity designs help you build responsive, accessible
              projects. Aim for precision rather than pixel-perfect replicas.
              For guidance, see Josh Comeau's{" "}
              <span className="underline">
                "Chasing the Pixel-Perfect Dream."
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
