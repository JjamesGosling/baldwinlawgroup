import Layout from "@/components/layout/Layout";
import PageHead from "@/components/pageHead";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import img_one from '/public/images/practice-area/securities-litigation-attorney.png'
import img_two from '/public/images/practice-area/civil-litigation-attorney.png'
import img_three from '/public/images/practice-area/ponzi-scheme-law-firm.png'
import img_four from '/public/images/practice-area/broker-misconduct-lawyers.png'
import img_five from '/public/images/practice-area/investment-fraud-lawyer.png'

export default function PraticeArea() {
  return (
    <Layout>
      <SEO title={`Pratice Area | ${INFO.companyName}`} />
      <PageHead
        title="Pratice Area"
        pageName="Pratice Area"
        hasBreadCrumb
      />
       <div className="bg-white">
      <div className="mx-auto max-w-7xl ">
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:pt-10 pb-10 sm:pb-10  lg:max-w-none lg:grid-cols-3">
          
            <article className="flex max-w-xl flex-col items-start justify-between bg-slate-200">
             <div className="relative">
                <img src="/images/practice-area/securities-litigation-attorney.png" alt="Securities Litigation Attorney" />
             </div>
              <div className="group relative px-8 py-4 w-full text-center">
                <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="securities-litigation-attorney">
                    <span className="absolute inset-0" />
                  Securities Litigation Attorney
                  </a>
                </h3>
             
              </div>
              
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between bg-slate-200">
             <div className="relative">
                <img src="/images/practice-area/civil-litigation-attorney.png" alt="Civil Litigation Attorney" />
             </div>
              <div className="group relative px-8 py-4 w-full text-center">
                <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="civil-litigation-attorney">
                    <span className="absolute inset-0" />
                  Civil Litigation Attorney
                  </a>
                </h3>
             
              </div>
              
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between bg-slate-200">
             <div className="relative">
                <img src="/images/practice-area/ponzi-scheme-law-firm.png" alt="Ponzi Scheme Law Firm" />
             </div>
              <div className="group relative px-8 py-4 w-full text-center">
                <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="ponzi-scheme-law-firm">
                    <span className="absolute inset-0" />
                  Ponzi Scheme Law Firm
                  </a>
                </h3>
             
              </div>
              
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between bg-slate-200">
             <div className="relative">
                <img src="/images/practice-area/broker-misconduct-lawyers.png" alt="Broker Misconduct Lawyers" />
             </div>
              <div className="group relative px-8 py-4 w-full text-center">
                <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="broker-misconduct-lawyers">
                    <span className="absolute inset-0" />
                  Broker Misconduct Lawyers
                  </a>
                </h3>
             
              </div>
              
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between bg-slate-200">
             <div className="relative">
                <img src="/images/practice-area/investment-fraud-lawyer.png" alt="Investment Fraud Lawyer" />
             </div>
              <div className="group relative px-8 py-4 w-full text-center">
                <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="investment-fraud-lawyer">
                    <span className="absolute inset-0" />
                  Investment Fraud Lawyer
                  </a>
                </h3>
             
              </div>
              
            </article>
         
        </div>
      </div>
    </div>
    </Layout>
  );
}
