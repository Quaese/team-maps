import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectTracksList } from "./tracksSlice";
import { updateTrack } from "./tracksSlice";
import { AddTrack } from "./AddTrack";
import "./Tracks.css";

const Tracks = () => {
  const tracksList = useAppSelector(selectTracksList);
  const dispatch = useAppDispatch();

  return (
    <section className="tracks">
      <div>
        <AddTrack />
        {tracksList.length ? (
          <ul>
            {tracksList.map((track) => (
              <li key={track.id}>
                {track.title}
                <div>
                  <button
                    onClick={() =>
                      dispatch(
                        updateTrack({
                          id: track.id,
                          track: { title: "fred_hoasd" },
                        })
                      )
                    }
                  >
                    update tracks
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>Keine Tracks</div>
        )}
      </div>
    </section>
  );
};

export default Tracks;
