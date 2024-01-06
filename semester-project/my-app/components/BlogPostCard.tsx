import Link from 'next/link';

const BlogPostCard = ({ post }: any) => {
  return (
    <div className="blog-post-card">
      <Link href={`/blog/${post.slug}`}>
          <div className="thumbnail">
            <img src={post.thumbnail} alt={post.title} />
          </div>
          <div className="post-title">
          <h2>{post.title}</h2>
          </div>
          <div className="post-details">
            <p>{post.description}</p>
            <span>Tag: {post.tag}</span>
          </div>
      </Link>

      <style jsx>{`
        .blog-post-card {
          width: calc(33.33% - 20px); /* 3 cards in a row with margin */
          margin: 10px;
          float: left;
          overflow: hidden;
          border-radius: 8px;
          border: 1px solid #ccc;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 300px; /* Less than 300px width with margin */
          box-sizing: border-box; /* Adjust box-sizing for margin */
          background-color: #eeeeee;
        }

        .blog-post-card:hover {
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
        }

        .thumbnail {
          width: 100%;
          height: 150px;
          overflow: hidden;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-details {
            margin-top: 10px;
            margin-left: 12px;
            color: #555555;
            font-size: 14px;
        }

        .post-title {
            margin-left: 10px;
            margin-top: 10px;
        }

        h2 {
          margin-bottom: 5px;
          font-weight: bold;
        }

        p {
          margin-bottom: 10px;
        }

        span {
          color: #555;
        }

        @media (max-width: 900px) {
          .blog-post-card {
            width: calc(50% - 20px); /* 2 cards in a row on smaller screens */
            max-width: calc(50% - 20px); /* adjust max-width for smaller screens */
          }
        }

        @media (max-width: 600px) {
          .blog-post-card {
            width: calc(100% - 20px); /* 1 card per row on mobile */
            max-width: calc(100% - 20px); /* adjust max-width for mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPostCard;
