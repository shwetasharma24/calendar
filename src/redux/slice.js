import { createSlice, current } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    events: [
      {
        id: 1,
        title: "Meeting 1",
        start: new Date('Jan 15, 2022 09:00:00'),
        end: new Date('Jan 15, 2022 011:00:00'),
        desc: "Prepare for the meeting 1"
      },
      {
        id: 2,
        title: "Meeting 2",
        start: new Date('Jan 13, 2022 12:00:00'),
        end: new Date('Jan 13, 2022 14:00:00'),
        desc: "Prepare for the meeting 2"
      },
      {
        id: 3,
        title: "Meeting 3",
        start: new Date('Jan 13, 2022 16:00:00'),
        end: new Date('Jan 13, 2022 17:00:00'),
        desc: "Prepare for the meeting 3"
      },
      {
        id: 4,
        title: "Meeting 4",
        start: new Date('Jan 19, 2022 10:00:00'),
        end: new Date('Jan 19, 2022 13:00:00'),
        desc: "Prepare for the meeting 4"
      },
      {
        id: 3,
        title: "Meeting 5",
        start: new Date('Jan 17, 2022 12:00:00'),
        end: new Date('Jan 17, 2022 14:00:00'),
        desc: "Prepare for the meeting 5"
      },
    ]
  },
  reducers: {
    onUpdateEvent: (state, { payload }) => {
      const { event, start, end } = payload;
      const currEvents = current(state.events);
      const idx = currEvents.indexOf(event);
      const updatedEvent = { ...event, start, end };
      state.events.splice(idx, 1, updatedEvent);
    },
  },
})

export const { onUpdateEvent } = homeSlice.actions;

export default homeSlice.reducer;