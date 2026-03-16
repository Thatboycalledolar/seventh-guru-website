import { Link } from "react-router-dom";
import { caseStudies } from "../data/CaseStudies.js";
import FeaturedCaseHeader from "../components/FeaturedCaseHeader.jsx";

export default function CaseStudy() {
  return(
     <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto px-8 mb-12">
        <FeaturedCaseHeader text="Some of our Case Studies" />

      <div className="flex flex-col md:grid grid-cols-2 md:max-w-300 gap-16 w-full max-w-6xl mx-auto">
         {caseStudies.map((study) => (
        <Link key={study.slug} to={`/CaseStudies/${study.slug}`}>

          <div className="group cursor-pointer p-4 pb-8 bg-(--background-color) rounded-lg hover:shadow-lg transition-shadow duration-300 h-full">

            <img
              src={study.coverImg}
              alt={study.title}
              className="rounded-lg w-full h-60 object-cover mb-8"
            />

            <h3 className="mt-4 text-xl font-bold">
              {study.title}
            </h3>

            <p className="text-xs text-gray-500">
              {study.category}
            </p>
          </div>
        </Link>
        ))}
      </div>

        
      </div>
  );
}