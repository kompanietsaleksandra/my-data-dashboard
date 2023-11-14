import { useState, useEffect } from 'react';
import {PopulationData} from "@/utils/PopulationData";

export const usePopulationData = () => {
    const [populationData, setPopulationData] = useState<PopulationData[]>([]);
    const [error, setError] = useState<string>('');
    const [sortOrder, setSortOrder] = useState('asc');

    const sortData = (key: keyof PopulationData) => {
        const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newOrder);
        setPopulationData([...populationData].sort((a, b) => {
            if (a[key] < b[key]) return newOrder === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return newOrder === 'asc' ? 1 : -1;
            return 0;
        }));
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPopulationData(data.data);
            } catch (error) {
                setError('Failed to fetch data. Please try again later.');
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return { populationData, error, sortData };
};
