export default function TrainTitle({ name , branchNames , color }: {name: string, branchNames: string[], color: string}) {
    const lineList = branchNames.map(item => {
        return <div style={{color: color, backgroundColor: color+"45"}} className='rounded-full text-[20px] py-[2px] px-[10px] drop-shadow-md h-auto w-auto font-Inter'>{item}</div>
    })

    return (
        <div className='w-full h-autoflex justify-start items-center'>
            <div className="ml-2 w-full h-auto flex flex-row gap-5">
                {lineList}
            </div>
            <h1 style={{color: color}} className="font-Inter text-9xl p-0">{name}</h1>
            
           
        </div>
    )
}