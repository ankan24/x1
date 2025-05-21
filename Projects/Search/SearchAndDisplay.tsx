import React, { useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

const SearchAndDisplay: React.FC = () => {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) {
      setPosts([]);
      return;
    }
    setLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await res.json();

    const filtered = data.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    setPosts(filtered);
    setLoading(false);
  };

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search posts by title"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {!loading && posts.length === 0 && query.trim() !== '' && (
        <p>No posts found.</p>
      )}

      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchAndDisplay;
