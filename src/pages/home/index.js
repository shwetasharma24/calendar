import { useState } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useSelector, useDispatch } from 'react-redux';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { onUpdateEvent } from '../../redux/slice';
import { Wrapper, PopOverWrapper, Title, Desc } from './style';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default function Home() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const [eventContent, setEventContent] = useState(null);
  const open = Boolean(anchorEl);
  const {events} = useSelector((state) => state.home);
  const eventPropGetter = () => {
    var style = {
        backgroundColor: '#F5F9FF',
        borderRadius: '2px',
        color: '#5755B8',
        display: 'block',
        border: '1px solid #5755B8'
    };
    return {
      style: style
    };
  }

  return (
    <Wrapper>
      <DnDCalendar
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        localizer={localizer}
        onEventDrop={(event) => dispatch(onUpdateEvent(event))}
        onEventResize={(event) => dispatch(onUpdateEvent(event))}
        resizable
        eventPropGetter={eventPropGetter}
        selectable
        slotPropGetter={(date) => ({ className: date.toISOString() })}
        onSelectEvent={({ title, desc }, { currentTarget }) => {
          setEventContent({ title, desc });
          setAnchorEl(currentTarget);
        }}
      />

      <Popover
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <PopOverWrapper>
          <Typography>
            <Title>{eventContent?.title}</Title>
            <Desc>{eventContent?.desc}</Desc>
          </Typography>
        </PopOverWrapper>
      </Popover>
    </Wrapper>
  )
}