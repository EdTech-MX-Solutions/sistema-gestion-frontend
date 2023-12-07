import React from "react";
import ReactSearchBox from "react-search-box";

interface InputSearchProps {
    comment: string;
    searchDataAutomcomplete?: any;
}

export const InputSearch = ({ comment, searchDataAutomcomplete }: InputSearchProps) => {
    return (
        <>
            <div className="p-5 grid grid-cols-1 gap-4 row-span-1">
                <div>
                    <label
                        htmlFor=""
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Busqueda
                    </label>
                    <ReactSearchBox
                        clearOnSelect={false}
                        fuseConfigs={{
                            // keys: ['nombre', 'apellido_paterno', 'apellido_materno'],
                            threshold: 0.05,
                            includeMatches: true,
                            minMatchCharLength: 2,
                            findAllMatches: true,

                        }}
                        data={searchDataAutomcomplete}
                        onSelect={(record: any) => {}}
                        onFocus={() => {}}
                        onChange={(value) => console.log(value)}
                        placeholder="Busqueda"
                        autoFocus
                        
                    />
                    {/* <input
                        type="text"
                        name=""
                        id=""
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                    /> */}
                    <p className="ml-auto text-xs text-gray-500 dark:text-gray-400 p-2">
                        {comment}
                    </p>
                </div>
            </div>
        </>
    );
};

export default InputSearch;
