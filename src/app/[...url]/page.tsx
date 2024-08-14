interface PageProps {
  params: {
    url: string | string[] | undefined;
  };
}

const Page = ({ params }: PageProps) => {
  console.log(params);
  return <div>Page</div>;
};

export default Page;
