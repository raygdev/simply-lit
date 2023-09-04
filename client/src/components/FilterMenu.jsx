import React, { useState } from "react"
import { Combobox, Transition } from "@headlessui/react"

const FilterMenu = ({ allLetters, property, position }) => {
  const [query, setQuery] = useState("")
  const [selectedLetter, setSelectedLetter] = useState(allLetters[0][property])

  // map of the letters objects for all letters and return the property value
  const filterCriteria = allLetters.map(letter => letter[property])
  // we don't want duplicate selections so get rid of them
  const noDuplicateOptions = [...new Set(filterCriteria)]
  //search bar query
  const queryFilteredOptions = noDuplicateOptions.filter(
    //lower case all to make sure that query string is included in option
    option => option.toLowerCase().includes(query.toLowerCase())
  )
  const filteredLetters =
    query === "" ? noDuplicateOptions : queryFilteredOptions

  return (
    <div className={`${position} relative w-1/2`}>
      <Combobox value={selectedLetter} onChange={setSelectedLetter} nullable>
        <h3 className="my-2">{property}</h3>
        <div className="relative cursor-default rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
          <Combobox.Input
            onChange={e => setQuery(e.target.value)}
            className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            {({ open }) => String.fromCharCode(open ? 9650 : 9660)}
          </Combobox.Button>
        </div>
        <Transition
          as={React.Fragment}
          enter="transition ease-in"
          enterTo="opacity-100"
          enterFrom="opacity-0"
          leave="transition ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="absolute w-full mt-1 h-20 overflow-y-auto scroll-smooth">
            {filteredLetters.length > 0 ? (
              filteredLetters.map((option, i) => (
                <Combobox.Option className="" key={i} value={option}>
                  {({ active, selected }) => (
                    <span
                      className={`${
                        active
                          ? "bg-blue-500 text-white"
                          : "bg-slate-200 text-black"
                      } px-2 py-1 flex justify-between`}
                    >
                  
                        <div>{option}</div>
                      {selected && " ✔"}
                    </span>
                  )}
                </Combobox.Option>
              ))
            ) : (
              <div className="bg-slate-200 text-black px-2 py-1">
                No option found
              </div>
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  )
}

export default FilterMenu
