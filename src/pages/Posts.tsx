import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function Posts() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Post Page {id}</h1>
      <p>Welcome to the post page!</p>
      <p>Page: {page}</p>
    </div>
  );
}
