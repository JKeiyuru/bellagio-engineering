// File: client/src/hooks/useProjects.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const sampleProjects = [
  {
    _id: '1',
    title: 'Two Rivers Mall',
    category: 'Commercial',
    description: 'Construction of East Africa\'s largest shopping mall...',
    location: 'Nairobi, Kenya',
    completionDate: '2022-05-15',
    images: ['/images/projects/two-rivers.jpg']
  },
  // ... other sample projects
];

export const useProjects = (limit = null) => {
  const [projects, setProjects] = useState(sampleProjects); // Initialize with sample data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const url = limit ? `/api/projects?limit=${limit}` : '/api/projects';
        const response = await axios.get(url);
        setProjects(response.data || sampleProjects); // Fallback to sample if empty
        setLoading(false);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching projects:', err);
        setProjects(sampleProjects); // Use sample data on error
        setLoading(false);
      }
    };

    fetchProjects();
  }, [limit]);

  return { projects, loading, error };
};