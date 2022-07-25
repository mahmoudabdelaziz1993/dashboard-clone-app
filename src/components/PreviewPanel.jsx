import React, { useEffect, useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Avatar from "./Avatar";
import Search from "./Search.jsx";
import { FaFilter } from "react-icons/fa";
import SearchV2 from "./SearchV2";
import ItemPreview from "./ItemPreview";
import ItemFeature from './ItemFeature';


const PreviewPanel = () => {
  const [Messages, setMessages] = useState(null);

  const [SelectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const FetchMessages = async () => {
      const res = await fetch("https://62df172a9c47ff309e8159dc.mockapi.io/messages")
      let data = await res.json()
      data && setMessages(data)
    }
    FetchMessages()
    // return () => {
    //   second
    // }
  }, [])

  useEffect(() => {
    Messages && setSelectedMessage(Messages[0])

  }, [Messages])







  return (
    <div className="w-full h-full px-1 pt-3 md:px-6 rounded-t-xl artboard bg-base-300">
      <div className="flex items-center justify-between">
        <RiMenu3Line />
        <Search />
        <Avatar />
      </div>
      <div className="flex w-full h-[90%] gap-3 p-3">
        <div className="flex flex-col p-2 rounded-lg">
          <div className="flex justify-between w-full">
            <select
              defaultValue={1}
              className="w-full max-w-[100px] select select-ghost"
            >
              <option value={1}>New</option>
              <option value={2}>Last Week</option>
              <option value={3}>Last Month</option>
            </select>
            <div className="dropdown">
              <label tabIndex={0} className="gap-2 m-1 btn btn-ghost">
                <FaFilter /> Filter
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
              >
                <li>
                  <a href="!#">Item 1</a>
                </li>
                <li>
                  <a href="!#">Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col flex-grow gap-2 p-3 overflow-y-auto">
            {Messages && Messages.map((item, i) => (
              <ItemFeature key={i} data={item} setSelectedMessage={setSelectedMessage} />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-grow p-2 rounded-lg">
          <div className="flex flex-row-reverse">
            <SearchV2 />
          </div>
          {SelectedMessage && <ItemPreview data={SelectedMessage} />}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
