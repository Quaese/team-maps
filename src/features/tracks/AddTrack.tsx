import React, { useState } from "react";

import { useAppDispatch } from "../../app/hooks";
import { addTrack } from "./tracksSlice";
// import styles from './Counter.module.css';

export function AddTrack() {
  const defaultTrack = {
    user_id: 1,
    title: "",
    descr: "",
    // gpx: "TBD",
  };
  const [track, setTrack] = useState({ ...defaultTrack });
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <input
          type="text"
          value={track.title}
          placeholder="title"
          onChange={(e) =>
            setTrack((track) => ({ ...track, title: e.target.value }))
          }
        />
        <input
          type="text"
          value={track.descr}
          placeholder="description"
          onChange={(e) =>
            setTrack((track) => ({ ...track, descr: e.target.value }))
          }
        />
        <button
          onClick={() => {
            dispatch(addTrack(track));
            setTrack({ ...defaultTrack });
          }}
        >
          add track
        </button>
      </div>
    </div>
  );
}
