
export default function Employee(p){
  return (
    <>
      <h3>Employee {p.name ? p.name : "Anonymous"}</h3>
      <p>Role: {p.role ? p.role : 'No role'}</p>
    </>
  )
}