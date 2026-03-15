

export default function About() {
  return(
    <div className="flex flex-col px-8">
      <h1 className="text-4xl text-(--text-color) font-bold text-center mb-16">Let’s walk you through <br /> <span className="text-(--primary-color)">Who we are</span></h1>

      {/* main div for the about content */}
      <div className="flex flex-col">

        {/* div for each content */}
        <div className="flex flex-col text-(--text-color) w-full mb-16">
          <div className="flex flex-col mb-4 ">
            <h2 className="text-3xl font-bold ">What Drives Us</h2>
            <p className="text-md">(Mission and Vision)</p>
          </div>
          <div className="bg-(--background-color) p-8 text-md rounded-lg flex flex-col gap-2 font-body">
             <p >
              Our Mission is to build brand systems that create clarity,       command authority, and unlock scalable growth for ambitious   companies worldwide. We exist to transform fragmented ideas and visuals into cohesive identities that bring about trust and guarantees long term growth and scalability.
            </p>
             <p >
              We envision to become a globally respected brand design and infrastructure studio known for building high-performance brand infrastructures that elevate companies from local relevance to international authority.
            </p>
          </div >
        </div>


        <div className="flex flex-col text-(--text-color) w-full mb-16">
          <div className="flex flex-col gap-1 mb-4 ">
            <h2 className="text-3xl font-bold ">Why Strategy/Infrastructure matters</h2>
          </div>
          <div className="bg-(--background-color) p-8 text-md rounded-lg flex flex-col gap-2 font-body">
            <p>
              Strategy separates activity from direction. Without strategy, brands make decisions based on trends, emotion, or short-term pressure which results in inconsistencies like unclear positioning, and fragmented visual identity. This makes the brand’s growth become unstable because the foundation was never properly structured. 
            </p>
            <p>
              Strategy creates alignment. It defines who you are, who you serve, how you are different, and how every expression of the brand supports long-term objectives.it coordinates design, marketing, products, and customer experience.
            </p>
          </div>
            

        </div>


        <div className="flex flex-col text-(--text-color) w-full mb-16">
          <div className="flex flex-col gap-1 mb-4 ">
            <h2 className="text-3xl font-bold ">Our Core Values</h2>
          </div>
          <div className="bg-(--background-color) p-8 text-md rounded-lg gap-2 flex flex-col font-body">
             <p>
              Design without strategy causes chaos and unalignment. Strategy without execution lives on paper and brings no real results.
            </p>
            <p>
              Strategic patterns beat creative chaos every time.We exist to combine all to create the magic your brand needs.
            </p>
          </div>
        </div>
        
      </div>

     
      <div className="flex flex-col gap-1 mb-4 bg-(--primary-color) text-white py-12 px-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-4 text-center ">Founder's Note</h2>
        <div className="flex flex-col font-body w-full">
          <p className="text-md text-center mb-4">
          Seventh Guru is a brand infrastructure and design studio that helps growth-stage companies clarify their brand positioning, and scale with confidence. 
        </p>
        <p className="text-md text-center mb-4">
          We work with founders and teams that understand that design is more than just beautiful visuals, it is strategic leverage for brands when used right.
        </p>
        <p className="text-md text-center mb-4">
          Every engagement begins with clarity: who you are, what you stand for, and why you matter. 
        </p>

        <p className="font-bold text-(--primary-color) bg-white py-2 px-4 rounded-md text-center">Clients do not come to us for design, They come for direction.</p>
        </div>
      </div>    
    </div>
    
  );
}