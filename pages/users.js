import Link from "next/link"
import { useEffect, useState } from "react"
import A from "../components/A"
import Header from "../components/Header";

function Users({users}) {

  return (
    <div>
        <Header>

        </Header>
        <h1>Users list</h1>
        <ul>
          {users.map(user => 
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
          )}
        </ul>
    </div>
  )
}

export default Users

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: {users}, // will be passed to the page component as props
  }
}