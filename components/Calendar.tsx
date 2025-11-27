import React, { useState } from 'react';

interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
  const [viewDate, setViewDate] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startDayOfWeek = firstDayOfMonth.getDay();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderDays = () => {
    const dayElements = [];
    // Blank days for the start of the month
    for (let i = 0; i < startDayOfWeek; i++) {
      dayElements.push(<div key={`blank-${i}`} className="p-2"></div>);
    }
    // Actual days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isPast = date < today;
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
      const isToday = date.getTime() === today.getTime();

      let classes = 'p-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-colors text-center';
      if (isPast) {
        classes += ' text-gray-300 cursor-not-allowed';
      } else {
        if (isSelected) {
          classes += ' bg-brand-accent text-white font-bold';
        } else if (isToday) {
          classes += ' bg-brand-secondary/50';
        } else {
          classes += ' hover:bg-gray-100';
        }
      }

      dayElements.push(
        <div
          key={day}
          className={classes}
          onClick={() => !isPast && onDateSelect(date)}
        >
          {day}
        </div>
      );
    }
    return dayElements;
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-100">&lt;</button>
        <div className="font-bold text-lg text-brand-primary">
          {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-100">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 mb-2">
        {daysOfWeek.map(day => <div key={day}>{day.slice(0,1)}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
