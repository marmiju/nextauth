import { getServerSession } from "next-auth";
import { Form } from "./Form";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (!!session) {
    redirect("/");
  }
  return (
    <div>
      <Form />
    </div>
  );
};

export default page;
