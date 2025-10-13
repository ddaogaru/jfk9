import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';

const NewsSection = () => {
  return (
    <section id="news" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-col text-center gap-3 mb-4">
          <div className="py-1 font-semibold text-[#B31942] mb-1.5 inline-block">
            In the News
          </div>

          <CustomTitle className="text-[#0A3161]">
            Media Coverage
          </CustomTitle>
          
          <CustomSubtitle className="text-[#0A3161]">
            See how Joint Forces K9 Group is making headlines in Northwest Arkansas and beyond.
          </CustomSubtitle>
        </div>

        {/* Media Coverage Links */}
        <div className="flex flex-col items-center gap-4 mb-4">
          {/* Featured Coverage */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl w-full">
            <h3 className="text-xl font-semibold text-[#0A3161] mb-4">Featured Coverage</h3>
            <div className="space-y-4">
              <a 
                href="https://www.4029tv.com/article/rogers-woman-gets-life-saving-support-from-trained-service-dog/39302726"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 border border-gray-200 hover:border-[#B31942] shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0A3161] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0A3161] font-semibold text-lg mb-1">
                      Rogers woman gets life-saving support from trained service dog
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Joint Forces K9 trainer Zach Street works with Elizabeth and her family to train Bella, a service dog who detects seizures and provides life-saving support.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <span>40/29 News</span>
                      <span>•</span>
                      <span>March 17, 2022</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Additional Media Coverage Grid */}
          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl w-full">
            <h3 className="text-xl font-semibold text-[#0A3161] mb-4">More Media Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Herald Leader Article */}
              <a 
                href="https://hl.nwaonline.com/news/2019/dec/01/joint-forces-k9-debuts-detection-servic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 border border-gray-200 hover:border-[#B31942] shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0A3161] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0A3161] font-semibold text-base mb-1">
                      Joint Forces K9 debuts detection services
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">
                      New private detection service for drugs in businesses, schools, and residential areas
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>Herald Leader</span>
                      <span>•</span>
                      <span>Dec 1, 2019</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* NWA Citiscape Magazine */}
              <a 
                href="https://www.jointforcesk9.com/wp-content/uploads/2020/08/nwa-citiscape-magazine-feature.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 border border-gray-200 hover:border-[#B31942] shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0A3161] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0A3161] font-semibold text-base mb-1">
                      NWA Citiscape Magazine Feature
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">
                      From pets to protectors to competitors - training dogs is a fun day's work
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>NWA Citiscape</span>
                      <span>•</span>
                      <span>Aug 2020</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Peekaboo NWA Article */}
              <a 
                href="https://peekaboonwa.com/the-pehlmans-battle-buddy-meet-thor/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white hover:bg-gray-50 transition-all duration-300 rounded-lg p-4 border border-gray-200 hover:border-[#B31942] shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0A3161] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0A3161] font-semibold text-base mb-1">
                      The Pehlmans' Battle Buddy: Meet Thor
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">
                      Service dog training success story with the Pehlman family
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>Peekaboo NWA</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Video Content Placeholder */}
              <div className="block bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#0A3161] rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0A3161] font-semibold text-base mb-1">
                      Training Videos & Demonstrations
                    </h4>
                    <p className="text-gray-600 text-xs mb-2">
                      Watch our dogs in action with training videos and demonstrations
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                      <span>YouTube & Vimeo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
