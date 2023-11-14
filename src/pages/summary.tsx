import React from 'react';
import { Table, TableHeader, TableData } from '@/styles/TableStyles';
import {usePopulationData} from "@/utils/usePopulationData";
import {motion} from "framer-motion";

export default function Summary() {
    const { populationData, error, sortData } = usePopulationData();

    return (
        <Table>
            <thead>
            <tr>
                <TableHeader onClick={() => sortData('Year')}>Year</TableHeader>
                <TableHeader onClick={() => sortData('Population')}>Population</TableHeader>
            </tr>
            </thead>
            <tbody>
            {populationData.map((item, index) => (
                <motion.tr
                    key={item.IDNation || index}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <TableData>{item.Year}</TableData>
                    <TableData>{item.Population}</TableData>
                </motion.tr>
            ))}
            </tbody>
            {error && <div>Error: {error}</div>}
        </Table>
    );
}
