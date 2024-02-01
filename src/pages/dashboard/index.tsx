import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

const DashBoard = () => {
  const { data, isFetching } = useRetrieveUserQuery();
  // console.log(data);
  return (
    <div>
      <ul>
        {isFetching && 'LOADING...'}
        <li>email: {data?.email}</li>
        <li>first name: {data?.first_name}</li>
        <li>last name: {data?.last_name}</li>
        <li>id: {data?.id}</li>
      </ul>
    </div>
  );
};

export default DashBoard;
