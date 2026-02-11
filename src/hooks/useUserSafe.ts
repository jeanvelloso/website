import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';

export function useUserSafe() {
  const [isMounted, setIsMounted] = useState(false);
  const user = useUser();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return { isSignedIn: false, isLoaded: false, user: null };
  }

  return user;
}
