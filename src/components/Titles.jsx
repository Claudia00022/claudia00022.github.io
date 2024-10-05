const data = [
    {
        title: 'vpmu-studio'
    },
    {
        title: 'j&l Gradzkie'
    }
];



export default function Titles(){
    return(
        <div className="absolute w-screen">
          {data.map((d) => {
            return <p>
                {d.title}
            </p>
          })}
        </div>
    )
}