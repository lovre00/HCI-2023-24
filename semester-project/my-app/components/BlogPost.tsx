import { useRouter } from 'next/router';

// blogpost.tsx
const BlogPost = ({ post }: any) => {
    const panelStyle = {
      maxWidth: '900px',
      margin: '0 auto',
      border: '1px solid #ccc',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };
  
    const headerStyle = {
      height: '300px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '20px',
      backgroundImage: `url(${post.thumbnail})`,
    };
  
    const titleStyle = {
      color: 'white',
      fontSize: '24px',
    };
  
    const contentStyle = {
      padding: '20px',
    };
  
    const paragraphStyle = {
      fontSize: '16px',
      lineHeight: '1.6',
    };
  
    return (
      <div style={panelStyle}>
        <div style={headerStyle}>
          {/* Display the thumbnail in the header */}
          <h1 style={titleStyle}>{post.title}</h1>
        </div>
        <div style={contentStyle}>
          <p style={paragraphStyle}>{post.content}</p>
        </div>
      </div>
    );
  };
  
  export default BlogPost;
  
