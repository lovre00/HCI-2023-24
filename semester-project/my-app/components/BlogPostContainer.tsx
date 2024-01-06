import BlogPostCard from './BlogPostCard'; // Replace this with the correct path to your BlogPostCard component

const BlogPostContainer = ({ posts }: any) => {
  return (
    <div className="blog-post-container">
      {posts.map((post: any, index: any) => (
        <BlogPostCard key={index} post={post} />
      ))}

      <style jsx>{`
        .blog-post-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start; /* Align items to the left */
        }

        .blog-post-card {
          width: calc(33.33% - 20px); /* 3 cards in a row with margin */
          margin-bottom: 20px;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: calc(300px - 20px); /* Less than 300px width with margin */
          box-sizing: border-box; /* Adjust box-sizing for margin */
        }

        /* Aligning two cards properly when there are only two in a row */
        @media (max-width: 900px) {
          .blog-post-card {
            width: calc(50% - 20px); /* 2 cards in a row on smaller screens */
            max-width: calc(50% - 20px); /* adjust max-width for smaller screens */
            margin-right: 20px; /* Right margin for the first card */
          }

          .blog-post-card:last-child {
            margin-right: 0; /* Remove right margin from the last card */
          }
        }

        @media (max-width: 600px) {
          .blog-post-card {
            width: calc(100% - 20px); /* 1 card per row on mobile */
            max-width: calc(100% - 20px); /* adjust max-width for mobile */
            margin-right: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPostContainer;
