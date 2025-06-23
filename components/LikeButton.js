import { useEffect, useState } from 'react';

export default function LikeButton({ postId }) {
  const [likes, setLikes] = useState(0);
  const storageKey = `likes_${postId}`;

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setLikes(parseInt(stored, 10));
  }, [storageKey]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, newLikes);
  };

  return (
    <button onClick={handleLike} aria-label="like">
      ❤️ {likes}
    </button>
  );
}
