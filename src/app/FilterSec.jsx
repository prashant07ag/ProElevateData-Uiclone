"use client"
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const job_Types = ["Full Time", "Part Time", "Internship", "Freelance"];
const job_Roles = ["Programming", "Managment/Finance", "Customer Support", "Design", "Sales/Marketing"];
const Remote_Only = ["Yes", "No"];
const locations = ["Delhi", "Banglore", "Hydrabad", "Pune", "Mumbai"];

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

function checkValidQuery(queries) {
  return queries.filter((query) => query !== "").length > 0;
}

export function convertStringToQueriesObject({ searchParams }) {
  let selectedQueries = {};

  // Check if searchParams is defined and not empty
  if (searchParams) {
      searchParams.forEach((value, key) => {
          const queries = value.split(",");
        
          if (selectedQueries[key]) {
              selectedQueries[key].push(...queries);
          } else {
              selectedQueries[key] = queries;
          }
      });
  }

  return selectedQueries;
}

  
function convertValidStringQueries(queries) {
  let q = "";
  for (let [key, value] of Object.entries(queries)) {
    q = q + `${q == "" ? "" : "&"}${key}=${value}`;
  }
  return q;
}

const FilterSec = () => {
  const router = useRouter()
  const searchParams = useSearchParams();

  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});

  useEffect(() => {
    if (searchParams) {
      const paramsObj = convertStringToQueriesObject(searchParams);
      setSelectedFilterQueries(paramsObj);
    }
  }, [searchParams]);
  

  function handleSelectFilterOptions(e) {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    let selectedQueries = { ...selectedFilterQueries };
    if (selectedQueries[name]) {
      if (type === "radio") {
        selectedQueries[name] = { value };
      }
      else if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else {
      selectedQueries[name] = [value];
    }
    router.push(`/?${convertValidStringQueries(selectedQueries)}`, { scroll: false });
  }

  function isChecked(id, option) {
    return (
      Boolean(selectedFilterQueries[id]) && selectedFilterQueries[id].includes(option.toLowerCase())
    );
  }

  return (
    <div className="col-span-2 space-y-6 sticky top-12 h-fit">
      {filterOptions.map(({ id, title, type, options }) => {
        return (
          <div className="border-b pb-4" key={id}>
            <p className='font-medium mb-4'>{title}</p>
            <div className='space-y-2'>
              {
                options.map((value) => {
                  return (
                    <CheckboxAndRadioGroup key={value}>
                      <CheckboxAndRadioItem type={type}
                        name={id}
                        id={value.toLowerCase().trim()}
                        label={value}
                        value={value.toLowerCase().trim()}
                        checked={isChecked(id, value)}
                        onChange={handleSelectFilterOptions} />
                    </CheckboxAndRadioGroup>
                  )
                })
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

function CheckboxAndRadioGroup({ children }) {
  return <div className="flex items-center gap-4">{children}</div>;
}

function CheckboxAndRadioItem({ id, label, ...props }) {
  return (
    <>
      <input id={id} className="w-4 h-4 shrink-8" {...props} />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </>
  );
}

export default FilterSec;
