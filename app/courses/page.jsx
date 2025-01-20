"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { coursesCardData } from '../data';
import CourseCard from '@/components/CourseCard';



const page = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [title, setTitle] = useState("second")
    const handleTabChange = (tabId) => {
      setActiveTab(tabId);
    };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <section className="CoursesBg">
        <div className="container mx-auto px-7 pt-24">
        <div className="grid grid-cols-1">
          <div className="w-full flex flex-col justify-center items-center" >
            <h1 className="heading2">Unlock Your Potential: Learn, Grow, Succeed</h1>
            <p className="para">Discover a variety of courses designed to inspire growth and unlock new opportunities. Learn at your own pace and take the next step toward success.</p>
          </div>
          <div className="w-full mt-20">
            <form onSubmit={handleSearch} className="flex items-center justify-center relative">
                <input
                  type="text"
                  placeholder="What type of course you are looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-12 height border w-1/2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Image src={"/icons/search.svg"} width={16} height={10} alt="Search" className="absolute top-5 left-64" />
                <button
                  type="submit"
                  className="px-4 py-2 bgGreen searchBtnContact text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Search
                </button>
              </form>
          </div>
        </div>
        </div>
      </section>
      <section className="md:mt-56">
        <div className="container mx-auto px-7 mt-12">
        <div className="mb-4">
            <ul className="flex justify-center flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'profile' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('profile')}
                  role="tab"
                  aria-controls="profile"
                  aria-selected={activeTab === 'profile'}
                >
                  All
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'dashboard' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('dashboard')}
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected={activeTab === 'dashboard'}
                >
                  Apps
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'websites' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('websites')}
                  role="tab"
                  aria-controls="websites"
                  aria-selected={activeTab === 'websites'}
                >
                  Websites
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'blogs' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('blogs')}
                  role="tab"
                  aria-controls="blogs"
                  aria-selected={activeTab === 'blogs'}
                >
                  Blogs
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'uiux' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('uiux')}
                  role="tab"
                  aria-controls="uiux"
                  aria-selected={activeTab === 'uiux'}
                >
                  UI/UX Design
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'graphic' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('graphic')}
                  role="tab"
                  aria-controls="graphic"
                  aria-selected={activeTab === 'graphic'}
                >
                  Graphic Design
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'content' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('content')}
                  role="tab"
                  aria-controls="content"
                  aria-selected={activeTab === 'content'}
                >
                  Content
                </button>
              </li>
              <li role="presentation">
                <button
                  className={`inline-block lgParagraph p-4 border-b-2 rounded-t-lg ${activeTab === 'resume' ? 'border-blue-500 text-blue-500' : 'border-transparent text-white'}`}
                  onClick={() => handleTabChange('resume')}
                  role="tab"
                  aria-controls="resume"
                  aria-selected={activeTab === 'resume'}
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>

          <div id="default-tab-content" className="pt-12">
            {/* Profile Tab */}
            <div className={`p-4 rounded-lg ${activeTab === 'profile' ? 'block' : 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* <CardsComponent cardsData={portfolioCardData} /> */}
                <CourseCard cardsData={coursesCardData} />
              </div>
            </div>
            {/* Dashboard Tab */}
            {/* <div className={`p-4 rounded-lg ${activeTab === 'dashboard' ? 'block' : 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CardsComponent cardsData={portfolioCardData} />
              </div>
            </div> */}
            {/* Settings Tab */}
            {/* <div className={`p-4 rounded-lg ${activeTab === 'websites' ? 'block' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div> */}
            {/* Contacts Tab */}
            {/* <div className={`p-4 rounded-lg ${activeTab === 'blogs' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div> */}
            {/* <div className={`p-4 rounded-lg ${activeTab === 'uiux' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div>
            <div className={`p-4 rounded-lg ${activeTab === 'graphic' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div>
            <div className={`p-4 rounded-lg ${activeTab === 'content' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div>
            <div className={`p-4 rounded-lg ${activeTab === 'resume' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default page
