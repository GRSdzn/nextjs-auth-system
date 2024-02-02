import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';

const DashBoardPageComponent = () => {
  const { data, isFetching } = useRetrieveUserQuery();

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

export default DashBoardPageComponent;
