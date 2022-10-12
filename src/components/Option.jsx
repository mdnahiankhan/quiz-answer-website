import React from 'react';

const Option = ({ option, checkhandler }) => {
    return (
        <div>
            <input type="radio" name="radio-4" className="radio radio-accent bg-slate-300 px-4 py-1  rounded hover:bg-green-300 hover:text-white ease-in duration-300 cursor-pointer " onClick={() => checkhandler(option)} checked />{option}
        </div>
    );
};

export default Option;