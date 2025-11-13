import { useParams } from "react-router-dom";

export default function TripDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Chi tiết chuyến xe {id}</h2>
      <p>Sau này sẽ hiển thị ghế trống, ghế đã đặt, quy định chuyến xe...</p>
    </div>
  );
}
