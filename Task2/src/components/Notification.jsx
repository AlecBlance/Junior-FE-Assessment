const Notification = ({ notif }) => {
  if (!notif) return null;
  return (
    <div className="bg-red-500 text-white p-2 absolute left-0 top-0 rounded-bl-2xl rounded-br-2xl w-full text-center">
      {notif}
    </div>
  );
};
export default Notification;
