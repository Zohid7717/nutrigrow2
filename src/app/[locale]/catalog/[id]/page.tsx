import FullCard from '@/components/Product/FullCard';
// import fetch from 'node-fetch';



interface PageProps {
  params: {
    id: string;
    locale: string;
  }
}

// interface ProductId{
//   success: boolean,
//   message: string,
//   productsId: number[]
// }

// export async function generateStaticParams() {
//   const res = await fetch('http://localhost:3003/api/product/getproductsid')
//   if (!res.ok) {
//     throw new Error(`Failed to fetch productsId, status: ${res.status}`)
//   }
//   const productsId: ProductId = await res.json() as ProductId
//   console.log(productsId)
//   if (!Array.isArray(productsId.productsId)) {
//     throw new Error('Expecter an array of productsId')
//   }
//   const paths = productsId.productsId.map((productId: any) => [
//     { id: productId.toString(), locale: 'en' },
//     { id: productId.toString(), locale: 'ru' },
//   ]).flat()
  
//   return paths
// }

function page({ params }: PageProps) {

  return (
    <div>
      <FullCard id={params.id} locale={params.locale} />
    </div>
  );
}

export default page;