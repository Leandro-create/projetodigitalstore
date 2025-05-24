import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function BasicDemo() {
    const [selectedValue, setSelectedValue] = useState(null);
    const values = [
        { name: 'Menor Preço',},
        { name: 'Maior Preço',},
        { name: 'Nenhum'}
    ];

    return (
        <div className="mb-[20px]">
            <Dropdown 
            value={selectedValue} 
            onChange={(e) => setSelectedValue(e.value)} 
            options={values} 
            optionLabel="name" 
            className="w-full md:w-14rem border p-1" placeholder="Nenhum" />
        </div>
    )
}
        