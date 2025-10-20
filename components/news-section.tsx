import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';

const NewsSection = () => {
  return (
    <section id="news" className="bg-brand-red">
      <div className="content-shell flow">
        <div className="flex flex-col items-center justify-center text-center flow">
          <CustomBadge variant="blue-line-red-text" inline={true} className="border-white text-white">
            In the News
          </CustomBadge>

          <CustomTitle className="text-white">
            Media Coverage
          </CustomTitle>
          
          <CustomSubtitle className="text-white text-center" fullWidth>
            See how Joint Forces K9 Group is making headlines in Northwest Arkansas and beyond.
          </CustomSubtitle>
        </div>

        {/* Media Coverage Links */}
        <div className="flex flex-col items-center gap-15">
          {/* Featured Coverage */}
          <div className="w-full max-w-4xl rounded-lg bg-gray-50 pad-15 flow">
            <h3 className="text-xl font-semibold text-brand-navy">Featured Coverage</h3>
            <div className="flow">
              <a 
                href="https://www.4029tv.com/article/rogers-woman-gets-life-saving-support-from-trained-service-dog/39302726"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 bg-white pad-15 transition-all duration-300 hover:border-brand-red hover:bg-gray-50 hover:shadow-md shadow-sm"
              >
                <div className="flex items-start gap-15">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-brand-navy">
                      Rogers woman gets life-saving support from trained service dog
                    </h4>
                    <p className="text-sm text-gray-600">
                      Joint Forces K9 trainer Zach Street works with Elizabeth and her family to train Bella, a service dog who detects seizures and provides life-saving support.
                    </p>
                    <ul className="flex items-center gap-15 text-sm text-gray-500">
                      <li>40/29 News</li>
                      <li>•</li>
                      <li>March 17, 2022</li>
                    </ul>
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
          <div className="w-full max-w-4xl rounded-lg bg-gray-50 pad-15 flow">
            <h3 className="text-xl font-semibold text-brand-navy">More Media Coverage</h3>
            <div className="grid grid-cols-1 gap-15 md:grid-cols-2">
              {/* Herald Leader Article */}
              <a 
                href="https://hl.nwaonline.com/news/2019/dec/01/joint-forces-k9-debuts-detection-servic/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 bg-white pad-15 transition-all duration-300 shadow-sm hover:border-brand-red hover:bg-gray-50 hover:shadow-md"
              >
                <div className="flex items-start gap-15">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-brand-navy">
                      Joint Forces K9 debuts detection services
                    </h4>
                    <p className="text-xs text-gray-600">
                      New private detection service for drugs in businesses, schools, and residential areas
                    </p>
                    <ul className="flex items-center gap-15 text-xs text-gray-500">
                      <li>Herald Leader</li>
                      <li>•</li>
                      <li>Dec 1, 2019</li>
                    </ul>
                  </div>
                </div>
              </a>

              {/* NWA Citiscape Magazine */}
              <a 
                href="https://www.jointforcesk9.com/wp-content/uploads/2020/08/nwa-citiscape-magazine-feature.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 bg-white pad-15 transition-all duration-300 shadow-sm hover:border-brand-red hover:bg-gray-50 hover:shadow-md"
              >
                <div className="flex items-start gap-15">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-brand-navy">
                      NWA Citiscape Magazine Feature
                    </h4>
                    <p className="text-xs text-gray-600">
                      From pets to protectors to competitors - training dogs is a fun day&apos;s work
                    </p>
                    <ul className="flex items-center gap-15 text-xs text-gray-500">
                      <li>NWA Citiscape</li>
                      <li>•</li>
                      <li>Aug 2020</li>
                    </ul>
                  </div>
                </div>
              </a>

              {/* Peekaboo NWA Article */}
              <a 
                href="https://peekaboonwa.com/the-pehlmans-battle-buddy-meet-thor/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 bg-white pad-15 transition-all duration-300 shadow-sm hover:border-brand-red hover:bg-gray-50 hover:shadow-md"
              >
                <div className="flex items-start gap-15">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-brand-navy">
                      The Pehlmans&apos; Battle Buddy: Meet Thor
                    </h4>
                    <p className="text-xs text-gray-600">
                      Service dog training success story with the Pehlman family
                    </p>
                    <ul className="flex items-center gap-15 text-xs text-gray-500">
                      <li>Peekaboo NWA</li>
                    </ul>
                  </div>
                </div>
              </a>

              {/* Video Content Placeholder */}
              <a
                href="https://youtube.com/@jointforcesk9group?si=UeU31t9Sw-tCqNW0"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-gray-200 bg-white pad-15 transition-all duration-300 shadow-sm hover:border-brand-red hover:bg-gray-50 hover:shadow-md"
              >
                <div className="flex items-start gap-15">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8,5.14V19.14L19,12.14L8,5.14Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-brand-navy">
                      Training Videos & Demonstrations
                    </h4>
                    <p className="text-xs text-gray-600">
                      Watch our dogs in action with training videos and demonstrations
                    </p>
                    <ul className="flex items-center gap-15 text-xs text-gray-500">
                      <li>YouTube</li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
