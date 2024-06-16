import Select from "@/components/select"; // Import the Select component
import { SetStateAction, useEffect, useState } from "react";
import useStore from "@/json/store";

const GeneralDetails = () => {

    const setSharedData = useStore((state) => state.setSharedData);
    const [psychologist, setpsychologist] = useState('');
    const [goal, setGoal] = useState('')

    useEffect(() => {
        psychologist && goal !== "" ? setSharedData("general"):''
    },[psychologist,goal])

    const psychologistOptions = [
        { value: '', label: '' },
        { value: 'Yes', label: 'Yes' },
        { value: 'No', label: 'No' },
    ];

    const goalOption = [
        { value: '', label: '' },
        { value: 'Reduce Stress, Get out of depression', label: 'Reduce Stress, Get out of depression' },
        { value: 'Overcome fear and anxiety', label: 'Overcome fear and anxiety' },
        { value: 'Find the best version of myself', label: 'Find the best version of myself' },
        { value: 'Build healthy relationship', label: 'Build healthy relationship' },
        { value: 'Build a healthier eating habit', label: 'Build a healthier eating habit' },
        { value: 'Other', label: 'Other' },
    ];

    const handleChangePsychologist = (value: SetStateAction<string>) => {
        setpsychologist(value);
    };

    const handleChangeGoal = (value: SetStateAction<string>) => {
        setGoal(value);
    };


    return (
        <div className="w-full mt-10">
            <h2 className=" mb-10 text-2xl">General Health</h2>
            <div>
                <label htmlFor="" className="text-xl">Did you ever Seek help from a psychologist ? </label>
                <div className="w-full mt-3">
                    <Select
                        options={psychologistOptions}
                        selectedValue={psychologist}
                        onChange={handleChangePsychologist}
                    />
                </div>
            </div>
            <div className="mt-10">
                <label htmlFor="" className="text-xl">What goal do you want to archieve ? </label>
                <div className="w-full mt-3">
                    <Select
                        options={goalOption}
                        selectedValue={goal}
                        onChange={handleChangeGoal}
                    />
                </div>
            </div>
        </div>
    );
};

export default GeneralDetails
