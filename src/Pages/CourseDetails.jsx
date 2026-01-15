import { useParams } from "react-router-dom";
import Card from "../Components/Card";

export default function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-3xl">
      <Card title={`Course ${id} Details`}>
        <p>This course focuses on deep mindset transformation.</p>
        <ul className="list-disc ml-6 mt-4">
          <li>Identity Alignment</li>
          <li>Discipline Building</li>
          <li>Purpose Clarity</li>
        </ul>
      </Card>
    </div>
  );
}
