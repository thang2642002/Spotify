import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";

export default function ListSongs() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idsong, setidsong] = useState(0);
  let handlePlaySong = (idsong) => {
    setidsong(idsong);
    handleSetSong(idsong);
  };
  useEffect(() => {
    setidsong(song.id);
  }, [song]);
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download "></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-700 h-12 text-gray-500 hover:bg-slate-600 hover:cursor-pointer ${
                idsong === song.id && "text-teal-400 bg-slate-600"
              }`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}></a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
