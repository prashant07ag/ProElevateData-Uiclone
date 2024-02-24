"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const job_Types = ["Full Time", "Part Time", "Internship", "Freelance"];
const job_Roles = ["Programming", "Management/Finance", "Customer Support", "Design", "Sales/Marketing"];
const Remote_Only = ["Yes", "No"];
const locations = ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai"];

const filterOptions = [
  {
    id: "types",
    title: "Job Type",
    options: job_Types,
    type: "radio"
  },
  {
    id: "roles",
    title: "Job Roles",
    options: job_Roles,
    type: "checkbox"
  },
  {
    id: "locations",
    title: "Locations",
    options: locations,
    type: "checkbox"
  },
  {
    id: "remote",
    title: "Remote Only",
    options: Remote_Only,
    type: "checkbox"
  },
];

function FilterSection() {
  const router = useRouter();

  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(router.query);
    const paramsObj = {};
    for (const [key, value] of params.entries()) {
      paramsObj[key] = value.split(',');
    }
    setSelectedFilterQueries(paramsObj);
  }, [router.query]);

  function handleSelectFilterOptions(e) {
    const { name, value, type } = e.target;

    let selectedQueries = { ...selectedFilterQueries };
    if (selectedQueries[name]) {
      if (type === "radio") {
        selectedQueries[name] = [value];
      } else if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(query => query !== value);
      } else {
        selectedQueries[name].push(value);
      }
    } else {
      selectedQueries[name] = [value];
    }

    const queryParams = new URLSearchParams(selectedQueries);
    router.push(`/?${queryParams.toString()}`, undefined, { shallow: true });
  }

  function isChecked(id, option) {
    return (
      Boolean(selectedFilterQueries[id]) && selectedFilterQueries[id].includes(option.toLowerCase())
    );
  }
  

  return (
    <div className="hidden lg:flex flex-col gap-6 sticky top-0">
      {filterOptions.map(({ id, title, options }) => (
        <div key={id} className="w-full sm:w-96 flex flex-col items-start border border-gray-200 rounded-2xl" data-orientation="vertical">
          <h3 className="flex w-full rounded-t-lg p-3 bg-gray-200 ">
            {title}
          </h3>
          <div className="overflow-hidden text-sm transition-all">
            <div className="pt-0 flex flex-wrap !p-4 gap-3 items-start self-stretch content-start">
              {options.map(value => (
                <button
                  key={value}
                  className={`flex rounded-custxl gap-2 justify-center items-center px-4 py-2 group transition-all duration-300 rounded-3xl ease-in-out ${isChecked(id, value) ? 'bg-gray-100 text-gray-900' : 'bg-gray-100 text-gray-900 hover:bg-gray-400 hover:text-white'}`}
                  onClick={handleSelectFilterOptions}
                  name={id}
                  value={value.toLowerCase().trim()}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilterSection;
