'use client';
import { useState } from 'react';
import BlogPostCard from '../../components/BlogPostCard'
import Navbar from '../../components/Navbar'
import BlogPostContainer from '@/components/BlogPostContainer';

const postsData = [
  {
    "slug": "post-1",
    "title": "Shannon Entropy",
    "thumbnail": "https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/09/Shannon-Entropy_2880x1620_Lede-1.png",
    "description": "Role of entropy in malware analysis.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Entropy"
  },
  {
    "slug": "post-2",
    "title": "Mastering Productivity",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Tips and tricks for boosting productivity.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Productivity"
  },
  {
    "slug": "post-3",
    "title": "The Future of Technology",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Predictions and advancements in technology.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Technology"
  },
  {
    "slug": "post-4",
    "title": "Healthy Lifestyle Habits",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Improving life through healthy habits.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Health"
  },
  {
    "slug": "post-5",
    "title": "Traveling Around the World",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Experiences and insights from global travels.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Travel"
  },
  {
    "slug": "post-6",
    "title": "Artificial Intelligence Explained",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Understanding AI and its applications.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Technology"
  },
  {
    "slug": "post-7",
    "title": "Cooking Adventures",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Delicious recipes and culinary experiences.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Food"
  },
  {
    "slug": "post-8",
    "title": "Financial Planning Made Easy",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Tips for better financial management.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Finance"
  },
  {
    "slug": "post-9",
    "title": "Mindfulness and Meditation",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Achieving peace and focus through mindfulness.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Mindfulness"
  },
  {
    "slug": "post-10",
    "title": "Gardening: A Therapeutic Hobby",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Benefits and joys of gardening.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Hobby"
  },
  {
    "slug": "post-11",
    "title": "Gardening: A Therapeutic Hobby",
    "thumbnail": "https://via.placeholder.com/300",
    "description": "Benefits and joys of gardening.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "tag": "Hobby"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedTag ? post.tag === selectedTag : true)
  );

  return (
    <div className="blog-container">
      <Navbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-box"
        />
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="tag-select"
        >
          <option value="">All Tags</option>
          {/* Logic to get unique tags from postsData */}
          {/* Replace with your logic */}
          <option value="Technology">Technology</option>
          {/* Add more tags here */}
        </select>
      </div>
      <BlogPostContainer posts={filteredPosts} />

      <style jsx>{`
        .blog-container {
          /* Your existing styles */
        }

        .search-container {
          padding-top: 50px;
          text-align: center;
          margin-bottom: 20px;
        }

        .search-box,
        .tag-select {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 10px;
        }

        .search-box {
          width: 300px;
          /* Add additional styles if needed */
        }

        .tag-select {
          /* Add additional styles if needed */
        }
      `}</style>
    </div>
  );
};

export default Blog;