import { useRouter } from "next/router";

export default function({user}) {
    const {query} = useRouter();
    return (
        <div>
            User id = {query.id}
            {user.name}
        </div>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return {
      props: {user}, // will be passed to the page component as props
    }
  }
