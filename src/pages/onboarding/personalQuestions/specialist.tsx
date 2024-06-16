import Select from "@/components/select"; // Import the Select component
import { SetStateAction, useEffect, useState } from "react";
import useStore from "@/json/store";

const Specialist = () => {

    const setSharedData = useStore((state) => state.setSharedData);
    const [confident, setconfident] = useState('');
    const [dwell, setdwell] = useState('')

    useEffect(() => {
        confident && dwell !== "" ? setSharedData("specialist"):''
    },[confident,dwell])

    const confidentOptions = [
        { value: '', label: '' },
        { value: 'Very Confident', label: 'Very Confident' },
        { value: 'Somewhat Confident', label: 'Somewhat Confident' },
        { value: 'Not Confident at all', label: 'Not Confident at all' },
        { value: 'No', label: 'No' },
    ];

    const dwellOption = [
        { value: 'Yes Frequently', label: 'Yes Frequently' },
        { value: 'Occasionally', label: 'Occasionally' },
        { value: 'Rarely or never', label: 'Rarely or never' },
    ];

    const handleChangeconfident = (value: SetStateAction<string>) => {
        setconfident(value);
    };

    const handleChangedwell = (value: SetStateAction<string>) => {
        setdwell(value);
    };


    return (
        <div className="w-full mt-10">
            <h2 className=" mb-10 text-2xl">Specialist</h2>
            <div>
                <label htmlFor="" className="text-xl">Other </label>
                <div className="w-full mt-3">
                    <Select
                        options={confidentOptions}
                        selectedValue={confident}
                        onChange={handleChangeconfident}
                    />
                </div>
            </div>
            <div className="mt-10">
                <label htmlFor="" className="text-xl">Other 2  </label>
                <div className="w-full mt-3">
                    <Select
                        options={dwellOption}
                        selectedValue={dwell}
                        onChange={handleChangedwell}
                    />
                </div>
            </div>
        </div>
    );
};

export default Specialist
