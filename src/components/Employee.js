import EditEmployee from "./EditEmployee";

export default function Employee(p){
  return (
    <div class="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img 
        class="object-cover h-[100px] w-[100px] block rounded-full sm:mx-0 sm:shrink-0" 
        src={p.img} 
        alt="Employee's Face" 
      />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            {p.name}
          </p>
          <p class="text-slate-500 font-medium">
            {p.role}
          </p>
        </div>
        <EditEmployee/>
        
      </div>
    </div>
  )
}