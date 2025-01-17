"use client"
import CardsComponent from '@/components/CardsComponent';
import React, { useState } from 'react';
import { portfolioCardData } from '../data';

const Page = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState('profile');

  // Function to handle tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-7 mt-12">
          <div className="col-span-full">
            <h1 className="heading2">Portfolio</h1>
          </div>

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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CardsComponent cardsData={portfolioCardData} />
              </div>
            </div>
            {/* Dashboard Tab */}
            <div className={`p-4 rounded-lg ${activeTab === 'dashboard' ? 'block' : 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CardsComponent cardsData={portfolioCardData} />
              </div>
            </div>
            {/* Settings Tab */}
            <div className={`p-4 rounded-lg ${activeTab === 'websites' ? 'block' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div>
            {/* Contacts Tab */}
            <div className={`p-4 rounded-lg ${activeTab === 'blogs' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CardsComponent cardsData={portfolioCardData} />
                </div>
            </div>
            <div className={`p-4 rounded-lg ${activeTab === 'uiux' ? 'block' : 'hidden'}`} id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
