import Select from "@/components/select"; // Import the Select component
import { SetStateAction, useEffect, useState } from "react";
import useStore from "@/json/store";

const PhysicalHealth = () => {

    const setSharedData = useStore((state) => state.setSharedData);
    const [confident, setconfident] = useState('');
    const [dwell, setdwell] = useState('')

    useEffect(() => {
        confident && dwell !== "" ? setSharedData("physical"):''
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
            <h2 className=" mb-10 text-2xl">General Health</h2>
            <div>
                <label htmlFor="" className="text-xl">How confident are you in identifying your emotions when asked by others ? </label>
                <div className="w-full mt-3">
                    <Select
                        options={confidentOptions}
                        selectedValue={confident}
                        onChange={handleChangeconfident}
                    />
                </div>
            </div>
            <div className="mt-10">
                <label htmlFor="" className="text-xl">Do you frequently dwell on the past or future ? </label>
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

export default PhysicalHealth
