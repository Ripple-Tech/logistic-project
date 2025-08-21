// app/admin/orders/page.tsx (Server Component)
import getCurrentUser from '@/actions/getCurrentUser';
import getOrderByUserId from '@/actions/getOrderByUserId';
import ClientOrderPage from './ClientOrderPage';

const Page = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser ) {
    return <div>Access Denied</div>;
  }

  const allOrder = await getOrderByUserId(currentUser.id);
  

  return <ClientOrderPage allOrder={allOrder} />;
};

export default Page;
